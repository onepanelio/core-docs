(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return b}));var n=a(1),o=(a(0),a(128));const c={title:"GKE installation guide",sidebar_label:"Installing on GKE"},i={id:"deployment/public/gke",title:"GKE installation guide",description:"This document outlines the installation steps for Google Kubernetes Engine (GKE).",source:"@site/docs/deployment/public/gke.md",permalink:"/docs/deployment/public/gke",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/public/gke.md",sidebar_label:"Installing on GKE",sidebar:"deployment",previous:{title:"EKS installation guide",permalink:"/docs/deployment/public/eks"}},r=[{value:"Launch a GKE cluster",id:"launch-a-gke-cluster",children:[]},{value:"Install Onepanel",id:"install-onepanel",children:[]}],l={rightToc:r};function b({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document outlines the installation steps for Google Kubernetes Engine (GKE)."),Object(o.b)("h2",{id:"launch-a-gke-cluster"},"Launch a GKE cluster"),Object(o.b)("p",null,"We recommend launching a cluster with 2 ",Object(o.b)("inlineCode",{parentName:"p"},"n1-standard-4")," nodes to start, with autoscaling and network policy enabled. You can add additional CPU/GPU node pools as needed later."),Object(o.b)("p",null,"Here is sample ",Object(o.b)("inlineCode",{parentName:"p"},"gcloud")," command to create a bare minimum cluster:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"gcloud container --project <project-name> clusters create <cluster-name> --zone <zone> \\\n    --num-nodes 2 \\\n    --machine-type n1-standard-4 \\\n    --disk-size 100 \\\n    --min-nodes 0 \\\n    --max-nodes 2 \\\n    --enable-autoscaling \\\n    --enable-network-policy \\\n    --enable-stackdriver-kubernetes \\\n    --addons HorizontalPodAutoscaling,HttpLoadBalancing\n")),Object(o.b)("div",{className:"admonition admonition-note"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"--enable-stackdriver-kubernetes")," flag in above command enables Google Stackdriver for log aggregation which can incur additional charges. You can optionally remove this flag and add ",Object(o.b)("inlineCode",{parentName:"p"},"--enable-efk-logging")," to ",Object(o.b)("inlineCode",{parentName:"p"},"opctl")," command below."))),Object(o.b)("div",{className:"admonition admonition-note"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can optionally add the ",Object(o.b)("inlineCode",{parentName:"p"},"--enable-tpu")," flag to enable TPUs in GKE."))),Object(o.b)("p",null,"The command above will automatically retrieve your cluster's access credentials but you can also get them by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"gcloud container clusters get-credentials <cluster-name> --zone <zone>\n")),Object(o.b)("h2",{id:"install-onepanel"},"Install Onepanel"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download the latest ",Object(o.b)("inlineCode",{parentName:"p"},"opctl")," for your operating system from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/releases/latest"}),"our release page"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the following command to initialize a ",Object(o.b)("inlineCode",{parentName:"p"},"params.yaml")," template for GKE:"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider gke --enable-https --enable-cert-manager --dns-provider <dns-provider>\n")),Object(o.b)("div",{className:"admonition admonition-note"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"--enable-https")," is optional and requires a TLS certificate, but it is highly recommended. You can optionally set the ",Object(o.b)("inlineCode",{parentName:"p"},"--enable-cert-manager")," and ",Object(o.b)("inlineCode",{parentName:"p"},"--dns-provider")," flags, so TLS certificates are automatically created and renewed via ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://letsencrypt.org/"}),"Let's Encrypt"),". If you do not set this flag and your DNS provider isn't one of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/deployment/configuration/tls#supported-dns-providers"}),"supported DNS providers"),", then you have to create a wildcard certificate and manually manage it."))),Object(o.b)("div",{className:"admonition admonition-note"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"GKE automatically adds GPU device plugins to GPU nodes, so you do not have to set the ",Object(o.b)("inlineCode",{parentName:"p"},"--gpu-device-plugins")," flag."))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Populate ",Object(o.b)("inlineCode",{parentName:"p"},"params.yaml")," by following the instructions in the template, you can also refer to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/deployment/configuration/files"}),"configuration files")," section.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Finally, run the following command to deploy to your cluster:"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl apply\n")),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Once the deployment completes, the CLI will display the IP and wildcard domain you need to use to setup your DNS. You can also get this information again by running:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl app ip\n")),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Create an ",Object(o.b)("inlineCode",{parentName:"li"},"A")," record in your DNS provider based on the instructions above.")),Object(o.b)("div",{className:"admonition admonition-tip"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note that you should use a wildcard ",Object(o.b)("inlineCode",{parentName:"p"},"A")," record, for example: ",Object(o.b)("inlineCode",{parentName:"p"},"*.example.com")," or ",Object(o.b)("inlineCode",{parentName:"p"},"*.subdomain.example.com")))),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"Use the following command to get your auth token to log into Onepanel:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl auth token\n")))}b.isMDXComponent=!0},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):r({},t,{},e)),a},d=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,u=d["".concat(i,".").concat(m)]||d[m]||s[m]||c;return a?o.a.createElement(u,r({ref:t},b,{components:a})):o.a.createElement(u,r({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var b=2;b<c;b++)i[b]=a[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);