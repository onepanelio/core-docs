(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),r=(a(0),a(129)),i={title:"Getting started with image and video annotation",sidebar_label:"Getting started with image and video annotation",description:"Onepanel - Getting started with image and video annotation"},c={unversionedId:"reference/cvat/quickstart",id:"reference/cvat/quickstart",isDocsHomePage:!1,title:"Getting started with image and video annotation",description:"Onepanel - Getting started with image and video annotation",source:"@site/docs/reference/cvat/quickstart.md",slug:"/reference/cvat/quickstart",permalink:"/docs/reference/cvat/quickstart",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/cvat/quickstart.md",version:"current",sidebar_label:"Getting started with image and video annotation",sidebar:"reference",previous:{title:"Built-in data augmentation Workflows",permalink:"/docs/reference/workflows/data-augmentation"},next:{title:"Training with built-in model training Workflows",permalink:"/docs/reference/cvat/built-in-models"}},s=[{value:"Setting up CVAT",id:"setting-up-cvat",children:[]},{value:"Annotating frames in CVAT",id:"annotating-frames-in-cvat",children:[]}],b={rightToc:s};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"For this quick start, we'll be using OpenCV's ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/opencv/cvat"}),"Computer Vision Annotation Tool (CVAT)"),". You will be able to use an existing model to pre-annotate your images or videos and then continuously train and improve your model on new data."),Object(r.b)("p",null,"For this quick start, we'll setup CVAT on Onepanel, annotate some images, train a model on this images, and use this newly trained model for pre-annotation."),Object(r.b)("h2",{id:"setting-up-cvat"},"Setting up CVAT"),Object(r.b)("p",null,"Onepanel is fully integrated with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/opencv/cvat"}),"Computer Vision Annotation Tool (CVAT)"),", allowing you to annotate images and videos and then train models on the annotated data with a few clicks. You can then use these newly trained models to automatically pre-annotate additional data, iteratively improving your object detection or semantic segmentation models."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can also bring your own labeling tool as a reproducible template in Onepanel. See our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/workspaces/templates"}),"Workspace templates documentation")," for more information."))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to ",Object(r.b)("strong",{parentName:"p"},"Workspaces")," and click ",Object(r.b)("strong",{parentName:"p"},"Create Workspace"),"."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{alt:"Create Workspace",src:a(140).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select the CVAT template and enter a name for your Workspace."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{src:a(154).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select a node pool that Onepanel will use to provision a machine for running CVAT. CVAT requires at least 16GB of RAM."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{src:a(155).default})),Object(r.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Some providers have limits on how many volumes you can attach to a node. The default CVAT template in Onepanel requires 3 volumes, so make sure to pick a machine that can support at least that many volumes."))),Object(r.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can switch to a different node pool (for example one that supports GPUs) in a running Workspace at any time by clicking the Onepanel icon in the bottom right corner of your Workspace.")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Create and Run")," to launch your CVAT Workspace.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once CVAT is running, click ",Object(r.b)("strong",{parentName:"p"},"View"),"."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{src:a(156).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In CVAT, click ",Object(r.b)("strong",{parentName:"p"},"Create new task"),"."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{src:a(157).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Enter a name for your task and then under ",Object(r.b)("strong",{parentName:"p"},"Constructor"),", add your labels. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/opencv/cvat/blob/develop/cvat/apps/documentation/user_guide.md#creating-an-annotation-task"}),"CVAT's user guide")," for additional information on more advanced label configuration.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Assuming you have already uploaded your images or videos to your object storage, under "Select files", click ',Object(r.b)("strong",{parentName:"p"},"Connected file share"),"."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{src:a(142).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click the Onepanel icon in bottom right corner to bring up the Workspace panel.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Under ",Object(r.b)("strong",{parentName:"p"},"Workspace path"),", type in the path to use to sync your object storage data to, then browse to the folder containing your images or videos under ",Object(r.b)("strong",{parentName:"p"},"Object storage location"),"."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{src:a(158).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Sync to Workspace")," to sync your files to this Workspace. Once syncing is complete, click ",Object(r.b)("strong",{parentName:"p"},"Refresh")," and select your files."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{src:a(159).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Submit")," and then click the ",Object(r.b)("strong",{parentName:"p"},"Tasks")," menu item to go to the tasks list.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Open")," to open task details."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{src:a(138).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Job #1")," to go into CVAT to start annotating your data. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/opencv/cvat/blob/develop/cvat/apps/documentation/user_guide.md#interface-of-the-annotation-tool"}),"CVAT's user guide")," for more information on the annotation tool interface."))),Object(r.b)("h2",{id:"annotating-frames-in-cvat"},"Annotating frames in CVAT"),Object(r.b)("p",null,"Once you have created a new task, you can start annotating your data. CVAT supports points, box, polylines, polygons for annotation. "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Open")," to open task details."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{src:a(138).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Job #1")," to go into CVAT to start annotating your data. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/opencv/cvat/blob/develop/cvat/apps/documentation/user_guide.md#interface-of-the-annotation-tool"}),"CVAT's user guide")," for more information on the annotation tool interface."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Bounding boxes"),":\nSelect Box from the left sidebar and press N to start annotating once done, press N to finish annotation. Sometimes N will draw ",Object(r.b)("inlineCode",{parentName:"p"},"rectangle shape")," and sometimes it will draw ",Object(r.b)("inlineCode",{parentName:"p"},"rectangle track"),". In order to ensure you have the right one, draw one box by manually selecting Shape or Track from the UI. Once you manually select type of box from the UI, it will draw what you selected for the box everytime you press N.\n",Object(r.b)("img",{alt:"Annotation",src:a(288).default}))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Polygons"),":\nSimilarly, select polygons and follow same procedure for annotation.\n",Object(r.b)("img",{alt:"Select annotation",src:a(289).default}))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Press ",Object(r.b)("inlineCode",{parentName:"p"},"ctrl")," + ",Object(r.b)("inlineCode",{parentName:"p"},"s")," to save your task."),Object(r.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It is highly recommended that you dump your annotation periodically. In case of any failure, this can be used to recover the tasks."))))))}p.isMDXComponent=!0},129:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(a),d=n,u=l["".concat(i,".").concat(d)]||l[d]||m[d]||r;return a?o.a.createElement(u,c(c({ref:t},b),{},{components:a})):o.a.createElement(u,c({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<r;b++)i[b]=a[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},138:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cvat_open-f720c7c0bf600fa4cefeb1de339d730d.png"},140:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/create_workspaces_button_in_workspaces_page-046390af8c3ed7dad84879f45a461165.png"},142:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/quickstart-212157-3e40293055b7e602792a6d390ff29189.png"},154:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/quickstart-115738-445c393948e67e6ec4bc5b61082f7016.png"},155:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/quickstart-133251-1338ebabe71eced17da32a7924187ff1.png"},156:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/quickstart-173734-a730cfefda50e9301ae61a778b37a082.png"},157:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/quickstart-173841-24b22c32f4c5b6fe151c17b51a5e70ce.png"},158:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/quickstart-111117-8d8b68da9eb2c9678192c51a100d9a62.png"},159:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/quickstart-213616-5ec1b188f1600ccf3341f72149e9d504.png"},288:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cvat_draw_box-a5e348490b2f1dec38c09343aa063097.png"},289:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cvat_draw_polygon-2f7d783f3201cd8a7c8a9e37b9b985a9.png"}}]);