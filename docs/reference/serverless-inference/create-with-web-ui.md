---
title: Create with Web UI
sidebar_label: Create with Web UI
description: Deploy a model using the Web UI
---

To deploy a simple model, we can use the [flowers prediction example](https://github.com/kubeflow/kfserving/tree/master/docs/samples/v1beta1/tensorflow) from KFServing.

1. To do this, go to **Models**.
   ![](../../../static/img/kfserving/menu-models.png)
2. Then click **New Model Server**.
   ![](../../../static/img/kfserving/create-model.png)
3. Copy and paste the yaml below, filling in your namespace for &lt;namespace&gt;, then click **Create**.
   ```yaml
     apiVersion: "serving.kubeflow.org/v1beta1"
     kind: "InferenceService"
     metadata:
       namespace: <namespace>
       name: "flower-sample"
     spec:
       predictor:
         tensorflow:
           storageUri: "gs://kfserving-samples/models/tensorflow/flowers"
   ```
4. Wait for the resource to finish setting up, to confirm it's running you should see a green check as indicated.
   ![](../../../static/img/kfserving/model-created.png)
5. To test the model, we can use this [JupyterLab notebook](https://github.com/onepanelio/python-sdk/blob/master/examples/inferenceservice-flowers.ipynb)
