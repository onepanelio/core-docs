---
title: Adding custom models to use in CVAT or Adding custom models on Onepanel
sidebar_label: Adding custom model
description: Onepanel use case - computer vision automatic annotation
---

The default CVAT workspace comes with two workflows (i.e models): MaskRCNN Training and TF Object Detection Training. These two workflows are generally good for semantic segmentation  and object detection tasks respectively. But you can do more with your CVAT tasks. You can, for example, train a Generative Adversarial Network model to generate synthetic data for your task. You can add your own model, if default models don't satisfy your requirements.

This guide will walk you through the process of how can you add your own workflows for CVAT on Onepanel CE.

## 1. Requirements

Before we dive into technical details of adding custom model support in CVAT, it's important to know what types of models and data can be used with CVAT.

You can think of `Execute training Workflow` feature as a bridge between data in CVAT, be it annotated or just frames, and Onepanel Workflows. You can have Onepanel Workflows for model training, inference, and many other things. Let's say you have a training workflow for some model X. Then, you can use this feature to use annotated frames from CVAT to train the model X. It dumps annotated data on cloud storage and Onepanel Workflows grabs data from the same location. More details on how to actually create such workflows will be discussed in following sections.

Now that we know how this feature works, it is safe to say that the **only requirement** here is that your training code has to support format that CVAT data was dumped into. For example, if your training code accepts data that follows COCO format (i.e JSON) then we need to export data in COCO format from CVAT. So, if your code does not accept data in any of the format that CVAT supports, then you can't use that workflow from CVAT unless you just need frames and not the annotations. In any case, you can still create training workflow and execute on Onepanel. But you won't be able to use this directly from CVAT. You will have to export data from CVAT, upload to cloud storage, execute workflow and pass-in correct cloud storage path.

If your code supports one of the following formats, then you are good to go.
1. MS COCO
2. YOLO
3. TF Detection API (TFRecords)
4. MOT
5. LabelMe
6. DatuMaro

## 2. Upload code to Github

Now that we know your code will work with CVAT, let's go ahead and create a workflow for the same.The first step here is to upload your repository to Github. The workflow we are about to create will clone this repository and execute training command. 

