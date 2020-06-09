(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=(n(0),n(151));const i={title:"CLI overview",sidebar_label:"CLI overview"},o={id:"deployment/configuration/cli",title:"CLI overview",description:"Install opctl",source:"@site/docs/deployment/configuration/cli.md",permalink:"/docs/deployment/configuration/cli",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/configuration/cli.md",sidebar_label:"CLI overview",sidebar:"deployment",previous:{title:"GKE deployment guide",permalink:"/docs/deployment/public/gke"},next:{title:"Configuration files",permalink:"/docs/deployment/configuration/files"}},c=[{value:"Install <code>opctl</code>",id:"install-opctl",children:[]},{value:"Initializing configuration file",id:"initializing-configuration-file",children:[]}],l={rightToc:c};function p({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"install-opctl"},"Install ",Object(r.b)("inlineCode",{parentName:"h2"},"opctl")),Object(r.b)("p",null,"Download the latest ",Object(r.b)("inlineCode",{parentName:"p"},"opctl")," for your operating system from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/releases/latest"}),"our release page")),Object(r.b)("h2",{id:"initializing-configuration-file"},"Initializing configuration file"),Object(r.b)("p",null,"You can initialize configuration files by running the following command. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/deployment/configuration/files"}),"configuration files")," section for more information."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider <provider-name>\n")),Object(r.b)("p",null,"Available provider options are: ",Object(r.b)("inlineCode",{parentName:"p"},"aks"),", ",Object(r.b)("inlineCode",{parentName:"p"},"eks")," and ",Object(r.b)("inlineCode",{parentName:"p"},"gke")," for public cloud installations."),Object(r.b)("p",null,"HTTPS is not enabled by default, to enable HTTPS but manage the TLS certificate yourself:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider <provider-name> --enable-https\n")),Object(r.b)("p",null,"To enable HTTPS and enable automatic TLS management:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider <provider-name> \\\n    --enable-https \\\n    --enable-cert-manager \\\n    --dns-provider <dns-provider-name>\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Refer to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/deployment/configuration/tls"}),"TLS certificates")," section for more information and a list of supported DNS providers."))),Object(r.b)("p",null,"To add ElasticSearch, Fluentd, and Kibana (EFK) logging, add the ",Object(r.b)("inlineCode",{parentName:"p"},"--enable-logging")," flag."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Onepanel's admin CLI serves as a thin abstraction layer on top of ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl")," and ",Object(r.b)("inlineCode",{parentName:"p"},"kustomize"),", therefore the CLI can easily be extended to manage additional Kubernetes modules."))))}p.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return n?r.a.createElement(u,c(c({ref:t},p),{},{components:n})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);