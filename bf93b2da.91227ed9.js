(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return l}));var n=a(2),o=a(6),i=(a(0),a(129)),r={title:"Using trained models for automatic annotation",sidebar_label:"Using trained models for automatic annotation",description:"Onepanel - Using trained models for automatic annotation"},c={unversionedId:"reference/cvat/automatic-annotation",id:"reference/cvat/automatic-annotation",isDocsHomePage:!1,title:"Using trained models for automatic annotation",description:"Onepanel - Using trained models for automatic annotation",source:"@site/docs/reference/cvat/automatic-annotation.md",slug:"/reference/cvat/automatic-annotation",permalink:"/docs/reference/cvat/automatic-annotation",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/cvat/automatic-annotation.md",version:"current",sidebar_label:"Using trained models for automatic annotation",sidebar:"reference",previous:{title:"Training with built-in model training Workflows",permalink:"/docs/reference/cvat/built-in-models"},next:{title:"Adding custom models and training Workflows in CVAT",permalink:"/docs/reference/cvat/custom-models"}},b=[{value:"Uploading your trained model into CVAT Workspace",id:"uploading-your-trained-model-into-cvat-workspace",children:[]},{value:"Running automatic annotation in CVAT",id:"running-automatic-annotation-in-cvat",children:[]},{value:"Machine types and annotation time",id:"machine-types-and-annotation-time",children:[]}],s={rightToc:b};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can use your trained models to automatically pre-annotate your data. This can save you a lot of time since you don't have to annotate images from scratch. On Onepanel, you can leverage these features to pre-annotate bounding boxes or polygon masks."),Object(i.b)("h2",{id:"uploading-your-trained-model-into-cvat-workspace"},"Uploading your trained model into CVAT Workspace"),Object(i.b)("p",null,"First, you will need to upload your trained model into CVAT."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"First, navigate to the Workflow that you used to train your model. You can go to ",Object(i.b)("strong",{parentName:"p"},"Workflows")," and then filter by ",Object(i.b)("inlineCode",{parentName:"p"},"workspace-uid: <your-cvat-workspace-uid>"),"."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:a(270).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on the ",Object(i.b)("strong",{parentName:"p"},"train-model")," task and then click ",Object(i.b)("strong",{parentName:"p"},"Outputs")," in the task panel on the right hand side."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:a(271).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the file browser, click on ",Object(i.b)("strong",{parentName:"p"},"output")," > ",Object(i.b)("strong",{parentName:"p"},"model")," and then click the copy icon next to the location."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:a(272).default})),Object(i.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The screenshot above is showing MaskRCNN model output, TensorFlow Object Detection output has a few more files and the model name is ",Object(i.b)("inlineCode",{parentName:"p"},"frozen_inference_graph.pb"),".")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Return to your CVAT Workspace and click on ",Object(i.b)("strong",{parentName:"p"},"Models")," in the top menu and then click on ",Object(i.b)("strong",{parentName:"p"},"Create new model")," button.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on ",Object(i.b)("strong",{parentName:"p"},"Connected file share"),"."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:a(142).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click the Onepanel icon in bottom right corner to bring up the Workspace panel. Under ",Object(i.b)("strong",{parentName:"p"},"Sync files"),", in the ",Object(i.b)("strong",{parentName:"p"},"Workspace path")," field, type in the path you want to sync your model data into, and then paste the path you copied above into ",Object(i.b)("strong",{parentName:"p"},"Object storage location")," field."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:a(273).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Sync to Workspace"),", you should see a log showing data being synced. Once complete, close the ",Object(i.b)("strong",{parentName:"p"},"Logs")," panel.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Refresh")," under ",Object(i.b)("strong",{parentName:"p"},"Connected file share"),"."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:a(274).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Expand the file tree to navigate to your model folder and select ",Object(i.b)("strong",{parentName:"p"},"classes.csv")," and ",Object(i.b)("strong",{parentName:"p"},"onepanel_trained_model.h5")," (or ",Object(i.b)("strong",{parentName:"p"},"frozen_inference_graph.pb")," if using TFOD)."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:a(275).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Enter a name for your model and click ",Object(i.b)("strong",{parentName:"p"},"Submit"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Once the model is uploaded, click ",Object(i.b)("strong",{parentName:"p"},"Models")," to verify that it's there."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:a(276).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Follow the steps in the next section below to use this model for automatic annotation."))),Object(i.b)("h2",{id:"running-automatic-annotation-in-cvat"},"Running automatic annotation in CVAT"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make sure you have uploaded your trained model as ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#uploading-your-trained-model-into-cvat-workspace"}),"outlined above"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"(Optional but ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#machine-types-and-annotation-time"}),"recommended"),") If the Workspace is on a CPU machine, switch to a GPU machine by clicking the Onepanel icon and choosing a GPU node pool from the ",Object(i.b)("strong",{parentName:"p"},"Node pool")," dropdown and click ",Object(i.b)("strong",{parentName:"p"},"Update"),". Once the Workspace is ready, continue to next step."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:a(277).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Automatic annotation")," under ",Object(i.b)("strong",{parentName:"p"},"Actions")," menu for the task you want to annotate. "),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:a(278).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the model you created earlier and make sure the class (label) mappings are correct."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:a(279).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Submit")," to start the annotation process."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:a(280).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Once complete, you can click on ",Object(i.b)("strong",{parentName:"p"},"Open")," and click ",Object(i.b)("strong",{parentName:"p"},"Job #")," to view annotations."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:a(281).default})),Object(i.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If for some reason you don't see any annotations, refresh the page and click ",Object(i.b)("strong",{parentName:"p"},"Open")," again."))))),Object(i.b)("h2",{id:"machine-types-and-annotation-time"},"Machine types and annotation time"),Object(i.b)("p",null,"See the table below which details machine type with the corresponding time to complete automatic annotation. For this test, we used a task with ",Object(i.b)("strong",{parentName:"p"},"3550 images (2GB)"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Machine \xa0 \xa0"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Time \xa0 \xa0"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 x K80 \xa0 \xa0"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"160 minutes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 x V100 \xa0 \xa0"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"80 minutes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4 x V100 \xa0 \xa0"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"21 minutes")))),Object(i.b)("p",null,"The above data was generated for ",Object(i.b)("inlineCode",{parentName:"p"},"ssd-mobilenet-v2")," model which is the model we suggest to use in normal circumstances. If you have complex annotations and want to use faster-rcnn based model, then it might take slightly more time but it won\u2019t significantly alter the data presented above."),Object(i.b)("p",null,"The other factor is image compression. By default, CVAT compresses images by 50%. If you use the original images without compression, your automatic annotation time will be increased by ~5-6% of that of 50% compressed images. So in the above table, if you use images without compression and use a V100, it will take 84 minutes instead of 80 minutes."),Object(i.b)("p",null,"If your data size is different from above, then you can easily extrapolate the annotation time from the above table."))}l.isMDXComponent=!0},129:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=l(a),d=n,u=p["".concat(r,".").concat(d)]||p[d]||m[d]||i;return a?o.a.createElement(u,c(c({ref:t},s),{},{components:a})):o.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<i;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},142:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/quickstart-212157-3e40293055b7e602792a6d390ff29189.png"},270:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/automatic-annotation-131131-98d3609cd202506ecb132cc95dfa49e6.png"},271:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/automatic-annotation-130955-42eb8bdde3ca044f26e6d0522e4a1cfe.png"},272:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/automatic-annotation-131405-d4b10ea73d5f133aa2616df1acdaed08.png"},273:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/automatic-annotation-142205-5d3fc6241a33a142e9610595d71e3257.png"},274:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/automatic-annotation-142859-d3bc9dd9a82fb5280343a91064830bbc.png"},275:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/automatic-annotation-143127-fb374f3c5a4d8f8d51b603d7dbce9455.png"},276:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/automatic-annotation-143520-d201d476f7c67da358b7e114c8051974.png"},277:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/automatic-annotation-155820-18a604e6714505421a9a2c31c1705788.png"},278:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/automatic-annotation-154827-9d480a261355b8e11d437fb4e6c54c84.png"},279:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/automatic-annotation-155007-9ccb87ac7229e258bf67b4fe6eb5a165.png"},280:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/automatic-annotation-162019-f5b72208f5d17745540e0b738448b1ba.png"},281:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/automatic-annotation-162205-e1b16d327284d271c683b2174c7b1977.png"}}]);