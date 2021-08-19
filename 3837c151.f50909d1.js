(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,u=b["".concat(l,".").concat(d)]||b[d]||m[d]||o;return n?a.a.createElement(u,i(i({ref:t},s),{},{components:n})):a.a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(128)),l={title:"Create with Workflow Task",sidebar_label:"Create with Workflow Task",description:"Deploy a model using Workflow Tasks"},i={unversionedId:"reference/serverless-inference/create-with-workflow-task",id:"reference/serverless-inference/create-with-workflow-task",isDocsHomePage:!1,title:"Create with Workflow Task",description:"Deploy a model using Workflow Tasks",source:"@site/docs/reference/serverless-inference/create-with-workflow-task.md",slug:"/reference/serverless-inference/create-with-workflow-task",permalink:"/docs/reference/serverless-inference/create-with-workflow-task",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/serverless-inference/create-with-workflow-task.md",version:"current",sidebar_label:"Create with Workflow Task",sidebar:"reference",previous:{title:"Create with Web UI",permalink:"/docs/reference/serverless-inference/create-with-web-ui"},next:{title:"Create with Python SDK",permalink:"/docs/reference/serverless-inference/create-with-python-sdk"}},c=[],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this example, we'll take a pre-existing TensorFlow model and modify it to make it deployable."),Object(o.b)("p",null,"We'll use a workflow to deploy the inference service and, as a bonus, we'll use a transformer to make the input take a base64 image and output a base64 image with the bounding boxes drawn."),Object(o.b)("p",null,"We'll be using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://tfhub.dev/tensorflow/ssd_mobilenet_v2/fpnlite_320x320/1"}),"ssd_mobilenet_v2"),", an object detection model trained on COCO dataset with training images scaled to 320x320."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To do this you need to download the files from the link above and extract them.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Arrange the files as given below"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create a directory and give it a name, for this example we'll use ",Object(o.b)("inlineCode",{parentName:"p"},"ssd"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In it create another directory called ",Object(o.b)("inlineCode",{parentName:"p"},"0001"),",  ",Object(o.b)("em",{parentName:"p"},"this is for the version of the model"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Move the extracted contents inside the version folder, this includes a ",Object(o.b)("inlineCode",{parentName:"p"},"saved_model.pb")," file and the ",Object(o.b)("inlineCode",{parentName:"p"},"variables")," folder.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For our transformer, you will also need to add a ",Object(o.b)("inlineCode",{parentName:"p"},"label_map.pbtxt")," file.\nSince this model was trained under the COCO dataset, it's label maps are available ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tensorflow/models/blob/master/research/object_detection/data/mscoco_label_map.pbtxt"}),"here"),"."),Object(o.b)("p",{parentName:"li"}," Our final result is something like this:"))),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"ssd",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"0001",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"saved_model.pb"),Object(o.b)("li",{parentName:"ul"},"label_map.pbtxt"),Object(o.b)("li",{parentName:"ul"},"variables",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"variables.data-00000-of-00001"),Object(o.b)("li",{parentName:"ul"},"variables.index"))))))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Upload the files under your object storage provider ( ",Object(o.b)("strong",{parentName:"p"},"Azure Storage"),", ",Object(o.b)("strong",{parentName:"p"},"S3")," or ",Object(o.b)("strong",{parentName:"p"},"GCS")," ).")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to ",Object(o.b)("strong",{parentName:"p"},"Workflows")," > ",Object(o.b)("strong",{parentName:"p"},"Workflow Templates")," > ",Object(o.b)("strong",{parentName:"p"},"Create Template"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Name the template ",Object(o.b)("inlineCode",{parentName:"p"},"deploy")," and then under manifest paste the following:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'entrypoint: main\ntemplates:\n  - dag:\n      tasks:\n        - name: deploy\n          template: deploy\n    name: main\n  - name: deploy\n    resource:\n      successCondition: status.address.url\n      action: create\n      manifest: |\n        apiVersion: "serving.kubeflow.org/v1beta1"\n        kind: "InferenceService"\n        metadata:\n          namespace: "{{workflow.namespace}}"\n          name: "{{workflow.name}}"\n        spec:\n          transformer:\n            containers:\n            - image: onepanel/transformer-tfod-base64:v1.0.0\n              name: kfserving-container\n              env:\n               - name: STORAGE_URI\n                 value: "s3://ssd"\n               - name: model\n                 value: "{{workflow.name}}"\n          predictor:\n            tensorflow:\n              runtimeVersion: "2.5.1"\n              storageUri: "s3://ssd"\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"This will generate the model servers and assign names automatically.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Execute the workflow")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To test the model, use this ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/onepanelio/python-sdk/blob/master/examples/deploy-and-consume-inference-api.ipynb"}),"JupyterLab notebook")))))}p.isMDXComponent=!0}}]);