---
title: Quick start
sidebar_label: Quick start
description: Onepanel use case - computer vision automatic annotation
---

For this quick start, we'll be using OpenCV's [Computer Vision Annotation Tool (CVAT)](https://github.com/opencv/cvat). You will be able to use an existing model to pre-annotate your images or videos and then continuously train and improve your model on new data.

## Creating super user

CVAT requires super user permission to perform certain tasks. Onepanel automatically creates a superuser when you execute CVAT workspace. Your username will be `admin` and password will be onepanel token.

## Setting up environment variables

You don't need to set any environment variables to use default features. But you may need to set some environment variables for your custom features (i.e slack notifications). You can easily set environment variables by clicking Settings button on top nav bar. This will open up a settings page, where you can set environment variables. Following is an example of setting an environment variable.
![Set Enviornment Variable](/img/env_set.PNG)


## Creating new tasks
Once you're inside CVAT dashboard, you can create new tasks to start annotating. You will find a Create New Task button on top, clicking on it will open up a new pop up window as follows:
![Create new task](/img/create_new_task.PNG)

Now, you give this task a name you like. Then, labels that you are interested in annotating (i.e car, bicycle). You also need to select the source of your data (images). You can upload from your local machine or use data uploaded to S3.

## Using data from S3

If you want to use data from your S3 drive while creating new task. You must set `SYNC_S3_BUCKET_NAME` environment as mentioned above. Now, you can select `Connected file share` while creating new task. It will show all the files from S3 bucket, or from the directory if you set `SYNC_S3_PREFIX`.
![Create task from shared storage](/img/create_new_task_shared.PNG)

## Manual annotation
Once you have created a new task, you can start annotating your data. CVAT supports points, box, polylines, polygons for annotation. So, the first thing you should do is go to left sidebar and select the type of annotation you want as shown below. 
![Select annotation](/img/rectange_new_cvat.PNG)

### Points
If you want to annotate points, then select Points instead of Box which is a default choice. Once you select points, you can start annotating by clicking on Create Shape, clicking on image where you want to put the point and then click on stop shape. Or alternatively you can use keyboard shortcut N instead of Create Shape/Stop Shape. Make sure you periodically save your annotation by pressing ctrl + s.

### Bounding box
The same process follows for bounding boxes. Select Box and press N to start annotating once done, press N to finish annotation. Sometimes N will draw `rectangle shape` and sometimes it will draw `rectangle track`. In order to ensure you have the right one, please draw one box by manually selecting Shape or Track from the UI. Then, onward pressing N will draw what you selected for the box.
![Annotation](/img/draw_shape.PNG)

If you want to change the class of an object. Finish drawing bounding box around an object, then go to right sidebar and change the class from a dropdown menu. The same has been heighted in blue color in above picture. 

### Polygons
Similarly, select polygons or polylines and follow same procedure for annotation.

It is highly recommended that you dump your annotation periodically. In case of any failure, this can be used to recover the tasks.

## Using pre-annotation model
Onepanel’s CVAT supports a feature to pre-annotate images for common objects. In order to use any pre-annotation feature, you first need to upload the model. By default, we provide a default model for bounding box annotation. Click on Models, and give a name to it. Click on select files and upload your model (.pb and .csv file). Hit submit to upload the model. 
![Model Manager](/img/upload_model.PNG)

Once you submit your model, click on Models again and you will find your model in the list. You can also use files from `Connected file share` if you set appropriate environment variables. See `Setting up environment variables` section.

![Uploaded Models](/img/upload_model_after.PNG)

Once you have the models in Model Manager. Click on Automatic Annotation under Actions menu. Then, you will be asked to select the model you want to use for pre-annotation. You can also control the class mapping from your task’s classes to model’s classes. Once done, click on Submit to start pre-annotation. Once it's done, you can click on the task link to access the annotation.

## Training new annotation model
Onepanel also allows you to further finetune your model for annotation. Once you are done with your annotation or adjustment to pre-annotation, you can train a new model on it. To do so, go to dashboard and click on Actions under the task for which you want to train a model. Then, select `Execute training workflow`.

There, you can select any training workflows you like. You can add your own training workflows or support for model as well. Checkout more about Onepanel Workflow [here](/docs/getting-started/concepts/workflows). For refernce, you can also use our default workflows for MaskRCNN and Tensorflow Object Detection API.

By default, you can use either Tensorflow OD API for bounding boxes or Mask RCNN for segmentation.

![Create Annotation Model](/img/create_annotation_model_base.png)

### How to choose the model:
If you are unsure about which model to use, we usually suggest ssd-mobilenet-v2 since ssd-based models are faster and accurate enough for most of the work. Faster-rcnn (frcnn) models are more accurate in general but they will be relatively slow during training as well as inference. If accuracy is more important to you, we suggest you go with frcnn-res50-coco model.

