(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return i}));var a=t(1),l=(t(0),t(127));const o={title:"Windows installation guide",sidebar_label:"Installing on Windows"},r={id:"deployment/single-node/windows",title:"Windows installation guide",description:"This document outlines the installation steps for Windows.",source:"@site/docs/deployment/single-node/windows.md",permalink:"/core-docs/docs/deployment/single-node/windows",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/single-node/windows.md",sidebar_label:"Installing on Windows",sidebar:"deployment",previous:{title:"macOS installation guide",permalink:"/core-docs/docs/deployment/single-node/macos"}},c=[{value:"Install MicroK8s with Multipass",id:"install-microk8s-with-multipass",children:[]},{value:"Install Onepanel",id:"install-onepanel",children:[]}],s={rightToc:c};function i({components:e,...n}){return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This document outlines the installation steps for Windows."),Object(l.b)("h2",{id:"install-microk8s-with-multipass"},"Install MicroK8s with Multipass"),Object(l.b)("p",null,"First, install Multipass by following ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://multipass.run/docs/installing-on-windows"}),"Installing on Windows"),"."),Object(l.b)("p",null,"With multipass installed, you can now create a VM to run MicroK8s. At least 4 Gigabytes of RAM and 40G of storage is recommended \u2013 you can pass these requirements when you launch the VM:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"multipass launch --name microk8s-vm --mem 4G --disk 40G\n")),Object(l.b)("p",null,"You can now find the IP address which has been allocated. Running:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"multipass list\n")),Object(l.b)("p",null,"Will return something like:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"Name                    State             IPv4             Release\nmicrok8s-vm             RUNNING           10.72.145.216    Ubuntu 18.04 LTS\n")),Object(l.b)("p",null,"Take a note of this IP as you will need to add it to your ",Object(l.b)("inlineCode",{parentName:"p"},"params.yaml"),"."),Object(l.b)("p",null,"Run a shell into your VM:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"multipass shell microk8s-vm\n")),Object(l.b)("p",null,"Install the MicroK8s snap and configure the network:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo snap install microk8s --classic --channel=1.17/stable\nsudo iptables -P FORWARD ACCEPT\n")),Object(l.b)("p",null,"You will also need to add ",Object(l.b)("inlineCode",{parentName:"p"},"ubuntu")," user to ",Object(l.b)("inlineCode",{parentName:"p"},"microk8s")," group as follows:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo usermod -a -G microk8s ubuntu\n")),Object(l.b)("p",null,"Then, enable the following required add-ons:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"microk8s.enable storage dns\n")),Object(l.b)("p",null,"You can optionally enable Kubernetes dashboard:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"microk8s.enable dashboard\n")),Object(l.b)("h2",{id:"install-onepanel"},"Install Onepanel"),Object(l.b)("p",null,"Download the latest ",Object(l.b)("inlineCode",{parentName:"p"},"opctl")," for Windows from ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/onepanelio/cli/releases/latest"}),"our release page")),Object(l.b)("p",null,"Run the following command to create ",Object(l.b)("inlineCode",{parentName:"p"},"params.yaml")," file for microk8s:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider microk8s --enable-efk-logging\n")),Object(l.b)("p",null,"Populate ",Object(l.b)("inlineCode",{parentName:"p"},"params.yaml")," as outlined in ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"../configuration/params"}),"params documentation")),Object(l.b)("p",null,"Get Kubernetes config from MicroK8s:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"multipass exec microk8s-vm -- /snap/bin/microk8s.config > kubeconfig\n")),Object(l.b)("p",null,"Finally, run the following command to deploy to your cluster:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"KUBECONFIG=./kubeconfig opctl apply\n")),Object(l.b)("p",null,"Once deployment is complete, use the following command to get your auth token to log into Onepanel:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"KUBECONFIG=./kubeconfig opctl auth token\n")),Object(l.b)("p",null,"You can then access Onepanel by going to ",Object(l.b)("inlineCode",{parentName:"p"},"http://<microk8s-vm-ip>:<uiHTTPort>")))}i.isMDXComponent=!0},127:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),l=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=l.a.createContext({}),b=function(e){var n=l.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=b(e.components);return l.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=b(t),m=a,d=p["".concat(r,".").concat(m)]||p[m]||u[m]||o;return t?l.a.createElement(d,c({ref:n},i,{components:t})):l.a.createElement(d,c({ref:n},i))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var i=2;i<o;i++)r[i]=t[i];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);