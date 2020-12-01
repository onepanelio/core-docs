---
title: Working with artifacts
sidebar_label: Working with artifacts
description: Onepanel - Working with artifacts
---

When running Workflows, it is very common to have steps that generate or consume artifacts. Often, the output artifacts of one task may be used as input artifacts to a subsequent task.

Onepanel's Workflows support s3, git and http artifacts.

## S3
Example below shows how you can download or upload artifacts from or to default and custom object storage locations:

```yaml
entrypoint: main
arguments:
  # Workflow parameters which will be set by user via Web UI, SDK or API
  parameters:
  - name: model-path
    value: my-data/output
templates:
- name: main
  dag:
    tasks:
    - name: input-output
      template: input-output
- name: input-output
  container:
    args:
    - |
      printenv \
      && ls /tmp/input \
        && mkdir -p /tmp/output \
        && echo "hello" > /tmp/output/message.txt \
        && sleep 15
    command:
    - bash
    - -c
    image: bash
  inputs:
    artifacts:
    # Download files from S3 prefix random/input into local folder /tmp/input/
    # # This downloads from the default S3 artifact repository for this namespace
    - name: input
      path: /tmp/input/
      s3:
        key: my-data/input
  outputs:
    artifacts:
    # Upload files from local /tmp/output folder to default object storage location that is configured for this namespace
    # This is set to artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}} by default
    - name: output-one
      path: /tmp/output
    # Upload files from local /tmp/output folder to S3 prefix my-data/output
    # This uploads to the default S3 artifact repository for this namespace
    - name: output-two
      path: /tmp/output
      s3:
        # Reference to the Workflow parameter that was set by user
        key: '{{workflow.parameters.model-path}}'
    # Upload files from local /tmp/output folder to the S3 prefix my-data/output in bucket defined below
    - name: output-three
      path: /tmp/output
      s3:
        key: '{{workflow.parameters.model-path}}'
        endpoint: storage.googleapis.com
        bucket: my-data-bucket
        accessKeySecret:
          name: my-s3-credentials
          key: accessKey
        secretKeySecret:
          name: my-s3-credentials
          key: secretKey

```

<!-- Using GCS
```yaml
...
    - name: output-three
      path: /tmp/output
      gcs:
        bucket: my-data-bucket
        key: /your/path
        serviceAccountKeySecret:
          name: onepanel
          key: serviceAccountKey
``` -->

## Git

You can also attach git repository (i.e Github) as an input artifact as follows.

```yaml
inputs:
  artifacts:
    - git:
        repo: https://github.com/onepanelio/Mask_RCNN.git
        revision: "no-boto"
      name: src
      path: /mnt/src
```
Here, we specified Github repository along with branch (`no-boto`). `path` specifies where to mount this repository.

You can also use private repository with Workflows. For that, you first need to [create personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) from Github. Then, go to `Settings` and add following two environment variables. `GITHUB_USERNAME` and `GITHUB_PASSWORD`. For `GITHUB_PASSWORD`, you should be using your personal access token. Once this is done, you can modify above yaml section as follows to use private repository.

```yaml
inputs:
  artifacts:
    - git:
        repo: https://github.com/onepanelio/Mask_RCNN.git
        revision: "no-boto"
        usernameSecret:
            name: onepanel-default-env
            key: GITHUB_USERNAME
        passwordSecret:
            name: onepanel-default-env
            key: GITHUB_PASSWORD
      name: src
      path: /mnt/src
```

## HTTP

You can download artifacts from different HTTP locations by using the `http` artifact:

```yaml
inputs:
  artifacts:
  # Download latest opctl and place it at /bin/opctl
  - name: opctl
    path: /bin/opctl
    mode: 0755
    http:
      url: https://github.com/onepanelio/core/releases/latest/download/opctl-linux-amd64
```

## Options

### Archive

Artifacts can be packaged as Tarballs and gzipped by specifying an archive strategy, using the `archive` field:

```yaml
...
  outputs:
    artifacts:
    # Upload files from local /tmp/output folder to default object storage location that is configured for this namespace
    # This is set to artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}} by default
    - name: output-one
      path: /tmp/output
      # Tar and gzip contents of /tmp/output folder and upload to the namespace configured artifact repository
      archive:
        tar: {}
...
```

### Optional

You can also mark both input and output artifacts as optional by setting `optional` to `true`. In this case, if they don't exist, the Workflow will not throw an error:

```yaml
...
  inputs:
    artifacts:
    # Download files from S3 prefix random/input into local folder /tmp/input/
    # # This downloads from the default S3 artifact repository for this namespace
    - name: input
      path: /tmp/input/
      optional: true # Don't throw an error if the file doesn't exist in the S3 location
      s3:
        key: my-data/input
...
```

## Passing artifacts

You can pass artifacts between tasks as shown in the example below:

```yaml
entrypoint: artifact-example
templates:
  - name: artifact-example
    dag:
      tasks:
        - name: generate-artifact
          template: whalesay
        - name: consume-artifact
          dependencies: [generate-artifact]
          template: print-message
          arguments:
            artifacts:
            - name: message
              from: "{{tasks.generate-artifact.outputs.artifacts.hello-art}}"
  - name: whalesay
    container:
      image: docker/whalesay:latest
      command: [sh, -c]
      args: ["sleep 1; cowsay hello world | tee /tmp/hello_world.txt"]
    outputs:
      artifacts:
      - name: hello-art
        path: /tmp/hello_world.txt
  - name: print-message
    inputs:
      artifacts:
      - name: message
        path: /tmp/message
    container:
      image: alpine:latest
      command: [sh, -c]
      args: ["cat /tmp/message"]
```