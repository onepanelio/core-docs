(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(2),a=(n(0),n(149));const i={title:"Semi-autmatic annotation with CVAT",sidebar_label:"Automatic annotation"},r={id:"getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation",title:"Semi-autmatic annotation with CVAT",description:"Semi-automatic annotation on CVAT",source:"@site/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation.md",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation.md",sidebar_label:"Automatic annotation",sidebar:"gettingStarted",previous:{title:"Quick start",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_quick_guide"},next:{title:"Creating annotation models on CVAT",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_annotation_model"}},l=[{value:"Semi-automatic annotation on CVAT",id:"semi-automatic-annotation-on-cvat",children:[]},{value:"Uploading your model on CVAT",id:"uploading-your-model-on-cvat",children:[]},{value:"Semi-automatic annotation of bounding boxes",id:"semi-automatic-annotation-of-bounding-boxes",children:[]},{value:"Semi-automatic annotation of polygon masks (segmentation)",id:"semi-automatic-annotation-of-polygon-masks-segmentation",children:[]},{value:"Hardware requirements",id:"hardware-requirements",children:[]}],c={rightToc:l};function s({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"semi-automatic-annotation-on-cvat"},"Semi-automatic annotation on CVAT"),Object(a.b)("p",null,"You can use your TensorFlow or OpenVINO model to pre-annotate your data. This can save you a lot of time since you don't have to annotate images from scratch. On Onepanel, you can leverage these features to pre-annotate your bounding boxes or polygon masks. You can also use Object Tracking to track objects in a sequence of frames."),Object(a.b)("h2",{id:"uploading-your-model-on-cvat"},"Uploading your model on CVAT"),Object(a.b)("p",null,"Before using any type of semi-automatic annotation, you will need to upload your model on CVAT Model Manager by clicking on Models. To upload your model, go to your CVAT dashboard and click on Models. A pop up window will appear where you can give a name to your model, select the source of your files (local or cloud), and select files. For TF Annotation and Segmentation, you will need two files- model and classes.csv. For TF Annotation, the model should be Tensorflow Frozen Graph (.pb). For Segmentation, it should be Keras model (.h5)."),Object(a.b)("h2",{id:"semi-automatic-annotation-of-bounding-boxes"},"Semi-automatic annotation of bounding boxes"),Object(a.b)("p",null,"The first step is to upload your model on CVAT or use our default model which are available on CVAT. Now, find Actions button for the task on which you want to run pre-annotation. Click on Automatic Annotation, a pop up will appear where you can select the model you want to use for pre-annotation. Once you select the model, an automatic class mapping will appear, you can modify it if you want. Once done, click on Start. Once it is done, you can go into your task and check out the pre-annotation."),Object(a.b)("h2",{id:"semi-automatic-annotation-of-polygon-masks-segmentation"},"Semi-automatic annotation of polygon masks (segmentation)"),Object(a.b)("p",null,"For segmentation, you will have to attach the model to your workspace. Click on Add Dataset, search for maskrcnn-default and click on Add. Once done, please follow above procedure to upload it on your Model Manager. Now, on your CVAT dashboard, go to a task where you would like to run this pre-annotation model on, find ",Object(a.b)("inlineCode",{parentName:"p"},"Run Auto Segmentation")," button and click on it. Similar to the above, a list of models will appear. Select the model and hit Start. Your pre-annotation will be started.\nPlease note that the Mask RCNN model is a compute-intensive model. It would require at least a single GPU machine."),Object(a.b)("h2",{id:"hardware-requirements"},"Hardware requirements"),Object(a.b)("p",null,"For training a model( Create New Annotation Model), you can choose any GPU machine from the list. All of our models will work on any of the GPU machine. But if you want to train it faster, then we suggest you select machines with multiple GPUs (i.e 8 V100)."),Object(a.b)("p",null,"For pre-annotation, you can use a CPU machine (32gb or above) for TF Annotation (bounding box). But It will be considerably slower. So, we suggest you choose a GPU machine for pre-annotation. "),Object(a.b)("p",null,"For the pre-annotation of polygons, you have to use a GPU machine since the Mask RCNN model is compute-intensive."),Object(a.b)("p",null,"Please find the table bewlo which details machine type with the corresponding runtime to perform pre-annotations.\nFor this test, we used a task with ",Object(a.b)("strong",{parentName:"p"},"3550 images (2GB)")," to perform pre-annotations."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Machine \xa0 \xa0"),Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Time \xa0 \xa0"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"K80 \xa0 \xa0 \xa0 \xa0"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"160 minutes \xa0")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"V100 \xa0 \xa0 \xa0 \xa0"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"80 minutes")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"V100 x 4 \xa0 \xa0"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"21 minutes")))),Object(a.b)("p",null,"Run time depends on factors such as ",Object(a.b)("strong",{parentName:"p"},"model, number of images, type of machine.")),Object(a.b)("p",null,"The above data was generated for ssd-mobilenet-v2 model which is the model we suggest to use in normal circumstances. If you have complex annotations and want to use faster-rcnn based model, then it might take slightly more time. But note that it won\u2019t significantly alter the data presented above."),Object(a.b)("p",null,"The other factor is image compression. By default, CVAT compresses images by 50%. We did some testing to find out if we use original images (without compression) then how much time it will take."),Object(a.b)("p",null,"It turns out that if you use the original images without compression, your pre-annotation time will be increased by ~5-6% of that of 50% compressed images. So in the above table, if you use images without compression and use a V100, it will take 84 minutes instead of 80 minutes. Please note that this compression does not affect annotation in any way."),Object(a.b)("p",null,"Note that this data was calculated on 3550 images (1280 x 960)(total size=2GB), so if your data size is different you can easily extrapolate the data from the above table. For example, if you have 10gb of images then ideally it will take around 400 minutes on a V100 GPU. "),Object(a.b)("p",null,"If the resolution of your images is slightly different, then it won\u2019t affect run time significantly. In fact, if the difference is ~200 pixels then it won\u2019t change at all, generally."),Object(a.b)("p",null,"If you still have any questions, feel free to reach out to us at ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"mailto:info@onepanel.io"}),"info@onepanel.io")))}s.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,b=m["".concat(r,".").concat(p)]||m[p]||d[p]||i;return n?a.a.createElement(b,l(l({ref:t},s),{},{components:n})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);