---
title: Training with built-in models
sidebar_label: Training with built-in models
description: Onepanel - Training with built-in models
---

## Training with built-in models from CVAT

1. Click on **Open** for a task you want to train a model on.
  
  ![Open task](/img/cvat_open.png)

2. Click on **Job #X**, where X could be any job number. Annotate few frames. For testing you can just annotate one frame. But ideally you want to have thousands of objects to train a deep learning model on. Alternatively, you can just run pre-annotation if your labels are common ones.

3. Click on **Actions** for a task you want to train a model on. Then, click on **Execute training Workflow**.

  ![Select training workflow](/img/cvat_select_workflow_execution.png)

4. Select a training Workflow Template. By default, you can use **TF Object Detection Training** for object detection or **MaskRCNN Training** for semantic segmentation.

  ![Train a model from CVAT](/img/tf-object-detection.png)

  :::tip
  Note you can easily add your own models as well. See our [documentation](/docs/reference/cvat/custom-models) for more information on adding custom models. 
  :::

5. Update hyperparameters and settings depending on your model and data. See below for more information.

6. You can optionally select the checkpoint path from previously trained model or leave this field empty.

7. Click **Submit**. This will execute the Onepanel Workflow for selected model. You can see Workflow logs by going to Workflow execution page. You can find the URL for the same in the notification card.
  
  ![Workflow URL](/img/execution_url.png)

  Trained model and other outputs will be stored on cloud storage and will be synced with CVAT locally so that you can use this to pre-annotate other frames. 

  :::note
  You can also use this trained model to run automatic pre-annotation in CVAT. See [documentation](/docs/reference/cvat/automatic-annotation) for more information on automatic pre-annotation.
  :::

## TensorFlow Object Detection models

You can use any of the models that we support for TensorFlow Object Detection API to train your custom pre-annotation models. Here, we provide a brief explanation on how to choose one model over another based on your needs. Some models are faster than others, whereas some are more accurate than others.  We hope this information will help you choose the right model for your task. 

![TensorFlow Object Detection Workflow](/img/tf-object-detection.png)

### TFOD hyperparameters

You can specify some arguments in the `Hyperparameters` field seperated by new line. 

Here is a sample for Tensorflow Object Detection API: 

```bash
num-steps=100
``` 

Details:
- num-steps : number of steps to train your model for. If left empty, Onepanel will pick the recommended defaults for that model.
- batch-size : batch size for the training
- initial-learning-rate : initial learning rate for the model. We recommend you do not change this.
- num-clones (default=1): number of GPUs to train the model 
- schedule-step-1: step 1 for linear learning rate decay
- schedule-step-2: step 2 for linear learning rate decay

Note that you need to set `num-clones` to `4` (number of GPUs) if you select a node pool with say 4 GPUs (Tesla V100).

### Choosing the right model

- We currently support several faster-rcnn models. All of these models are similar except that of the backbone used for the feature extraction. The backbones used are, in increasing order of complexity (i.e more layers), ResNet50, ResNet101, InceptionResNetV2. As the model complexity increases the computation requirement will also increase. If you have very complicated data (i.e hundreds of annotations in one image), then it is recommended that you choose complex model (i.e InceptionResNetV2).

- Faster-rcnn models are generally more accurate than ssd models. However, sometimes you are better off using ssd models if your data is easy to learn (i.e 1 or 2 bounding box per image).

#### frcnn-nas-coco:

- If you are using `frcnn-nas-coco`, then choose a machine with at least 2 GPUs as this model requires more memory. A machine with 1 GPU will throw an error.

This is a type of faster-rcnn model with NAS backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2).

For how to set epochs, you can take a look at first model since both models are faster-rcnn based.

Note that current implementation of faster-rcnn in TensorFlow Object Detection API does not support batch training. That is, you shouldn't change `batch_size`.

***Defaults***: batch_size: 1, learning_rate: 0.0003, epochs=10000

