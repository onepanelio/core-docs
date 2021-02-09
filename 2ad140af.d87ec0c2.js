(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},206:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/data-augmentation-102228-b38fa8a30b24cee4b4ab69e09478b172.png"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(125)),i={title:"Built-in data augmentation Workflows",sidebar_label:"Data augmentation",description:"Onepanel - Built-in data augmentation Workflows"},c={unversionedId:"reference/workflows/data-augmentation",id:"reference/workflows/data-augmentation",isDocsHomePage:!1,title:"Built-in data augmentation Workflows",description:"Onepanel - Built-in data augmentation Workflows",source:"@site/docs/reference/workflows/data-augmentation.md",slug:"/reference/workflows/data-augmentation",permalink:"/docs/reference/workflows/data-augmentation",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/workflows/data-augmentation.md",version:"current",sidebar_label:"Data augmentation",sidebar:"reference",previous:{title:"Built-in model training Workflows",permalink:"/docs/reference/workflows/training"},next:{title:"Getting started with image and video annotation",permalink:"/docs/reference/cvat/quickstart"}},s=[],u={rightToc:s};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Out of the box, Onepanel supports ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://albumentations.ai/"}),"Albumentations")," for data augmentation/preprocessing in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/workflows/training"}),"built-in training Workflow Templates"),"."),Object(o.b)("p",null,Object(o.b)("img",{src:n(206).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Number of augmentation cycles")," indicates the number of times to apply the transforms. Setting this field to ",Object(o.b)("inlineCode",{parentName:"p"},"0"),", bypasses any data augmentation."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Preprocessing parameters")," field can contain ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://albumentations.ai/docs/api_reference/augmentations/transforms/"}),"Albumentations transforms")," specified in YAML format."))}l.isMDXComponent=!0}}]);