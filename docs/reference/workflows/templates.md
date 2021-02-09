---
title: Workflow Templates and parameters
sidebar_label: Templates and parameters
description: Workflow Templates for training models, ETL tasks and more on Onepanel 
---

:::important
Onepanel's Workflows are based on [Argo Workflows](https://github.com/argoproj/argo/tree/master/examples). Most functionality is the same, one exception is that Onepanel Workflows entrypoint should always be a [DAG template](https://github.com/argoproj/argo/tree/master/examples#dag) and **Step templates** are not supported.
:::

## Getting started

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

## Parameters

You can define and use parameters in your Workflow Templates. These parameters are displayed in the Workflow creation form (or are made available via CLI) and can be referenced in the template like so:

```yaml
'{{workflow.parameters.<parameter-name>}}'
```

The syntax for parameter definitions are as follows:

```yaml
arguments:
  parameters:
  - name: storage-class # Name, only alphanumeric characters and `-` allowed (required)
    value: ssd  # Default value (required)
    displayName: Storage class
    type: select.select # How to render this parameter in Workflow creation form in Web UI
    options:  # type of select.select and input.radio allow you to set options
    - name: SSD
      value: ssd
```

If a parameter is defined, `name` and `value` are required.

- `name` is the name of the parameters, only alphanumeric characters and `-` allowed
- `value` is the default value for the parameter
- `displayName` is the text that is displayed to the user
- `type` indicates how the parameter is rendered in the Workflow creation form in the Web UI. Possible values are:
    - `input.text` renders a textbox
    - `input.number` renders a textbox that only accepts numbers
    - `input.radio` renders radio buttons
    - `select.select` renders a dropdown
    - `select.nodepool` renders a dropdown populated with the node pool options available. Use `default` for the value.
    - `textarea.textarea` renders a textarea
- `options` define options if `type` is `select.select` or `input.radio`
- `visibility` defines whether the parameter should be visible in Workflow execution form. Possible values are:
    - `public` parameters are visible to every where.
    - `protected` parameters are visible in Onepanel UI and components like CVAT.
    - `internal` parameters are visible in Onepanel UI only.
    - `private` parameters are not visible any where. For system use only.

Example:

```yaml {3-11,22}
arguments:
  parameters:
  - name: message-text
    value: my-message-2 # default value
    displayName: Message text
    type: select.select
    options:
    - name: my-message-1
      value: my-message-1
    - name: my-message-2
      value: my-message-2
entrypoint: main
templates:
- name: main
  dag:
    tasks:
    - name: A
      template: echo
      arguments:
        parameters:
        - name: message
          value: '{{workflow.parameters.message-text}}'
```


