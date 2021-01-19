---
title: Using trained models for automatic annotation
sidebar_label: Using trained models for automatic annotation
description: Onepanel - Using trained models for automatic annotation
---

You can use your trained models to pre-annotate your data. This can save you a lot of time since you don't have to annotate images from scratch. On Onepanel, you can leverage these features to pre-annotate your bounding boxes or polygon masks. You can also use Object Tracking to track objects in a sequence of frames.

## Uploading your model on CVAT

Before using any type of semi-automatic annotation, you will need to upload your model to CVAT Model Manager by clicking on **Models**. 

1. To upload a model, click on **Models**, and then click on **Create new model**. 

2. Click on select files and upload your model. Hit submit to upload the model. 
  :::note
  For TF Object Detection API and MaskRCNN, you will need two files the **model** and **classes.csv**. For TF Object Detection API, the model should be Tensorflow Frozen Graph (`.pb`). For MaskRCNN, it should be Keras model (`.h5`).
  :::

  ![Model Manager](/img/upload_model.PNG)
  
  :::note
  Since Onepanel automatically syncs data from cloud storage to local directory. You can click on **Connected file share** to use models from S3. You will find trained models in `root -> output -> <cvat-task-name> -> <workflow-name> -> <workflow-execution-name>`. For TensorFlow Object Detection API, there will be one more folder before `workflow-execution-time` based on the model you trained (i.e `frcnn-res50-coco`).
  :::

3. Click on **Models** again and you will find your model in the list. You can also use files from `Connected file share` just like creating new tasks.

  ![Uploaded Models](/img/upload_model_after.PNG)

## Running pre-annotation in CVAT

1. The first step is to upload your model on CVAT or use our default models which are available on CVAT. 

2. Click on **Automatic annotation** under Actions menu. 

  ![Click Actions](/img/cvat_select_automatic_annotation.png)

3. Select the model for pre-annotation. By default, you can use RCNN Object Detector (from Tensorflow Object Detection API) or  Mask RCNN Object Detector for semantic segmentation.

4. If you selected any models other than default ones then you will asked to do class mapping. CVAT will automatically map class from task to model's class.

  ![Class mapping](/img/class_mapping.png)

5. Click on **Submit** to start pre-annotation. Once it's done, you can click on **Open** to access the annotation.
  ![Automatic Annotation Running](/img/cvat_automatic_annotation_running.png)

6. Here is a output from default object detection model.

  ![Inference Output](/img/cvat_inference_output.png)

## Hardware requirements 

For training a model(Execute training Workflow), you can choose any GPU machine from the list. All of our models will work on any of the GPU machine. But if you want to train it faster, then we suggest you select machines with multiple GPUs (i.e 8 V100).

See the table below which details machine type with the corresponding runtime to perform pre-annotations.
For this test, we used a task with **3550 images (2GB)** to perform pre-annotations.

Machine     | Time     
------------|---------------
K80         | 160 minutes  
V100        | 80 minutes 
V100 x 4    | 21 minutes 

Run time depends on factors such as **model, number of images, type of machine.**

The above data was generated for ssd-mobilenet-v2 model which is the model we suggest to use in normal circumstances. If you have complex annotations and want to use faster-rcnn based model, then it might take slightly more time. But note that it won’t significantly alter the data presented above.

The other factor is image compression. By default, CVAT compresses images by 50%. We did some testing to find out if we use original images (without compression) then how much time it will take.

It turns out that if you use the original images without compression, your pre-annotation time will be increased by ~5-6% of that of 50% compressed images. So in the above table, if you use images without compression and use a V100, it will take 84 minutes instead of 80 minutes. Note that this compression does not affect annotation in any way.

Note that this data was calculated on 3550 images (1280 x 960)(total size=2GB), so if your data size is different you can easily extrapolate the data from the above table. For example, if you have 10gb of images then ideally it will take around 400 minutes on a V100 GPU. 

If the resolution of your images is slightly different, then it won’t affect run time significantly. In fact, if the difference is ~200 pixels then it won’t change at all, generally.

If you still have any questions, feel free to reach out to us at info@onepanel.io