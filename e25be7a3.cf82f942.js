(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(151));const o={title:"Environment variables",sidebar_label:"Environment variables"},i={id:"getting-started/concepts/environment-variables",title:"Environment variables",description:"Environment variables are unique to each namespace and will automatically added to any container in Workspaces or Workflows.",source:"@site/docs/getting-started/concepts/environment-variables.md",permalink:"/docs/getting-started/concepts/environment-variables",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/concepts/environment-variables.md",sidebar_label:"Environment variables",sidebar:"gettingStarted",previous:{title:"Workflows",permalink:"/docs/getting-started/concepts/workflows"},next:{title:"Quick start",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_quick_guide"}},c=[],l={rightToc:c};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Environment variables are unique to each namespace and will automatically added to any container in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/getting-started/concepts/workspaces"}),"Workspaces")," or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/getting-started/concepts/workflows"}),"Workflows"),"."),Object(a.b)("p",null,"The following system environment variables are always automatically added to both Workspaces and Workflow containers:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ONEPANEL_API_URL")," Platform API URL that can be used to make SDK or API calls from any container."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ONEPANEL_FQDN")," Fully qualified domain name (FQDN) where platform UI and API is installed. Example: ",Object(a.b)("inlineCode",{parentName:"li"},"app.sub.domain.com")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ONEPANEL_DOMAIN")," Domain name where the platofrm is installed. Example: ",Object(a.b)("inlineCode",{parentName:"li"},"sub.domain.com")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ONEPANEL_RESOURCE_NAMESPACE")," The namespace where the resource is running."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ONEPANEL_RESOURCE_UID")," The unique ID of the resource in namespace.")))}s.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);