(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),c=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),b=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,u=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return a?c.a.createElement(u,o(o({ref:t},l),{},{components:a})):c.a.createElement(u,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},114:function(e,t,a){"use strict";function n(e){var t,a,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(c&&(c+=" "),c+=a);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,a=0,c="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(c&&(c+=" "),c+=t);return c}},116:function(e,t,a){"use strict";var n=a(0);const c=Object(n.createContext)(void 0);t.a=c},117:function(e,t,a){"use strict";var n=a(0),c=a(116);t.a=function(){const e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(117),s=a(114),o=a(48),r=a.n(o);const l=37,b=39;t.a=function(e){const{block:t,children:a,defaultValue:o,values:p,groupId:m}=e,{tabGroupChoices:d,setTabGroupChoices:u}=Object(i.a)(),[O,j]=Object(n.useState)(o),[h,v]=Object(n.useState)(!1);if(null!=m){const e=d[m];null!=e&&e!==O&&p.some(t=>t.value===e)&&j(e)}const N=e=>{j(e),null!=m&&u(m,e)},g=[],f=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},y=()=>{v(!1)};return Object(n.useEffect)(()=>{window.addEventListener("keydown",f),window.addEventListener("mousedown",y)},[]),c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(s.a)("tabs__item",r.a.tabItem,{"tabs__item--active":O===e}),style:h?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case b:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),f(e)},onFocus:()=>N(e),onClick:()=>{N(e),v(!1)},onPointerDown:()=>v(!1)},t))),c.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===O)[0]))}},120:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){return c.a.createElement("div",null,e.children)}},64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),c=(a(0),a(113)),i=a(119),s=a(120);const o={title:"MicroK8s deployment guide",sidebar_label:"MicroK8s deployment"},r={unversionedId:"deployment/single-node/microk8s",id:"deployment/single-node/microk8s",isDocsHomePage:!1,title:"MicroK8s deployment guide",description:"This document outlines the installation steps for single node installation using Multipass VM and MicroK8s.",source:"@site/docs/deployment/single-node/microk8s.md",slug:"/deployment/single-node/microk8s",permalink:"/docs/deployment/single-node/microk8s",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/single-node/microk8s.md",version:"current",sidebar_label:"MicroK8s deployment",sidebar:"deployment",previous:{title:"GKE deployment guide",permalink:"/docs/deployment/public/gke"},next:{title:"Minikube deployment guide",permalink:"/docs/deployment/single-node/minikube"}},l=[{value:"Install MicroK8s with Multipass",id:"install-microk8s-with-multipass",children:[]},{value:"Install Onepanel",id:"install-onepanel",children:[]}],b={rightToc:l};function p({components:e,...t}){return Object(c.b)("wrapper",Object(n.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This document outlines the installation steps for single node installation using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://multipass.run/"}),"Multipass")," VM and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://microk8s.io/"}),"MicroK8s"),"."),Object(c.b)("h2",{id:"install-microk8s-with-multipass"},"Install MicroK8s with Multipass"),Object(c.b)("p",null,"First, install Multipass for your operating system:"),Object(c.b)(i.a,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"linux",mdxType:"TabItem"},Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Instructions")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://multipass.run/docs/installing-on-linux"}),"Installing on Linux"))))),Object(c.b)(s.a,{value:"macos",mdxType:"TabItem"},Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Instructions")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://multipass.run/docs/installing-on-macos"}),"Installing on macOS"))))),Object(c.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Instructions")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://multipass.run/docs/installing-on-windows"}),"Installing on Windows")))))),Object(c.b)("p",null,"With multipass installed, you can now create a VM to run MicroK8s. At least 8 Gigabytes of RAM and 40G of storage is recommended \u2013 you can pass these requirements when you launch the VM:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"multipass launch --name microk8s-vm --mem 8G --disk 40G --cpus 4 # 8G ram for Istio, recommended\n")),Object(c.b)("p",null,"You can now find the IP address which has been allocated by running:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"multipass list\n")),Object(c.b)("p",null,"Will return something like:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"Name                    State             IPv4             Release\nmicrok8s-vm             RUNNING           10.72.145.216    Ubuntu 18.04 LTS\n")),Object(c.b)("p",null,"Take a note of this IP as you will need to add it to your ",Object(c.b)("inlineCode",{parentName:"p"},"params.yaml"),"."),Object(c.b)("p",null,"Run a shell into your VM:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"multipass shell microk8s-vm\n")),Object(c.b)("p",null,"Install the MicroK8s snap and configure the network:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo snap install microk8s --classic --channel=1.18/stable\nsudo iptables -P FORWARD ACCEPT\n")),Object(c.b)("p",null,"You will also need to add ",Object(c.b)("inlineCode",{parentName:"p"},"ubuntu")," user to ",Object(c.b)("inlineCode",{parentName:"p"},"microk8s")," group as follows:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo usermod -a -G microk8s ubuntu\n# Re-enter bash session for group changes\n")),Object(c.b)("p",null,"Then, enable the following required add-ons:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo microk8s.enable storage dns rbac dashboard\n")),Object(c.b)("p",null,"Enable TokenRequest feature (required by Istio) by passing in extra argument to the api server."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"nano /var/snap/microk8s/current/args/kube-apiserver\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If you don't see any content, try exiting the multipass vm and entering again."))),Object(c.b)("p",null,"Add the lines:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"--service-account-signing-key-file=${SNAP_DATA}/certs/serviceaccount.key\n--service-account-key-file=${SNAP_DATA}/certs/serviceaccount.key\n--service-account-issuer=api\n--service-account-api-audiences=api,nats\n")),Object(c.b)("p",null,"Make sure this line is set to these values:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"--authorization-mode=RBAC,Node\n")),Object(c.b)("p",null,"Save your changes.\nExecute to make changes take effect"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"sudo systemctl restart snap.microk8s.daemon-apiserver\n")),Object(c.b)("p",null,"Check microk8s is running with ",Object(c.b)("inlineCode",{parentName:"p"},"microk8s status")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},'If you see a "not running" error, run ',Object(c.b)("inlineCode",{parentName:"p"},"microk8s inspect"),"."),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"Since the api server was just changed, it's most likely that's where the error is."),Object(c.b)("li",{parentName:"ul"},'Check what reports as "FAIL"'),Object(c.b)("li",{parentName:"ul"},"Assuming it's the api server"),Object(c.b)("li",{parentName:"ul"},"Untar the report file, go to the daemon-apiserver folder, open ",Object(c.b)("inlineCode",{parentName:"li"},"journal")," log file."),Object(c.b)("li",{parentName:"ul"},'Search for "error" and see what comes up.')))),Object(c.b)("h2",{id:"install-onepanel"},"Install Onepanel"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Download the latest ",Object(c.b)("inlineCode",{parentName:"p"},"opctl")," for your operating system from ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/releases/latest"}),"our release page"),"."),Object(c.b)(i.a,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"linux",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download the binary\ncurl -sLO https://github.com/onepanelio/core/releases/download/latest/opctl-linux-amd64\n\n# Make binary executable\nchmod +x opctl-linux-amd64\n\n# Move binary to path\nmv ./opctl-linux-amd64 /usr/local/bin/opctl\n\n# Test installation\nopctl version\n"))),Object(c.b)(s.a,{value:"macos",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download the binary\ncurl -sLO https://github.com/onepanelio/core/releases/download/latest/opctl-macos-amd64\n\n# Make binary executable\nchmod +x opctl-macos-amd64\n\n# Move binary to path\nmv ./opctl-macos-amd64 /usr/local/bin/opctl\n\n# Test installation\nopctl version\n"))),Object(c.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Download the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/releases/latest/download/opctl-windows-amd64.exe"}),"attached executable"),", rename it to ",Object(c.b)("inlineCode",{parentName:"p"},"opctl")," and move it to a folder that is in your PATH environment variable."))))),"."),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Run the following command to initialize a ",Object(c.b)("inlineCode",{parentName:"p"},"params.yaml")," template for microk8s:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider microk8s \\\n    --enable-metallb \\\n    --artifact-repository-provider s3\n")),Object(c.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If you don't have a loadbalancer, and want to use a local one, you can use metallb."),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"opctl init --provider microk8s --enable-metallb\n"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Populate ",Object(c.b)("inlineCode",{parentName:"p"},"params.yaml")," by following the instructions in the template, and referring to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/deployment/configuration/files#sections"}),"configuration file sections")," for more detailed information."),Object(c.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/deployment/configuration/files#metal-lb"}),"configuration metallb")," for metallb specific details. ")))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Get Kubernetes config from MicroK8s:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"multipass exec microk8s-vm -- /snap/bin/microk8s.config > kubeconfig\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Finally, run the following command to deploy to your cluster:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"KUBECONFIG=./kubeconfig opctl apply\n")),Object(c.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-important alert alert--info"}),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The CLI will display the URL for accessing Onepanel once the deployment completes.")))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"To get access to this new cluster via browser, we need to carry out extra steps."),Object(c.b)("img",{src:"/img/multipass_request_flow.png",alt:"Request Flow with Multipass",width:"800px"}),Object(c.b)("p",{parentName:"li"},"Execute these steps in the host machine."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"multipass list\n")),Object(c.b)("p",{parentName:"li"},"Grab the IP address for your microk8s.\nExample:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Name                    State             IPv4             Image\nmicrok8s-vm             Running           10.174.163.50    Ubuntu 18.04 LTS\n")),Object(c.b)("p",{parentName:"li"},"Add an entry to your hosts file to point to the fqdn you setup in ",Object(c.b)("inlineCode",{parentName:"p"},"params.yaml"),"\nExample entry:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"  # The Fully Qualified Domain (FQDN) where Onepanel will be hosted.\n  # If `domain` above is set to example.com or sub.example.com, then your FQDN could be: app.example.com or app.sub.example.com respectively\n  fqdn: app.alex.xyz\n")),Object(c.b)("p",{parentName:"li"},"Entry to ",Object(c.b)("inlineCode",{parentName:"p"},"/etc/hosts")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"10.174.163.50 app.alex.xyz\n")),Object(c.b)("p",{parentName:"li"},"Adding this entry means the host browser will try to access the multipass vm we setup\nfor microk8s."),Object(c.b)("p",{parentName:"li"},"Next, enter into multipass VM"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"multipass shell microk8s-vm\n")),Object(c.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Execute inside the multipass VM")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"microk8s.kubectl get services -n istio-system\n")),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"NAME                   TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                                                                                                                      AGE\nistio-ingressgateway   LoadBalancer   10.152.183.166   10.1.31.0     15020:31979/TCP,80:31394/TCP,443:30038/TCP,15029:32204/TCP,15030:32688/TCP,15031:31420/TCP,15032:30575/TCP,15443:30386/TCP   3d3h\n")),Object(c.b)("p",{parentName:"div"},"Inside the multipass VM, add an entry to the ",Object(c.b)("inlineCode",{parentName:"p"},"/etc/hosts")," file."),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"sudo nano /etc/hosts\n")),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"10.1.31.0 app.alex.xyz\n")),Object(c.b)("p",{parentName:"div"},"Once you have entered and saved the host change, verify you the onepanel website\nis running."),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"curl app.alex.xyz # Your params.yaml fqdn entry\n")),Object(c.b)("p",{parentName:"div"},"Example output."),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>Onepanel</title>\n  <base href="/">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <link rel="icon" type="image/png" sizes="32x32" href="assets/icon/favicon.png">\n  <link rel="icon" type="image/png" sizes="96x96" href="assets/icon/favicon.png">\n  <link rel="icon" type="image/png" sizes="16x16" href="assets/icon/favicon.png">\n<link rel="stylesheet" href="styles.9b8cd86ace5a9057a37e.css"></head>\n<body>\n  <app-root></app-root>\n<script src="runtime-es2015.edb2fcf2778e7bf1d426.js" type="module"><\/script><script src="runtime-es5.edb2fcf2778e7bf1d426.js" nomodule defer><\/script><script src="polyfills-es5.6696c533341b95a3d617.js" nomodule defer><\/script><script src="polyfills-es2015.2987770fde9daa1d8a2e.js" type="module"><\/script><script src="main-es2015.b17adb3826cd9f5e4a29.js" type="module"><\/script><script src="main-es5.b17adb3826cd9f5e4a29.js" nomodule defer><\/script></body>\n</html>\n')),Object(c.b)("p",{parentName:"div"},"You can debug the request with ",Object(c.b)("inlineCode",{parentName:"p"},"curl -vvv app.alex.xyz")),Object(c.b)("p",{parentName:"div"},"We need a listener running on port 80. That listener should direct traffic\nto the istio gateway."),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"sudo apt install socat\nsudo socat TCP-LISTEN:80,fork TCP:app.alex.xyz:80\n")),Object(c.b)("p",{parentName:"div"},"This will run actively in the current terminal prompt."))),Object(c.b)("p",{parentName:"li"},"Now, go back to your host machine, open your internet browser and go to:\n",Object(c.b)("inlineCode",{parentName:"p"},"app.alex.xyz"),"."),Object(c.b)("p",{parentName:"li"},"You should see the website load up.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Use the following command to get your auth token to log into Onepanel:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"KUBECONFIG=./kubeconfig opctl auth token\n")))))}p.isMDXComponent=!0}}]);