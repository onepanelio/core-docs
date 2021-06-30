(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{123:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,m=p["".concat(c,".").concat(u)]||p[u]||f[u]||o;return r?a.a.createElement(m,i(i({ref:t},b),{},{components:r})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},197:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/workflow_view_template-a8b226ddfa1d0f845a9707d68b5dcd1d.png"},198:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/workflow_execute-118b8b6d9aa868b59f3bac4b4c6424e0.png"},199:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/workflow_set_parameters-e4456477dbb1f99dc243bf81c1e0d48e.png"},200:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/workflow_running-f0b287b619c1281263bf4b43101609f9.png"},201:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/workflow_logs-9b2a563588a728e67eb68f9745b32fdd.png"},202:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/workflow_terminate-24e30ee680a1baac1b4220354deea8b6.png"},203:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/workflow_terminate_confirm-67bbb8e64202c0404acdae3bf3220df4.png"},204:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/workflow_rerun-a8c26d8c3cb4f1d96bc8ae077495ce5d.png"},59:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(123)),c={title:"Executing a Workflow",sidebar_label:"Executing a Workflow",description:"How to execute, stop and re-run Workflows in Onepanel"},i={unversionedId:"reference/workflows/execute",id:"reference/workflows/execute",isDocsHomePage:!1,title:"Executing a Workflow",description:"How to execute, stop and re-run Workflows in Onepanel",source:"@site/docs/reference/workflows/execute.md",slug:"/reference/workflows/execute",permalink:"/docs/reference/workflows/execute",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/workflows/execute.md",version:"current",sidebar_label:"Executing a Workflow",sidebar:"reference",previous:{title:"Filesyncer",permalink:"/docs/reference/sidecars/filesyncer"},next:{title:"Workflow Templates and parameters",permalink:"/docs/reference/workflows/templates"}},l=[{value:"Execute a Workflow",id:"execute-a-workflow",children:[]},{value:"Terminate a Workflow",id:"terminate-a-workflow",children:[]},{value:"Re-run a Workflow",id:"re-run-a-workflow",children:[]}],b={rightToc:l};function s(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"execute-a-workflow"},"Execute a Workflow"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"View")," on the workflow that you want to execute."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{src:r(197).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Execute Workflow"),"."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{src:r(198).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fill parameters on workflow settings, then click ",Object(o.b)("strong",{parentName:"p"},"Execute"),"."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{src:r(199).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("em",{parentName:"p"},"Logs")," to monitor how your model is performing and ",Object(o.b)("strong",{parentName:"p"},"Artifacts")," to see metrics, you can also download output files and logs."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{src:r(200).default})),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{src:r(201).default}),"\n"))),Object(o.b)("h2",{id:"terminate-a-workflow"},"Terminate a Workflow"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Terminate")," on a running Workflow."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{src:r(202).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"And confirm by clicking ",Object(o.b)("strong",{parentName:"p"},"Terminate")," again."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{src:r(203).default})))),Object(o.b)("h2",{id:"re-run-a-workflow"},"Re-run a Workflow"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To re-run a terminated/completed Workflow, click ",Object(o.b)("strong",{parentName:"p"},"Run Again"),"."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{src:r(204).default})))))}s.isMDXComponent=!0}}]);