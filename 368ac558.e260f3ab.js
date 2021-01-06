(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{124:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return r?n.a.createElement(m,b(b({ref:t},l),{},{components:r})):n.a.createElement(m,b({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),i=(r(0),r(124)),o={title:"JupyterLab overview",sidebar_label:"JupyterLab overview",description:"Onepanel - JupyterLab overview"},b={unversionedId:"reference/jupyterlab/overview",id:"reference/jupyterlab/overview",isDocsHomePage:!1,title:"JupyterLab overview",description:"Onepanel - JupyterLab overview",source:"@site/docs/reference/jupyterlab/overview.md",slug:"/reference/jupyterlab/overview",permalink:"/docs/reference/jupyterlab/overview",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/jupyterlab/overview.md",version:"current",sidebar_label:"JupyterLab overview",sidebar:"reference",previous:{title:"Adding a custom deep learning model and training Workflow to CVAT",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/adding_custom_model"},next:{title:"Using Git and browsing GitHub in JupyterLab",permalink:"/docs/reference/jupyterlab/git"}},c=[{value:"Storage",id:"storage",children:[]},{value:"Environment",id:"environment",children:[{value:"Packages, libraries and drivers",id:"packages-libraries-and-drivers",children:[]},{value:"JupyterLab exensions",id:"jupyterlab-exensions",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The JupyterLab Workspace in Onepanel is configured with all the tools and libraries you already use out of the box."),Object(i.b)("h2",{id:"storage"},"Storage"),Object(i.b)("p",null,"By default, Onepanel mounts a volume to ",Object(i.b)("inlineCode",{parentName:"p"},"/data")," directory and sets this as JupyterLab's working directory. You can set the size for this volume when launching a JupyterLab workspace."),Object(i.b)("h2",{id:"environment"},"Environment"),Object(i.b)("h3",{id:"packages-libraries-and-drivers"},"Packages, libraries and drivers"),Object(i.b)("p",null,"Here is a lit of the top packages, libraries and drivers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://pypi.org/"}),"PyPi")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.conda.io/en/latest/"}),"Conda")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://pytorch.org/"}),"PyTorch 1.6.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.tensorflow.org/"}),"TensorFlow 2.3.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://opencv.org/"}),"OpenCV")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/nvidia/container-images/cuda/blob/master/dist/10.2/ubuntu18.04-x86_64/base/Dockerfile"}),"NVIDIA GPU drivers"))),Object(i.b)("h3",{id:"jupyterlab-exensions"},"JupyterLab exensions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jupyter-widgets/ipywidgets#ipywidgets-interactive-html-widgets"}),"JupyterLab Widgets")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jupyterlab/jupyterlab-git#jupyterlab-git"}),"JupyterLab Git")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jupyterlab/jupyterlab-github#jupyterlab-github"}),"JupyterLab GitHub")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jupyterlab/debugger#jupyterlabdebugger"}),"JupyterLab Debugger")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/krassowski/jupyterlab-lsp#language-server-protocol-integration-for-jupyterlab"}),"JupyterLab Language Server Protocol")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jupyter/nbdime#nbdime-jupyter-notebook-diff-and-merge-tools"}),"JupyterLab Diff and Merge Tool"))))}p.isMDXComponent=!0}}]);