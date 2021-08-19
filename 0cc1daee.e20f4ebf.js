(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),m=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(a),d=n,u=c["".concat(l,".").concat(d)]||c[d]||b[d]||i;return a?r.a.createElement(u,o(o({ref:t},p),{},{components:a})):r.a.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),r=(a(0),a(128));const i={title:"Workflow Templates and parameters",sidebar_label:"Templates and parameters",description:"Workflow Templates for training models, ETL tasks and more on Onepanel"},l={unversionedId:"reference/workflows/templates",id:"reference/workflows/templates",isDocsHomePage:!1,title:"Workflow Templates and parameters",description:"Workflow Templates for training models, ETL tasks and more on Onepanel",source:"@site/docs/reference/workflows/templates.md",slug:"/reference/workflows/templates",permalink:"/docs/reference/workflows/templates",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/workflows/templates.md",version:"current",sidebar_label:"Templates and parameters",sidebar:"reference",previous:{title:"Executing a Workflow",permalink:"/docs/reference/workflows/execute"},next:{title:"Working with artifacts",permalink:"/docs/reference/workflows/artifacts"}},o=[{value:"Getting started",id:"getting-started",children:[]},{value:"Parameters",id:"parameters",children:[]}],s={rightToc:o};function p({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Onepanel's Workflows are based on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/argoproj/argo/tree/master/examples"}),"Argo Workflows"),". Most functionality is the same, one exception is that Onepanel Workflows entrypoint should always be a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/argoproj/argo/tree/master/examples#dag"}),"DAG template")," and ",Object(r.b)("strong",{parentName:"p"},"Step templates")," are not supported."))),Object(r.b)("h2",{id:"getting-started"},"Getting started"),Object(r.b)("p",null,"You can define reusable templates for Workflows. All Workflow Templates are defined as Directed Acyclic Graphs (DAG), here's an example of how a DAG template is defined:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'# The template to use as entrypoint\nentrypoint: main\ntemplates:\n- name: main            \n  dag:                      # Indicates that this is a DAG template\n    tasks:\n    - name: A               # First task to execute\n      template: echo        # The template to use for first task in DAG\n      arguments:            # Arguments to pass into the "echo" template\n        parameters:\n        - name: message\n          value: A\n    - name: B\n      dependencies: [A]\n      template: echo\n      arguments:\n        parameters:\n        - name: message\n          value: B\n    - name: C\n      dependencies: [A]\n      template: echo\n      arguments:\n        parameters:\n        - name: message\n          value: C\n    - name: D\n      dependencies: [B, C]\n      template: echo\n      arguments:\n        parameters:\n        - name: message\n          value: D\n- name: echo                # Definition of "echo" template used by the nodes in DAG\n  inputs:                   # Name of inputs \n    parameters:\n    - name: message\n  container:\n    image: alpine:3.7\n    command: [echo, "{{inputs.parameters.message}}"]\n')),Object(r.b)("h2",{id:"parameters"},"Parameters"),Object(r.b)("p",null,"You can define and use parameters in your Workflow Templates. These parameters are displayed in the Workflow creation form (or are made available via CLI) and can be referenced in the template like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"'{{workflow.parameters.<parameter-name>}}'\n")),Object(r.b)("p",null,"The syntax for parameter definitions are as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"arguments:\n  parameters:\n  - name: storage-class # Name, only alphanumeric characters and `-` allowed (required)\n    value: ssd  # Default value (required)\n    displayName: Storage class\n    type: select.select # How to render this parameter in Workflow creation form in Web UI\n    options:  # type of select.select and input.radio allow you to set options\n    - name: SSD\n      value: ssd\n")),Object(r.b)("p",null,"If a parameter is defined, ",Object(r.b)("inlineCode",{parentName:"p"},"name")," and ",Object(r.b)("inlineCode",{parentName:"p"},"value")," are required."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," is the name of the parameters, only alphanumeric characters and ",Object(r.b)("inlineCode",{parentName:"li"},"-")," allowed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"value")," is the default value for the parameter"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"displayName")," is the text that is displayed to the user"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type")," indicates how the parameter is rendered in the Workflow creation form in the Web UI. Possible values are:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"input.text")," renders a textbox"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"input.number")," renders a textbox that only accepts numbers"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"input.radio")," renders radio buttons"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"select.select")," renders a dropdown"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"select.nodepool")," renders a dropdown populated with the node pool options available. Use ",Object(r.b)("inlineCode",{parentName:"li"},"default")," for the value."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"textarea.textarea")," renders a textarea"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"options")," define options if ",Object(r.b)("inlineCode",{parentName:"li"},"type")," is ",Object(r.b)("inlineCode",{parentName:"li"},"select.select")," or ",Object(r.b)("inlineCode",{parentName:"li"},"input.radio")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"visibility")," defines whether the parameter should be visible in Workflow execution form. Possible values are:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"public")," parameters are visible to every where."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"protected")," parameters are visible in Onepanel UI and components like CVAT."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"internal")," parameters are visible in Onepanel UI only."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"private")," parameters are not visible any where. For system use only.")))),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:"{3-11,22}","{3-11,22}":!0}),"arguments:\n  parameters:\n  - name: message-text\n    value: my-message-2 # default value\n    displayName: Message text\n    type: select.select\n    options:\n    - name: my-message-1\n      value: my-message-1\n    - name: my-message-2\n      value: my-message-2\nentrypoint: main\ntemplates:\n- name: main\n  dag:\n    tasks:\n    - name: A\n      template: echo\n      arguments:\n        parameters:\n        - name: message\n          value: '{{workflow.parameters.message-text}}'\n")))}p.isMDXComponent=!0}}]);