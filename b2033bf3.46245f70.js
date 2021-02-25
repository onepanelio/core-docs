(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var o=n(2),r=(n(0),n(125));const a={title:"Built-in model training Workflows",sidebar_label:"Model training",description:"Onepanel - Built-in model training Workflows"},s={unversionedId:"reference/workflows/training",id:"reference/workflows/training",isDocsHomePage:!1,title:"Built-in model training Workflows",description:"Onepanel - Built-in model training Workflows",source:"@site/docs/reference/workflows/training.md",slug:"/reference/workflows/training",permalink:"/docs/reference/workflows/training",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/workflows/training.md",version:"current",sidebar_label:"Model training",sidebar:"reference",previous:{title:"Troubleshooting Workflows",permalink:"/docs/reference/workflows/troubleshooting"},next:{title:"Built-in data augmentation Workflows",permalink:"/docs/reference/workflows/data-augmentation"}},i=[{value:"TensorFlow Object Detection",id:"tensorflow-object-detection",children:[{value:"TFOD hyperparameters",id:"tfod-hyperparameters",children:[]},{value:"Choosing the right model",id:"choosing-the-right-model",children:[]}]},{value:"MaskRCNN",id:"maskrcnn",children:[{value:"MaskRCNN hyperparameters",id:"maskrcnn-hyperparameters",children:[]}]}],c={rightToc:i};function l({components:e,...t}){return Object(r.b)("wrapper",Object(o.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Onepanel supports the following built-in models for object detection and semantic segmentation:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"TensorFlow Object Detection API models for object detection."),Object(r.b)("li",{parentName:"ul"},"MaskRCNN model for semantic segmentation.")),Object(r.b)("p",null,"These models are available as training Workflows under ",Object(r.b)("strong",{parentName:"p"},"Workflows")," > ",Object(r.b)("strong",{parentName:"p"},"Workflow Templates")," and can be ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reference/cvat/built-in-models"}),"executed from any CVAT Workspace")," to train on your annotated data."),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reference/workflows/tensorboard#launching-tensorboard"}),"TensorBoard")," is also fully integrated and along with real-time logs can be accessed while your model is training."),Object(r.b)("h2",{id:"tensorflow-object-detection"},"TensorFlow Object Detection"),Object(r.b)("p",null,"You can use any of the supported TensorFlow Object Detection API models to train models on your data. Following is an overview on how to choose one model over another based on your needs. Some models are faster than others, whereas some are more accurate than others."),Object(r.b)("p",null,Object(r.b)("img",{src:n(248).default})),Object(r.b)("h3",{id:"tfod-hyperparameters"},"TFOD hyperparameters"),Object(r.b)("p",null,"You can specify arguments for all the available models in TFOD in the ",Object(r.b)("inlineCode",{parentName:"p"},"Hyperparameters")," field in YAML format."),Object(r.b)("p",null,"Here's an example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"num_steps: 10000               #  Number of steps. If left empty, Onepanel will pick the recommended defaults for that model.\nbatch_size: 1                  #  Batch size for the training\ninitial_learning_rate: 0.0003  #  Initial learning rate for the model. We recommend you do not change this.\nnum_clones: 1                  #  Number of GPUs to use for training. Change to number of GPUs for your machine.\n")),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/onepanelio/templates/blob/release-v0.18.0/workflows/tf-object-detection-training/defaults.json"}),"this file")," for all available hyperparameters for each TFOD model. Also see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/configuring_jobs.md#picking-model-parameters"}),"picking model parameters")),Object(r.b)("h3",{id:"choosing-the-right-model"},"Choosing the right model"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"We currently support several faster-rcnn models. All of these models are similar except that of the backbone used for the feature extraction. The backbones used are, in increasing order of complexity (i.e more layers), ResNet50, ResNet101, InceptionResNetV2. As the model complexity increases the computation requirement will also increase. If you have very complicated data (i.e hundreds of annotations in one image), then it is recommended that you choose complex model (i.e InceptionResNetV2).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Faster-rcnn models are generally more accurate than ssd models. However, sometimes you are better off using ssd models if your data is easy to learn (i.e 1 or 2 bounding box per image)."))),Object(r.b)("h4",{id:"frcnn-nas-coco"},"frcnn-nas-coco:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you are using ",Object(r.b)("inlineCode",{parentName:"li"},"frcnn-nas-coco"),", then choose a machine with at least 2 GPUs as this model requires more memory. A machine with 1 GPU will throw an error.")),Object(r.b)("p",null,"This is a type of faster-rcnn model with NAS backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2)."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Defaults")),": batch_size: 1, learning_rate: 0.0003, epochs=10000"),Object(r.b)("h4",{id:"frcnn-res101-coco"},"frcnn-res101-coco:"),Object(r.b)("p",null,"This is a type of faster-rcnn model with ResNet101 backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Defaults")),": batch_size: 1, learning_rate: 0.0003, epochs=10000"),Object(r.b)("h4",{id:"frcnn-res101-lowp"},"frcnn-res101-lowp"),Object(r.b)("p",null,"This is a type of faster-rcnn model with ResNet101 backbone with low number of proposals. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). If you are looking for more complex and accurate model then check out frcnn-res101-coco or frcnn-inc-resv2-atr-coco."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Defaults")),": batch_size: 1, learning_rate: 0.0003, epochs=10000"),Object(r.b)("h4",{id:"frcnn-res50-coco"},"frcnn-res50-coco"),Object(r.b)("p",null,"This is a type of faster-rcnn model with ResNet50 backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). If you are looking for more complex and accurate model then check out frcnn-res101-coco or frcnn-inc-resv2-atr-coco."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Defaults")),": batch_size: 1, learning_rate: 0.0003, epochs=10000"),Object(r.b)("h4",{id:"ssd-mobilenet-v2-coco"},"ssd-mobilenet-v2-coco"),Object(r.b)("p",null,"SSD-based networks such as ",Object(r.b)("inlineCode",{parentName:"p"},"ssd-mobilenet-v2")," are faster than faster-rcnn based models. However, they are not as accurate as faster-rcnn based models. This model is generally recommended since its accurate and fast enough. If you don't know much about your data or the complexity of your data, then we recommend you go with this model."),Object(r.b)("p",null,"You will find the pre-trained model and config file for ssd-mobilenetv2 model trained on COCO dataset."),Object(r.b)("p",null,"This model is a good place to start if you don't have any specific model in mind. If you are data is very complicated (i.e many annotations per image) then you should prefer faster-rcnn models over ssd."),Object(r.b)("p",null,"Depending upon your data, you can set epochs to train your model. There is no standard value which can work for all datasets. You generally have to try different number of epochs to get the best model. Ideally, you do so by monitoring loss of your model while training. But if you are looking for a recommendation. Then, we recommend you set epochs as follows: (number of images / batch_size (default: 24)) * 1000. For instance, if you have 100 images, then your epochs will be 4000 (rounded). Note that the model will be trained using a pre-trained model, so you don't need to train as long as you would have to when not using the pre-trained model."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Defaults")),": batch_size: 24, learning_rate: 0.004, epochs=10000"),Object(r.b)("p",null,"Note that same instructions apply for ",Object(r.b)("strong",{parentName:"p"},"ssd-mobilenet-v1")," and ",Object(r.b)("strong",{parentName:"p"},"ssd-mobilenet-lite"),". The only difference is the backbone model (i.e mobilenet v1) that they use."),Object(r.b)("h2",{id:"maskrcnn"},"MaskRCNN"),Object(r.b)("p",null,"MaskRCNN is a popular model for segmentation tasks. We use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/matterport/Mask_RCNN"}),"this")," implementation of MaskRCNN for training and inference."),Object(r.b)("p",null,"The process to train a Mask-RCNN model on CVAT is similar to the above process except that you need to select Mask-RCNN after clicking on Create Annotation Model."),Object(r.b)("p",null,Object(r.b)("img",{src:n(139).default})),Object(r.b)("h3",{id:"maskrcnn-hyperparameters"},"MaskRCNN hyperparameters"),Object(r.b)("p",null,"Even though you don't need to enter any other parameters to start the training of Mask-RCNN, it is recommended that you pass correct epochs according your data. Mask-RCNN is a very deep model which takes time to train and also to get enough accuracy."),Object(r.b)("p",null,"In addition to ",Object(r.b)("inlineCode",{parentName:"p"},"num_steps"),", you can set epochs for three different stages of the model. These parts are called ",Object(r.b)("inlineCode",{parentName:"p"},"stage_1"),", ",Object(r.b)("inlineCode",{parentName:"p"},"stage_2")," and ",Object(r.b)("inlineCode",{parentName:"p"},"stage_3")," and their number of epochs can be set as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"stage_1_epochs: 1    #  Epochs for network heads\nstage_2_epochs: 1    #  Epochs for finetune layers\nstage_3_epochs: 1    #  Epochs for all layers\nnum_steps: 1000      #  Num steps per epoch\n")),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"stage_1"),", the model learns to classify from extracted features. In ",Object(r.b)("inlineCode",{parentName:"p"},"stage_2"),", the model learns to better extract features. In ",Object(r.b)("inlineCode",{parentName:"p"},"stage_3"),", the whole model changes to adapt to new data."),Object(r.b)("p",null,"If you are training images that are similar to the ones in the COCO dataset, it is best to train more epochs in ",Object(r.b)("inlineCode",{parentName:"p"},"stage_1"),", otherwise it's best to train more epochs in ",Object(r.b)("inlineCode",{parentName:"p"},"stage_2")," where the model is learning to better extract features."),Object(r.b)("p",null,"If you have ~1000 images, then you don't have to change any parameters."))}l.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(n),p=o,u=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return n?r.a.createElement(u,i(i({ref:t},l),{},{components:n})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},139:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/built-in-models-153544-be0bf4fa9c62c48ee517e9c8d840cccd.png"},248:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/built-in-models-160405-6224ff15e804186be0f9ee2dceb06199.png"}}]);