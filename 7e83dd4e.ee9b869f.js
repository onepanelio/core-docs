(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(122));const o={title:"Customizing CVAT Workspace Template",sidebar_label:"Customizing CVAT Workspace Template",description:"Onepanel - Customizing CVAT Workspace Template"},i={unversionedId:"getting-started/use-cases/computervision/annotation/cvat/cvat_customizing_workspace_template",id:"getting-started/use-cases/computervision/annotation/cvat/cvat_customizing_workspace_template",isDocsHomePage:!1,title:"Customizing CVAT Workspace Template",description:"Onepanel - Customizing CVAT Workspace Template",source:"@site/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_customizing_workspace_template.md",slug:"/getting-started/use-cases/computervision/annotation/cvat/cvat_customizing_workspace_template",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_customizing_workspace_template",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_customizing_workspace_template.md",version:"current",sidebar_label:"Customizing CVAT Workspace Template",sidebar:"reference",previous:{title:"Adding a custom deep learning model and training Workflow to CVAT",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/adding_custom_model"},next:{title:"JupyterLab overview",permalink:"/docs/reference/jupyterlab/overview"}},c=[],s={rightToc:c};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can update the default CVAT template and adjust the following environment variables to change\nwhere CVAT data is stored."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"CVAT_KEYS_DIR")," - Where the SSH keys will be installed"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"CVAT_STATIC_DIR")," - Where the CSS, JS, Images are stored."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"CVAT_DATA_DIR")," - Where the tasks and annotations are stored"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"CVAT_MEDIA_DATA_DIR")," - Where the task images and uploads are stored"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"CVAT_SHARE_DIR")," - Where the file-syncer downloads and syncs files"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"CVAT_MODELS_DIR")," - Where the models used for annotations are stored"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"CVAT_LOGS_DIR")," - Where some of CVAT logs are stored"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"CVAT_MIGRATIONS_DIR")," - Where CVAT migrations are stored"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"CVAT_DATUMARO_DIR")," - Where datumaro is stored")))}l.isMDXComponent=!0}}]);