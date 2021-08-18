(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),i=(n(0),n(127));const a={title:"Using Git and browsing GitHub in JupyterLab",sidebar_label:"Using Git and browsing GitHub",description:"Onepanel - Using Git and browsing GitHub in JupyterLab"},o={unversionedId:"reference/jupyterlab/git",id:"reference/jupyterlab/git",isDocsHomePage:!1,title:"Using Git and browsing GitHub in JupyterLab",description:"Onepanel - Using Git and browsing GitHub in JupyterLab",source:"@site/docs/reference/jupyterlab/git.md",slug:"/reference/jupyterlab/git",permalink:"/docs/reference/jupyterlab/git",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/jupyterlab/git.md",version:"current",sidebar_label:"Using Git and browsing GitHub",sidebar:"reference",previous:{title:"JupyterLab overview",permalink:"/docs/reference/jupyterlab/overview"},next:{title:"Using TensorBoard in JupyterLab",permalink:"/docs/reference/jupyterlab/tensorboard"}},c=[{value:"Browsing GitHub",id:"browsing-github",children:[]},{value:"Using Git",id:"using-git",children:[{value:"Cloning",id:"cloning",children:[]},{value:"Other Git actions",id:"other-git-actions",children:[]}]}],u={rightToc:c};function b({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Onepanel's JupyterLab Workspace comes pre-installed with extensions for Git and GitHub so you can easily interact with both."),Object(i.b)("h2",{id:"browsing-github"},"Browsing GitHub"),Object(i.b)("p",null,"You can easily browse and execute notebooks from any public GitHub repository without cloning the repository. Just click the GitHub icon and type in the organization and name of the repository."),Object(i.b)("p",null,Object(i.b)("img",{src:n(279).default})),Object(i.b)("h2",{id:"using-git"},"Using Git"),Object(i.b)("h3",{id:"cloning"},"Cloning"),Object(i.b)("p",null,"You can clone a Git repository by either using the JupyterLab Terminal:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# Make sure you are in the /data directory\ncd /data\n\n# Clone repository\ngit clone https://github.com/tensorflow/tensorboard\n")),Object(i.b)("p",null,"Or from the JupyterLab UI:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click the Git icon."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:n(280).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Type in the repository URL to clone."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:n(281).default})))),Object(i.b)("h3",{id:"other-git-actions"},"Other Git actions"),Object(i.b)("p",null,"Once you clone a repository, you can either use the JupyterLab terminal or the JupyterLab UI to pull, commit, push and view Git history."),Object(i.b)("p",null,Object(i.b)("img",{src:n(282).default})))}b.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),l=s(n),d=r,f=l["".concat(o,".").concat(d)]||l[d]||p[d]||a;return n?i.a.createElement(f,c(c({ref:t},b),{},{components:n})):i.a.createElement(f,c({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<a;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},279:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/git-155210-509eaa1dc9ccb262821dfa85f6a20d86.png"},280:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/debugging-153602-c8aec7341f1f55c7274e29baa60fc664.png"},281:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/git-153912-51d991a3ba4b57213b79e99114072096.png"},282:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/git-154449-cdf386f139e3b532013f82bf9180ed6c.png"}}]);