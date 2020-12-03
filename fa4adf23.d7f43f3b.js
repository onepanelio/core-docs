(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),o=(r(0),r(122));const i={title:"Troubleshooting Workflows",sidebar_label:"Troubleshooting Workflows",description:"Onepanel - Troubleshooting Workflows"},a={unversionedId:"reference/workflows/troubleshooting",id:"reference/workflows/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting Workflows",description:"Onepanel - Troubleshooting Workflows",source:"@site/docs/reference/workflows/troubleshooting.md",slug:"/reference/workflows/troubleshooting",permalink:"/docs/reference/workflows/troubleshooting",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/workflows/troubleshooting.md",version:"current",sidebar_label:"Troubleshooting Workflows",sidebar:"reference",previous:{title:"Accessing TensorBoard",permalink:"/docs/reference/workflows/tensorboard"},next:{title:"Getting started with image and video annotation in CVAT",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_quick_guide"}},c=[],s={rightToc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Following is a list of common problems that you may encounter while working with workflows and solutions for them."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Failed with exit code 'x' (i.e 1)\nThis usually happens when there is an error in the script/code you are trying to run. Usually, taking a look at logs and solving the errors reported will work.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Failed to load artifacts: timed out waiting for the condition\nThis happens when artifacts could not be mounted to the machine. A common case when this happens is when you are tring to attach data larger than your disk size. Try increasing your disk space. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Failed to load artifacts: The specified key does not exist\nYou will encounter this error when you are trying to attach data which does not exists. Look at the name and path of file(s).")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The node was low on resource: memory. Container wait was using 20172Ki, which exceeds its request of 0. Container main was using 11074832Ki, which exceeds its request of 0\nThis happens when you are trying to run code which is compute intensive and you don't have enough compute attached to your cluster."))))}l.isMDXComponent=!0},122:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);