(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return A}));var o=n(2),a=n(6),r=(n(0),n(128)),c={title:"Built-in model training Workflows",sidebar_label:"Model training",description:"Onepanel - Built-in model training Workflows"},i={unversionedId:"reference/workflows/training",id:"reference/workflows/training",isDocsHomePage:!1,title:"Built-in model training Workflows",description:"Onepanel - Built-in model training Workflows",source:"@site/docs/reference/workflows/training.md",slug:"/reference/workflows/training",permalink:"/docs/reference/workflows/training",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/workflows/training.md",version:"current",sidebar_label:"Model training",sidebar:"reference",previous:{title:"Create with Python SDK",permalink:"/docs/reference/inference-apis/create-with-python-sdk"},next:{title:"Built-in data augmentation Workflows",permalink:"/docs/reference/workflows/data-augmentation"}},s=[{value:"TensorFlow Object Detection",id:"tensorflow-object-detection",children:[{value:"TFOD hyperparameters",id:"tfod-hyperparameters",children:[]},{value:"Choosing the right model",id:"choosing-the-right-model",children:[]}]},{value:"MaskRCNN",id:"maskrcnn",children:[{value:"MaskRCNN hyperparameters",id:"maskrcnn-hyperparameters",children:[]}]},{value:"Fine-tuning and checkpoints",id:"fine-tuning-and-checkpoints",children:[]}],l={rightToc:s};function A(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Onepanel supports the following built-in models for object detection and semantic segmentation:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"TensorFlow Object Detection API models for object detection."),Object(r.b)("li",{parentName:"ul"},"MaskRCNN model for semantic segmentation.")),Object(r.b)("p",null,"These models are available as training Workflows under ",Object(r.b)("strong",{parentName:"p"},"Workflows")," > ",Object(r.b)("strong",{parentName:"p"},"Workflow Templates")," and can be ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reference/cvat/built-in-models"}),"executed from any CVAT Workspace")," to train on your annotated data."),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/reference/workflows/tensorboard#launching-tensorboard"}),"TensorBoard")," is also fully integrated and along with real-time logs can be accessed while your model is training."),Object(r.b)("h2",{id:"tensorflow-object-detection"},"TensorFlow Object Detection"),Object(r.b)("p",null,"You can use any of the supported TensorFlow Object Detection API models to train models on your data. Following is an overview on how to choose one model over another based on your needs. Some models are faster than others, whereas some are more accurate than others."),Object(r.b)("p",null,Object(r.b)("img",{src:n(258).default})),Object(r.b)("h3",{id:"tfod-hyperparameters"},"TFOD hyperparameters"),Object(r.b)("p",null,"You can specify arguments for all the available models in TFOD in the ",Object(r.b)("inlineCode",{parentName:"p"},"Hyperparameters")," field in YAML format."),Object(r.b)("p",null,"Here's an example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"num_steps: 10000               #  Number of steps. If left empty, Onepanel will pick the recommended defaults for that model.\nbatch_size: 1                  #  Batch size for the training\ninitial_learning_rate: 0.0003  #  Initial learning rate for the model. We recommend you do not change this.\nnum_clones: 1                  #  Number of GPUs to use for training. Change to number of GPUs for your machine.\n")),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/onepanelio/templates/blob/release-v0.18.0/workflows/tf-object-detection-training/defaults.json"}),"this file")," for all available hyperparameters for each TFOD model. Also see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/configuring_jobs.md#picking-model-parameters"}),"picking model parameters")),Object(r.b)("h3",{id:"choosing-the-right-model"},"Choosing the right model"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"We currently support several faster-rcnn models. All of these models are similar except that of the backbone used for the feature extraction. The backbones used are, in increasing order of complexity (i.e more layers), ResNet50, ResNet101, InceptionResNetV2. As the model complexity increases the computation requirement will also increase. If you have very complicated data (i.e hundreds of annotations in one image), then it is recommended that you choose complex model (i.e InceptionResNetV2).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Faster-rcnn models are generally more accurate than ssd models. However, sometimes you are better off using ssd models if your data is easy to learn (i.e 1 or 2 bounding box per image)."))),Object(r.b)("h4",{id:"frcnn-nas-coco"},"frcnn-nas-coco:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you are using ",Object(r.b)("inlineCode",{parentName:"li"},"frcnn-nas-coco"),", then choose a machine with at least 2 GPUs as this model requires more memory. A machine with 1 GPU will throw an error.")),Object(r.b)("p",null,"This is a type of faster-rcnn model with NAS backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2)."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Defaults")),": batch_size: 1, learning_rate: 0.0003, epochs=10000"),Object(r.b)("h4",{id:"frcnn-res101-coco"},"frcnn-res101-coco:"),Object(r.b)("p",null,"This is a type of faster-rcnn model with ResNet101 backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Defaults")),": batch_size: 1, learning_rate: 0.0003, epochs=10000"),Object(r.b)("h4",{id:"frcnn-res101-lowp"},"frcnn-res101-lowp"),Object(r.b)("p",null,"This is a type of faster-rcnn model with ResNet101 backbone with low number of proposals. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). If you are looking for more complex and accurate model then check out frcnn-res101-coco or frcnn-inc-resv2-atr-coco."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Defaults")),": batch_size: 1, learning_rate: 0.0003, epochs=10000"),Object(r.b)("h4",{id:"frcnn-res50-coco"},"frcnn-res50-coco"),Object(r.b)("p",null,"This is a type of faster-rcnn model with ResNet50 backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). If you are looking for more complex and accurate model then check out frcnn-res101-coco or frcnn-inc-resv2-atr-coco."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Defaults")),": batch_size: 1, learning_rate: 0.0003, epochs=10000"),Object(r.b)("h4",{id:"ssd-mobilenet-v2-coco"},"ssd-mobilenet-v2-coco"),Object(r.b)("p",null,"SSD-based networks such as ",Object(r.b)("inlineCode",{parentName:"p"},"ssd-mobilenet-v2")," are faster than faster-rcnn based models. However, they are not as accurate as faster-rcnn based models. This model is generally recommended since its accurate and fast enough. If you don't know much about your data or the complexity of your data, then we recommend you go with this model."),Object(r.b)("p",null,"You will find the pre-trained model and config file for ssd-mobilenetv2 model trained on COCO dataset."),Object(r.b)("p",null,"This model is a good place to start if you don't have any specific model in mind. If you are data is very complicated (i.e many annotations per image) then you should prefer faster-rcnn models over ssd."),Object(r.b)("p",null,"Depending upon your data, you can set epochs to train your model. There is no standard value which can work for all datasets. You generally have to try different number of epochs to get the best model. Ideally, you do so by monitoring loss of your model while training. But if you are looking for a recommendation. Then, we recommend you set epochs as follows: (number of images / batch_size (default: 24)) * 1000. For instance, if you have 100 images, then your epochs will be 4000 (rounded). Note that the model will be trained using a pre-trained model, so you don't need to train as long as you would have to when not using the pre-trained model."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Defaults")),": batch_size: 24, learning_rate: 0.004, epochs=10000"),Object(r.b)("p",null,"Note that same instructions apply for ",Object(r.b)("strong",{parentName:"p"},"ssd-mobilenet-v1")," and ",Object(r.b)("strong",{parentName:"p"},"ssd-mobilenet-lite"),". The only difference is the backbone model (i.e mobilenet v1) that they use."),Object(r.b)("h2",{id:"maskrcnn"},"MaskRCNN"),Object(r.b)("p",null,"MaskRCNN is a popular model for segmentation tasks. We use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/matterport/Mask_RCNN"}),"this")," implementation of MaskRCNN for training and inference."),Object(r.b)("p",null,"The process to train a Mask-RCNN model on CVAT is similar to the above process except that you need to select Mask-RCNN after clicking on Create Annotation Model."),Object(r.b)("p",null,Object(r.b)("img",{src:n(140).default})),Object(r.b)("h3",{id:"maskrcnn-hyperparameters"},"MaskRCNN hyperparameters"),Object(r.b)("p",null,"Even though you don't need to enter any other parameters to start the training of Mask-RCNN, it is recommended that you pass correct epochs according your data. Mask-RCNN is a very deep model which takes time to train and also to get enough accuracy."),Object(r.b)("p",null,"In addition to ",Object(r.b)("inlineCode",{parentName:"p"},"num_steps"),", you can set epochs for three different stages of the model. These parts are called ",Object(r.b)("inlineCode",{parentName:"p"},"stage_1"),", ",Object(r.b)("inlineCode",{parentName:"p"},"stage_2")," and ",Object(r.b)("inlineCode",{parentName:"p"},"stage_3")," and their number of epochs can be set as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"stage_1_epochs: 1    #  Epochs for network heads\nstage_2_epochs: 1    #  Epochs for finetune layers\nstage_3_epochs: 1    #  Epochs for all layers\nnum_steps: 1000      #  Num steps per epoch\n")),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"stage_1"),", the model learns to classify from extracted features. In ",Object(r.b)("inlineCode",{parentName:"p"},"stage_2"),", the model learns to better extract features. In ",Object(r.b)("inlineCode",{parentName:"p"},"stage_3"),", the whole model changes to adapt to new data."),Object(r.b)("p",null,"If you are training images that are similar to the ones in the COCO dataset, it is best to train more epochs in ",Object(r.b)("inlineCode",{parentName:"p"},"stage_1"),", otherwise it's best to train more epochs in ",Object(r.b)("inlineCode",{parentName:"p"},"stage_2")," where the model is learning to better extract features."),Object(r.b)("p",null,"If you have ~1000 images, then you don't have to change any parameters."),Object(r.b)("h2",{id:"fine-tuning-and-checkpoints"},"Fine-tuning and checkpoints"),Object(r.b)("p",null,"To fine-tune a model or continue from a checkpoint from a previous training Workflow execution:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to a completed or failed Workflow, click the training task, and in task panel under ",Object(r.b)("strong",{parentName:"p"},"Outputs")," > ",Object(r.b)("strong",{parentName:"p"},"Artifacts"),", click on the ",Object(r.b)("strong",{parentName:"p"},"output")," folder.\n",Object(r.b)("img",{src:n(259).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If Workflow has completed successfully, click the ",Object(r.b)("strong",{parentName:"p"},"model")," folder and copy its path. If Workflow was not successful, click the ",Object(r.b)("strong",{parentName:"p"},"checkpoints")," folder and copy its path.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Copy the path by clicking the icon indicated below.\n",Object(r.b)("img",{src:n(260).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Execute Workflow")," or ",Object(r.b)("strong",{parentName:"p"},"Run Again")," if you are under ",Object(r.b)("strong",{parentName:"p"},"Workflows"),". If in CVAT Workspace, click ",Object(r.b)("strong",{parentName:"p"},"Execute training Workflow"),", and then paste the path you copied above into ",Object(r.b)("strong",{parentName:"p"},"Checkpoint path"),".\n",Object(r.b)("img",{src:n(261).default})))))}A.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),A=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=A(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=A(n),m=o,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||r;return n?a.a.createElement(u,i(i({ref:t},l),{},{components:n})):a.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},140:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/built-in-models-153544-be0bf4fa9c62c48ee517e9c8d840cccd.png"},258:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/built-in-models-160405-6224ff15e804186be0f9ee2dceb06199.png"},259:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/output-path-bc314f8524b39f0ba9c40d45bae2b5f4.png"},260:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},261:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/checkpoint-ce68b9736294f36cad2acf5b176907d2.png"}}]);