---
title: Workspaces
sidebar_label: Workspaces
description: Onepanel Workspaces are full Linux computing environments that can be paused and resumed at any time
---

Workspaces are full Linux computing environments that can be paused and resumed at any time, while persisting your data. They can be used to run single applications like JupyterLab, VSCode and annotation tools like [CVAT](https://github.com/opencv/cvat). You can also upgrade or downgrade resources in Workspaces, for example you can switch to a GPU machine and back at any time.

You can also trigger [Workflows](/docs/getting-started/concepts/workflows) from Workspaces using Onepanel's [Python SDK](https://github.com/onepanelio/python-sdk).

:::note
See [Environment variables](/docs/getting-started/concepts/environment-variables) for more information on how environment variables can be added to Workspaces.
:::

## Workspace Templates

:::tip
See Reference section for more information on defining [Workspace Templates](/docs/reference/workspaces/templates)
:::

You can define reusable templates for Workspaces. Workspace Templates are a combination of Docker images and a YAML definition. Here's a simple NGINX Workspace Template definition:

```yaml
# Docker containers that are part of the Workspace
containers:
- name: http
  image: nginxdemos/hello
  ports:
  - containerPort: 80
    name: http
  # Volumes to be mounted in this container
  # Onepanel will automatically create these volumes and mount them to the container
  volumeMounts:
  - name: data
    mountPath: /data
# Ports that need to be exposed
ports:
- name: http
  port: 80
  protocol: TCP
  targetPort: 80
# Routes that will map to ports
routes:
- match:
  - uri:
      prefix: /
  route:
  - destination:
      port:
        number: 80
# DAG Workflow to be executed once a Workspace action completes
postExecutionWorkflow:
  entrypoint: main
  templates:
  - name: main
    dag:
       tasks:
       - name: slack-notify
         template: slack-notify
  -  name: slack-notify
     container:
       image: technosophos/slack-notify
       args:
       - SLACK_USERNAME=onepanel SLACK_TITLE="Your workspace is ready" SLACK_ICON=https://www.gravatar.com/avatar/5c4478592fe00878f62f0027be59c1bd SLACK_MESSAGE="Your workspace is now running" ./slack-notify
       command:
       - sh
       - -c
```