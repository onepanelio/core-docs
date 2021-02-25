(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(2),a=(n(0),n(125));const r={title:"Troubleshooting",sidebar_label:"Troubleshooting",description:"Troubleshooting deployments"},i={unversionedId:"deployment/troubleshooting/overview",id:"deployment/troubleshooting/overview",isDocsHomePage:!1,title:"Troubleshooting",description:"Troubleshooting deployments",source:"@site/docs/deployment/troubleshooting/overview.md",slug:"/deployment/troubleshooting/overview",permalink:"/docs/deployment/troubleshooting/overview",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/troubleshooting/overview.md",version:"current",sidebar_label:"Troubleshooting",sidebar:"deployment",previous:{title:"Cluster information",permalink:"/docs/deployment/cluster/cluster"}},c=[{value:"General troubleshooting steps",id:"general-troubleshooting-steps",children:[]},{value:"Troubleshooting deployments with cert-manager",id:"troubleshooting-deployments-with-cert-manager",children:[]},{value:"Still having issues?",id:"still-having-issues",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This document outlines steps to troubleshoot issues that may arise after initial deployment of Onepanel."),Object(a.b)("h2",{id:"general-troubleshooting-steps"},"General troubleshooting steps"),Object(a.b)("p",null,"Once you have setup DNS accordingly but the site isn't showing up or you can't login, double check that you have set up DNS correctly:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"opctl app status\n")),Object(a.b)("p",null,"The command above will return a result similar to the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"Your deployment is ready.\n\nIn your DNS, add an A record for *.sub.example.com and point it to '52.225.33.112'\nOnce complete, your application will be running at https://app.sub.example.com\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Depending on your provider, the ",Object(a.b)("inlineCode",{parentName:"p"},"opctl app status")," may prompt you to set up a ",Object(a.b)("inlineCode",{parentName:"p"},"CNAME")," record."))),Object(a.b)("p",null,'If you see "Your deployment is ready", double check that your DNS record is correct, then ping the domain in the URL above to confirm it is ready:'),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"$ ping app.sub.example.com\nPING app.sub.example.com (52.225.33.112) 56(84) bytes of data.\n")),Object(a.b)("p",null,'If you see "Not all required pods are running. Your deployment is not ready.", run the following command:'),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods -A\n")),Object(a.b)("p",null,"For ",Object(a.b)("inlineCode",{parentName:"p"},"Pending")," pods, check the ",Object(a.b)("inlineCode",{parentName:"p"},"Age"),", if it has been less than 5 minutes, wait and check again."),Object(a.b)("p",null,"If the pods are showing ",Object(a.b)("inlineCode",{parentName:"p"},"Error")," or have been in ",Object(a.b)("inlineCode",{parentName:"p"},"Pending")," state for more than 5 minutes, check the pod in more details by running ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl describe")," for more details. You can also check the pod log by running ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl logs"),". "),Object(a.b)("p",null,"In most cases, pods stuck in ",Object(a.b)("inlineCode",{parentName:"p"},"Pending")," state could mean that you need to add another node to your cluster."),Object(a.b)("h2",{id:"troubleshooting-deployments-with-cert-manager"},"Troubleshooting deployments with cert-manager"),Object(a.b)("p",null,"Onepanel uses ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://cert-manager.io/"}),"cert-manager")," to automatically manages TLS certificates when you install Onepanel with the following flags:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"opctl init ... --enable-cert-manager --dns-provider <provider>\n")),Object(a.b)("p",null,"All cert-manager resources in Onepanel are installed in the ",Object(a.b)("inlineCode",{parentName:"p"},"istio-system")," namespace."),Object(a.b)("p",null,"If you have enabled cert-manager and your application after following ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#general-troubleshooting-steps"}),"General troubleshooting steps"),", then you're most likely running into certificate issues."),Object(a.b)("p",null,"You can troubleshoot these issues by following the steps in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://cert-manager.io/docs/faq/acme/"}),"Troubleshooting Issuing ACME Certificates"),". Make sure to run all the commands in the ",Object(a.b)("inlineCode",{parentName:"p"},"istio-system")," namespace. For example to get the certificate that Onepanel uses:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"kubectl describe certificate cert-manager-wildcard-certificate -n istio-system\n")),Object(a.b)("h2",{id:"still-having-issues"},"Still having issues?"),Object(a.b)("p",null,"Reach out in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://join.slack.com/t/onepanel-ce/shared_invite/zt-eyjnwec0-nLaHhjif9Y~gA05KuX6AUg"}),"Slack")," or ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/discussions"}),"GitHub discussions"),"."))}s.isMDXComponent=!0}}]);