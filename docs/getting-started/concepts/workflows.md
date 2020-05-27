---
title: Workflows
sidebar_label: Workflows
---

Workflows allow you to compose and chain multiple tasks or tools in a reproducible, scalable manner. Workflows are defined as Directed Acyclic Graphs (DAG), where each task can contain one or more Docker containers. This allows you to run each taks in the DAG on a single machine or on a different machines with their own dedicated resources. For example, you can create a Workflow that scrapes data from multiple sources, runs each task on a dedicated CPU machine and then passes this data to a different task that trains a model on the scraped data on a GPU machine.

Onepanel Workflows are similar to AWS Step Functions, but are Kubernetes-native, are defined by YAML and Docker images and each task in the Workflow can run on different machines. They can also be run on any cloud provider that supports Kubernetes.

:::note
See [Environment variables](/docs/getting-started/concepts/environment-variables) for more information on how environment variables can be added to Workspaces.
:::

:::note
Onepanel's Workflows are based on the excellent [Argo Workflows](https://github.com/argoproj/argo) project. Most functionality is the same, one exception is that Onepanel Workflows entrypoint should always be a [DAG template](https://github.com/argoproj/argo/tree/master/examples#steps) and do not support [Steps templates](https://github.com/argoproj/argo/tree/master/examples#steps). We also inject certain fields and abstract Argo to provide additional functionality and to simplify Workflow creation.
:::

##  Workflow Templates

:::tip
See Reference section for more information on defining [Workflow Templates](/docs/reference/workflows/templates)
:::

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
