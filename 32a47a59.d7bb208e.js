(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=b(n),d=a,u=m["".concat(c,".").concat(d)]||m[d]||l[d]||r;return n?o.a.createElement(u,i(i({ref:t},s),{},{components:n})):o.a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(2),o=(n(0),n(123));const r={title:"Upgrading components",sidebar_label:"Upgrading components",description:"Onepanel - Upgrading components to the latest version"},c={unversionedId:"deployment/components/upgrade",id:"deployment/components/upgrade",isDocsHomePage:!1,title:"Upgrading components",description:"Onepanel - Upgrading components to the latest version",source:"@site/docs/deployment/components/upgrade.md",slug:"/deployment/components/upgrade",permalink:"/docs/deployment/components/upgrade",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/components/upgrade.md",version:"current",sidebar_label:"Upgrading components",sidebar:"deployment",previous:{title:"Adding components",permalink:"/docs/deployment/components/add"},next:{title:"Adding more nodes",permalink:"/docs/deployment/components/nodes"}},i=[{value:"Upgrading components",id:"upgrading-components",children:[]}],p={rightToc:i};function s({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Before upgrading components, we highly recommend you back up your ",Object(o.b)("inlineCode",{parentName:"p"},"params.yaml")," file and try the upgrade on a copy of your production cluster."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It is highly recommended that you commit ",Object(o.b)("inlineCode",{parentName:"p"},"params.yaml")," file into a private repository and encrypt it with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/StackExchange/blackbox"}),"BlackBox")," or use a secret management service like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/key-vault/"}),"Azure Key Vault"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/secrets-manager/"}),"AWS Secret Manager"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.google.com/secret-manager"}),"GCP Secret Manager")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.vaultproject.io/"}),"HashiCorp Vault"),"."))),Object(o.b)("h2",{id:"upgrading-components"},"Upgrading components"),Object(o.b)("p",null,"When upgrading Onepanel, it is best to upgrade one minor version at a time (e.g. 0.14.0 => 0.15.0)."),Object(o.b)("p",null,"To upgrade Onepanel:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check the current version of ",Object(o.b)("inlineCode",{parentName:"p"},"opctl"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"{3}","{3}":!0}),"opctl version\n\nCLI version: 0.10.0\nManifest version: v0.10.0\nAPI version: v0.10.0\nWeb UI version: v0.10.0\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download the next version up of ",Object(o.b)("inlineCode",{parentName:"p"},"opctl")," for your operating system from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/releases"}),"our release page"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run ",Object(o.b)("inlineCode",{parentName:"p"},"opctl init")," with the initial flags you used."),Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can find the ",Object(o.b)("inlineCode",{parentName:"p"},"opctl")," command you initially ran at the top of your ",Object(o.b)("inlineCode",{parentName:"p"},"params.yaml")," file."))),Object(o.b)("p",{parentName:"li"},"For example:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider gke \\\n  --artifact-repository-provider s3\n")),Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-important alert alert--info"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Run ",Object(o.b)("inlineCode",{parentName:"p"},"opctl init")," only with the initial flags, you can add additional flags after the upgrade completes.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Apply your changes:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"opctl apply\n")),Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If the application is not loading after these updates, visit our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/deployment/troubleshooting/overview"}),"Troubleshooting")," page for some steps that can help resolve most issues. If you are still having issues, reach out in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://join.slack.com/t/onepanel-ce/shared_invite/zt-eyjnwec0-nLaHhjif9Y~gA05KuX6AUg"}),"Slack")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/discussions"}),"GitHub discussions"),"."))))))}s.isMDXComponent=!0}}]);