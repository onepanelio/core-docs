---
title: Creating annotation models on CVAT
sidebar_label: Create annotation model
---


## Why pre-annotate?
<<<<<<< HEAD
Pre-annotation will cut the time to annotate large amounts of data by orders of magnitude.  The idea is simple, annotate once then QC each successive dataset after.
=======
Pre-annotation will cut the time to annotate large amounts of data by orders of magnitude. The idea is simple, annotate once then QC each successive dataset after.

>>>>>>> master
Once you have annotated enough data, you can train a model to pre-annotate the rest of your images with a few button clicks.

## Training object detection model through CVAT

<<<<<<< HEAD
1 - Annotate enough images in your CVAT task.  
2 - Go back to your CVAT dashboard and click on `Create New Annotation Model` in that task. You will see a popup with a few options.  
3 - Select the appropriate model type (TensorFlow OD API recommended) and then select the model (i.e ssd-mobilenet-v2-coco-201).  
4 - Select the machine type. A machine with multiple GPUs will speed up your training process.    
5 - Enter optional arguments. See below for more details.  
6 - Click on link to new model in email that will be sent to you once model training completes - locate the tf_annoation_model folder and inspect the contents.  
7 - Mount this new dataset to the CVAT workspace and click the button for the Model manager.  Then select files in tf_annotation_model folder.  
8 - Click TF_Annotion button for the current task.  

![CVAT flowchart](/static/img/auto-annotation-v.2.0.png?raw=true)
=======
1. Annotate enough images in your CVAT task.  
2. Go back to your CVAT dashboard and click on `Create New Annotation Model` in that task. You will see a popup with a few options.  
3. Select the appropriate model type (TensorFlow OD API recommended) and then select the model (i.e ssd-mobilenet-v2-coco-201).  
4. Select the machine type. A machine with multiple GPUs will speed up your training process.    
5. Enter optional arguments. See below for more details.  
6. Click on link to new model in email that will be sent to you once model training completes - locate the tf_annoation_model folder and inspect the contents.  
7. Mount this new dataset to the CVAT workspace and click the button for the Model manager.  Then select files in tf_annotation_model folder.  
8. Click TF_Annotion button for the current task.  

![CVAT flowchart](/img/auto-annotation-v.2.0.png)
>>>>>>> master


## Arguments (optional)

You can optionally specify some arguments in the `Arguments` field seperated by `;`. 

Here is a sample: `epochs=100;batch_size=24`. 

- epochs : number of epochs to train your model for. By default, we will train for an appropriate number of epochs depending upon the model.
- batch_size : batch size for the training
- initial_learning_rate : initial learning rate for the model. We recommend you do not change this.
- num_clones (default=1): number of GPUs to train the model 

If you select a Machine type with 4 GPUs (Tesla V100), the following command can be used:
`epochs=300000;num_clones=4`

- Note that num_clones is 4 because there are 4 GPUs available.

## Choosing the right base model

You can use any of the models that we support to train your custom pre-annotation models. Here, we provide a brief explanation on how to choose one model over another based on your needs. Some models are faster than others, whereas some are more accurate than others.  We hope this information will help you choose the right model for your task. 

* Note that we don't support Yolo and MaskRCNN models yet.

* We currently support a few faster-rcnn models. All of these models are similar except that of the backbone used for the feature extraction. The backbones used are, in increasing order of complexity (i.e more layers), ResNet50, ResNet101, InceptionResNetV2. As the model complexity increases the computation requirement will also increase. If you have very complicated data (i.e hundreds of annotations in one image), then it is recommended that you choose complex model (i.e InceptionResNetV2).

* Faster-rcnn models are generally more accurate than ssd models. However, sometimes you are better off using ssd models if your data is easy to learn (i.e 1 or 2 bounding box per image).

### frcnn-inc-resv2-atr-coco: 

This is a type of faster-rcnn model with InceptionResNetV2 backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2).

Depending upon your data, you can set epochs to train your model. There is no standard value which can work for all datasets. You generally have to try different number of epochs to get the best model. Ideally, you do so by monitoring loss of your model while training. But if you are looking for a recommendation. Then, we recommend you set epochs as follows: (number of images / batch_size (default: 1)) * 500. For instance, if you have 100 images, then your epochs will be 50000(rounded). Please note that the model will be trained using a pre-trained model, so you don't need to train as long as you would have to when not using the pre-trained model.

Please note that current implementation of faster-rcnn inTensorFlow Object Detection API does not support batch training. That is, you shouldn't change batch_size.

***Defaults***: batch_size: 1, learning_rate: 0.0003, epochs=10000

***Model***: https://c.onepanel.io/onepanel-demo/datasets/frcnn-inc-resv2-atr-coco/details


### frcnn-nas-coco:

