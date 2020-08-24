---
title: Creating annotation models on CVAT
sidebar_label: Create annotation model
description: Onepanel use case - computer vision automatic annotation
---


## Why pre-annotate?
Pre-annotation will cut the time to annotate large amounts of data by orders of magnitude. The idea is simple, annotate once then QC each successive dataset after.

Once you have annotated enough data, you can train a model to pre-annotate the rest of your images with a few button clicks.

## Training deep learning model through CVAT

![CVAT flowchart](/img/auto-annotation-v.2.0.png)

1. Annotate enough images in your CVAT task.  
2. Go back to your CVAT dashboard and click on Actions and find `Execute training workflow` in that task. You will see a popup with a few options.  
3. Select the appropriate model type (TensorFlow OD API or MaskRCNN, you can add your own model as well) and then select the model (i.e ssd-mobilenet-v2-coco).  
4. Select the machine type. A machine with multiple GPUs will speed up your training process.  
5. Select the checkpoint model to start training from. These are the models that you trained previously in this namespace. This is optional. By default, a model trained on COCO will be used. Please make sure that the base model you select is compatible with the current task. The number of classes should be same, and if you use model trained on other types of data then accuracy might deteriorate.
6. Enter right hyperparameters. See below for more details on hyperparameters.  
7. Your trained model, checkpoints, and classes file will be stored on your cloud storage (i.e s3 bucket).

## TensorFlow Object Detection API

You can use any of the models that we support for TensorFlow Object Detection API to train your custom pre-annotation models. Here, we provide a brief explanation on how to choose one model over another based on your needs. Some models are faster than others, whereas some are more accurate than others.  We hope this information will help you choose the right model for your task. 

![TensorFlow Object Detection Workflow](/img/tf-object-detection.png)

### Hyperparameters

You can specify some arguments in the `Hyperparameters` field seperated by new line. 

Here is a sample for Tensorflow Object Detection API: 

```bash
num-steps=100
``` 

Details:
- num-steps : number of steps to train your model for. By default, we will train for an appropriate number of epochs depending upon the model.
- batch_size : batch size for the training
- initial_learning_rate : initial learning rate for the model. We recommend you do not change this.
- num-clones (default=1): number of GPUs to train the model 
- schedule-step-1: step 1 for linear learning rate decay
- schedule-step-2: step 2 for linear learning rate decay

Please note that number of classes will be automatically populated if you have `sys-num-classes` parameter defined in a workflow. Also, if you select a Machine type with 4 GPUs (Tesla V100), the following command can be used:
`num_clones=4`

- Note that num_clones is 4 because there are 4 GPUs available.

### Choosing the right base model

- We currently support several faster-rcnn models. All of these models are similar except that of the backbone used for the feature extraction. The backbones used are, in increasing order of complexity (i.e more layers), ResNet50, ResNet101, InceptionResNetV2. As the model complexity increases the computation requirement will also increase. If you have very complicated data (i.e hundreds of annotations in one image), then it is recommended that you choose complex model (i.e InceptionResNetV2).

- Faster-rcnn models are generally more accurate than ssd models. However, sometimes you are better off using ssd models if your data is easy to learn (i.e 1 or 2 bounding box per image).

#### frcnn-nas-coco:

- If you are using `frcnn-nas-coco`, then please choose a machine with at least 2 GPUs as this model requires more memory. A machine with 1 GPU will throw an error.

This is a type of faster-rcnn model with NAS backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2).

For how to set epochs, you can take a look at first model since both models are faster-rcnn based.

Please note that current implementation of faster-rcnn inTensorFlow Object Detection API does not support batch training. That is, you shouldn't change batch_size.

***Defaults***: batch_size: 1, learning_rate: 0.0003, epochs=10000


#### frcnn-res101-coco: 

This is a type of faster-rcnn model with ResNet101 backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). 

For how to set epochs, you can take a look at first model since both models are faster-rcnn based.

Please note that current implementation of faster-rcnn inTensorFlow Object Detection API does not support batch training. That is, you shouldn't change batch_size.


***Defaults***: batch_size: 1, learning_rate: 0.0003, epochs=10000

#### frcnn-res101-lowp

This is a type of faster-rcnn model with ResNet101 backbone with low number of proposals. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). If you are looking for more complex and accurate model then check out frcnn-res101-coco or frcnn-inc-resv2-atr-coco.

For how to set epochs, you can take a look at first model since both models are faster-rcnn based.

