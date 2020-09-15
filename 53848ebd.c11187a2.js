(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||c;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(113));const c={title:"Namespaces",sidebar_label:"Namespaces",description:"Isolate teams or projects on Onepanel using Namespaces"},o={unversionedId:"getting-started/concepts/namespaces",id:"getting-started/concepts/namespaces",isDocsHomePage:!1,title:"Namespaces",description:"Isolate teams or projects on Onepanel using Namespaces",source:"@site/docs/getting-started/concepts/namespaces.md",slug:"/getting-started/concepts/namespaces",permalink:"/docs/getting-started/concepts/namespaces",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/concepts/namespaces.md",version:"current",sidebar_label:"Namespaces",sidebar:"gettingStarted",previous:{title:"Quick start",permalink:"/docs/getting-started/quickstart"},next:{title:"Workspaces",permalink:"/docs/getting-started/concepts/workspaces"}},s=[],i={rightToc:s};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Namespaces in Onepanel are thin abstractions of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"}),"Kubernetes namespaces"),". "),Object(a.b)("p",null,"They provide scope for all the resources (Workspaces, Workflows, Environment variables, etc.) in Onepanel. Resource names must be unique in each namespace and the same resource can only belong to one namespace."),Object(a.b)("p",null,"They are intended to be used to isolate teams or projects. Role based access control (RBAC) can be used to restrict users to one or more namespaces."),Object(a.b)("p",null,"Namespaces follow the same naming standard of their Kubernetes counterparts. They must:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"contain at most 63 characters"),Object(a.b)("li",{parentName:"ul"},"contain only lowercase alphanumeric characters or \u2018-\u2019"),Object(a.b)("li",{parentName:"ul"},"start with an alphanumeric character"),Object(a.b)("li",{parentName:"ul"},"end with an alphanumeric character")),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Onepanel additionally creates network policies that prevent resources in one namespace from accessing resources in the other."))))}p.isMDXComponent=!0}}]);