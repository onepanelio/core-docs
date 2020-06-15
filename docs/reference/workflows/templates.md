---
title: Workflow Templates
sidebar_label: Workflow Templates
description: Creating Workflow Templates for training models, ETL tasks and more on Onepanel 
---

:::tip
See our [Templates repository](https://github.com/onepanelio/templates/tree/master/workflows) for a list of ready to use Workflow Templates.
:::

## Getting started with Workflow Templates

You can define reusable templates for Workflows. All Workflow Templates are defined as Directed Acyclic Graphs (DAG), here's an example of how a DAG template is defined:

```yaml
# The template to use as entrypoint
entrypoint: main
templates:
- name: main            
  dag:                      # Indicates that this is a DAG template
    tasks:
    - name: A               # First task to execute
      template: echo        # The template to use for first task in DAG
      arguments:            # Arguments to pass into the "echo" template
        parameters:
        - name: message
          value: A
    - name: B
      dependencies: [A]
      template: echo
      arguments:
        parameters:
        - name: message
          value: B
    - name: C
      dependencies: [A]
      template: echo
      arguments:
        parameters:
        - name: message
          value: C
    - name: D
      dependencies: [B, C]
      template: echo
      arguments:
        parameters:
        - name: message
          value: D
- name: echo                # Definition of "echo" template used by the nodes in DAG
  inputs:                   # Name of inputs 
    parameters:
    - name: message
  container:
    image: alpine:3.7
    command: [echo, "{{inputs.parameters.message}}"]
```

## Artifacts

When running Workflows, it is very common to have steps that generate or consume artifacts. Often, the output artifacts of one task may be used as input artifacts to a subsequent task.

Example below shows how you can download or upload artifacts from or to different object storage locations:

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
        bucket: my-bucket-name
        accessKeySecret:
          name: my-s3-credentials
          key: accessKey
        secretKeySecret:
          name: my-s3-credentials
          key: secretKey

```

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
