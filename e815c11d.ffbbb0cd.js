(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{116:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(6),o=(t(0),t(125)),s={title:"Accessing TensorBoard",sidebar_label:"Accessing TensorBoard",description:"Onepanel - Accessing TensorBoard in Workflows"},i={unversionedId:"reference/workflows/tensorboard",id:"reference/workflows/tensorboard",isDocsHomePage:!1,title:"Accessing TensorBoard",description:"Onepanel - Accessing TensorBoard in Workflows",source:"@site/docs/reference/workflows/tensorboard.md",slug:"/reference/workflows/tensorboard",permalink:"/docs/reference/workflows/tensorboard",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/workflows/tensorboard.md",version:"current",sidebar_label:"Accessing TensorBoard",sidebar:"reference",previous:{title:"Persisting training metrics",permalink:"/docs/reference/workflows/metrics"},next:{title:"Hyperparameter tuning",permalink:"/docs/reference/workflows/hyperparameter-tuning"}},c=[{value:"Enabling TensorBoard",id:"enabling-tensorboard",children:[{value:"Complete example",id:"complete-example",children:[]}]},{value:"Launching TensorBoard",id:"launching-tensorboard",children:[]}],l={rightToc:c};function d(e){var n=e.components,s=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,s,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"enabling-tensorboard"},"Enabling TensorBoard"),Object(o.b)("p",null,"You can add TensorBoard as a ",Object(o.b)("inlineCode",{parentName:"p"},"sidecar")," to any Workflow template as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"templates:  \n  - name: my-template\n    container:\n     ...\n    sidecars:\n      - name: tensorboard                   \n        # Use Tensorflow docker image    \n        image: tensorflow/tensorflow:2.3.0\n        command:\n          - sh\n          - '-c'\n        # Indicates that this is a interactive/visualization sidecar\n        env:\n          - name: ONEPANEL_INTERACTIVE_SIDECAR\n            value: 'true'\n        args:\n          # Set <path> to where your main container is writing TensorBoard logs\n          - tensorboard --logdir <path>     \n        ports:\n          - containerPort: 6006\n            name: tensorboard\n")),Object(o.b)("h3",{id:"complete-example"},"Complete example"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This example is also available in the application in ",Object(o.b)("strong",{parentName:"p"},"Workflows")," > ",Object(o.b)("strong",{parentName:"p"},"Workflow Templates")," > ",Object(o.b)("strong",{parentName:"p"},"TensorFlow Training"),"."))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:"{42,48,50-52,54-68,70-78}","{42,48,50-52,54-68,70-78}":!0}),"arguments:\n  parameters:\n  - name: epochs\n    value: '10'\nentrypoint: main\ntemplates:\n  - name: main\n    dag:\n      tasks:\n      - name: train-model\n        template: tf-dense\n  - name: tf-dense\n    script:\n      image: tensorflow/tensorflow:2.3.0\n      command:\n        - python\n        - '-u'\n      source: |\n        import tensorflow as tf\n        import datetime\n\n        mnist = tf.keras.datasets.mnist\n\n        (x_train, y_train),(x_test, y_test) = mnist.load_data()\n        x_train, x_test = x_train / 255.0, x_test / 255.0\n\n        def create_model():\n          return tf.keras.models.Sequential([\n            tf.keras.layers.Flatten(input_shape=(28, 28)),\n            tf.keras.layers.Dense(512, activation='relu'),\n            tf.keras.layers.Dropout(0.2),\n            tf.keras.layers.Dense(10, activation='softmax')\n          ])\n\n        model = create_model()\n        model.compile(optimizer='adam',\n                      loss='sparse_categorical_crossentropy',\n                      metrics=['accuracy'])\n\n        # Write logs to /mnt/output\n        log_dir = \"/mnt/output/logs/\" + datetime.datetime.now().strftime(\"%Y%m%d-%H%M%S\")\n        tensorboard_callback = tf.keras.callbacks.TensorBoard(log_dir=log_dir, histogram_freq=1)\n\n        history = model.fit(x=x_train, \n                  y=y_train, \n                  epochs={{workflow.parameters.epochs}}, \n                  validation_data=(x_test, y_test), \n                  callbacks=[tensorboard_callback])\n      volumeMounts:\n        # TensorBoard sidecar will automatically mount this volume\n        - name: output\n          mountPath: /mnt/output\n\n    sidecars:\n      - name: tensorboard\n        image: tensorflow/tensorflow:2.3.0\n        command:\n          - sh\n          - '-c'\n        env:\n          - name: ONEPANEL_INTERACTIVE_SIDECAR\n            value: 'true'\n        args:\n          # Read logs from /mnt/output - this directory is auto-mounted from volumeMounts\n          - tensorboard --logdir /mnt/output/\n        ports:\n          - containerPort: 6006\n            name: tensorboard\n\nvolumeClaimTemplates:\n  # Provision a volume that can be shared between main container and TensorBoard side car\n  - metadata:\n      name: output\n    spec:\n      accessModes: [ \"ReadWriteOnce\" ]\n      resources:\n        requests:\n          storage: 2Gi\n")),Object(o.b)("h2",{id:"launching-tensorboard"},"Launching TensorBoard"),Object(o.b)("p",null,"Once a Workflow task is running, you can access its TensorBoard sidecar by clicking on the task and then clicking ",Object(o.b)("strong",{parentName:"p"},"Outputs")," and then ",Object(o.b)("strong",{parentName:"p"},"Open TensorBoard")," in the task panel:"),Object(o.b)("p",null,Object(o.b)("img",{src:t(276).default})))}d.isMDXComponent=!0},125:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,b=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return t?a.a.createElement(b,i(i({ref:n},l),{},{components:t})):a.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},276:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tensorboard-202758-9144ed3f61ac32e07bd9dba1543906a8.png"}}]);