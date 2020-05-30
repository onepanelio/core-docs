---
title: Quick start
sidebar_label: Quick start
---

For this quick start, we'll be using OpenCV's [Computer Vision Annotation Tool (CVAT)](https://github.com/opencv/cvat). You will be able to use an existing model to pre-annotate your images or videos and then continuously train and improve your model on new data.

## Setup

In order to use CVAT on Onepanel, we need to create a new Workspace for CVAT. More information on Workspaces can be found [here](/docs/getting-started/concepts/workspaces).

We will be using following Workspace Template to create the Workspace:

:::note
A copy of this template is readily available in "Template Builder"
:::

```yaml
#specify all the required containers for cvat
#this is very similar to the original docker-compose.yml file
#specify containers, env vars, ports, volumes for each container
containers:
- name: cvat-db
  image: postgres:10-alpine
  env:
  - name: POSTGRES_USER
    value: root
  - name: POSTGRES_DB
    value: cvat
  - name: POSTGRES_HOST_AUTH_METHOD
    value: trust
  - name: PGDATA
    value: /var/lib/postgresql/data
  ports:
  - containerPort: 5432
    name: tcp
  volumeMounts:
  - name: db
    mountPath: /var/lib/postgresql
- name: cvat-redis
  image: redis:4.0-alpine
  ports:
  - containerPort: 6379
    name: tcp
- name: cvat
  #use docker image from docker hum
  image: onepanel/cvat:v0.6.23
  env:
  - name: DJANGO_MODWSGI_EXTRA_ARGS
    value: ""
  - name: ALLOWED_HOSTS
    value: '*'
  - name: CVAT_REDIS_HOST
    value: localhost
  - name: CVAT_POSTGRES_HOST
    value: localhost
  - name: CVAT_SHARE_URL
    value: /home/django/data
  ports:
  - containerPort: 8080
    name: http
  volumeMounts:
  - name: data
    mountPath: /home/django/data
  - name: keys
    mountPath: /home/django/keys
  - name: logs
    mountPath: /home/django/logs
  - name: models
    mountPath: /home/django/models
- name: cvat-ui
  image: onepanel/cvat-ui:v0.6.23
  ports:
  - containerPort: 80
    name: http
ports:
- name: cvat-ui
  port: 80
  protocol: TCP
  targetPort: 80
- name: cvat
  port: 8080
  protocol: TCP
  targetPort: 8080
routes:
- match:
  - uri:
      regex: /api/.*|/git/.*|/tensorflow/.*|/auto_annotation/.*|/analytics/.*|/.*|/admin/.*|/documentation/.*|/dextr/.*|/reid/.*
  - queryParams:
      id:
        regex: \d+.*
  route:
  - destination:
      port:
        number: 8080
- match:
  - uri:
      prefix: /
  route:
  - destination:
      port:
        number: 80
#notify on slack once it got finished
postExecutionWorkflow:
  entrypoint: main
  templates:
  - name: main
    dag:
       tasks:
       - name: slack-notify
         template: slack-notify
  -  name: slack-notify
     container:
       image: technosophos/slack-notify
       args:
       - SLACK_USERNAME=onepanel SLACK_TITLE="Your workspace is ready" SLACK_ICON=https://www.gravatar.com/avatar/5c4478592fe00878f62f0027be59c1bd SLACK_MESSAGE="Your workspace is now running" ./slack-notify
       command:
       - sh
       - -c
```

Here, we used Docker images for CVAT to create the Workspaces and exposed few ports for CVAT's use. 

## Creating super user

CVAT requires super user permission to perform certain tasks. Onepanel automatically creates a superuser when you execute CVAT workflow. You can set `username` and `password` via environment variables shown below. If you don't specify those variables, the default `username` and `password` will be `onepaneladmin`

## Setting up environment variables

In order to use several features of CVAT such as training an annotaiton model we need to set some environment variables. You can easily set environment variables by clicking Settings button on top nav bar. This will open up a settings page, where you can set environment variables. Following is an example of setting an environment variable.
![Set Enviornment Variable](/img/env_set.PNG)

You need to set following environment variables:
- **AWS_BUCKET_NAME**: Bucket you want to store your data into.
- **AWS_ACCESS_KEY_ID**: AWS access key for training new annotation models.
- **AWS_SECRET_ACCESS_KEY**: AWS secret access key for training new annotation models.
- **AWS_S3_PREFIX**: Directory in `AWS_BUCKET_NAME` where all the data will be stored.
- **ONEPANEL_OD_TEMPLATE_ID**: Template ID for Tensorflow Object Detection. Required only if you are training a new annotation model.
- **ONEPANEL_MASKRCNN_TEMPLATE_ID**: Template ID for MaskRCNN Segmentation. Required only if you are training a new annotation model.
- **ONEPANEL_AUTHORIZATION**: Token/password for Onepanel login.
- **DJANGO_SUPERUSER_USERNAME**: Username for the superuser.
- **DJANGO_SUPERUSER_PASSWORD**: Password for the superuser.


## Creating new tasks
Once you're inside CVAT dashboard, you can create new tasks to start annotating. You will find a Create New Task button on top, clicking on it will open up a new pop up window as follows:
![Create New Task](/img/create_new_task.PNG)

Now, you give this task a name you like. Then, labels that you are interested in annotating (i.e car, bicycle). You also need to select the source of your data (images). You can upload from your local machine or use data uploaded to S3 (coming soon). .

## Manual annotation
Once you have created a new task, you can start annotating your data. CVAT supports points, box, polylines, polygons for annotation. So, the first thing you should do is go to left sidebar and select the type of annotation you want as shown below. 
![Select Annotation](/img/rectange_new_cvat.PNG)

### Points
If you want to annotate points, then select Points instead of Box which is a default choice. Once you select points, you can start annotating by clicking on Create Shape, clicking on image where you want to put the point and then click on stop shape. Or alternatively you can use keyboard shortcut N instead of Create Shape/Stop Shape. Make sure you periodically save your annotation by pressing ctrl + s.

### Bounding box
The same process follows for bounding boxes. Select Box and press N to start annotating once done, press N to finish annotation.
![Annotation](/img/draw_shape.PNG)

If you want to change the class of an object. Finish drawing bounding box around an object, then go to right sidebar and change the class from a dropdown menu. The same has been heighted in blue color in above picture.

### Polygons
Similarly, select polygons or polylines and follow same procedure for annotation.


## Using pre-annotation model
Onepanel’s CVAT supports a feature to pre-annotate images for common objects. In order to use any pre-annotation feature, you first need to upload the model. By default, we provide a default model for bounding box annotation. Click on Models, and give a name to it. Click on select files and upload your model (.pb and .csv file). Hit submit to upload the model. 
![Model Manager](/img/upload_model.PNG)

Once you submit your model, click on Models again and you will find your model in the list.

![Uploaded Models](/img/upload_model_after.PNG)

Once you have the models in Model Manager. Click on Automatic Annotation under Actions menu. Then, you will be asked to select the model you want to use for pre-annotation. You can also control the class mapping from your task’s classes to model’s classes. Once done, click on Submit to start pre-annotation. Once it's done, you can click on the task link to access the annotation.

## Training new annotation model
Onepanel also allows you to further finetune your model for annotation. Once you are done with your annotation or adjustment to pre-annotation, you can train a new model on it. To do so, go to dashboard and click on Actions under the task for which you want to train a model.

There, you can select the Tensorflow OD API for bounding boxes or Mask RCNN for segmentation.

For TensorFlow OD API, we support multiple models. In fact, its dynamic. You can also train the model you like as long as it is supported by Tensorflow Object Detection API. 

![Create Annotation Model](/img/create_new_annotation_model.PNG)

### How to choose the model:
If you are unsure about which model to use, we usually suggest ssd-mobilenet-v2 since ssd-based models are faster and accurate enough for most of the work. Faster-rcnn (frcnn) models are more accurate in general but they will be relatively slow during training as well inference. If accuracy is more important to you, we suggest you go with frcnn-res50-coco model.






