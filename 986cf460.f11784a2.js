(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),r=(a(0),a(128)),i={title:"Workspace Templates",sidebar_label:"Workspace Templates",description:"Creating Workspace Templates for multiple environments like CVAT, VS Code, JupyterLab on Onepanel"},s={unversionedId:"reference/workspaces/templates",id:"reference/workspaces/templates",isDocsHomePage:!1,title:"Workspace Templates",description:"Creating Workspace Templates for multiple environments like CVAT, VS Code, JupyterLab on Onepanel",source:"@site/docs/reference/workspaces/templates.md",slug:"/reference/workspaces/templates",permalink:"/docs/reference/workspaces/templates",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/workspaces/templates.md",version:"current",sidebar_label:"Workspace Templates",sidebar:"reference",previous:{title:"Terminating a Workspace",permalink:"/docs/reference/workspaces/delete"},next:{title:"Executing a Workflow",permalink:"/docs/reference/workflows/execute"}},l=[{value:"Getting started with Workspace Templates",id:"getting-started-with-workspace-templates",children:[]},{value:"Sections",id:"sections",children:[{value:"arguments (optional)",id:"arguments-optional",children:[]},{value:"containers",id:"containers",children:[]},{value:"imagePullSecrets",id:"imagepullsecrets",children:[]},{value:"ports",id:"ports",children:[]},{value:"routes",id:"routes",children:[]},{value:"volumeClaimTemplates (optional)",id:"volumeclaimtemplates-optional",children:[]},{value:"postExecutionWorkflow (optional)",id:"postexecutionworkflow-optional",children:[]}]},{value:"More involved example",id:"more-involved-example",children:[]}],c={rightToc:l};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"See our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/onepanelio/templates/tree/v0.18.0"}),"Templates repository")," for a list of ready to use Workspace Templates. You can also use these as reference for defining youur own Workspace Templates."))),Object(r.b)("h2",{id:"getting-started-with-workspace-templates"},"Getting started with Workspace Templates"),Object(r.b)("p",null,"You can define reusable templates for Workspaces. Workspace Templates are a combination of Docker images and a YAML definition. Each section in this template abstracts and simplifies Kubernetes YAML and at the same time provides maximum flexibility."),Object(r.b)("p",null,"Onepanel's Workspace Template YAML definitions are composed of subsets of Kubernetes and Istio YAML definitions."),Object(r.b)("p",null,"Here's a simple NGINX Workspace Template definition:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'# (optional) Custom parameters that will be rendered in Workspace creation form and available in CLI\narguments:\n  parameters:\n  - name: storage-class # Name, only alphanumeric characters and `-` allowed (required)\n    value: ssd # Default value (required)\n    displayName: Storage class\n    type: select.select # How to render this parameter in Workspace creation form in Web UI\n    options: # type of select.select and input.radio allow you to set options\n    - name: SSD\n      value: ssd\n# Docker containers that are part of the Workspace\ncontainers:\n- name: http # A name for this container. Used to identify the container from any others you have.\n  image: nginxdemos/hello\n  ports:\n  - containerPort: 80  \n    name: http # a friendly name for the port.\n  # Volumes to be mounted in this container\n  # Onepanel will automatically create these volumes and mount them to the container.\n  # You can choose the size of the volume when you start the workspace.\n  volumeMounts:\n  - name: data\n    mountPath: /data\n# Credentials to use for private Docker registries (optional)\nimagePullSecrets:\n- name: docker-credentials\n# Ports that need to be exposed\nports:\n- name: http # a friendly name. Does NOT have to match the container port.\n  port: 80 # A unique port number. If you have many ports, these must all be different. \n  protocol: TCP\n  targetPort: 80 # port on the container we want to target. This MUST match a container port above.\n# Routes that will map to ports.\nroutes:\n- match:\n  - uri:\n      prefix: / # our application sits at root, all traffic will go to it.\n  route:\n  - destination:\n      port:\n        number: 80 # This MUST match a port from ports above. Here, it matches the http port above.\n# (optional) volumeClaimTemplates allows you to override the volumes that Onepanel automatically generates\n# This is useful if you want to define your own storageClass or make the storage size static\nvolumeClaimTemplates:\n- metadata:\n    name: data # Name of volume, if same as any `containers.volumeMounts.name`, Onepanel will use this template\n  spec:\n    accessModes: [ "ReadWriteOnce" ] # Storage access mode\n    storageClassName: \'{{workspace.parameters.storage-class}}\' # Use a storageClass based on user input, if not defined, defaults to `onepanel`\n    resources:\n      requests:\n        storage: 10Gi # Set storage size to 10Gi and don\'t allow the user to change it\n# (optional) DAG Workflow to be executed once a Workspace action completes\npostExecutionWorkflow:\n  entrypoint: main\n  templates:\n  - name: main\n    dag:\n       tasks:\n       - name: slack-notify\n         template: slack-notify\n  -  name: slack-notify\n     container:\n       image: technosophos/slack-notify\n       args:\n       - SLACK_USERNAME=onepanel SLACK_TITLE="Your workspace is ready" SLACK_ICON=https://www.gravatar.com/avatar/5c4478592fe00878f62f0027be59c1bd SLACK_MESSAGE="Your workspace is now running" ./slack-notify\n       command:\n       - sh\n       - -c\n')),Object(r.b)("h2",{id:"sections"},"Sections"),Object(r.b)("h3",{id:"arguments-optional"},"arguments (optional)"),Object(r.b)("h4",{id:"parameters"},"parameters"),Object(r.b)("p",null,"You can define and use parameters in your Workspace Templates. These parameters are displayed in the Workspace creation form (or are made available via CLI) and can be referenced in the template like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"'{{workspace.parameters.<parameter-name>}}'\n")),Object(r.b)("p",null,"The syntax for parameter definitions are as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"arguments:\n  parameters:\n  - name: storage-class # Name, only alphanumeric characters and `-` allowed (required)\n    value: ssd # Default value (required)\n    displayName: Storage class\n    type: select.select # How to render this parameter in Workspace creation form in Web UI\n    options: # type of select.select and input.radio allow you to set options\n    - name: SSD\n      value: ssd\n")),Object(r.b)("p",null,"If a parameter is defined, ",Object(r.b)("inlineCode",{parentName:"p"},"name")," and ",Object(r.b)("inlineCode",{parentName:"p"},"value")," are required."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," is the name of the parameters, only alphanumeric characters and ",Object(r.b)("inlineCode",{parentName:"li"},"-")," allowed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"value")," is the default value for the parameter"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"displayName")," is the text that is displayed to the user"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type")," indicates how the parameter is rendered in the Workspace creation form in the Web UI. Possible values are:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"input.text")," renders a textbox"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"input.number")," renders a textbox that only accepts numbers"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"input.radio")," renders radio buttons"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"select.select")," renders a dropdown"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"select.nodepool")," renders a dropdown populated with the node pool options available. Use ",Object(r.b)("inlineCode",{parentName:"li"},"default")," for the value."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"textarea.textarea")," renders a textarea"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"options")," define options if ",Object(r.b)("inlineCode",{parentName:"li"},"type")," is ",Object(r.b)("inlineCode",{parentName:"li"},"select.select")," or ",Object(r.b)("inlineCode",{parentName:"li"},"input.radio"))),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:"{3-9,16}","{3-9,16}":!0}),"arguments:\n  parameters:\n  - name: storage-class\n    value: ssd\n    displayName: Storage class\n    type: select.select\n    options:\n    - name: SSD\n      value: ssd\n...\nvolumeClaimTemplates:\n- metadata:\n    name: data\n  spec:\n    accessModes: [ \"ReadWriteOnce\" ]\n    storageClassName: '{{workspace.parameters.storage-class}}'  # Use a storageClass based on user input\n    resources:\n      requests:\n        storage:\n...\n")),Object(r.b)("h3",{id:"containers"},"containers"),Object(r.b)("p",null,"This is where you define the container(s) that your Workspace needs to function."),Object(r.b)("h4",{id:"name"},"name"),Object(r.b)("p",null,"The name of the container, should be unique in this template definition."),Object(r.b)("h4",{id:"image"},"image"),Object(r.b)("p",null,"The image you want to use for your application. "),Object(r.b)("p",null,"Some examples include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"nodered/node-red"),Object(r.b)("li",{parentName:"ul"},"codercom/code-server:3.3.1 "),Object(r.b)("li",{parentName:"ul"},"jupyter/tensorflow-notebook")),Object(r.b)("h4",{id:"command-and-args"},"command and args"),Object(r.b)("p",null,"If you want to override the Docker image ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#entrypoint"}),"ENTRYPOINT"),", then you can use a combination of ",Object(r.b)("inlineCode",{parentName:"p"},"command")," and ",Object(r.b)("inlineCode",{parentName:"p"},"args")," fields to do that, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"containers:\n- name: jupyterlab-tensorflow \n  image: jupyter/tensorflow-notebook # use jupyterlab\n  command: [start.sh, jupyter] # use the start.sh script with jupyter\n  args: \n    - lab\n    - --LabApp.token='' \n    - --LabApp.allow_remote_access=True\n    - --LabApp.allow_origin=\"*\"\n    - --LabApp.disable_check_xsrf=True\n    - --LabApp.trust_xheaders=True\n    - --LabApp.tornado_settings=$(tornado) \n    - --LabApp.base_url=/jupyter # this makes jupyter be okay with serving at /jupyter\n    - --notebook-dir='/data' # use the mounted volume for storing data\n...\n")),Object(r.b)("p",null,"For more information, see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/"}),"Define a Command and Arguments for a Container")," in Kubernetes docs."),Object(r.b)("h4",{id:"env"},"env"),Object(r.b)("p",null,"These are environment variables that you want to define specifically for this Workspace."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"containers:\n- name: jupyterlab-tensorflow \n  image: jupyter/tensorflow-notebook # use jupyterlab\n...\n  env:\n    - name: tornado # These are the tornado settings\n      # This allows us to embed jupyter in an iframe\n      value: \"{ 'headers': { 'Content-Security-Policy': \\\"frame-ancestors * 'self'\\\" }  }\"\n...\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Onepanel automatically adds certain ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/concepts/environment-variables"}),"Environment variables")," along with the ones you define in the ",Object(r.b)("strong",{parentName:"p"},"Settings")," section before these environment variables. Though not recommended, you can override those by naming these environment variables the same."))),Object(r.b)("h4",{id:"container-ports"},"container ports"),Object(r.b)("p",null,"These are the ports needed by the image you use. Make sure to add all of the ones you want to have access to."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For the ",Object(r.b)("inlineCode",{parentName:"li"},"nginxdemos/hello")," we need port ",Object(r.b)("em",{parentName:"li"},"80"),". "),Object(r.b)("li",{parentName:"ul"},"For ",Object(r.b)("inlineCode",{parentName:"li"},"jupyter/tensorflow-notebook")," we need port ",Object(r.b)("em",{parentName:"li"},"8888"),".")),Object(r.b)("h4",{id:"volumemounts"},"volumeMounts"),Object(r.b)("p",null,"This is where you define volumes to be mounted in a container. Onepanel will automatically create these volumes and mount them to the container. You can choose the size of the volume when you start the workspace."),Object(r.b)("p",null,"For example, the following will mount a volume in your container at ",Object(r.b)("inlineCode",{parentName:"p"},"/data")," path:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"volumeMounts:\n- name: data\n  mountPath: /data\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can mount an number of volumes allowed by the cloud provider's machine type. There is generally a limit on how many disks you can attach based on the size of the machine."))),Object(r.b)("h3",{id:"imagepullsecrets"},"imagePullSecrets"),Object(r.b)("p",null,"You can set your private Docker registry credentials using the ",Object(r.b)("inlineCode",{parentName:"p"},"imagePullSecrets")," field."),Object(r.b)("p",null,"You will first need to store your credentials in a ",Object(r.b)("inlineCode",{parentName:"p"},"docker-registry")," secret:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create secret docker-registry docker-credentials --docker-server=<your-registry-server> --docker-username=<your-name> --docker-password=<your-pword> --docker-email=<your-email>\n")),Object(r.b)("p",null,"For Docker Hub, you can set ",Object(r.b)("inlineCode",{parentName:"p"},"docker-server")," to ",Object(r.b)("inlineCode",{parentName:"p"},"docker.io"),"."),Object(r.b)("p",null,"Then you can reference the secret in your template as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"imagePullSecrets:\n- name: docker-credentials\n")),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"}),"Kubernetes documentation")," for more information."),Object(r.b)("h3",{id:"ports"},"ports"),Object(r.b)("p",null,"These identify what ports your workspace exposes and the protocol used. These are ",Object(r.b)("em",{parentName:"p"},"NOT")," the same as container ports. Your workspace will have a url you can visit in your browser, and it is the ports defined under this section that are visible."),Object(r.b)("p",null,"Each port can map to a container port. So if you have port ",Object(r.b)("em",{parentName:"p"},"8888")," on your container, but you want to reach it via http (port ",Object(r.b)("em",{parentName:"p"},"80"),"), use:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"ports:\n- name: http-to-custom\n  port: 80 \n  protocol: TCP\n  targetPort: 8888 # container port\n")),Object(r.b)("h3",{id:"routes"},"routes"),Object(r.b)("p",null,"These are the urls that you can reach on your workspace. Each one must map to a port defined under ",Object(r.b)("inlineCode",{parentName:"p"},"ports"),"."),Object(r.b)("p",null,"For example, if you want the root of your workspace to take you to your only container running under port ",Object(r.b)("inlineCode",{parentName:"p"},"80"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"routes:\n- match:\n  - uri:\n      prefix: /\n  route:\n  - destination:\n      port:\n        number: 80 # this is the port number under ports.\n")),Object(r.b)("p",null,"You can also do regex matching:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- match:\n  - uri:\n      regex: /api/.*|/tensorflow/.*  # Route paths that match this regex to port 80\n  route:\n  - destination:\n      port:\n        number: 80\n")),Object(r.b)("p",null,"Or query parameter matching:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- match:\n  - queryParams:\n      id:\n        regex: \\d+.*  # Route query parameter id=<number> to port 80\n  route:\n  - destination:\n      port:\n        number: 80\n")),Object(r.b)("h3",{id:"volumeclaimtemplates-optional"},"volumeClaimTemplates (optional)"),Object(r.b)("p",null,"By setting the ",Object(r.b)("inlineCode",{parentName:"p"},"volumeClaimTemplates")," field, you can override the volumes that Onepanel automatically generates. This is useful if you want to define your own ",Object(r.b)("inlineCode",{parentName:"p"},"storageClass")," or make the storage size to a static number."),Object(r.b)("p",null,"Note that the automatically generated volume is overwritten only if the ",Object(r.b)("inlineCode",{parentName:"p"},"name")," in ",Object(r.b)("inlineCode",{parentName:"p"},"volumeClaimTemplates")," matches the ",Object(r.b)("inlineCode",{parentName:"p"},"volumeMounts")," name."),Object(r.b)("h3",{id:"postexecutionworkflow-optional"},"postExecutionWorkflow (optional)"),Object(r.b)("p",null,"This is a DAG workflow that runs after your workspace is ready. For more information, see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/workflows/templates"}),"Workflow Templates"),"."),Object(r.b)("h2",{id:"more-involved-example"},"More involved example"),Object(r.b)("p",null,"Let's look at a more complicated example to cement some of these ideas."),Object(r.b)("p",null,"For this example, we're going to have both JupyterLab and Visual Studio Code in the same workspace.\nJupyterLab will be accessible at ",Object(r.b)("inlineCode",{parentName:"p"},"<url>/jupyterlab")," and Visual Studio Code will be at the root ",Object(r.b)("inlineCode",{parentName:"p"},"<url>/")," "),Object(r.b)("p",null,"Here's the final YAML, we've added comments to explain different parts."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'containers:\n- name: jupyterlab-tensorflow \n  image: jupyter/tensorflow-notebook # use jupyterlab\n  command: [start.sh, jupyter] # use the start.sh script with jupyter\n  args: \n    - lab\n    - --LabApp.token=\'\' \n    - --LabApp.allow_remote_access=True\n    - --LabApp.allow_origin="*"\n    - --LabApp.disable_check_xsrf=True\n    - --LabApp.trust_xheaders=True\n    - --LabApp.tornado_settings=$(tornado) \n    - --LabApp.base_url=/jupyter # this makes jupyter be okay with serving at /jupyter\n    - --notebook-dir=\'/data\' # use the mounted volume for storing data\n  env:\n    - name: tornado # These are the tornado settings\n      # This allows us to embed jupyter in an iframe\n      value: "{ \'headers\': { \'Content-Security-Policy\': \\"frame-ancestors * \'self\'\\" }  }"\n  ports:\n  - containerPort: 8888 # jupyter, by default, wants port 8888\n    name: jupyterlab\n  volumeMounts:\n  - name: data\n    mountPath: /data\n- name: vs-code # here\'s our second container.\n  image: codercom/code-server \n  args: ["--auth", "none"] \n  ports:\n  - containerPort: 8080 # code-server wants port 8080\n    name: vscode\n  volumeMounts:\n  - name: data\n    mountPath: /home/coder # path that code-server uses\nports:\n- name: jupyterlab\n  port: 80 # we want jupyterlab at port 80\n  protocol: TCP\n  targetPort: 8888 # but it has to point to container port 8888\n- name: vscode\n  port: 8080 # we need another port for vscode, we can\'t use 80 since jupyterlab uses it. \n  protocol: TCP\n  targetPort: 8080 # container port is 8080 for code-server\nroutes:\n- match:\n  - uri:\n      prefix: /jupyter # put jupyter at /jupyter path\n  route:\n  - destination:\n      port:\n        number: 80 # and route it to port 80, which is where we put jupyter above\n- match:\n  - uri:\n      prefix: / #vscode runs at the default route\n  route:\n  - destination:\n      port:\n        number: 8080 # route it to 8080, which is what we set it to above\npostExecutionWorkflow: # let me know in slack when it\'s ready\n  entrypoint: main\n  templates:\n  - name: main\n    dag:\n       tasks:\n       - name: slack-notify\n         template: slack-notify\n  -  name: slack-notify\n     container:\n       image: technosophos/slack-notify\n       args:\n       - SLACK_USERNAME=onepanel SLACK_TITLE="Your workspace is ready" SLACK_ICON=https://www.gravatar.com/avatar/5c4478592fe00878f62f0027be59c1bd SLACK_MESSAGE="Your workspace is now running" ./slack-notify\n       command:\n       - sh\n       - -c\n')),Object(r.b)("p",null,"The comments in the YAML above should provide most of the information about the setup."),Object(r.b)("p",null,"The key points here are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We can have multiple containers running on the same workspace"),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"ports")," section can be thought of as a mapping for ",Object(r.b)("inlineCode",{parentName:"li"},"routes")," to use"),Object(r.b)("li",{parentName:"ul"},"jupyter allows you to run at ",Object(r.b)("inlineCode",{parentName:"li"},"/jupyter")," as a setting. Not all software supports something like this. ")))}p.isMDXComponent=!0},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,d=m["".concat(i,".").concat(u)]||m[u]||b[u]||r;return a?o.a.createElement(d,s(s({ref:t},c),{},{components:a})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);