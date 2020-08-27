---
title: Getting started
sidebar_label: Getting started
description: Onepanel - vision AI automatic annotation
---

For this quick start, we'll be using OpenCV's [Computer Vision Annotation Tool (CVAT)](https://github.com/opencv/cvat). You will be able to use an existing model to pre-annotate your images or videos and then continuously train and improve your model on new data.

For this quick start, we'll setup CVAT on Onepanel, annotate some images, train a model on this images, and use this newly trained model for pre-annotation.

## 1. Setting up CVAT

Onepanel is fully integrated with [Computer Vision Annotation Tool (CVAT)](https://github.com/opencv/cvat), allowing you to annotate images and videos and then train models on the annotated data with a few clicks. You can then use these newly trained models to automatically pre-annotate additional data, iteratively improving your object detection or semantic segmentation models.

:::tip
You can also bring your own labeling tool as a reproducible template in Onepanel. See our [Workspace templates documentation](http://localhost:3000/docs/reference/workspaces/templates) for more information.
:::

1. Go to **Workspaces** and click **Create Workspace**.
![Create Workspace](/img/create_workspaces_button_in_workspaces_page.png)

2. Select the CVAT template and enter a name for your Workspace.
![](/img/quickstart-115738.png)

3. Select a node pool that Onepanel will use to provision a machine for running CVAT. CVAT requires at least 16GB of RAM.
![](/img/quickstart-133251.png)
:::note
Some providers have limits on how many volumes you can attach to a node. The default CVAT template in Onepanel requires 6 volumes, so make sure to pick a machine that can support at least that many volumes.
:::
:::tip
You can switch to a different node pool (for example one that supports GPUs) in a running Workspace at any time by clicking the Onepanel icon in the bottom right corner of your Workspace.
:::

4. Next, add the directory you want Onepanel to pull raw input data and store training output (pickled models, classes, etc.). This directory should be in the default object storage you configured when you launched Onepanel and in a directory that matches your current namespace.
![](/img/quickstart-171037.png)

5. Click **Create and Run** to launch your CVAT Workspace.

6. Once CVAT is running, click **View**.
![](/img/quickstart-173734.png)

7. In CVAT, click **Create new task**.
![](/img/quickstart-173841.png)

8. Enter a name for your task and then under **Constructor**, add your labels. See [CVAT's user guide](https://github.com/opencv/cvat/blob/develop/cvat/apps/documentation/user_guide.md#creating-an-annotation-task) for additional information on more advanced label configuration.

9. Under "Select files", click **Connected file share**. Files from your object storage location above should have already synced here. Pick the ones you want to annotate.
![](/img/quickstart-180004.png)
:::important
Onepanel's FileSyncer automatically syncs files from your object storage location to this CVAT instance (`/mnt/share`) every 5 minutes. You should not change the directory on local machine since CVAT reads data from that directory. However, you can specify directory on your cloud storage (i.e S3). By default, this directory on cloud storage is `workflow-data`. We recommend you don't change this directory. But if required, you can change this directory by modifying default directory name while creating CVAT workspace.
:::

10. Click **Submit** and then click the **Tasks** menu item to go to the tasks list.

11. Click **Open** to open task details.
![](/img/cvat_open.png)

12. Click **Job #1** to go into CVAT to start annotating your data. See [CVAT's user guide](https://github.com/opencv/cvat/blob/develop/cvat/apps/documentation/user_guide.md#interface-of-the-annotation-tool) for more information on the annotation tool interface.

:::note
CVAT requires super user permission to perform certain tasks. Onepanel automatically creates a superuser when you create a new CVAT workspace. Your username will be `admin` and password will be onepanel token. Please note that you generated auth token for Onepanel while setting up the Onepanel. [See step #9](/docs/getting-started/quickstart#step-1-install-onepanel) of installation guide.
:::

## 2. Annotating frames in CVAT

Once you have created a new task, you can start annotating your data. CVAT supports points, box, polylines, polygons for annotation. 

1. Click **Open** to open task details.
![](/img/cvat_open.png)

2. Click **Job #1** to go into CVAT to start annotating your data. See [CVAT's user guide](https://github.com/opencv/cvat/blob/develop/cvat/apps/documentation/user_guide.md#interface-of-the-annotation-tool) for more information on the annotation tool interface.

- **Bounding box**:
Select Box from the left sidebar and press N to start annotating once done, press N to finish annotation. Sometimes N will draw `rectangle shape` and sometimes it will draw `rectangle track`. In order to ensure you have the right one, please draw one box by manually selecting Shape or Track from the UI. Once you manually select type of box from the UI, it will draw what you selected for the box everytime you press N.

![Annotation](/img/cvat_draw_box.png)

- **Polygons**:
Similarly, select polygons or polylines and follow same procedure for annotation.

![Select annotation](/img/cvat_draw_polygon.png)

3. Press `ctrl` + `s` to save your task.

:::tip
It is highly recommended that you dump your annotation periodically. In case of any failure, this can be used to recover the tasks.
:::
:::note
Please note that you can use pre-trained models for pre-annotation of your frames. This will drastically reduce time it takes for annotation. For more information on pre-annotation, please see section 4.
:::

## 3. Training new annotation model from CVAT

Onepanel also allows you to train or further finetune your model for pre-annotation in CVAT or any other use cases. Once you are done with your annotation or adjustment to pre-annotation, you can train a new model on it. 

1. Click on **Actions** for a task you want to train a model on. Then, click on **Execute training Workflow**.
![Select training workflow](/img/cvat_select_workflow_execution.png)

2. Select Workflow template (i.e model to train). By default, you can use TensorFlow Object Detection for object detection or MaskRCNN for semantic segmentation. Below image shows a case for Tensorflow Object Detection.
![Train a model from CVAT](/img/tf-object-detection.png)

3. Update hyper-parameters and settings as per your requirements. Most of the parameters visible above are related to the model (MaskRCNN) and system (i.e machine). For this guide, you can change `num-steps` from default 10000 to 1000. You can also select the checkpoint path from previously trained model. You can leave it empty if you don't have an appropriate, previously trained model.

4. Click **Submit**. This will execute the Onepanel Workflow for selected model. You can see Workflow logs by going to Workflow execution page. You can find the URL for the same in the notification card.
![Workflow URL](/img/execution_url.png)

:::tip
Please note you can easily add your own models as well. Please refer our [documentation](/docs/getting-started/use-cases/computervision/annotation/cvat/adding_custom_model) for more information on adding custom models. 

You can also use this trained model to run pre-annotation in CVAT. Please refer our [documentation](/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation) for more information on pre-annotation.
:::

## 4. Using deep learning models for pre-annotation

Onepanel’s CVAT supports a feature to pre-annotate images for common objects. You can add your custom models to pre-annotation other objects as well. In order to use any pre-annotation feature, you first need to upload the model. By default, we provide Faster RCNN for object detection and Mask RCNN for semantic segmentation. 

1. To upload a model, click on **Models**, and then click on **Create new model**. 

2. Click on select files and upload your model (`.pb` and `.csv` for Tensorflow Object Detectio and `.h5` and `.csv` for MaskRCNN). Hit submit to upload the model. 
![Model Manager](/img/upload_model.PNG)

3. Click on **Automatic annotation** under Actions menu. Then, you will be asked to select the model you want to use for pre-annotation. You can also control the class mapping from your task’s classes to model’s classes.
![Class mapping](/img/class_mapping.png)

4. Click on **Submit** to start pre-annotation. Once it's done, you can click on **Open** to access the annotation.
![Automatic Annotation Running](/img/cvat_automatic_annotation_running.png)

![Inference Output](/img/cvat_inference_output.png)

If you need help or have questions regarding CVAT, please feel free to ask them on our [Slack channel.](https://join.slack.com/t/onepanel-ce/shared_invite/zt-eyjnwec0-nLaHhjif9Y~gA05KuX6AUg)