(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{123:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return a?o.a.createElement(b,c(c({ref:t},p),{},{components:a})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<r;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(2),o=a(6),r=(a(0),a(123)),i={title:"Working with artifacts",sidebar_label:"Working with artifacts",description:"Onepanel - Working with artifacts"},c={unversionedId:"reference/workflows/artifacts",id:"reference/workflows/artifacts",isDocsHomePage:!1,title:"Working with artifacts",description:"Onepanel - Working with artifacts",source:"@site/docs/reference/workflows/artifacts.md",slug:"/reference/workflows/artifacts",permalink:"/docs/reference/workflows/artifacts",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/workflows/artifacts.md",version:"current",sidebar_label:"Working with artifacts",sidebar:"reference",previous:{title:"Workflow Templates and parameters",permalink:"/docs/reference/workflows/templates"},next:{title:"Creating a Workflow Template",permalink:"/docs/reference/workflows/create"}},s=[{value:"S3",id:"s3",children:[]},{value:"Git",id:"git",children:[]},{value:"HTTP",id:"http",children:[]},{value:"Options",id:"options",children:[{value:"Archive",id:"archive",children:[]},{value:"Optional",id:"optional",children:[]}]},{value:"Passing artifacts",id:"passing-artifacts",children:[]}],p={rightToc:s};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When running Workflows, it is very common to have steps that generate or consume artifacts. Often, the output artifacts of one task may be used as input artifacts to a subsequent task."),Object(r.b)("p",null,"Onepanel's Workflows support s3, git and http artifacts."),Object(r.b)("h2",{id:"s3"},"S3"),Object(r.b)("p",null,"Example below shows how you can download or upload artifacts from or to default and custom object storage locations:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"entrypoint: main\narguments:\n  # Workflow parameters which will be set by user via Web UI, SDK or API\n  parameters:\n  - name: model-path\n    value: my-data/output\ntemplates:\n- name: main\n  dag:\n    tasks:\n    - name: input-output\n      template: input-output\n- name: input-output\n  container:\n    args:\n    - |\n      printenv \\\n      && ls /tmp/input \\\n        && mkdir -p /tmp/output \\\n        && echo \"hello\" > /tmp/output/message.txt \\\n        && sleep 15\n    command:\n    - bash\n    - -c\n    image: bash\n  inputs:\n    artifacts:\n    # Download files from S3 prefix random/input into local folder /tmp/input/\n    # # This downloads from the default S3 artifact repository for this namespace\n    - name: input\n      path: /tmp/input/\n      s3:\n        key: my-data/input\n  outputs:\n    artifacts:\n    # Upload files from local /tmp/output folder to default object storage location that is configured for this namespace\n    # This is set to artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}} by default\n    - name: output-one\n      path: /tmp/output\n    # Upload files from local /tmp/output folder to S3 prefix my-data/output\n    # This uploads to the default S3 artifact repository for this namespace\n    - name: output-two\n      path: /tmp/output\n      s3:\n        # Reference to the Workflow parameter that was set by user\n        key: '{{workflow.parameters.model-path}}'\n    # Upload files from local /tmp/output folder to the S3 prefix my-data/output in bucket defined below\n    - name: output-three\n      path: /tmp/output\n      s3:\n        key: '{{workflow.parameters.model-path}}'\n        endpoint: storage.googleapis.com\n        bucket: my-data-bucket\n        accessKeySecret:\n          name: my-s3-credentials\n          key: accessKey\n        secretKeySecret:\n          name: my-s3-credentials\n          key: secretKey\n\n")),Object(r.b)("h2",{id:"git"},"Git"),Object(r.b)("p",null,"You can also attach git repository (i.e Github) as an input artifact as follows."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'inputs:\n  artifacts:\n    - git:\n        repo: https://github.com/onepanelio/Mask_RCNN.git\n        revision: "no-boto"\n      name: src\n      path: /mnt/src\n')),Object(r.b)("p",null,"Here, we specified Github repository along with branch (",Object(r.b)("inlineCode",{parentName:"p"},"no-boto"),"). ",Object(r.b)("inlineCode",{parentName:"p"},"path")," specifies where to mount this repository."),Object(r.b)("p",null,"You can also use private repository with Workflows. For that, you first need to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"}),"create personal access token")," from Github. Then, go to ",Object(r.b)("inlineCode",{parentName:"p"},"Settings")," and add following two environment variables. ",Object(r.b)("inlineCode",{parentName:"p"},"GITHUB_USERNAME")," and ",Object(r.b)("inlineCode",{parentName:"p"},"GITHUB_PASSWORD"),". For ",Object(r.b)("inlineCode",{parentName:"p"},"GITHUB_PASSWORD"),", you should be using your personal access token. Once this is done, you can modify above yaml section as follows to use private repository."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'inputs:\n  artifacts:\n    - git:\n        repo: https://github.com/onepanelio/Mask_RCNN.git\n        revision: "no-boto"\n        usernameSecret:\n            name: onepanel-default-env\n            key: GITHUB_USERNAME\n        passwordSecret:\n            name: onepanel-default-env\n            key: GITHUB_PASSWORD\n      name: src\n      path: /mnt/src\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The directories in ",Object(r.b)("inlineCode",{parentName:"p"},"path")," should exist before you can clone into them. For example, if you mount a volume at ",Object(r.b)("inlineCode",{parentName:"p"},"/mnt/src")," you cannot clone into ",Object(r.b)("inlineCode",{parentName:"p"},"/mnt/src/source"),"."))),Object(r.b)("h2",{id:"http"},"HTTP"),Object(r.b)("p",null,"You can download artifacts from different HTTP locations by using the ",Object(r.b)("inlineCode",{parentName:"p"},"http")," artifact. "),Object(r.b)("p",null,"Example executable binary:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"inputs:\n  artifacts:\n  # Download latest opctl and place it at /bin/opctl\n  - name: opctl\n    path: /bin/opctl\n    mode: 0755\n    http:\n      url: https://github.com/onepanelio/core/releases/latest/download/opctl-linux-amd64\n")),Object(r.b)("p",null,"Example zip file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"inputs:\n  artifacts:\n  # Download zip file and place it at /mnt/data/datasets/patch_medical_valid.zip\n  - name: data\n    # path to download the file - note the directories must exist\n    path: /mnt/data/patch_medical_valid.zip\n    mode: 0755\n    http:\n      url: https://github.com/onepanelio/templates/releases/download/v0.2.0/patch_medical_valid.zip\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The directories in ",Object(r.b)("inlineCode",{parentName:"p"},"path")," should exist before you can download into them. For example, if you mount a volume at ",Object(r.b)("inlineCode",{parentName:"p"},"/mnt/data")," you cannot download the file into ",Object(r.b)("inlineCode",{parentName:"p"},"/mnt/data/dataset"),"."))),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("h3",{id:"archive"},"Archive"),Object(r.b)("p",null,"Artifacts can be packaged as Tarballs and gzipped by specifying an archive strategy, using the ",Object(r.b)("inlineCode",{parentName:"p"},"archive")," field:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"...\n  outputs:\n    artifacts:\n    # Upload files from local /tmp/output folder to default object storage location that is configured for this namespace\n    # This is set to artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}} by default\n    - name: output-one\n      path: /tmp/output\n      # Tar and gzip contents of /tmp/output folder and upload to the namespace configured artifact repository\n      archive:\n        tar: {}\n...\n")),Object(r.b)("h3",{id:"optional"},"Optional"),Object(r.b)("p",null,"You can also mark both input and output artifacts as optional by setting ",Object(r.b)("inlineCode",{parentName:"p"},"optional")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),". In this case, if they don't exist, the Workflow will not throw an error:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"...\n  inputs:\n    artifacts:\n    # Download files from S3 prefix random/input into local folder /tmp/input/\n    # # This downloads from the default S3 artifact repository for this namespace\n    - name: input\n      path: /tmp/input/\n      optional: true # Don't throw an error if the file doesn't exist in the S3 location\n      s3:\n        key: my-data/input\n...\n")),Object(r.b)("h2",{id:"passing-artifacts"},"Passing artifacts"),Object(r.b)("p",null,"You can pass artifacts between tasks as shown in the example below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'entrypoint: artifact-example\ntemplates:\n  - name: artifact-example\n    dag:\n      tasks:\n        - name: generate-artifact\n          template: whalesay\n        - name: consume-artifact\n          dependencies: [generate-artifact]\n          template: print-message\n          arguments:\n            artifacts:\n            - name: message\n              from: "{{tasks.generate-artifact.outputs.artifacts.hello-art}}"\n  - name: whalesay\n    container:\n      image: docker/whalesay:latest\n      command: [sh, -c]\n      args: ["sleep 1; cowsay hello world | tee /tmp/hello_world.txt"]\n    outputs:\n      artifacts:\n      - name: hello-art\n        path: /tmp/hello_world.txt\n  - name: print-message\n    inputs:\n      artifacts:\n      - name: message\n        path: /tmp/message\n    container:\n      image: alpine:latest\n      command: [sh, -c]\n      args: ["cat /tmp/message"]\n')))}l.isMDXComponent=!0}}]);