* If you are using `frcnn-nas-coco`, then please choose a machine with at least 2 GPUs as this model requires more memory. A machine with 1 GPU will throw an error.

This is a type of faster-rcnn model with NAS backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2).

For how to set epochs, you can take a look at first model since both models are faster-rcnn based.

Please note that current implementation of faster-rcnn inTensorFlow Object Detection API does not support batch training. That is, you shouldn't change batch_size.

***Defaults***: batch_size: 1, learning_rate: 0.0003, epochs=10000

***Model***: https://c.onepanel.io/onepanel-demo/datasets/frcnn-nas-coco/details


### frcnn-res101-coco: 

This is a type of faster-rcnn model with ResNet101 backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). 

For how to set epochs, you can take a look at first model since both models are faster-rcnn based.

Please note that current implementation of faster-rcnn inTensorFlow Object Detection API does not support batch training. That is, you shouldn't change batch_size.


***Defaults***: batch_size: 1, learning_rate: 0.0003, epochs=10000

***Model***: https://c.onepanel.io/onepanel-demo/datasets/frcnn-res101-coco/details


### frcnn-res50-coco

 This is a type of faster-rcnn model with ResNet50 backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). If you are looking for more complex and accurate model then check out frcnn-res101-coco or frcnn-inc-resv2-atr-coco.

For how to set epochs, you can take a look at first model since both models are faster-rcnn based.

Please note that current implementation of faster-rcnn inTensorFlow Object Detection API does not support batch training. That is, you shouldn't change batch_size.

***Defaults***: batch_size: 1, learning_rate: 0.0003, epochs=10000

***Model***: https://c.onepanel.io/onepanel-demo/datasets/frcnn-res50-lowp/details


### frcnn-res50-lowp

This is a type of faster-rcnn model with ResNet50 backbone with low number of proposals. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). If you are looking for more complex and accurate model then check out frcnn-res101-coco or frcnn-inc-resv2-atr-coco.

For how to set epochs, you can take a look at first model since both models are faster-rcnn based.

Please note that current implementation of faster-rcnn inTensorFlow Object Detection API does not support batch training. That is, you shouldn't change batch_size.

***Defaults***: batch_size: 1, learning_rate: 0.0003, epochs=10000

***Model***: https://c.onepanel.io/onepanel-demo/datasets/frcnn-res50-coco/details



### ssd-mobilenet-v2-coco:

SSD-based networks such as `ssd-mobilenet-v2` are faster than faster-rcnn based models. However, they are not as accurate as faster-rcnn based models. This model is generally recommended since its accurate and fast enough. If you don't know much about your data or the complexity of your data, then we recommend you go with this model.

You will find the pre-trained model and config file for ssd-mobilenetv2 model trained on COCO dataset.

This model is a good place to start if you don't have any specific model in mind. If you are data is very complicated (i.e many annotations per image) then you should prefer faster-rcnn models over ssd.

Depending upon your data, you can set epochs to train your model. There is no standard value which can work for all datasets. You generally have to try different number of epochs to get the best model. Ideally, you do so by monitoring loss of your model while training. But if you are looking for a recommendation. Then, we recommend you set epochs as follows: (number of images / batch_size (default: 24)) * 1000. For instance, if you have 100 images, then your epochs will be 4000 (rounded). Please note that the model will be trained using a pre-trained model, so you don't need to train as long as you would have to when not using the pre-trained model.

***Defaults***: batch_size: 24, learning_rate: 0.004, epochs=15000

***Model***: https://c.onepanel.io/onepanel-demo/datasets/ssd-mobilenet-v2-coco/details


## Training segmentation model through CVAT
The process to train a Mask-RCNN model on CVAT is similar to the above process except that you need to select Mask-RCNN after clicking on Create Annotation Model.
***Parameters***: Even though you don't need to enter any parameters to start the training of Mask-RCNN, it is recommended that you pass correct epochs according your data. Mask-RCNN is a very deep model which takes too much time to train and also to get enough accuracy. 
We allow you to set epochs for three different parts of the model. These parts are called `stage1`, `stage2` and `stage3`. You can set corresponding epochs through `--stage1_epochs`, `--stage2_epochs`, and `--stage3_epochs`.

If you have few images (few hundreds), then we recommend you set total epochs (stage1+stage2+stage3) less than 10. We advise you set more epochs for stage1 than others. As your data size increases or the complexity of your data increases you might want to increase epochs. 

If you have ~1000 images then you don't have to set any parameters, CVAT will take care of it.

## Adding your own base model to CVAT

You can also add your own base models to CVAT via Onepanel.  Please email us at info@onepanel.io to learn how.

## Open source code

You can find the code that triggers dataset creation, base model pulling, model training, and model conversion here:

https://github.com/onepanelio/cvat-training