For this example, we are going to add a training workflow for DEtection TRansformer (DETR). [DETR](https://github.com/facebookresearch/detr) was recently published by Facebook Research. Unlike many state-of-the-art object detection models, this works end-to-end using Transformers. Currently, Faster RCNN is a popular model for object detection. But it works in two phases. These multiple phases not only create overhead in training, they also take more time to train. This new model addresses these issues by approaching object detection task as a set prediction task. This is not a completely new approach but previous approaches didn't report accuracy as good as Faster RCNN-based models.

The first thing we need to do is clone their Github [repository](https://github.com/facebookresearch/detr). We are cloning this because we may need to make some changes in code. If your code is stored locally, then you'll have to upload it to Github. Also note that this code supports MS COCO format, so we can use this directly from CVAT.

## 3. Running code in JupyterLab

Before we create a workflow for this, we need to make sure it works without any issues and also understand how it works. We may also need to make some minor changes. You can do this locally or create a JupyterLab workspace on Onepanel. 

Here, our goal is to have one script in this repository that takes required inputs (i.e epochs and other hyperparameters) from user and starts training, inference, etc. For this example, our goal is to create a workflow for training. So, we will focus on training part only. You can have a flag in this script and run training or inference based on user input.

The only major different between running this code localy and in a workflow is that our annotated data will be dumped onto cloud storage, so we will map that directory with any local directory. Hence, you need to update directory structure and fix it to any directory (i.e `/mnt/data/dataset/`). This is where we will mount our dataset from cloud storage. 

Now, let's see if DETR has main script which takes user inputs and runs training. If you look at `main.py` in the root directory, you will find that this script accepts a myriad of arguments from user and runs training/inference. So, we don't have to create a new script. 

If your code supports one of the dataset format that CVAT can export into, then we have to modify only two things: input and output paths.

### Input paths
Since we will be mounting dataset at a fixed location (i.e `/mnt/data/datasets/`), you can hard-code this path in your code. Moreover, we also need to look at directory structure inside this directory. Since our code accepts data in COCO format, let's export data from CVAT in MS COCO format and take a look at it's directory structure.

![COCO Directory Structure](/img/coco_dir.png)

If you are familiar with officail COCO directory structure or even take a look at DETR code, you will find that this does not follow official COCO directory structure. Since this code supports officail COCO directory structure, we need to modify some lines to make it work. Also, the `file_path` attribute in JSON file points to frames on the machine where it was exported. So, this won't work on other machine (i.e workflows that we will be running).

So, we will need to make two changes.
1. Update directory structure in the code (`datasets/coco.py`).
This is very simple. We just need to update following lines from `datasets/coco.py`

```python3
PATHS = {
        "train": (root / "train2017", root / "annotations" / f'{mode}_train2017.json'),
        "val": (root / "val2017", root / "annotations" / f'{mode}_val2017.json'),
    }
```
to

```python3
 PATHS = {
        "train": (root / "images", root / "annotations" / 'instances_default.json'),
        "val": (root / "images", root / "annotations" / 'instances_default.json'),
    }
```

Please note that for simplicity we are using train set as a validation set. But that's not the right thing to do. You can split train set into train and val set. Or use other dataset present on cloud storage while executing the workflow.

2. Write a function/script to update `file_path` in a JSON file.

Since we will be mounting dataset at `/mnt/data/datasets/`, we can update paths in JSON accordingly. So, we will write a script that does this. And, we will execute this script before we call `main.py`.

```python3
def update_img_paths(args):
    # read json data
    with open(args.file_path, "r") as file:
        json_data = json.load(file)
        # update image path
        for img in json_data['images']:
            img['file_name'] = os.path.join(args.prefix, os.path.basename(img['file_name']))
        # write data back to file
        with open(args.file_path, "w") as file_out:
            json.dump(json_data, file_out)
```

Once this is done. We are good to go. We can now go ahead and create Onepanel Workflow. This can be used from CVAT or can be executed directly.

## 4. Create a workflow

Now, let's go ahead and actually create a workflow. Click on `WORKFLOWS` and then click on `CREATE TEMPLATE` button. 

![Create Template](/img/create_template.png)

You will see a YAML editor as shown below.

![Create workflow](/img/create_workflow_template.png)

Give this template an appropriate name. For this example, I will be using `DETR Training`.

Now, we will use [MaskRCNN template](https://github.com/onepanelio/templates/blob/master/workflows/maskrcnn-training/template.yaml) as our starting point and we will modify it for our needs.

Below is a MaskRCNN template which we'll use as our base template. I removed hints and other unnecessary stuff for brevity. You can find complete template [here](https://github.com/onepanelio/templates/blob/master/workflows/maskrcnn-training/template.yaml).

```yaml
arguments:
  parameters:
  - name: source
    value: https://github.com/onepanelio/Mask_RCNN.git
    displayName: Model source code
    type: hidden
    visibility: private

  - name: cvat-annotation-path
    value: annotation-dump/sample_dataset
    hint: Path to annotated data in default object storage (i.e S3). In CVAT, this parameter will be pre-populated.
    displayName: Dataset path
    visibility: private
    
  - name: cvat-output-path
    value: workflow-data/output/sample_output
    hint: Path to store output artifacts in default object storage (i.e s3). In CVAT, this parameter will be pre-populated.
    displayName: Workflow output path
    visibility: private
  
  - name: hyperparameters
    displayName: Hyperparameters
    visibility: public
    type: textarea.textarea
    value: |-
      stage-1-epochs=1    #  Epochs for network heads
      stage-2-epochs=2    #  Epochs for finetune layers
      stage-3-epochs=3    #  Epochs for all layers
   
  - name: cvat-finetune-checkpoint
    value: ''
    visibility: public
  
  - name: cvat-num-classes
    value: 81
    visibility: private
    
  - name: dump-format
    value: cvat_coco
    visibility: private
      
  - name: tf-image
    value: tensorflow/tensorflow:1.13.1-py3
    visibility: public

  - name: sys-node-pool
    value: Standard_D4s_v3
    visibility: public

entrypoint: main
templates:
- dag:
    tasks:
    - name: train-model
      template: tensorflow
  name: main
- container:
    args:
    - |
      apt-get update \
      && apt-get install -y git wget libglib2.0-0 libsm6 libxext6 libxrender-dev \
      && pip install -r requirements.txt \
      && pip install boto3 pyyaml google-cloud-storage \
      && git clone https://github.com/waleedka/coco \
      && cd coco/PythonAPI \
      && python setup.py build_ext install \
      && rm -rf build \
      && cd ../../ \
      && wget https://github.com/matterport/Mask_RCNN/releases/download/v2.0/mask_rcnn_coco.h5 \
      && python setup.py install && ls \
      && python samples/coco/cvat.py train --dataset=/mnt/data/datasets \
        --model=workflow_maskrcnn \
        --extras="{{workflow.parameters.extras}}"  \
        --ref_model_path="{{workflow.parameters.sys-finetune-checkpoint}}"  \
        --num_classes="{{workflow.parameters.sys-num-classes}}" \
      && cd /mnt/src/ \
      && python prepare_dataset.py /mnt/data/datasets/annotations/instances_default.json
    command:
    - sh
    - -c
    image: '{{workflow.parameters.tf-image}}'
    volumeMounts:
    - mountPath: /mnt/data
      name: data
    - mountPath: /mnt/output
      name: output
    workingDir: /mnt/src
  nodeSelector:
    beta.kubernetes.io/instance-type: '{{workflow.parameters.sys-node-pool}}'
  inputs:
    artifacts:
    - name: data
      path: /mnt/data/datasets/
      s3:
        key: '{{workflow.namespace}}/{{workflow.parameters.sys-annotation-path}}'
    - git:
        repo: '{{workflow.parameters.source}}'
        revision: "no-boto"
      name: src
      path: /mnt/src
  name: tensorflow
  outputs:
    artifacts:
    - name: model
      optional: true
      path: /mnt/output
      s3:
        key: '{{workflow.namespace}}/{{workflow.parameters.sys-output-path}}'
volumeClaimTemplates:
- metadata:
    creationTimestamp: null
    name: data
  spec:
    accessModes:
    - ReadWriteOnce
    resources:
      requests:
        storage: 200Gi
- metadata:
    creationTimestamp: null
    name: output
  spec:
    accessModes:
    - ReadWriteOnce
    resources:
      requests:
        storage: 200Gi
```

Even though this looks cryptic, it isn't. Let us go through following three steps to create template for DETR.

1. Add/remove workflow parameters

The first thing you should do is add/remove parameters from above template. Now, how do you figure out which parameters should we use in there? It's simple. Use arguments/parameters that we take from user plus some system related parameter (optional). Some examples of this is `epochs`, `batch_size`, etc. Again, this depends on your code as well. In this case, our `main.py` accepts all those hyperparameters as an argument. If your code didn't have such an argument parser, then you can pass all hyperparameters, as shown above for `hyperparameters` parameter, and parse it in your code.

First, we will update `source` parameter to use code that we just clones. We will also have to update docker image to use PyTorch with cuda. Since I will be deploying this on azure, I will use `Standard_NC6` for `sys-node-pool`. This machine has K80 GPU.

Next, we will remove `hyperparameters`, `sys-num-classes`, and `sys-finetune-checkpoint` as we don't need them.

```yaml
arguments:
  parameters:
  - name: source
    value: https://github.com/onepanelio/detr.git
    displayName: Model source code
    type: hidden
    visibility: private

  - name: cvat-annotation-path
    value: annotation-dump/sample_dataset
    hint: Path to annotated data in default object storage (i.e S3). In CVAT, this parameter will be pre-populated.
    displayName: Dataset path
    visibility: private
    
  - name: cvat-output-path
    value: workflow-data/output/sample_output
    hint: Path to store output artifacts in default object storage (i.e s3). In CVAT, this parameter will be pre-populated.
    displayName: Workflow output path
    visibility: private
    
  - name: dump-format
    value: cvat_coco
    visibility: private
      
  - name: pytorch-image
    value: pytorch/pytorch:1.6.0-cuda10.1-cudnn7-runtime
    visibility: public

  - name: sys-node-pool
    value: Standard_NC6
    visibility: public
```

Here, if `visibility` is public, then it will be shown in CVAT. Notice some parameters are prefixed with `cvat-`, they will be automatically populated by CVAT. `dump-format` specifies which format should CVAT dump data into. If you have this parameter in a workflow and has correct value (i.e cvat_coco), then it won't be shown in CVAT. 

Basically, you don't have to specify any parameter to run this workflow from CVAT. 

Now, let's go ahead and add some parameters that we might need for this model.

Let's add `epochs` and `batch_size` as we will be using them to run the training.

So, finally our parameters will look like this:


```yaml
arguments:
  parameters:
  - name: source
    value: https://github.com/onepanelio/detr.git
    displayName: Model source code
    type: hidden
    visibility: private

  - name: cvat-annotation-path
    value: annotation-dump/sample_dataset
    hint: Path to annotated data in default object storage (i.e S3). In CVAT, this parameter will be pre-populated.
    displayName: Dataset path
    visibility: private
    
  - name: cvat-output-path
    value: workflow-data/output/sample_output
    hint: Path to store output artifacts in default object storage (i.e s3). In CVAT, this parameter will be pre-populated.
    displayName: Workflow output path
    visibility: private
    
  - name: dump-format
    value: cvat_coco
    visibility: private
      
  - name: pytorch-image
    value: pytorch/pytorch:1.6.0-cuda10.1-cudnn7-runtime
    visibility: public

  - name: sys-node-pool
    value: Standard_NC6
    visibility: public

  - name: epochs
    value: '50'
    visibility: public

  - name: batch-size
    value: '1'
    visibility: public
```

Now, let's take a look at the second block of base template.

```yaml

entrypoint: main
templates:
- dag:
    tasks:
    - name: train-model
      template: tensorflow
  name: main
- container:
    args:
    - |
      apt-get update \
      && apt-get install -y git wget libglib2.0-0 libsm6 libxext6 libxrender-dev \
      && pip install -r requirements.txt \
      && pip install boto3 pyyaml google-cloud-storage \
      && git clone https://github.com/waleedka/coco \
      && cd coco/PythonAPI \
      && python setup.py build_ext install \
      && rm -rf build \
      && cd ../../ \
      && wget https://github.com/matterport/Mask_RCNN/releases/download/v2.0/mask_rcnn_coco.h5 \
      && python setup.py install && ls \
      && python samples/coco/cvat.py train --dataset=/mnt/data/datasets \
        --model=workflow_maskrcnn \
        --extras="{{workflow.parameters.extras}}"  \
        --ref_model_path="{{workflow.parameters.sys-finetune-checkpoint}}"  \
        --num_classes="{{workflow.parameters.sys-num-classes}}" \
      && cd /mnt/src/ \
      && python prepare_dataset.py /mnt/data/datasets/annotations/instances_default.json
    command:
    - sh
    - -c
    image: '{{workflow.parameters.tf-image}}'
    volumeMounts:
    - mountPath: /mnt/data
      name: data
    - mountPath: /mnt/output
      name: output
    workingDir: /mnt/src
  nodeSelector:
    beta.kubernetes.io/instance-type: '{{workflow.parameters.sys-node-pool}}'
  inputs:
    artifacts:
    - name: data
      path: /mnt/data/datasets/
      s3:
        key: '{{workflow.namespace}}/{{workflow.parameters.sys-annotation-path}}'
    - git:
        repo: '{{workflow.parameters.source}}'
        revision: "no-boto"
      name: src
      path: /mnt/src
  name: tensorflow
  outputs:
    artifacts:
    - name: model
      optional: true
      path: /mnt/output
      s3:
        key: '{{workflow.namespace}}/{{workflow.parameters.sys-output-path}}'
```

First thing we are going to do is rename the template name, its not required though. 
## 5. Using it in CVAT 