(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(119)),c={title:"Workspaces",sidebar_label:"Workspaces",description:"Onepanel Workspaces are full Linux computing environments that can be paused and resumed at any time"},s={unversionedId:"getting-started/concepts/workspaces",id:"getting-started/concepts/workspaces",isDocsHomePage:!1,title:"Workspaces",description:"Onepanel Workspaces are full Linux computing environments that can be paused and resumed at any time",source:"@site/docs/getting-started/concepts/workspaces.md",slug:"/getting-started/concepts/workspaces",permalink:"/docs/getting-started/concepts/workspaces",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/concepts/workspaces.md",version:"current",sidebar_label:"Workspaces",sidebar:"gettingStarted",previous:{title:"Namespaces",permalink:"/docs/getting-started/concepts/namespaces"},next:{title:"Workflows",permalink:"/docs/getting-started/concepts/workflows"}},i=[],p={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Workspaces are full Linux environments that can be paused and resumed at any time, while persisting your data. They can be used to run single machine applications like JupyterLab, VSCode and annotation tools like ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/opencv/cvat"}),"CVAT"),". You can also upgrade or downgrade resources in Workspaces, for example you can switch to a GPU machine and back at any time."),Object(o.b)("p",null,"You can define Workspaces using Workspace Templates. Workspace Templates are reusable templates that are a combination of Docker images and a YAML definition. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/workspaces/templates"}),"Workspace Templates")," in ",Object(o.b)("strong",{parentName:"p"},"User Guide")," for more detailed information."))}u.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return n?a.a.createElement(f,s(s({ref:t},p),{},{components:n})):a.a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);