#### frcnn-res101-coco: 

This is a type of faster-rcnn model with ResNet101 backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). 

For how to set epochs, you can take a look at first model since both models are faster-rcnn based.

Note that current implementation of faster-rcnn in TensorFlow Object Detection API does not support batch training. That is, you shouldn't change `batch_size`.

***Defaults***: batch_size: 1, learning_rate: 0.0003, epochs=10000

#### frcnn-res101-lowp

This is a type of faster-rcnn model with ResNet101 backbone with low number of proposals. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). If you are looking for more complex and accurate model then check out frcnn-res101-coco or frcnn-inc-resv2-atr-coco.

For how to set epochs, you can take a look at first model since both models are faster-rcnn based.

Note that current implementation of faster-rcnn in TensorFlow Object Detection API does not support batch training. That is, you shouldn't change `batch_size`.

***Defaults***: batch_size: 1, learning_rate: 0.0003, epochs=10000

#### frcnn-res50-coco

This is a type of faster-rcnn model with ResNet50 backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). If you are looking for more complex and accurate model then check out frcnn-res101-coco or frcnn-inc-resv2-atr-coco.

For how to set epochs, you can take a look at first model since both models are faster-rcnn based.

Note that current implementation of faster-rcnn in TensorFlow Object Detection API does not support batch training. That is, you shouldn't change `batch_size`.

***Defaults***: batch_size: 1, learning_rate: 0.0003, epochs=10000

#### ssd-mobilenet-v2-coco

SSD-based networks such as `ssd-mobilenet-v2` are faster than faster-rcnn based models. However, they are not as accurate as faster-rcnn based models. This model is generally recommended since its accurate and fast enough. If you don't know much about your data or the complexity of your data, then we recommend you go with this model.

You will find the pre-trained model and config file for ssd-mobilenetv2 model trained on COCO dataset.

This model is a good place to start if you don't have any specific model in mind. If you are data is very complicated (i.e many annotations per image) then you should prefer faster-rcnn models over ssd.

Depending upon your data, you can set epochs to train your model. There is no standard value which can work for all datasets. You generally have to try different number of epochs to get the best model. Ideally, you do so by monitoring loss of your model while training. But if you are looking for a recommendation. Then, we recommend you set epochs as follows: (number of images / batch_size (default: 24)) * 1000. For instance, if you have 100 images, then your epochs will be 4000 (rounded). Note that the model will be trained using a pre-trained model, so you don't need to train as long as you would have to when not using the pre-trained model.

***Defaults***: batch_size: 24, learning_rate: 0.004, epochs=10000

Note that same instructions apply for **ssd-mobilenet-v1** and **ssd-mobilenet-lite**. The only difference is the backbone model (i.e mobilenet v1) that they use.

## MaskRCNN model

MaskRCNN is a popular model for segmentation tasks. We use [this](https://github.com/matterport/Mask_RCNN) implementation of MaskRCNN for training and inference.

The process to train a Mask-RCNN model on CVAT is similar to the above process except that you need to select Mask-RCNN after clicking on Create Annotation Model.

![MaskRCNN Workflow](/img/maskrcnn-training.png)

### MaskRCNN hyperparameters 

Even though you don't need to enter any other parameters to start the training of Mask-RCNN, it is recommended that you pass correct epochs according your data. Mask-RCNN is a very deep model which takes too much time to train and also to get enough accuracy. 
We allow you to set epochs for three different parts of the model. These parts are called `stage1`, `stage2` and `stage3`. You can set corresponding epochs as follows:

```bash
stage-1-epochs=1
stage-2-epochs=2
stage-3-epochs=3
```

If you have few images (few hundreds), then we recommend you set total epochs (stage1+stage2+stage3) less than 10. We advise you set more epochs for stage1 than others. As your data size increases or the complexity of your data increases you might want to increase epochs. 

If you have ~1000 images then you don't have to set any parameters, CVAT will take care of it.
