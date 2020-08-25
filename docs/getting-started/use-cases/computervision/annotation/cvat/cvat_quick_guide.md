---
title: Quick start
sidebar_label: Quick start
description: Onepanel use case - computer vision automatic annotation
---

For this quick start, we'll be using OpenCV's [Computer Vision Annotation Tool (CVAT)](https://github.com/opencv/cvat). You will be able to use an existing model to pre-annotate your images or videos and then continuously train and improve your model on new data.

For this quick start, we'll setup CVAT on Onepanel, annotate some images, train a model on this images, and use this newly trained model for pre-annotation.

## 1. Setting up CVAT

### a. Creating CVAT workspace

To launch CVAT, click on Workspaces, and you will find Create Workspace button as shown below.

![Create Workspace](/img/create_workspaces_button_in_workspaces_page.png)

Now, select CVAT, machine type, you can also modify other parameters such as disk size. Once done, click on `CREATE AND RUN`. This will launch a new CVAT workspace. Please note that minimum RAM requirement for CVAT is 16GB.

![Create CVAT](/img/launch_cvat.png)

:::note
Please note that the default CVAT workspace comes with a filesyncer which syncs data with your cloud provider. If the directory you will be syncing is large, make sure you allocate appropriate disk size for `share` mount.
:::

### b. Using filesyncer with CVAT (optional)

The default CVAT workspace comes with a file syncer which syncs local directory (`/mnt/share`) with directory on your cloud provider. You should not change the directory on local machine since CVAT reads data from that directory. However, you can specify directory on your cloud provider (i.e S3). In other words, you can use data available in that directory on cloud storage directly in CVAT (i.e Connected file storage).

File syncer downloads all data from cloud storage to local directory from where CVAT reads the data. By default, this directory on cloud storage is `workflow-data`. We recommend you don't change this directory. But if required, you can change this directory by modifying default directory name while creating CVAT workspace as shown below.

![CVAT sync directory](/img/sync_dir.png)

### c. CVAT super user and environment variables (optional)

CVAT requires super user permission to perform certain tasks. Onepanel automatically creates a superuser when you execute CVAT workspace. Your username will be `admin` and password will be onepanel token. Please note that you generated auth token for Onepanel while setting up the Onepanel. [See step #9](/docs/getting-started/quickstart#step-1-install-onepanel) of installation guide.

You don't need to set any environment variables to use default features. But you may need to set some environment variables for some custom features (i.e slack notifications). You can easily set environment variables by clicking Settings button on top nav bar. This will open up a settings page, where you can set environment variables. Following is an example of setting an environment variable.
![Set Enviornment Variable](/img/env_set.PNG)

## 2. Annotating frames in CVAT

Once you're inside CVAT dashboard, you can create new tasks to start annotating. You will find a Create New Task button on top, clicking on it will open up a new pop up window as follows:

![Create new task](/img/create_new_task.PNG)

Now, you can give this task a name you like. Then, labels that you are interested in annotating (i.e car, bicycle). You also need to select the source of your data (images). You can upload from your local machine or use data uploaded to your cloud storage. Please note that in order to use data from cloud storage, you must set appropriate directory while creating CVAT workspace. 

If you want to use data from your cloud storage while creating a new task, you can select `Connected file share` while creating new task. It will show all the files from `workflow-data` (by default) directory on cloud storage.
![Create task from shared storage](/img/create_new_task_shared.PNG)

### a. Manual annotation

Once you have created a new task, you can start annotating your data. CVAT supports points, box, polylines, polygons for annotation. So, the first thing you should do is go to left sidebar and select the type of annotation you want as shown below. 

- **Points**: 
If you want to annotate points, then select Points instead of Box which is a default choice. Once you select points, you can start annotating by clicking on Create Shape, clicking on image where you want to put the point and then click on stop shape. Or alternatively you can use keyboard shortcut N instead of Create Shape/Stop Shape. Make sure you periodically save your annotation by pressing ctrl + s.

- **Bounding box**:
The same process follows for bounding boxes. Select Box and press N to start annotating once done, press N to finish annotation. Sometimes N will draw `rectangle shape` and sometimes it will draw `rectangle track`. In order to ensure you have the right one, please draw one box by manually selecting Shape or Track from the UI. Once you manually select type of box from the UI, it will draw what you selected for the box everytime you press N.

![Annotation](/img/draw_shape.PNG)

- **Polygons**:
Similarly, select polygons or polylines and follow same procedure for annotation.

![Select annotation](/img/rectange_new_cvat.PNG)

It is highly recommended that you dump your annotation periodically. In case of any failure, this can be used to recover the tasks.

:::note
Please note that you can use pre-trained models for pre-annotation of your frames. This will drastically reduce time it takes for annotation. For more information on pre-annotation, please see section 4.
:::

## 3. Training new annotation model from CVAT

Onepanel also allows you to further finetune your model for annotation. Once you are done with your annotation or adjustment to pre-annotation, you can train a new model on it. To do so, go to dashboard and click on Actions under the task for which you want to train a model. Then, select `Execute training workflow`.

There, you can select any training workflows you like. You can add your own training workflows/model as well. Checkout more about Onepanel Workflow [here](/docs/getting-started/concepts/workflows).

By default, you can use either Tensorflow OD API for bounding boxes or Mask RCNN for segmentation.

![Create Annotation Model](/img/maskrcnn-training.png)

Here, you can set various parameters for model training. You can select previously trained model as a checkpoint by setting `Checkpoint path`. For more information on these parameters, please take a look at our [documentation](./cvat_annotation_model) on training models.

## 4. Using machine learning model for pre-annotation

Onepanel’s CVAT supports a feature to pre-annotate images for common objects. You can add your custom models to pre-annotation other objects as well. In order to use any pre-annotation feature, you first need to upload the model. By default, we provide Faster RCNN for object detection and Mask RCNN for semantic segmentation. 

To upload a model, click on Models, and give a name to it. Click on select files and upload your model (.pb and .csv file). Hit submit to upload the model. 
![Model Manager](/img/upload_model.PNG)

Once you submit your model, click on Models again and you will find your model in the list. You can also use files from `Connected file share` just like creating new tasks.

![Uploaded Models](/img/upload_model_after.PNG)

Once you have the models in Model Manager. Click on Automatic Annotation under Actions menu. Then, you will be asked to select the model you want to use for pre-annotation. You can also control the class mapping from your task’s classes to model’s classes. Once done, click on Submit to start pre-annotation. Once it's done, you can click on the task link to access the annotation.

![Class mapping](/img/class_mapping.png)

If you need help or have questions regarding CVAT, please feel free to ask them on our [Slack channel.](https://join.slack.com/t/onepanel-ce/shared_invite/zt-eyjnwec0-nLaHhjif9Y~gA05KuX6AUg)