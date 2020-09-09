---
id: welcome
title: Train object detection model from scratch and run inference on it in 10 minutes
author: Savan Visalpara
author_title: Machine Learning Engineer Intern
author_url: https://github.com/savan77
author_image_url: http://1.gravatar.com/avatar/0d1dd8e9d8d8c1198781c5fe8af36184
tags: []
---

Let's say you are a farmer and found about these great object detection or segmentation models that you can potenally use to do some automated analysis of crops. Moreover, let's say you know a little bit about computers but you are not an expert nor you know anything about AI or deep learning models. How do you build these models for your use case? 

Assuming you will not be writing your own model, you will probably use a popular repository like [TensorFlow Object Detection API](https://github.com/tensorflow/models/tree/master/research/object_detection) to train these models. This will require you to set up this repository and run some commands in a terminal. Even a computer expert might take from a few hours to a day to install all the dependencies and setup this repository on a local machine. I didn't even mention anything about annotation though. Since your objects are unique, you will probably not find an existing annotated dataset. You will need to use any annotation tool to annotate or have someone annotate these images for you. This whole process can take hours or even a few days to complete. 

In this post, we will see how you can use Onepanel to train your models on custom objects starting from annotation to running inference using this newly trained model and visualizing its results. This can be easily done within 10 minutes on Onepanel excluding the actual training time and annotation time.

## Getting data ready
The first thing we need to do is annotate some images to train our model on. For this blog, we are going to be training an object detection model that can detect macbooks in an image. For this, I have downloaded some 70 or so images. Of which, we will use 60 to train the model and 10 to run the inference on. Of couse, you cannot get a highly accurate model by just training on 50 or so images. Ideally, you want to use a lot of images and also play with hyperparameters to come up with the best model. But for this demo, we will stick to 60 and hopefully our model will still be a good one.

<images-sample-macbook-images>

Let's first create two tasks- train and test. We will upload 60 images to `train` task and remaining 10 or so to `test` task. You can upload these images to your cloud provider (i.e S3) and use it directly from CVAT or upload from a local machine. 

<image-task-train-creating>

Now, let's annotate macbooks in those 60 images. It took me less than 10 minutes to annotate these 60 images.

## Training an object detection model from CVAT
Now that we have our data ready, we can go ahead and starting training our model. 

1. Click on **Actions** for `train` task, and select **Execute training Workflow**. 
2. Select **TF Object Detection Training** as a Workflow template. <image-workflow-popup>
3. Select the model you want to train. I will choose Faster RCNN-ResNet 101 COCO.
4. Update any parameters if you want. I will update `num-steps` to 5000. There are no specific rules about how to choose number of steps. You can try with different numbers.
5. Once done, hit **Submit**. It might take some time to upload data to cloud storage. You will see a notification card with a link to Workflow execution page where the model is being trained. You can check logs there as well.<image-workflow-execution>

## Running inference using this newly trained model
Now, we can use this model to run inference on 10 images that we set aside. Since we had only 60 images, ideally we should not expect a highly accurate model. Anyway, let's upload the model to CVAT and run inference using it.

1. Click on **Models** to go to Model Manager.
2. Click on **Create new model** to upload the model.
3. Click on **Connected file storage** and select `frozen_inference_graph.pb` and `classes.csv` from root -> output -> train (task name) -> tf-object-detection-training -> frcnn-res101-coco (model that was trained) -> tf-object-detection-training-zx74h (Workflow that was executed).
4. Hit **Submit**.
5. Click on **Models** again or refresh the page to see newly uploaded model in the list.

<image-upload>

Now we can run inference on `test` task as follows:

1. Click on **Actions** under `test` task and select **Automatic annotation**.
2. Select the uploaded model (`macbook-detector`).
3. It will automatically map labels from `test` task to model's classes if they are similar (i.e `macbook` -> `macbook`).
<image-mapping>
4. Click on **Submit** and the inference process will be started.
<image-inference-running>


## Conclusion
In this post, we saw how you can leverage Onepanel to train object detection model from scratch and run inference using it with a few clicks. You can do the same for semantic segmentation using maskrcnn-training template. The good news is Onepanel is free to use and open-source. If you like Onepanel please give us a star on [Github](https://github.com/onepanelio/core).