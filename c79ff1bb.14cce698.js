(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=b(a),p=n,d=m["".concat(r,".").concat(p)]||m[p]||u[p]||i;return a?o.a.createElement(d,c(c({ref:t},s),{},{components:a})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<i;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},146:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/upload_model-558b35d2047ea4455ebf35a1e4add752.PNG"},147:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/class_mapping-6b1522e59588573a2f253fc3d5bd115d.png"},148:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cvat_automatic_annotation_running-fd66040849fcf0e0c733dbe7cf580d45.png"},149:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cvat_inference_output-5edbe6b6eaf80718eb9b2fc1a767b0d0.png"},236:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/upload_model_after-f03b04c9e4f592cee86fc96ac8b7b150.PNG"},237:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cvat_select_automatic_annotation-83f8caebacf35761b7fd91bbd2e93e2d.png"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),o=a(6),i=(a(0),a(113)),r={title:"Semi-automatic annotation with CVAT",sidebar_label:"Automatic annotation",description:"Onepanel - vision AI automatic annotation"},c={unversionedId:"getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation",id:"getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation",isDocsHomePage:!1,title:"Semi-automatic annotation with CVAT",description:"Onepanel - vision AI automatic annotation",source:"@site/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation.md",slug:"/getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation.md",version:"current",sidebar_label:"Automatic annotation",sidebar:"reference",previous:{title:"Creating annotation models on CVAT",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_annotation_model"},next:{title:"Adding a custom deep learning model Workflow to CVAT",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/adding_custom_model"}},l=[{value:"Uploading your model on CVAT",id:"uploading-your-model-on-cvat",children:[]},{value:"Running pre-annotation in CVAT",id:"running-pre-annotation-in-cvat",children:[]},{value:"Hardware requirements",id:"hardware-requirements",children:[]}],s={rightToc:l};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can use your TensorFlow models for Object Detection and Semantic Segmentation to pre-annotate your data. This can save you a lot of time since you don't have to annotate images from scratch. On Onepanel, you can leverage these features to pre-annotate your bounding boxes or polygon masks. You can also use Object Tracking to track objects in a sequence of frames."),Object(i.b)("p",null,"This page provides detailed information about pre-annotation in CVAT."),Object(i.b)("h2",{id:"uploading-your-model-on-cvat"},"Uploading your model on CVAT"),Object(i.b)("p",null,"Before using any type of semi-automatic annotation, you will need to upload your model to CVAT Model Manager by clicking on ",Object(i.b)("strong",{parentName:"p"},"Models"),". "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To upload a model, click on ",Object(i.b)("strong",{parentName:"p"},"Models"),", and then click on ",Object(i.b)("strong",{parentName:"p"},"Create new model"),". ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on select files and upload your model (",Object(i.b)("inlineCode",{parentName:"p"},".pb")," and ",Object(i.b)("inlineCode",{parentName:"p"},".csv")," for TensorFlow Object Detection). Hit submit to upload the model. "),Object(i.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For TF Object Detection API and MaskRCNN, you will need two files- ",Object(i.b)("strong",{parentName:"p"},"model")," and ",Object(i.b)("strong",{parentName:"p"},"classes.csv"),". For TF Object Detection API, the model should be Tensorflow Frozen Graph (",Object(i.b)("inlineCode",{parentName:"p"},".pb"),"). For MaskRCNN, it should be Keras model (",Object(i.b)("inlineCode",{parentName:"p"},".h5"),")."))),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{alt:"Model Manager",src:a(146).default})),Object(i.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Since Onepanel automatically syncs data from cloud storage to local directory. You can click on ",Object(i.b)("strong",{parentName:"p"},"Connected file share")," to use models from S3. You will find trained models in ",Object(i.b)("inlineCode",{parentName:"p"},"root -> output -> <cvat-task-name> -> <workflow-name> -> <workflow-execution-name>"),". For TensorFlow Object Detection API, there will be one more folder before ",Object(i.b)("inlineCode",{parentName:"p"},"workflow-execution-time")," based on the model you trained (i.e ",Object(i.b)("inlineCode",{parentName:"p"},"frcnn-res50-coco"),").")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on ",Object(i.b)("strong",{parentName:"p"},"Models")," again and you will find your model in the list. You can also use files from ",Object(i.b)("inlineCode",{parentName:"p"},"Connected file share")," just like creating new tasks."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{alt:"Uploaded Models",src:a(236).default})))),Object(i.b)("h2",{id:"running-pre-annotation-in-cvat"},"Running pre-annotation in CVAT"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The first step is to upload your model on CVAT or use our default models which are available on CVAT. ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on ",Object(i.b)("strong",{parentName:"p"},"Automatic annotation")," under Actions menu. "),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{alt:"Click Actions",src:a(237).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the model for pre-annotation. By default, you can use RCNN Object Detector (from Tensorflow Object Detection API) or  Mask RCNN Object Detector for semantic segmentation.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you selected any models other than default ones then you will asked to do class mapping. CVAT will automatically map class from task to model's class."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{alt:"Class mapping",src:a(147).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on ",Object(i.b)("strong",{parentName:"p"},"Submit")," to start pre-annotation. Once it's done, you can click on ",Object(i.b)("strong",{parentName:"p"},"Open")," to access the annotation.\n",Object(i.b)("img",{alt:"Automatic Annotation Running",src:a(148).default}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Here is a output from default object detection model."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{alt:"Inference Output",src:a(149).default})))),Object(i.b)("h2",{id:"hardware-requirements"},"Hardware requirements"),Object(i.b)("p",null,"For training a model(Execute training Workflow), you can choose any GPU machine from the list. All of our models will work on any of the GPU machine. But if you want to train it faster, then we suggest you select machines with multiple GPUs (i.e 8 V100)."),Object(i.b)("p",null,"See the table below which details machine type with the corresponding runtime to perform pre-annotations.\nFor this test, we used a task with ",Object(i.b)("strong",{parentName:"p"},"3550 images (2GB)")," to perform pre-annotations."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Machine \xa0 \xa0"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Time \xa0 \xa0"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"K80 \xa0 \xa0 \xa0 \xa0"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"160 minutes \xa0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"V100 \xa0 \xa0 \xa0 \xa0"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"80 minutes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"V100 x 4 \xa0 \xa0"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"21 minutes")))),Object(i.b)("p",null,"Run time depends on factors such as ",Object(i.b)("strong",{parentName:"p"},"model, number of images, type of machine.")),Object(i.b)("p",null,"The above data was generated for ssd-mobilenet-v2 model which is the model we suggest to use in normal circumstances. If you have complex annotations and want to use faster-rcnn based model, then it might take slightly more time. But note that it won\u2019t significantly alter the data presented above."),Object(i.b)("p",null,"The other factor is image compression. By default, CVAT compresses images by 50%. We did some testing to find out if we use original images (without compression) then how much time it will take."),Object(i.b)("p",null,"It turns out that if you use the original images without compression, your pre-annotation time will be increased by ~5-6% of that of 50% compressed images. So in the above table, if you use images without compression and use a V100, it will take 84 minutes instead of 80 minutes. Note that this compression does not affect annotation in any way."),Object(i.b)("p",null,"Note that this data was calculated on 3550 images (1280 x 960)(total size=2GB), so if your data size is different you can easily extrapolate the data from the above table. For example, if you have 10gb of images then ideally it will take around 400 minutes on a V100 GPU. "),Object(i.b)("p",null,"If the resolution of your images is slightly different, then it won\u2019t affect run time significantly. In fact, if the difference is ~200 pixels then it won\u2019t change at all, generally."),Object(i.b)("p",null,"If you still have any questions, feel free to reach out to us at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:info@onepanel.io"}),"info@onepanel.io")))}b.isMDXComponent=!0}}]);