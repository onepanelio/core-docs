---
title: Create with Workflow Task
sidebar_label: Create with Workflow Task
description: Deploy a model using Workflow Tasks
---

In this example, we'll take a pre-existing TensorFlow model and modify it to make it deployable.

We'll use a workflow to deploy the inference service and, as a bonus, we'll use a transformer to make the input take a base64 image and output a base64 image with the bounding boxes drawn.

We'll be using [ssd_mobilenet_v2](https://tfhub.dev/tensorflow/ssd_mobilenet_v2/fpnlite_320x320/1), an object detection model trained on COCO dataset with training images scaled to 320x320.

1. To do this you need to download the files from the link above and extract them.
2. Arrange the files as given below
    - Create a directory and give it a name, for this example we'll use `ssd`
    - In it create another directory called `0001`,  *this is for the version of the model*.
    - Move the extracted contents inside the version folder, this includes a `saved_model.pb` file and the `variables` folder.
    - For our transformer, you will also need to add a `label_map.pbtxt` file.
    Since this model was trained under the COCO dataset, it's label maps are available [here](https://github.com/tensorflow/models/blob/master/research/object_detection/data/mscoco_label_map.pbtxt).

     Our final result is something like this:
    * ssd
      * 0001
        * saved_model.pb
        * label_map.pbtxt
        * variables
          * variables.data-00000-of-00001
          * variables.index

3. Upload the files under your object storage provider ( **Azure Storage**, **S3** or **GCS** ).
4. Go to **Workflows** > **Workflow Templates** > **Create Template**
5. Name the template `deploy` and then under manifest paste the following:
  ```yaml
  entrypoint: main
  templates:
    - dag:
        tasks:
          - name: deploy
            template: deploy
      name: main
    - name: deploy
      resource:
        successCondition: status.address.url
        action: create
        manifest: |
          apiVersion: "serving.kubeflow.org/v1beta1"
          kind: "InferenceService"
          metadata:
            namespace: "{{workflow.namespace}}"
            name: "{{workflow.name}}"
          spec:
            transformer:
              containers:
              - image: onepanel/transformer-tfod-base64:v1.0.0
                name: kfserving-container
                env:
                 - name: STORAGE_URI
                   value: "s3://ssd"
                 - name: model
                   value: "{{workflow.name}}"
            predictor:
              tensorflow:
                runtimeVersion: "2.5.1"
                storageUri: "s3://ssd"
   ```
6. This will generate the model servers and assign names automatically.
7. Execute the workflow
8. To test the model, use this [JupyterLab notebook](https://github.com/onepanelio/python-sdk/blob/master/examples/deploy-and-consume-inference-api.ipynb)
