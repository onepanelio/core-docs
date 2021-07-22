(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{123:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var r=o.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=p(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=t,f=l["".concat(i,".").concat(d)]||l[d]||b[d]||a;return n?o.a.createElement(f,c(c({ref:r},u),{},{components:n})):o.a.createElement(f,c({ref:r},u))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},220:function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/images/tensorboard-135651-86d493fb5783488160ece9caf8d2699d.png"},83:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return p}));var t=n(2),o=n(6),a=(n(0),n(123)),i={title:"Using TensorBoard in JupyterLab",sidebar_label:"Using TensorBoard",description:"Onepanel - Using TensorBoard in JupyterLab"},c={unversionedId:"reference/jupyterlab/tensorboard",id:"reference/jupyterlab/tensorboard",isDocsHomePage:!1,title:"Using TensorBoard in JupyterLab",description:"Onepanel - Using TensorBoard in JupyterLab",source:"@site/docs/reference/jupyterlab/tensorboard.md",slug:"/reference/jupyterlab/tensorboard",permalink:"/docs/reference/jupyterlab/tensorboard",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/jupyterlab/tensorboard.md",version:"current",sidebar_label:"Using TensorBoard",sidebar:"reference",previous:{title:"Using Git and browsing GitHub in JupyterLab",permalink:"/docs/reference/jupyterlab/git"},next:{title:"Using the built-in debugger",permalink:"/docs/reference/jupyterlab/debugging"}},s=[],u={rightToc:s};function p(e){var r=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,i,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"TensorBoard is installed in every JupyterLab Workspace and can be accessed in JupyterLab by running the following commands:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"# Load the TensorBoard notebook extension.\n%load_ext tensorboard\n\n# Setting --path_prefix /tensorboard is required\n%tensorboard --logdir <path-to-your-logs> --path_prefix /tensorboard\n")),Object(a.b)("p",null,"You will then be able to view and interact with TensorBoard in JupyterLab."),Object(a.b)("p",null,Object(a.b)("img",{src:n(220).default})))}p.isMDXComponent=!0}}]);