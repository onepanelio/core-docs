(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),b=a,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||c;return n?r.a.createElement(d,s(s({ref:t},p),{},{components:n})):r.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<c;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),c=(n(0),n(128)),o={title:"Namespaces",sidebar_label:"Namespaces",description:"Isolate teams or projects on Onepanel using Namespaces"},s={unversionedId:"getting-started/concepts/namespaces",id:"getting-started/concepts/namespaces",isDocsHomePage:!1,title:"Namespaces",description:"Isolate teams or projects on Onepanel using Namespaces",source:"@site/docs/getting-started/concepts/namespaces.md",slug:"/getting-started/concepts/namespaces",permalink:"/docs/getting-started/concepts/namespaces",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/concepts/namespaces.md",version:"current",sidebar_label:"Namespaces",sidebar:"gettingStarted",previous:{title:"Quick start",permalink:"/docs/getting-started/quickstart"},next:{title:"Workspaces",permalink:"/docs/getting-started/concepts/workspaces"}},i=[],p={rightToc:i};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Namespaces in Onepanel are thin abstractions of ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"}),"Kubernetes namespaces"),". "),Object(c.b)("p",null,"They provide scope for all the resources (Workspaces, Workflows, Environment variables, etc.) in Onepanel. Resource names must be unique in each namespace and the same resource can only belong to one namespace."),Object(c.b)("p",null,"They are intended to be used to isolate teams or projects. Role based access control (RBAC) can be used to restrict users to one or more namespaces."),Object(c.b)("p",null,"Namespaces follow the same naming standard of their Kubernetes counterparts. They must:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"contain at most 63 characters"),Object(c.b)("li",{parentName:"ul"},"contain only lowercase alphanumeric characters or \u2018-\u2019"),Object(c.b)("li",{parentName:"ul"},"start with an alphanumeric character"),Object(c.b)("li",{parentName:"ul"},"end with an alphanumeric character")),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Onepanel additionally creates network policies that prevent resources in one namespace from accessing resources in the other."))))}l.isMDXComponent=!0}}]);