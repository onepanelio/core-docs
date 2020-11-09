(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{123:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return r?n.a.createElement(m,c(c({ref:t},l),{},{components:r})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(2),n=(r(0),r(123));const i={title:"JupyterLab overview",sidebar_label:"JupyterLab overview",description:"Onepanel - JupyterLab overview"},o={unversionedId:"reference/jupyterlab/overview",id:"reference/jupyterlab/overview",isDocsHomePage:!1,title:"JupyterLab overview",description:"Onepanel - JupyterLab overview",source:"@site/docs/reference/jupyterlab/overview.md",slug:"/reference/jupyterlab/overview",permalink:"/docs/reference/jupyterlab/overview",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/jupyterlab/overview.md",version:"current",sidebar_label:"JupyterLab overview",sidebar:"reference",previous:{title:"Customizing CVAT Workspace Template",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_customizing_workspace_template"},next:{title:"Using Git and browsing GitHub in JupyterLab",permalink:"/docs/reference/jupyterlab/git"}},c=[{value:"Storage",id:"storage",children:[]},{value:"Environment",id:"environment",children:[{value:"Packages, libraries and drivers",id:"packages-libraries-and-drivers",children:[]},{value:"JupyterLab exensions",id:"jupyterlab-exensions",children:[]}]}],b={rightToc:c};function l({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The JupyterLab Workspace in Onepanel is configured with all the tools and libraries you already use out of the box."),Object(n.b)("h2",{id:"storage"},"Storage"),Object(n.b)("p",null,"By default, Onepanel mounts a volume to ",Object(n.b)("inlineCode",{parentName:"p"},"/data")," directory and sets this as JupyterLab's working directory. You can set the size for this volume when launching a JupyterLab workspace."),Object(n.b)("h2",{id:"environment"},"Environment"),Object(n.b)("h3",{id:"packages-libraries-and-drivers"},"Packages, libraries and drivers"),Object(n.b)("p",null,"Here is a lit of the top packages, libraries and drivers:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://pypi.org/"}),"PyPi")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.conda.io/en/latest/"}),"Conda")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://pytorch.org/"}),"PyTorch 1.6.0")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.tensorflow.org/"}),"TensorFlow 2.3.0")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://opencv.org/"}),"OpenCV")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/nvidia/container-images/cuda/blob/master/dist/10.2/ubuntu18.04-x86_64/base/Dockerfile"}),"NVIDIA GPU drivers"))),Object(n.b)("h3",{id:"jupyterlab-exensions"},"JupyterLab exensions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jupyter-widgets/ipywidgets#ipywidgets-interactive-html-widgets"}),"JupyterLab Widgets")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jupyterlab/jupyterlab-git#jupyterlab-git"}),"JupyterLab Git")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jupyterlab/jupyterlab-github#jupyterlab-github"}),"JupyterLab GitHub")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jupyterlab/debugger#jupyterlabdebugger"}),"JupyterLab Debugger")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/krassowski/jupyterlab-lsp#language-server-protocol-integration-for-jupyterlab"}),"JupyterLab Language Server Protocol")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jupyter/nbdime#nbdime-jupyter-notebook-diff-and-merge-tools"}),"JupyterLab Diff and Merge Tool"))))}l.isMDXComponent=!0}}]);