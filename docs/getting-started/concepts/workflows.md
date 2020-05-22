---
title: Workflows
sidebar_label: Workflows
---


:::note
See [Environment Variables](/docs/getting-started/concepts/environment-variables) for more information on how environment variables can be added to Workspaces.
:::

:::note
Onepanel's Workflows and Workflow Templates are based on the excellent [Argo Workflows](https://github.com/argoproj/argo) project. Most functionality is the same except that Onepanel Workflows entrypoint should always be a [DAG template](https://github.com/argoproj/argo/tree/master/examples#steps) and do not support [Steps templates](https://github.com/argoproj/argo/tree/master/examples#steps).
:::

##  Workflow Templates

All workflow templates are defined as Directed Acyclic Graphs (DAG):

```yaml
# The template to use as entrypoint
entrypoint: main
templates:
- name: main            # Name of template
  dag:                  # Indicates that this is a DAG template
    tasks:
    - name: A           # First task to execute
      template: echo    # The template to use for first task in DAG
      arguments:
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
- name: echo
  inputs:
    parameters:
    - name: message
  container:
    image: alpine:3.7
    command: [echo, "{{inputs.parameters.message}}"]
```

### Inputs and Outputs

```yaml
entrypoint: main
arguments:
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
    # Upload files from local /tmp/output folder to S3 prefix random/output
    # This uploads to the default S3 artifact repository for this namespace
    - name: message
      path: /tmp/output
      s3:
        key: '{{workflow.parameters.model-path}}'

```