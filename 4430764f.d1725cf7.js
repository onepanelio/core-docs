(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),o=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=o(a),m=r,p=d["".concat(b,".").concat(m)]||d[m]||u[m]||c;return a?n.a.createElement(p,l(l({ref:t},s),{},{components:a})):n.a.createElement(p,l({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var s=2;s<c;s++)b[s]=a[s];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},214:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/onepanel-22deb66c05ee7a1b0ca4b9c00f18c63e.png"},215:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/eks-68eaeab77a120bea4c57ccf8c94124d0.png"},216:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/aks-d5c99530935a0b3a9d78755baae3fb45.png"},217:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/gke-2ded935f67e0d785dc07a93e28a50091.png"},78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var r=a(2),n=a(6),c=(a(0),a(125)),b={title:"Cluster information",sidebar_label:"Cluster information",description:"Architecture diagrams and cost estimates for AWS, Azure and GCP"},l={unversionedId:"deployment/cluster/cluster",id:"deployment/cluster/cluster",isDocsHomePage:!1,title:"Cluster information",description:"Architecture diagrams and cost estimates for AWS, Azure and GCP",source:"@site/docs/deployment/cluster/cluster.md",slug:"/deployment/cluster/cluster",permalink:"/docs/deployment/cluster/cluster",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/cluster/cluster.md",version:"current",sidebar_label:"Cluster information",sidebar:"deployment",previous:{title:"Adding more nodes",permalink:"/docs/deployment/components/nodes"},next:{title:"Troubleshooting",permalink:"/docs/deployment/troubleshooting/overview"}},i=[{value:"Kubernetes cluster",id:"kubernetes-cluster",children:[{value:"Diagram",id:"diagram",children:[]}]},{value:"Amazon Elastic Kubernetes Service (EKS)",id:"amazon-elastic-kubernetes-service-eks",children:[{value:"Diagram",id:"diagram-1",children:[]},{value:"Cost estimates",id:"cost-estimates",children:[]}]},{value:"Azure Kubernetes Service (AKS)",id:"azure-kubernetes-service-aks",children:[{value:"Diagram",id:"diagram-2",children:[]},{value:"Cost estimates",id:"cost-estimates-1",children:[]}]},{value:"Google Kubernetes Engine (GKE)",id:"google-kubernetes-engine-gke",children:[{value:"Diagram",id:"diagram-3",children:[]},{value:"Cost estimates",id:"cost-estimates-2",children:[]}]}],s={rightToc:i};function o(e){var t=e.components,b=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,b,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"kubernetes-cluster"},"Kubernetes cluster"),Object(c.b)("p",null,"Note that minimum supported Kubernetes version is 1.16.0. All the provided cloud provider CLI commands at minimum install Kubernetes 1.16.0."),Object(c.b)("h3",{id:"diagram"},"Diagram"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Diagram is simplified for illustration and does not include all resources"))),Object(c.b)("p",null,Object(c.b)("img",{src:a(214).default})),Object(c.b)("h2",{id:"amazon-elastic-kubernetes-service-eks"},"Amazon Elastic Kubernetes Service (EKS)"),Object(c.b)("h3",{id:"diagram-1"},"Diagram"),Object(c.b)("p",null,Object(c.b)("img",{src:a(215).default})),Object(c.b)("h3",{id:"cost-estimates"},"Cost estimates"),Object(c.b)("p",null,"This is the estimated cost for cluster with 1 managed master and 2 nodes."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Resource"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Cost per hour"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1 x EKS Cluster"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"$ 0.10")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2 x m5.xlarge"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"$ 0.384")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2 x 100GB EBS gp2"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"$ 0.027")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1 x Elastic Load Balancer (ELB)"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"$ 0.025")))),Object(c.b)("h2",{id:"azure-kubernetes-service-aks"},"Azure Kubernetes Service (AKS)"),Object(c.b)("h3",{id:"diagram-2"},"Diagram"),Object(c.b)("p",null,Object(c.b)("img",{src:a(216).default})),Object(c.b)("h3",{id:"cost-estimates-1"},"Cost estimates"),Object(c.b)("p",null,"This is the estimated cost for cluster with 1 managed master and 2 nodes."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Resource"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Cost per hour"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1 x AKS Cluster"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"$ 0.10")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2 x standard_d4s_v3"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"$ 0.384")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2 x 100GB Standard_LRS"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"$ 0.026")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1 x Azure Load Balancer"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"$ 0.025")))),Object(c.b)("h2",{id:"google-kubernetes-engine-gke"},"Google Kubernetes Engine (GKE)"),Object(c.b)("h3",{id:"diagram-3"},"Diagram"),Object(c.b)("p",null,Object(c.b)("img",{src:a(217).default})),Object(c.b)("h3",{id:"cost-estimates-2"},"Cost estimates"),Object(c.b)("p",null,"This is the estimated cost for cluster with 1 managed master and 2 nodes."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Resource"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Cost per hour"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1 x GKE Cluster"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"$ 0.10")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2 x n1-standard-4"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"$ 0.380")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2 x 100GB pd-standard"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"$ 0.046")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1 x TCP Load Balancer"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"$ 0.025")))))}o.isMDXComponent=!0}}]);