Please note that current implementation of faster-rcnn inTensorFlow Object Detection API does not support batch training. That is, you shouldn't change batch_size.

***Defaults***: batch_size: 1, learning_rate: 0.0003, epochs=10000


#### frcnn-res50-coco

 This is a type of faster-rcnn model with ResNet50 backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). If you are looking for more complex and accurate model then check out frcnn-res101-coco or frcnn-inc-resv2-atr-coco.

For how to set epochs, you can take a look at first model since both models are faster-rcnn based.

Please note that current implementation of faster-rcnn inTensorFlow Object Detection API does not support batch training. That is, you shouldn't change batch_size.

***Defaults***: batch_size: 1, learning_rate: 0.0003, epochs=10000


#### ssd-mobilenet-v2-coco:

SSD-based networks such as `ssd-mobilenet-v2` are faster than faster-rcnn based models. However, they are not as accurate as faster-rcnn based models. This model is generally recommended since its accurate and fast enough. If you don't know much about your data or the complexity of your data, then we recommend you go with this model.

You will find the pre-trained model and config file for ssd-mobilenetv2 model trained on COCO dataset.

This model is a good place to start if you don't have any specific model in mind. If you are data is very complicated (i.e many annotations per image) then you should prefer faster-rcnn models over ssd.

Depending upon your data, you can set epochs to train your model. There is no standard value which can work for all datasets. You generally have to try different number of epochs to get the best model. Ideally, you do so by monitoring loss of your model while training. But if you are looking for a recommendation. Then, we recommend you set epochs as follows: (number of images / batch_size (default: 24)) * 1000. For instance, if you have 100 images, then your epochs will be 4000 (rounded). Please note that the model will be trained using a pre-trained model, so you don't need to train as long as you would have to when not using the pre-trained model.

***Defaults***: batch_size: 24, learning_rate: 0.004, epochs=10000

Please note that same instructions apply for ssd-mobilenet-v1 and ssd-mobilenetlite. The only difference is the backbone model (i.e mobilenet v1) that they use.


## Training MaskRCNN model through CVAT

MaskRCNN is a popular model for segmentation tasks. We use [this](https://github.com/matterport/Mask_RCNN) implementation of MaskRCNN for training and inference.

The process to train a Mask-RCNN model on CVAT is similar to the above process except that you need to select Mask-RCNN after clicking on Create Annotation Model.

![MaskRCNN Workflow](/img/maskrcnn-training.png)

***Parameters***: Even though you don't need to enter any other parameters to start the training of Mask-RCNN, it is recommended that you pass correct epochs according your data. Mask-RCNN is a very deep model which takes too much time to train and also to get enough accuracy. 
We allow you to set epochs for three different parts of the model. These parts are called `stage1`, `stage2` and `stage3`. You can set corresponding epochs as follows:

```bash
stage-1-epochs=1
stage-2-epochs=2
stage-3-epochs=3
```

If you have few images (few hundreds), then we recommend you set total epochs (stage1+stage2+stage3) less than 10. We advise you set more epochs for stage1 than others. As your data size increases or the complexity of your data increases you might want to increase epochs. 

If you have ~1000 images then you don't have to set any parameters, CVAT will take care of it.

## How to run inference on test data using trained model

Often you are required to make prediction on test data. Using CVAT on Onepanel, you can easily train/test your model and visualize output. Once you have the trained model, upload it to the CVAT by clicking on `Create new model` on `models` tab.

Now, create a task with your test data.

Click on Actions for that task and select Automatic annotation. Select the model you just uploaded and hit submit. It will run the inference using the model you selected. Below is a sample frame whose output was generated using the trained model. For more information on automatic annotation, please refer to our guide on [automatic annotation](./cvat_automatic_annotation).

![Inference Output](/img/inference_output.PNG)

## Notes

- There are certain parameters that are prefixed with `cvat` in TF Object Detection Training and MaskRCNN Training workflows. Those are special parameters and will be populated in whole or partly by the CVAT. For example, `cvat-output-path` is generated by the CVAT and it won't be shown to users. Another example is `cvat-finetune-checkpoint`. CVAT will automatically find all available checkpoints for a given workflow/model since they are available locally because of file syncer. 
- Please note that these instructions are for default models that we provide. You can always edit these workflows or even add your own workflows/models and train them.
- You  can find the code that connects  [here](https://github.com/onepanelio/cvat-training).