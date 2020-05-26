---
title: Semi-autmatic annotation with CVAT
sidebar_label: Automatic annotation
---


## Semi-automatic annotation on CVAT

You can use your TensorFlow or OpenVINO model to pre-annotate your data. This can save you a lot of time since you don't have to annotate images from scratch. On Onepanel, you can leverage these features to pre-annotate your bounding boxes or polygon masks. You can also use Object Tracking to track objects in a sequence of frames.

## Uploading your model on CVAT
Before using any type of semi-automatic annotation, you will need to upload your model on CVAT Model Manager by clicking on Models. To upload your model, go to your CVAT dashboard and click on Models. A pop up window will appear where you can give a name to your model, select the source of your files (local or cloud), and select files. For TF Annotation and Segmentation, you will need two files- model and classes.csv. For TF Annotation, the model should be Tensorflow Frozen Graph (.pb). For Segmentation, it should be Keras model (.h5).

## Semi-automatic annotation of bounding boxes
The first step is to upload your model on CVAT or use our default model which are available on CVAT. Now, find Actions button for the task on which you want to run pre-annotation. Click on Automatic Annotation, a pop up will appear where you can select the model you want to use for pre-annotation. Once you select the model, an automatic class mapping will appear, you can modify it if you want. Once done, click on Start. Once it is done, you can go into your task and check out the pre-annotation.

## Semi-automatic annotation of polygon masks (segmentation)
For segmentation, you will have to attach the model to your workspace. Click on Add Dataset, search for maskrcnn-default and click on Add. Once done, please follow above procedure to upload it on your Model Manager. Now, on your CVAT dashboard, go to a task where you would like to run this pre-annotation model on, find `Run Auto Segmentation` button and click on it. Similar to the above, a list of models will appear. Select the model and hit Start. Your pre-annotation will be started.
Please note that the Mask RCNN model is a compute-intensive model. It would require at least a single GPU machine.

## Hardware requirements 
For training a model( Create New Annotation Model), you can choose any GPU machine from the list. All of our models will work on any of the GPU machine. But if you want to train it faster, then we suggest you select machines with multiple GPUs (i.e 8 V100).

For pre-annotation, you can use a CPU machine (32gb or above) for TF Annotation (bounding box). But It will be considerably slower. So, we suggest you choose a GPU machine for pre-annotation. 

For the pre-annotation of polygons, you have to use a GPU machine since the Mask RCNN model is compute-intensive.

Please find the table bewlo which details machine type with the corresponding runtime to perform pre-annotations.
For this test, we used a task with **3550 images (2GB)** to perform pre-annotations.

Machine     | Time     
------------|---------------
K80         | 160 minutes  
V100        | 80 minutes 
V100 x 4    | 21 minutes 

Run time depends on factors such as **model, number of images, type of machine.**

The above data was generated for ssd-mobilenet-v2 model which is the model we suggest to use in normal circumstances. If you have complex annotations and want to use faster-rcnn based model, then it might take slightly more time. But note that it won’t significantly alter the data presented above.

The other factor is image compression. By default, CVAT compresses images by 50%. We did some testing to find out if we use original images (without compression) then how much time it will take.

It turns out that if you use the original images without compression, your pre-annotation time will be increased by ~5-6% of that of 50% compressed images. So in the above table, if you use images without compression and use a V100, it will take 84 minutes instead of 80 minutes. Please note that this compression does not affect annotation in any way.

Note that this data was calculated on 3550 images (1280 x 960)(total size=2GB), so if your data size is different you can easily extrapolate the data from the above table. For example, if you have 10gb of images then ideally it will take around 400 minutes on a V100 GPU. 

If the resolution of your images is slightly different, then it won’t affect run time significantly. In fact, if the difference is ~200 pixels then it won’t change at all, generally.

If you still have any questions, feel free to reach out to us at info@onepanel.io
