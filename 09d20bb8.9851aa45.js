(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||r;return a?o.a.createElement(u,c(c({ref:t},p),{},{components:a})):o.a.createElement(u,c({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<r;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},194:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/custom-models-120434-ec7a7d4867590792de92b023910947f5.png"},195:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/custom-models-121715-54c18116a23a6b8f863c58e15b9d746b.png"},196:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/custom-models-141235-408d83802c0084957e089b7671cb4248.png"},61:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),o=(a(0),a(125));const r={title:"Adding custom models and training Workflows in CVAT",sidebar_label:"Adding custom training Workflows",description:"Onepanel - Adding custom models and training Workflows in CVAT"},i={unversionedId:"reference/cvat/custom-models",id:"reference/cvat/custom-models",isDocsHomePage:!1,title:"Adding custom models and training Workflows in CVAT",description:"Onepanel - Adding custom models and training Workflows in CVAT",source:"@site/docs/reference/cvat/custom-models.md",slug:"/reference/cvat/custom-models",permalink:"/docs/reference/cvat/custom-models",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/cvat/custom-models.md",version:"current",sidebar_label:"Adding custom training Workflows",sidebar:"reference",previous:{title:"Using trained models for automatic annotation",permalink:"/docs/reference/cvat/automatic-annotation"},next:{title:"JupyterLab overview",permalink:"/docs/reference/jupyterlab/overview"}},c=[{value:"1. Supported annotation formats",id:"1-supported-annotation-formats",children:[]},{value:"2. CVAT training Workflow Template Overview",id:"2-cvat-training-workflow-template-overview",children:[]},{value:"3. Update the training code",id:"3-update-the-training-code",children:[]},{value:"4. Add new CVAT training Workflow Template",id:"4-add-new-cvat-training-workflow-template",children:[]},{value:"5. Using your new training Workflow Template in CVAT",id:"5-using-your-new-training-workflow-template-in-cvat",children:[]}],l={rightToc:c};function p({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide will walk you through the process adding custom object detection or semantic segmentation training Workflow Templates in Onepanel that can be triggered from CVAT just like the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/cvat/built-in-models"}),"built-in model training Workflows")),Object(o.b)("p",null,"The steps to add your custom model training are as follows:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make sure your training code supports CVAT's annotation formats."),Object(o.b)("li",{parentName:"ol"},"Overview of the ",Object(o.b)("strong",{parentName:"li"},"CVAT training Workflow Template")," that you'll be using as base."),Object(o.b)("li",{parentName:"ol"},"Update your training code's input and output directory structures and push to a Git repository (e.g. GitHub)."),Object(o.b)("li",{parentName:"ol"},"Update ",Object(o.b)("strong",{parentName:"li"},"CVAT training Workflow Template")," to reference your training code and install dependencies (if any)."),Object(o.b)("li",{parentName:"ol"},"Use your new Workflow Template to train models directly from CVAT.")),Object(o.b)("p",null,"We will walk through these steps by adding the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/detr"}),"DEtection TRansformer (DETR)")," model for semantic segmentation."),Object(o.b)("h2",{id:"1-supported-annotation-formats"},"1. Supported annotation formats"),Object(o.b)("p",null,"When you click ",Object(o.b)("strong",{parentName:"p"},"Execute training Workflow")," in CVAT, the annotation data dump is uploaded to your ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/deployment/configuration/files#artifactrepository"}),"default object storage")," and then a Workflow Template (containing the relevant training code) is executed with reference to the location of the annotation data dump."),Object(o.b)("p",null,"Now that you know how this feature works, the only requirement is that your training code needs to support the annotation formats that are supported by CVAT. For example, if your training code accepts data that follows COCO format (i.e JSON) then you need to indicate that in your newly created Workflow Template by updating the ",Object(o.b)("inlineCode",{parentName:"p"},"dump_format")," field (more on this field later in steps below)."),Object(o.b)("p",null,"The following annotation formats are supported by CVAT:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"MS COCO (",Object(o.b)("inlineCode",{parentName:"li"},"cvat_coco"),")"),Object(o.b)("li",{parentName:"ul"},"YOLO (",Object(o.b)("inlineCode",{parentName:"li"},"cvat_yolo"),")"),Object(o.b)("li",{parentName:"ul"},"TF Detection API (TFRecord) (",Object(o.b)("inlineCode",{parentName:"li"},"cvat_tfrecord"),")"),Object(o.b)("li",{parentName:"ul"},"MOT (",Object(o.b)("inlineCode",{parentName:"li"},"cvat_mot"),")"),Object(o.b)("li",{parentName:"ul"},"LabelMe (",Object(o.b)("inlineCode",{parentName:"li"},"cvat_label_me"),")")),Object(o.b)("h2",{id:"2-cvat-training-workflow-template-overview"},"2. CVAT training Workflow Template Overview"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"CVAT training Workflow Template")," is the base template you can use to add any custom object detection or semantic segmentation model that will work directly with any CVAT Workspace. "),Object(o.b)("p",null,"This template is available in Onepanel by navigating to ",Object(o.b)("strong",{parentName:"p"},"Workflows")," > ",Object(o.b)("strong",{parentName:"p"},"Workflow Templates")," > ",Object(o.b)("strong",{parentName:"p"},"Create Template")," and selecting ",Object(o.b)("strong",{parentName:"p"},"CVAT Training")," under ",Object(o.b)("strong",{parentName:"p"},"Templates"),"."),Object(o.b)("p",null,"Note that the ",Object(o.b)("strong",{parentName:"p"},"CVAT Training")," Workflow Template has in-line comments describing the fields and what you would need to change. You will only need to change (or in some cases remove) the fields marked with ",Object(o.b)("inlineCode",{parentName:"p"},"[CHANGE]"),"."),Object(o.b)("p",null,"Some important notes about this template:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The fields with the ",Object(o.b)("inlineCode",{parentName:"li"},"cvat-")," prefix are automatically populated by CVAT. The ",Object(o.b)("inlineCode",{parentName:"li"},"dump_format")," indicates to CVAT in which format to dump the annotations."),Object(o.b)("li",{parentName:"ol"},"Your training code is cloned from your Git repository into ",Object(o.b)("inlineCode",{parentName:"li"},"/mnt/src/train"),"."),Object(o.b)("li",{parentName:"ol"},"The annotation dump is downloaded from object storage to ",Object(o.b)("inlineCode",{parentName:"li"},"/mnt/data/datasets")," and if any checkpoint models are selected, that is downloaded to ",Object(o.b)("inlineCode",{parentName:"li"},"/mnt/data/models"),"."),Object(o.b)("li",{parentName:"ol"},"Any output from your training code (model and ",Object(o.b)("inlineCode",{parentName:"li"},"classes.csv")," file) is expected to be written to ",Object(o.b)("inlineCode",{parentName:"li"},"/mnt/output"),". Files written to this location will be automatically uploaded to your default object storage and accessible to CVAT and other Workspaces.")),Object(o.b)("p",null,"We will walk through updating the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/detr"}),"DEtection TRansformer (DETR)")," code and this template in the following sections."),Object(o.b)("h2",{id:"3-update-the-training-code"},"3. Update the training code"),Object(o.b)("p",null,"In this step, you will launch a JupyterLab Workspace in Onepanel to test and adjust your code before it is added to the the CVAT training Workflow Template. The JupyterLab Workspace Template just like the CVAT training Workflow Template, uses the ",Object(o.b)("inlineCode",{parentName:"p"},"onepanel/dl")," Docker image which has both PyTorch 1.6 and TensorFlow 2.3 installed and provides a consistent environment for testing and deploying your training code."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fork the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/detr"}),"DEtection TRansformer (DETR)")," repository.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Launch a ",Object(o.b)("strong",{parentName:"p"},"JupyterLab")," Workspace on a GPU node pool, then ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/jupyterlab/git#cloning"}),"clone")," your fork. You can optionally run on a CPU node pool but it will take much longer to test.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In JupyterLab, open the ",Object(o.b)("inlineCode",{parentName:"p"},"detr")," directory and navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"datasets/coco.py"),"; then update the following lines:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'PATHS = {\n        "train": (root / "train2017", root / "annotations" / f\'{mode}_train2017.json\'),\n        "val": (root / "val2017", root / "annotations" / f\'{mode}_val2017.json\'),\n    }\n')),Object(o.b)("p",{parentName:"li"},"To the official COCO format structure:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'PATHS = {\n        "train": (root / "images", root / "annotations" / \'instances_default.json\'),\n        "val": (root / "images", root / "annotations" / \'instances_default.json\'),\n    }\n')),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For simplicity, the same data for train and validation sets. You can write a script or add another task that runs prior to this task in the CVAT training Workflow Template that splits this data accordingly. See our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/onepanelio/templates/tree/release-v0.18.0/workflows/albumentations-preprocessing"}),"Albumentations Workflow Template")," or the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/workflows/training"}),"built-in training Workflows")," for reference on how to do this.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Upload your data dump from CVAT into JupyterLab and then copy or move the data to ",Object(o.b)("inlineCode",{parentName:"p"},"/mnt/data/datasets"),". Note that the JupyterLab default directory is ",Object(o.b)("inlineCode",{parentName:"p"},"/data"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p /mnt/data/datasets\ncp -r /data/<path-to-dataset>/* /mnt/data/datasets\n")),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The data and directories are automatically mounted and created in CVAT training Workflow, so you do not have to do this when you add this code the Workflow.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the following command to test your changes:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# if you are running on CPU, add  `--device cpu` flag\npython main.py --coco_path /mnt/data/datasets --output_dir /mnt/output --epochs 1 --batch_size 300\n")),Object(o.b)("p",{parentName:"li"},"You will get an error that ",Object(o.b)("inlineCode",{parentName:"p"},"pycocotools")," is missing, install it by running:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"pip install pycocotools\n")),Object(o.b)("p",{parentName:"li"},"Take a note of these commands, you will be adding them to the CVAT training Workflow Template in later steps.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/jupyterlab/git#other-git-actions"}),"Commit and push")," your changes back to your repository."))),Object(o.b)("p",null,"As mentioned before, the annotation data from CVAT is automatically dumped into ",Object(o.b)("inlineCode",{parentName:"p"},"/mnt/data/datasets"),". Since this code takes this path as an argument (",Object(o.b)("inlineCode",{parentName:"p"},"--coco_path"),"), you will pass the correct path in the Workflow Template later. Same applies to passing ",Object(o.b)("inlineCode",{parentName:"p"},"/mnt/output")," to  ",Object(o.b)("inlineCode",{parentName:"p"},"--output_dir"),". If your training code doesn't have these parameters, we recommend you add them instead of hard coding these paths in your code."),Object(o.b)("h2",{id:"4-add-new-cvat-training-workflow-template"},"4. Add new CVAT training Workflow Template"),Object(o.b)("p",null,"Now that your code is update properly, you will need to add it in as a Workflow so that it can be used from CVAT (or even triggered from the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/onepanelio/python-sdk/blob/master/examples/execute-workflow.ipynb"}),"Python SDK"),") to train models on your data."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to ",Object(o.b)("strong",{parentName:"p"},"Workflows")," > ",Object(o.b)("strong",{parentName:"p"},"Workflow Templates")," > ",Object(o.b)("strong",{parentName:"p"},"Create Template")," and select ",Object(o.b)("strong",{parentName:"p"},"CVAT Training")," under ",Object(o.b)("strong",{parentName:"p"},"Templates"),"."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{src:a(194).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Give your template a name, in this case ",Object(o.b)("strong",{parentName:"p"},"DETR object detection training"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the next few steps, we'll be following the in-line comments to update the template. Before continuing to the next step, it is good to review the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/workflows/templates#parameters"}),"parameters")," documentation.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Change the ",Object(o.b)("inlineCode",{parentName:"p"},"code")," and ",Object(o.b)("inlineCode",{parentName:"p"},"revision")," parameters so that they point to your training code repository and branch."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:"{4,11}","{4,11}":!0}),"# [CHANGE] This is the path to your training code repository that will be cloned\n# For private repositories see: https://docs.onepanel.ai/docs/reference/workflows/artifacts#git\n- name: code\n  value: https://github.com/onepanelio/detr.git\n  displayName: Model training code repository\n  type: hidden\n  visibility: private\n\n# [CHANGE] This is the name of branch or tag in your repository that will be used to clone your code\n- name: revision\n  value: master\n  displayName: Model training code repository branch or tag name\n  type: hidden\n  visibility: private\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Remove the parameters that are not used by your training code. In this case, you can remove ",Object(o.b)("inlineCode",{parentName:"p"},"cvat-num-classes")," since the DETR training code can deduce this from the annotations. You can also remove ",Object(o.b)("inlineCode",{parentName:"p"},"hyperparameters")," since the DETR script takes these as individual arguments instead of having to parse a YAML."),Object(o.b)("p",{parentName:"li"},"Remove this block of YAML:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# [CHANGE] Number of classes\n# You can remove this if your code can deduce classes from annotation data\n- name: cvat-num-classes\n  displayName: Number of classes\n  hint: Number of classes. In CVAT, this parameter will be pre-populated.\n  value: '10'\n  visibility: internal\n\n# [CHANGE] Hyperparameters for your model\n# Note that this will come in as multiline YAML that you will need to parse in your code\n# You can also remove this and create a separate parameter for each hyperparameter and pass them as an argument to your script\n- name: hyperparameters\n  displayName: Hyperparameters\n  visibility: public\n  type: textarea.textarea\n  value: |-\n    num_steps: 1000     #   Num steps per epoch\n  hint: List of available hyperparameters\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add ",Object(o.b)("inlineCode",{parentName:"p"},"epochs")," and ",Object(o.b)("inlineCode",{parentName:"p"},"batch-size")," as parameters so we can pass them as arguments to our training code. You can add as many parameters as your training code needs."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- name: epochs\n  displayName: Number of epochs\n  value: '300'\n  type: input.number\n\n- name: batch-size\n  displayName: Batch size\n  value: '2'\n  type: input.number\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update ",Object(o.b)("inlineCode",{parentName:"p"},"dump-format")," parameter to a value that your training code expects from CVAT. In this case you can leave it as ",Object(o.b)("inlineCode",{parentName:"p"},"cvat_coco")," since we are expecting COCO JSON."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:"{4}","{4}":!0}),"# [CHANGE] Dump format that your model expects from CVAT\n# Valid values are: cvat_coco, cvat_voc, cvat_tfrecord, cvat_yolo, cvat_mot, cvat_label_me\n- name: dump-format\n  value: cvat_coco\n  displayName: CVAT dump format\n  visibility: private\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Show Parameters Form Preview")," to preview how your parameters are displayed."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{src:a(195).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Following the in-line comments, update the ",Object(o.b)("inlineCode",{parentName:"p"},"args")," value under ",Object(o.b)("inlineCode",{parentName:"p"},"containers")," to match the commands we ran earlier in JupyterLab. Important differences to note here are that your repository is cloned into ",Object(o.b)("inlineCode",{parentName:"p"},"/mnt/src/train")," and that ",Object(o.b)("inlineCode",{parentName:"p"},"epochs")," and ",Object(o.b)("inlineCode",{parentName:"p"},"batch-size")," are passed into ",Object(o.b)("inlineCode",{parentName:"p"},"main.py")," as arguments by using parameter references in the format ",Object(o.b)("inlineCode",{parentName:"p"},'"{{workflow.parameters.<parameter-name>}}"'),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:"{6-11}","{6-11}":!0}),'- container:\n    # [CHANGE] Bash command to run your code\n    # Note that your code will be cloned into /mnt/src/train, so you will need to change to the appropriate directory\n    args:\n    - |\n        pip install pycocotools && \\\n        cd /mnt/src/train && \\\n        python -u main.py --coco_path /mnt/data/datasets \\\n            --output_dir /mnt/output \\\n            --epochs="{{workflow.parameters.epochs}}" \\\n            --batch_size="{{workflow.parameters.batch-size}}"\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"(Optional) If your training code is not compatible TensorFlow 2.3 or PyTorch 1.5, you will need to update ",Object(o.b)("inlineCode",{parentName:"p"},"image")," to use a Docker image that is compatible with your training code."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:"{16}","{16}":!0}),'- container:\n    # [CHANGE] Bash command to run your code\n    # Note that your code will be cloned into /mnt/src/train, so you will need to change to the appropriate directory\n    args:\n    - |\n        pip install pycocotools && \\\n        cd /mnt/src/train && \\\n        python -u main.py --coco_path /mnt/data/datasets \\\n            --output_dir /mnt/output \\\n            --epochs="{{workflow.parameters.epochs}}" \\\n            --batch_size="{{workflow.parameters.batch-size}}"\n    ...\n    # [CHANGE] Docker image to use to run your code\n    # You can keep this as is if your code uses TensorFlow 2.3 or PyTorch 1.5\n    # For private Docker repositories use imagePullSecrets: https://github.com/argoproj/argo/blob/master/examples/image-pull-secrets.yaml#L10-L11\n    image: onepanel/dl:0.17.0\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"(Optional) If your training code has TensorBoard callbacks, make sure to write the TensorBoard logs to ",Object(o.b)("inlineCode",{parentName:"p"},"/mnt/output")," (we generally recommend writing to ",Object(o.b)("inlineCode",{parentName:"p"},"/mnt/output/tensorboard")," to better organize your output). You can then ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/workflows/tensorboard"}),"access TensorBoard")," when this training Workflow is running.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Save")," to create your new training Workflow Template."))),Object(o.b)("h2",{id:"5-using-your-new-training-workflow-template-in-cvat"},"5. Using your new training Workflow Template in CVAT"),Object(o.b)("p",null,"Now you can use your new Workflow Template to train on your data directly from CVAT just like the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"docs/reference/cvat/built-in-models"}),"built-in training Workflow Templates"),"."),Object(o.b)("p",null,Object(o.b)("img",{src:a(196).default})))}p.isMDXComponent=!0}}]);