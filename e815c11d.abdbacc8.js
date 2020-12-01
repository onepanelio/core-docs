(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{113:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return l}));var t=r(2),o=(r(0),r(124));const a={title:"Accessing TensorBoard",sidebar_label:"Accessing TensorBoard",description:"Onepanel - Accessing TensorBoard in Workflows"},s={unversionedId:"reference/workflows/tensorboard",id:"reference/workflows/tensorboard",isDocsHomePage:!1,title:"Accessing TensorBoard",description:"Onepanel - Accessing TensorBoard in Workflows",source:"@site/docs/reference/workflows/tensorboard.md",slug:"/reference/workflows/tensorboard",permalink:"/docs/reference/workflows/tensorboard",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/workflows/tensorboard.md",version:"current",sidebar_label:"Accessing TensorBoard",sidebar:"reference",previous:{title:"Persisting training metrics",permalink:"/docs/reference/workflows/metrics"},next:{title:"Troubleshooting Workflows",permalink:"/docs/reference/workflows/troubleshooting"}},i=[{value:"Enabling TensorBoard",id:"enabling-tensorboard",children:[]},{value:"Launching TensorBoard",id:"launching-tensorboard",children:[]}],c={rightToc:i};function l({components:e,...n}){return Object(o.b)("wrapper",Object(t.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"enabling-tensorboard"},"Enabling TensorBoard"),Object(o.b)("p",null,"You can add TensorBoard as a ",Object(o.b)("inlineCode",{parentName:"p"},"sidecar")," to any Workflow template as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"templates:  \n  - name: my-template\n    container:\n     ...\n    sidecars:\n      - name: tensorboard                   \n        # Use Tensorflow docker image    \n        image: 'tensorflow/tensorflow:2.3.0'\n        command:\n          - sh\n          - '-c'\n        # Indicates that this is a visualization sidecar\n        tty: true\n        args:\n          # Set <path> to where your main container is writing TensorBoard logs\n          - tensorboard --logdir <path>     \n        ports:\n          - containerPort: 6006\n            name: tensorboard\n")),Object(o.b)("p",null,"Full TensorFlow and TensorBoard example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml",metastring:"{30-32,38,40-42,44-55}","{30-32,38,40-42,44-55}":!0}),"templates:\n  - name: tf-dense\n    script:\n      image: 'tensorflow/tensorflow:2.3.0'\n      command:\n        - python\n        - '-u'\n      source: |\n        import tensorflow as tf\n        import datetime\n\n        mnist = tf.keras.datasets.mnist\n\n        (x_train, y_train),(x_test, y_test) = mnist.load_data()\n        x_train, x_test = x_train / 255.0, x_test / 255.0\n\n        def create_model():\n          return tf.keras.models.Sequential([\n            tf.keras.layers.Flatten(input_shape=(28, 28)),\n            tf.keras.layers.Dense(512, activation='relu'),\n            tf.keras.layers.Dropout(0.2),\n            tf.keras.layers.Dense(10, activation='softmax')\n          ])\n\n        model = create_model()\n        model.compile(optimizer='adam',\n                      loss='sparse_categorical_crossentropy',\n                      metrics=['accuracy'])\n\n        # Write logs to /mnt/output\n        log_dir = \"/mnt/output/logs/\" + datetime.datetime.now().strftime(\"%Y%m%d-%H%M%S\")\n        tensorboard_callback = tf.keras.callbacks.TensorBoard(log_dir=log_dir, histogram_freq=1)\n\n        history = model.fit(x=x_train, \n                  y=y_train, \n                  epochs=10, \n                  validation_data=(x_test, y_test), \n                  callbacks=[tensorboard_callback])\n      volumeMounts:\n        # TensorBoard sidecar will automatically mount this volume\n        - name: tf-dense-output\n          mountPath: /mnt/output\n    sidecars:\n      - name: tensorboard\n        image: 'tensorflow/tensorflow:2.3.0'\n        command:\n          - sh\n          - '-c'\n        tty: true\n        args:\n          # Read logs from /mnt/output - this directory is auto-mounted from volumeMounts\n          - tensorboard --logdir /mnt/output/\n        ports:\n          - containerPort: 6006\n            name: tensorboard\n")),Object(o.b)("h2",{id:"launching-tensorboard"},"Launching TensorBoard"),Object(o.b)("p",null,"Once a Workflow task is running, you can access its TensorBoard sidecar by clicking on the task and then clicking ",Object(o.b)("strong",{parentName:"p"},"Outputs")," in the task panel:"),Object(o.b)("p",null,Object(o.b)("img",{src:r(267).default})))}l.isMDXComponent=!0},124:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(r),p=t,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||a;return r?o.a.createElement(f,i(i({ref:n},l),{},{components:r})):o.a.createElement(f,i({ref:n},l))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},267:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/tensorboard-202758-9144ed3f61ac32e07bd9dba1543906a8.png"}}]);