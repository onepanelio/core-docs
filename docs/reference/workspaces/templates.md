---
title: Workspace Templates
sidebar_label: Workspace Templates
---

:::tip
See our [Templates repository](https://github.com/onepanelio/templates/tree/master/workspaces) for a list of ready to use Workspace Template.
:::

## Getting started with Workspace Templates

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