(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{129:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||i;return a?o.a.createElement(m,s(s({ref:t},l),{},{components:a})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},131:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},132:function(e,t,a){"use strict";var n=a(0);const o=Object(n.createContext)(void 0);t.a=o},133:function(e,t,a){"use strict";var n=a(0),o=a(132);t.a=function(){const e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},136:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(133),r=a(131),s=a(48),c=a.n(s);const l=37,p=39;t.a=function(e){const{block:t,children:a,defaultValue:s,values:b,groupId:d}=e,{tabGroupChoices:u,setTabGroupChoices:m}=Object(i.a)(),[f,h]=Object(n.useState)(s),[g,O]=Object(n.useState)(!1);if(null!=d){const e=u[d];null!=e&&e!==f&&b.some(t=>t.value===e)&&h(e)}const j=e=>{h(e),null!=d&&m(d,e)},y=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},N=()=>{O(!1)};return Object(n.useEffect)(()=>{window.addEventListener("keydown",v),window.addEventListener("mousedown",N)},[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),style:g?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case p:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),v(e)},onFocus:()=>j(e),onClick:()=>{j(e),O(!1)},onPointerDown:()=>O(!1)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===f)[0]))}},137:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),i=(a(0),a(129)),r=(a(136),a(137),{title:"Configuration files",sidebar_label:"Configuration files",description:"Onepanel provider specific configuration files"}),s={unversionedId:"deployment/configuration/files",id:"deployment/configuration/files",isDocsHomePage:!1,title:"Configuration files",description:"Onepanel provider specific configuration files",source:"@site/docs/deployment/configuration/files.md",slug:"/deployment/configuration/files",permalink:"/docs/deployment/configuration/files",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/configuration/files.md",version:"current",sidebar_label:"Configuration files",sidebar:"deployment",previous:{title:"CLI overview",permalink:"/docs/deployment/configuration/cli"},next:{title:"TLS certificates",permalink:"/docs/deployment/configuration/tls"}},c=[{value:"Content of configuration file <code>params.yaml</code>",id:"content-of-configuration-file-paramsyaml",children:[]},{value:"Sections",id:"sections",children:[{value:"application",id:"application",children:[]},{value:"artifactRepository",id:"artifactrepository",children:[]},{value:"certManager",id:"certmanager",children:[]},{value:"database",id:"database",children:[]},{value:"workflowEngine",id:"workflowengine",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are two files generated after running ",Object(i.b)("inlineCode",{parentName:"p"},"opctl init --provider <provider>"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"params.yaml")," - contains the fields that need to be updated to configure your deployment."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config.yaml")," - contains components that are going to be included in the deployment. This file is generated automatically and ",Object(i.b)("strong",{parentName:"li"},"should not")," be updated.")),Object(i.b)("p",null,"For further information on populating the ",Object(i.b)("inlineCode",{parentName:"p"},"params.yaml")," file, refer to the sections below. This information is also available inside the generated ",Object(i.b)("inlineCode",{parentName:"p"},"params.yaml")," template."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It is highly recommended that you commit ",Object(i.b)("inlineCode",{parentName:"p"},"params.yaml")," file into a private repository and encrypt it with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/StackExchange/blackbox"}),"BlackBox")," or use a secret management service like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/key-vault/"}),"Azure Key Vault"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/secrets-manager/"}),"AWS Secret Manager"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/secret-manager"}),"GCP Secret Manager")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.vaultproject.io/"}),"HashiCorp Vault"),"."))),Object(i.b)("h2",{id:"content-of-configuration-file-paramsyaml"},"Content of configuration file ",Object(i.b)("inlineCode",{parentName:"h2"},"params.yaml")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The template below is automatically generated when your run ",Object(i.b)("inlineCode",{parentName:"p"},"opctl init")," for your provider."),Object(i.b)("p",{parentName:"div"},"This particular one was generated by running "),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"opctl init --database --provider aks --artifact-repository-provider s3 --gpu-device-plugins nvidia --enable-https --enable-cert-manager --dns-provider route53\n")))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n# Generated with Onepanel CLI \n# CLI version: v1.0.0\n# Command: opctl init --database --provider aks --artifact-repository-provider s3 --gpu-device-plugins nvidia --enable-https --enable-cert-manager --dns-provider route53\n# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n\n# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n# Component: Onepanel\n# Description: Onepanel application information\n# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\napplication:\n  # First namespace that will be created in Onepanel, more can be added later\n  # Note that you cannot use any of the following reserved namespaces:\n  #   onepanel, default, application-system, cert-manager, istio-system, knative-serving, kube-public, kube-system\n  defaultNamespace: <namespace>\n  # Domain where Onepanel is hosted\n  # Use a first-level or multi-level subdomain like example.com or sub.example.com\n  domain: <domain>\n  # The Fully Qualified Domain (FQDN) where Onepanel will be hosted.\n  # If `domain` above is set to example.com or sub.example.com, then your FQDN could be: app.example.com or app.sub.example.com respectively\n  fqdn: <fully-qualified-domain-name>\n  # HTTP or HTTPS - Do not change, determined by `opctl init --enable-https`\n  # CLI flag: --enable-https\n  insecure: false\n  # Node pool key and values used for AutoScaling\n  nodePool:\n    # Cloud providers will automatically set label key as "node.kubernetes.io/instance-type" on all nodes\n    # For all Kubernetes 1.16.x versions, use "beta.kubernetes.io/instance-type"\n    # You would also need to use "beta.kubernetes.io/instance-type" for all versions of AKS and GKE 1.17.x\n    label: node.kubernetes.io/instance-type\n    # These are the machine type options that will be available in Onepanel\n    #   `name` can be any user friendly name\n    #   `value` should be the instance type in your cloud provider\n    #   `resources.limits` should only be set if the node pool has GPUs\n    # The first option will be used as default.\n    options:\n      - name: \'CPU: X, RAM: Z GB\'\n        value: <instance-type-name-1>\n      - name: \'CPU: X, GPU: Y, RAM: Z GB\'\n        value: <instance-type-name-2>\n        resources:\n          limits:\n            nvidia.com/gpu: 1\n  # The kubernetes cluster where Onepanel will be deployed.\n  # Valid values: aks, eks, gke, microk8s\n  provider: aks\n# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n# Component: Artifact repository\n# Description: S3 compatible object storage for storing files across Onepanel\n# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nartifactRepository:\n  s3:\n    # S3 access key\n    accessKey: <access-key>\n    # Name of bucket, example: my-bucket\n    bucket: <bucket-name>\n    # Endpoint for S3 compatible storage\n    # Supported provider endpoints:\n    #   AWS: s3.amazonaws.com\n    #   GCS: storage.googleapis.com\n    #   Minio: my-minio-endpoint.default:9000\n    endpoint: s3.amazonaws.com\n    # Change to true if endpoint does NOT support HTTPS\n    insecure: false\n    # Key Format for objects stored by Workflows. This can reference Workflow variables\n    keyFormat: artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}}\n    # Only used if using a local minio setup\n    publicEndpoint: s3.amazonaws.com\n    # Bucket region\n    region: us-west-2\n    # S3 secret key\n    secretKey: <secret-key>\ncertManager:\n  # Enter certificate admin email\n  # Example: admin@example.com\n  email: <cert-admin-email>\n  # DNS Provider: Amazon Route53\n  # Docs: https://onepanelio.github.io/core-docs/docs/deployment/configuration/tls#route53\n  # CLI flag: --dns-provider=route53\n  route53:\n    access_key: <aws-access-key>\n    region: <aws-region>\n    secret_key: <aws-secret-key>\n# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n# Component: Database\n# Description: Database connection information\n# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\ndatabase:\n  # Name of database\n  # For in-cluster database, leave as `onepanel`.\n  # If using an external managed database, use the name of that database.\n  databaseName: onepanel\n  # Do not change, only `postgres` driver is supported at this time.\n  driverName: postgres\n  # Database host\n  # For in-cluster database, leave as `postgres`.\n  # If using an external managed databases, use the host for that database.\n  host: postgres\n  # Database password\n  # For in-cluster database, leave as is.\n  # If using an external database, use the password for that database.\n  password: <password>\n  # Database port\n  port: 5432\n  # Database username\n  # For in-cluster database, leave as `onepanel`.\n  # If using an external managed database, use the username for that database.\n  username: onepanel\n\n')),Object(i.b)("h2",{id:"sections"},"Sections"),Object(i.b)("p",null,"What follows is a more detailed description of each section of the ",Object(i.b)("inlineCode",{parentName:"p"},"params.yaml")," file."),Object(i.b)("h3",{id:"application"},"application"),Object(i.b)("p",null,"This is where you set the basic application configuration. "),Object(i.b)("h4",{id:"defaultnamespace"},"defaultNamespace"),Object(i.b)("p",null,"This is the first ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/concepts/namespaces"}),"Namespace")," you want created. This could be a project name or a team name. It is set to ",Object(i.b)("inlineCode",{parentName:"p"},"default")," by default but we recommend you use something more meaningful."),Object(i.b)("h4",{id:"domain"},"domain"),Object(i.b)("p",null,"This is the domain for your Onepanel resources. Some resources like Workspaces create subdomains of this domain so they can be accessed by a browser. This can be a top level domain like ",Object(i.b)("inlineCode",{parentName:"p"},"example.com")," or a subdomain ",Object(i.b)("inlineCode",{parentName:"p"},"sub.example.com"),"."),Object(i.b)("h4",{id:"fqdn"},"fqdn"),Object(i.b)("p",null,"This is where Onepanel UI and API will be deployed. This should be a subdomain of the ",Object(i.b)("inlineCode",{parentName:"p"},"domain")," field mentioned above. For example: ",Object(i.b)("inlineCode",{parentName:"p"},"app.example.com")," or ",Object(i.b)("inlineCode",{parentName:"p"},"app.sub.example.com"),"."),Object(i.b)("h4",{id:"insecure"},"insecure"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"insecure")," field is automatically set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," by default and will be set to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," if you add the ",Object(i.b)("inlineCode",{parentName:"p"},"--enable-https")," when running ",Object(i.b)("inlineCode",{parentName:"p"},"opctl init"),". Do not update this field manually."),Object(i.b)("h4",{id:"nodepool"},"nodePool"),Object(i.b)("p",null,"Depending on your provider, these are either called node pools or node groups. They are labels on Kubernetes nodes that Onepanel uses for auto scaling nodes on demand."),Object(i.b)("p",null,"A common ",Object(i.b)("inlineCode",{parentName:"p"},"label")," to identify these is ",Object(i.b)("inlineCode",{parentName:"p"},"node.kubernetes.io/instance-type")," which most cloud providers automatically set. The value of this label is usually set to the instance type of the cloud provider."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Kubernetes 1.16.x")," you will need to use ",Object(i.b)("inlineCode",{parentName:"p"},"beta.kubernetes.io/instance-type")," instead."),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"AKS (all versions) and GKE 1.17.x:")," you would need to use ",Object(i.b)("inlineCode",{parentName:"p"},"beta.kubernetes.io/instance-type")," as well."),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"EKS 1.16.x:")," make sure to use ",Object(i.b)("inlineCode",{parentName:"p"},"beta.kubernetes.io/instance-type")," label in tags when adding node groups."))),Object(i.b)("p",null,"You can see all labels on your nodes by running:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get nodes --show-labels\n")),Object(i.b)("p",null,"Note that this lists many different labels, so you can pick and choose any label key/value that is unique to that node."),Object(i.b)("p",null,"For example after running the ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl")," command above, you may get the following list of labels:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"{3}","{3}":!0}),"agentpool=nodepool1,\nkubernetes.io/arch=amd64,\nnode.kubernetes.io/instance-type=Standard_D2s_v3,\nkubernetes.io/os=linux,\n")),Object(i.b)("p",null,"You can then use the label key/value pairs as follows. Note that setting ",Object(i.b)("inlineCode",{parentName:"p"},"resources.limits")," field is required for GPUs."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:"{2,4-5,8-13}","{2,4-5,8-13}":!0}),"nodePool:\n  label: node.kubernetes.io/instance-type     # node label key\n  options:\n    - name: 'CPU: 4, RAM: 16GB'               # friendly name for instance\n      value: m5.xlarge                        # node label value\n    - name: 'GPU: 1xV100, CPU: 8, RAM: 61GB'\n      value: p3.2xlarge\n      resources:\n        limits:\n          # Type and number of GPUs, possible values are:\n          #   amd.com/gpu: <number-of-gpus>\n          #   nvidia.com/gpu: <number-of-gpus>\n          nvidia.com/gpu: 1\n")),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/deployment/components/nodes"}),"adding more nodes")," for more information on adding additional CPU or GPU nodes to your cluster."),Object(i.b)("h3",{id:"artifactrepository"},"artifactRepository"),Object(i.b)("p",null,"In this section, you can set up the default object storage to store your Workflow and Workspace artifacts. The default object storage is set per namespace and is used to automatically save snapshots of logs, models and any other output from you Workflows or easily sync data between Workspaces and Workflows."),Object(i.b)("p",null,"Currently Amazon S3, MinIO S3, Google Cloud Storage (GCS) and Azure Blob Storage are supported."),Object(i.b)("h4",{id:"amazon-s3"},"Amazon S3"),Object(i.b)("p",null,"Example Amazon S3 configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"artifactRepository:\n  s3:\n    accessKey: AKIAJSIE27KKMHXI3BJQ\n    bucket: my-data-bucket\n    endpoint: s3.amazonaws.com\n    region: us-west-2\n    secretKey: 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\n")),Object(i.b)("h4",{id:"minio-s3"},"MinIO S3"),Object(i.b)("p",null,"MinIO configurations would be similar to Amazon S3 with a different endpoint:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"artifactRepository:\n  s3:\n    accessKey: AKIAJSIE27KKMHXI3BJQ\n    bucket: my-data-bucket\n    endpoint: my-minio-endpoint.default:9000\n    region: us-west-2 # The label for the Minio server location\n    secretKey: 5bEYu26084qjSFyclM/f2pz4gviSfoOg+mFwBH39\n    insecure: true  # Set this to true if Minio is deployed internally into the Cluster\n")),Object(i.b)("h4",{id:"google-cloud-storage-gcs"},"Google Cloud Storage (GCS)"),Object(i.b)("p",null,"Example Google Cloud Storage (GCS) configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'artifactRepository:\n  gcs:\n    # Name of bucket, example: my-bucket\n    bucket: my-data-bucket\n    # Key Format for objects stored by Workflows. This can reference Workflow variables\n    keyFormat: artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}}\n    projectId: my-project-id\n    region: us-west1\n    serviceAccountKey: |\n      {\n        "type": "service_account",\n        "project_id": "my-project-id",\n        "private_key_id": "private_key_id",\n        "private_key": "private_key",\n        "client_email": "client_email",\n        "client_id": "client_id",\n        "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n        "token_uri": "https://oauth2.googleapis.com/token",\n        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n        "client_x509_cert_url": "cert_url"\n      }\n')),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can get the serviceAccount JSON with the following command:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"gcloud iam service-accounts keys create key.json \\\n   --iam-account ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com\n")))),Object(i.b)("h4",{id:"azure-blob-storage"},"Azure Blob Storage"),Object(i.b)("p",null,"Example Azure Blob Storage configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"artifactRepository:\n  abs:\n    # Name of Azure block storage container, example: my-container\n    container: my-data-container\n    # Azure storage account key\n    storageAccountKey: VsMyhYqFiFK1rNj5cNhMd6h9m01pCIQaMTDXmUIEOeMDtjspm12HvKxLs1dxvag2RJ1sYTuPWMQBDKvmIGPWIZ==\n    # Azure storage account name\n    storageAccountName: my-storage-account-name\n")),Object(i.b)("h3",{id:"certmanager"},"certManager"),Object(i.b)("p",null,"If you have run ",Object(i.b)("inlineCode",{parentName:"p"},"opctl init")," with ",Object(i.b)("inlineCode",{parentName:"p"},"--enable-https"),", ",Object(i.b)("inlineCode",{parentName:"p"},"--enable-cert-manager")," and ",Object(i.b)("inlineCode",{parentName:"p"},"--dns-provider")," flags set, you need to configure your respective DNS provider here so that Onepanel can create and renew your TLS certificates for you."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/deployment/configuration/tls"}),"TLS certificates")," for more information about configuring this section."),Object(i.b)("h3",{id:"database"},"database"),Object(i.b)("p",null,"This is the database settings section."),Object(i.b)("h4",{id:"production-database"},"Production database"),Object(i.b)("p",null,"For a production deployment, use a managed PostgresSQL database like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/rds/"}),"Amazon RDS"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://azure.microsoft.com/en-us/services/postgresql/"}),"Azure Database")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/sql"}),"Google Cloud SQL"),"."),Object(i.b)("p",null,"Note that you can update your settings as many times as you like and simply run ",Object(i.b)("inlineCode",{parentName:"p"},"opctl apply")," again to update your your database settings in the cluster."),Object(i.b)("p",null,"Example production database settings:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"database:\n  databaseName: onepanel\n  driverName: postgres\n  host: my-onepanel-db.postgres.database.azure.com\n  password: verystrongproductionpassword\n  port: 5432\n  username: onepanel\n")),Object(i.b)("h4",{id:"test-database"},"Test database"),Object(i.b)("p",null,"For a test cluster, you can set the database ",Object(i.b)("inlineCode",{parentName:"p"},"host")," to ",Object(i.b)("inlineCode",{parentName:"p"},"postgres")," and use any ",Object(i.b)("inlineCode",{parentName:"p"},"username")," or ",Object(i.b)("inlineCode",{parentName:"p"},"password"),". This database will be automatically created in the cluster with the information you entered."),Object(i.b)("p",null,"Note that you cannot change the username/password for the test database once it's created, so if you make a mistake, you will have to delete the test database and run ",Object(i.b)("inlineCode",{parentName:"p"},"opctl apply")," again:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# delete test database and its related volume\nkubectl delete statefulset postgres -n onepanel\nkubectl delete pvc postgres-pv-claim-postgres-0 -n onepanel\n\n# Update your database settings\n\n# Run opctl apply again to recreate the test database\nopctl apply\n")),Object(i.b)("p",null,"Example test database settings:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"database:\n  databaseName: onepanel\n  driverName: postgres\n  host: postgres\n  password: mypassword\n  port: 5432\n  username: onepanel\n")),Object(i.b)("h3",{id:"workflowengine"},"workflowEngine"),Object(i.b)("h4",{id:"containerruntimeexecutor"},"containerRuntimeExecutor"),Object(i.b)("p",null,"The executor workflow engine uses to perform certain actions like monitoring pod logs, collecting artifacts, managing container lifecycles, etc."),Object(i.b)("p",null,"The possible values are ",Object(i.b)("inlineCode",{parentName:"p"},"docker")," and ",Object(i.b)("inlineCode",{parentName:"p"},"pns"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"docker")," is more reliable, however it mounts the ",Object(i.b)("inlineCode",{parentName:"li"},"docker.sock")," of the host makes it less secure."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pns")," is more secure, however in some versions of Kubernetes, it tends to fail on tasks that take less than 15 seconds.")))}p.isMDXComponent=!0}}]);