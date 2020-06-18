---
title: Workspace Templates
sidebar_label: Workspace Templates
description: Creating Workspace Templates for multiple environments like CVAT, VS Code, JupyterLab on Onepanel
---

:::tip
See our [Templates repository](https://github.com/onepanelio/templates/tree/master/workspaces) for a list of ready to use Workspace Template.
:::

## Getting started with Workspace Templates

You can define reusable templates for Workspaces. Workspace Templates are a combination of Docker images and a YAML definition. Each section in this template abstracts and simplifies Kubernetes YAML and at the same time provides maximum flexibility.

Here's a simple NGINX Workspace Template definition:

```yaml
# (optional) Custom parameters that will be rendered in Workspace creation form and available in CLI
arguments:
  parameters:
  - name: storage-class # Name, only alphanumeric characters and `-` allowed (required)
    value: ssd # Default value (required)
    displayName: Storage class
    type: select.select # How to render this parameter in Workspace creation form in Web UI
    options: # type of select.select and input.radio allow you to set options
    - name: SSD
      value: ssd
# Docker containers that are part of the Workspace
containers:
- name: http # A name for this container. Used to identify the container from any others you have.
  image: nginxdemos/hello
  ports:
  - containerPort: 80  
    name: http # a friendly name for the port.
  # Volumes to be mounted in this container
  # Onepanel will automatically create these volumes and mount them to the container.
  # You choose the size when you start the workspace.
  volumeMounts:
  - name: data
    mountPath: /data
# Ports that need to be exposed
ports:
- name: http # a friendly name. Does NOT have to match the container port.
  port: 80 # A unique port number. If you have many ports, these must all be different. 
  protocol: TCP
  targetPort: 80 # port on the container we want to target. This MUST match a container port above.
# Routes that will map to ports.
routes:
- match:
  - uri:
      prefix: / # our application sits at root, all traffic will go to it.
  route:
  - destination:
      port:
        number: 80 # This MUST match a port from ports above. Here, it matches the http port above.
# (optional) volumeClaimTemplates allows you to override the volumes that Onepanel automatically generates
# This is useful if you want to define your own storageClass or make the storage size static
volumeClaimTemplates:
- metadata:
    name: data # Name of volume, if same as any `containers.volumeMounts.name`, Onepanel will use this template
  spec:
    accessModes: [ "ReadWriteOnce" ] # Storage access mode
    storageClassName: '{{workspace.parameters.storage-class}}' # Use a storageClass based on user input, if not defined, defaults to `onepanel`
    resources:
      requests:
        storage: 10Gi # Set storage size to 10Gi and don't allow the user to change it
# (optional) DAG Workflow to be executed once a Workspace action completes
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

## Sections

### arguments (optional)
#### parameters

You can define and use parameters in your Workspace Templates. These parameters are displayed in the Workspace creation form (or are made available via CLI) and can be referenced in the template like so:

```yaml
'{{workspace.parameters.<parameter-name>}}'
```

The syntax for parameter definitions are as follows:

```yaml
arguments:
  parameters:
  - name: storage-class # Name, only alphanumeric characters and `-` allowed (required)
    value: ssd # Default value (required)
    displayName: Storage class
    type: select.select # How to render this parameter in Workspace creation form in Web UI
    options: # type of select.select and input.radio allow you to set options
    - name: SSD
      value: ssd
```

If a parameter is defined, `name` and `value` are required.

- `name` is the name of the parameters, only alphanumeric characters and `-` allowed
- `value` is the default value for the parameter
- `displayName` is the text that is displayed to the user
- `type` indicates how the parameter is rendered in the Workspace creation form in the Web UI. Possible values are:
    - `input.text` renders a textbox
    - `input.number` renders a textbox that only accepts numbers
    - `input.radio` renders radio buttons
    - `select.select` renders a dropdown
    - `textarea.textarea` renders a textarea
- `options` define options if `type` is `select.select` or `input.radio`

Example:

```yaml {3-9,16}
arguments:
  parameters:
  - name: storage-class
    value: ssd
    displayName: Storage class
    type: select.select
    options:
    - name: SSD
      value: ssd
...
volumeClaimTemplates:
- metadata:
    name: data
  spec:
    accessModes: [ "ReadWriteOnce" ]
    storageClassName: '{{workspace.parameters.storage-class}}'  # Use a storageClass based on user input
    resources:
      requests:
        storage:
...
```

### containers

Here you define all information related to what application(s) you want to run.
You can customize the image used, configure any ports that are used by the image, and attach volume(s) for storing your data.

#### image

The image you want to use for your application. 

Some examples

* nodered/node-red
* codercom/code-server:3.3.1 
* jupyter/tensorflow-notebook


#### container ports

These are the ports needed by the image you use. Make sure to add all of the ones you want to have access to.
* For the `nginxdemos/hello` we need port *80*. 
* For `jupyter/tensorflow-notebook` we need port *8888*.

### ports

These identify what ports your workspace exposes and the protocol used. These are *NOT* the same as container ports.
Your workspace will have a url you can visit in your browser, and it is the ports defined under this section that are visible.
Each port maps to a container port. So if you have port *8888* on your container, but you want to reach it via http (port *80*), use

```yaml
ports:
- name: http-to-custom
  port: 80 
  protocol: TCP
  targetPort: 8888 # container port
```

### routes

These are the urls that you can reach on your workspace. Each one must map to a port defined under `ports`.
If you want the root of your workspace to take you to your only image, use this

```yaml
routes:
- match:
  - uri:
      prefix: /
  route:
  - destination:
      port:
        number: 80 # this is the port number under ports.
```

### volumeClaimTemplates (optional)
By setting the `volumeClaimTemplates` field, you can override the volumes that Onepanel automatically generates. This is useful if you want to define your own `storageClass` or make the storage size to a static number.

Note that the automatically generated volume is overwritten only if the `name` in `volumeClaimTemplates` matches the `volumeMounts` name.

### postExecutionWorkflow (optional)

This is a DAG workflow that runs after your workspace is ready. Check out [Workflow templates](/docs/reference/workflows/templates) for more information.

## More involved example

Let's look at a more complicated example to cement some of these ideas.

For this example, we're going to have both JupyterLab and Visual Studio Code in the same workspace.
JupyterLab will be accessible at `<url>/jupyterlab` and Visual Studio Code will be at the root `<url>/` 

Here's the final YAML, we've added comments to explain different parts.

```yaml
containers:
- name: jupyterlab-tensorflow 
  image: jupyter/tensorflow-notebook # use jupyterlab
  command: [start.sh, jupyter] # use the start.sh script with jupyter
  env: # we define an environment variable because the parser doesn't like JSON in the arguments
    - name: tornado # These are the tornado settings
      # This allows us to embed jupyter in an iframe
      value: "{ 'headers': { 'Content-Security-Policy': \"frame-ancestors * 'self'\" }  }"
  args: 
    - lab
    - --LabApp.token='' 
    - --LabApp.allow_remote_access=True
    - --LabApp.allow_origin="*"
    - --LabApp.disable_check_xsrf=True
    - --LabApp.trust_xheaders=True
    - --LabApp.tornado_settings=$(tornado) 
    - --LabApp.base_url=/jupyter # this makes jupyter be okay with serving at /jupyter
    - --notebook-dir='/data' # use the mounted volume for storing data
  ports:
  - containerPort: 8888 # jupyter, by default, wants port 8888
    name: jupyterlab
  volumeMounts:
  - name: data
    mountPath: /data
- name: vs-code # here's our second container.
  image: codercom/code-server 
  args: ["--auth", "none"] 
  ports:
  - containerPort: 8080 # code-server wants port 8080
    name: vscode
  volumeMounts:
  - name: data
    mountPath: /home/coder # path that code-server uses
ports:
- name: jupyterlab
  port: 80 # we want jupyterlab at port 80
  protocol: TCP
  targetPort: 8888 # but it has to point to container port 8888
- name: vscode
  port: 8080 # we need another port for vscode, we can't use 80 since jupyterlab uses it. 
  protocol: TCP
  targetPort: 8080 # container port is 8080 for code-server
routes:
- match:
  - uri:
      prefix: /jupyter # put jupyter at /jupyter path
  route:
  - destination:
      port:
        number: 80 # and route it to port 80, which is where we put jupyter above
- match:
  - uri:
      prefix: / #vscode runs at the default route
  route:
  - destination:
      port:
        number: 8080 # route it to 8080, which is what we set it to above
postExecutionWorkflow: # let me know in slack when it's ready
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

The comments in the YAML above should provide most of the information about the setup.

The key points here are:

* We can have multiple containers running on the same workspace
* The `ports` section can be thought of as a mapping for `routes` to use
* jupyter allows you to run at `/jupyter` as a setting. Not all software supports something like this. 
