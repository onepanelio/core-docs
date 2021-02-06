---
title: Adding custom models and training Workflows in CVAT
sidebar_label: Adding custom training Workflows
description: Onepanel - Adding custom models and training Workflows in CVAT
---

This guide will walk you through the process adding custom object detection or semantic segmentation training Workflow Templates in Onepanel that can be triggered from CVAT just like the [built-in model training Workflows](/docs/reference/cvat/built-in-models)

The steps to add your custom model training are as follows:

1. Make sure your training code supports CVAT's annotation formats.
2. Overview of the **CVAT training Workflow Template** that we'll be using as base.
3. Update your training code's input and output directory structures and push to a Git repository (e.g. GitHub).
4. Update **CVAT training Workflow Template** to reference your training code and install dependencies (if any).

We will walk through these steps by adding the [DEtection TRansformer (DETR)](https://github.com/facebookresearch/detr) model for semantic segmentation.

## 1. Supported annotation formats

When you click **Execute training Workflow** in CVAT, the annotation data dump is uploaded to your [default object storage](/docs/deployment/configuration/files#artifactrepository) and then a Workflow Template (containing the relevant training code) is executed with reference to the location of the annotation data dump.

Now that you know how this feature works, the only requirement is that your training code needs to support the annotation formats that are supported by CVAT. For example, if your training code accepts data that follows COCO format (i.e JSON) then you need to indicate that in your newly created Workflow Template by updating the `dump_format` field (more on this field later in steps below).

The following annotation formats are supported by CVAT:

- MS COCO (`cvat_coco`)
- YOLO (`cvat_yolo`)
- TF Detection API (TFRecord) (`cvat_tfrecord`)
- MOT (`cvat_mot`)
- LabelMe (`cvat_label_me`)

## 2. CVAT training Workflow Template Overview

The **CVAT training Workflow Template** is the base template you can use to add any custom object detection or semantic segmentation model that will work directly with any CVAT Workspace. 

This template is available in Onepanel by navigating to **Workflows** > **Workflow Templates** > **Create Template** and selecting **CVAT Training** under **Templates**.

Below is the content of this template with in-line comments describing the fields and what you would need to change. Note that you will only need to change the fields marked with `[CHANGE]`.

Some important notes about this template:

1. The fields with the `cvat-` prefix are automatically populated by CVAT. The `dump_format` indicates to CVAT in which format to dump the annotations.
2. Your training code is cloned from your Git repository into `/mnt/src/train`.
3. The annotation dump is downloaded from object storage to `/mnt/data/datasets` and if any checkpoint models are selected, that is downloaded to `/mnt/data/models`.
4. Any output from your training code (model and `classes.csv` file) is expected to be written to `/mnt/output`. Files written to this location will be automatically uploaded to your default object storage and accessible to CVAT and other Workspaces.

We will walk through updating the [DEtection TRansformer (DETR)](https://github.com/facebookresearch/detr) code and this template in the next few sections.

```yaml
# Workflow Template for building object detection or semantic segmentation 
# model training Workflow that can be executed from CVAT
#
# Only change the fields marked with [CHANGE]
arguments:
  parameters:

    # This is the path to data and annotation files, keep this intact so CVAT knows to populate this
    - name: cvat-annotation-path
      # Default value, this will be automatically populated by CVAT
      value: 'artifacts/{{workflow.namespace}}/annotations/'
      # Friendly name to be displayed to user
      displayName: Dataset path
      # Hint to be displayed to user
      hint: Path to annotated data in default object storage. In CVAT, this parameter will be pre-populated.
      # For information on 'visibility', see https://docs.onepanel.ai/docs/reference/workflows/templates/#parameters
      visibility: internal

    # This is the path to a checkpoint, you can set this in CVAT to a previously trained model
    - name: cvat-finetune-checkpoint
      value: ''
      hint: Path to the last fine-tune checkpoint for this model in default object storage. Leave empty if this is the first time you're training this model.
      displayName: Checkpoint path
      visibility: public

    # Number of classes
    - name: cvat-num-classes
      displayName: Number of classes
      hint: Number of classes. In CVAT, this parameter will be pre-populated.
      value: '10'
      visibility: internal

    # [CHANGE] Hyperparameters for your model
    # Note that this will come in as multiline text that you will need to parse in your code
    - name: hyperparameters
      displayName: Hyperparameters
      visibility: public
      type: textarea.textarea
      value: |-
        stage-1-epochs: 1    #  Epochs for network heads
        stage-2-epochs: 2    #  Epochs for finetune layers
        stage-3-epochs: 3    #  Epochs for all layers
        num_steps: 1000     #   Num steps per epoch
      hint: List of available hyperparameters

    # [CHANGE] Dump format that your model expects from CVAT
    # Valid values are: cvat_coco, cvat_voc, cvat_tfrecord, cvat_yolo, cvat_mot, cvat_label_me
    - name: dump-format
      value: cvat_coco
      displayName: CVAT dump format
      visibility: private

    # Node pool dropdown (Node group in EKS)
    # You can add more of these if you have additional tasks that can run on different node pools
    - displayName: Node pool
      hint: Name of node pool or group to run this workflow task
      type: select.nodepool
      visibility: public
      name: sys-node-pool
      value: default
      required: true

entrypoint: main
templates:
- dag:
    tasks:
      - name: train-model
        template: train-model
  name: main
- container:
    # [CHANGE] Bash command to run your code
    # Note that your code will be cloned into /mnt/src/train, so you will need to change to the appropriate directory
    args:
      - |
        pip install pycocotools scikit-image==0.16.2 && \
        cd /mnt/src/train/workflows/maskrcnn-training && \
        python -u main.py train --dataset=/mnt/data/datasets \
          --model=workflow_maskrcnn \
          --extras="{{workflow.parameters.hyperparameters}}" \
          --ref_model_path="{{workflow.parameters.cvat-finetune-checkpoint}}" \
          --num_classes="{{workflow.parameters.cvat-num-classes}}"
    command:
      - sh
      - -c
    # [CHANGE] Docker image to use to run your code
    # You can keep this as is if your code uses TensorFlow 2.3 or PyTorch 1.5
    # For private Docker repositories use imagePullSecrets: https://github.com/argoproj/argo/blob/master/examples/image-pull-secrets.yaml#L10-L11
    image: 'onepanel/dl:0.17.0'
    volumeMounts:
      - mountPath: /mnt/data
        name: data
      - mountPath: /mnt/output
        name: output
    workingDir: /mnt/src
  sidecars:
    - name: tensorboard
      image: 'onepanel/dl:0.17.0'
      command: [ sh, -c ]
      env:
        - name: ONEPANEL_INTERACTIVE_SIDECAR
          value: 'true'
      # [CHANGE] Path to your TensorBoard logs
      # Note that we recommend not changing this and updating your code to write the logs to /mnt/output/tensorboard
      args: [ "tensorboard --logdir /mnt/output/" ]
      ports:
        - containerPort: 6006
          name: tensorboard
  nodeSelector:
    node.kubernetes.io/instance-type: '{{workflow.parameters.sys-node-pool}}'
  inputs:
    artifacts:
      - name: data
        path: /mnt/data/datasets/
        s3:
          key: '{{workflow.parameters.cvat-annotation-path}}'
      - name: models
        path: /mnt/data/models/
        optional: true
        s3:
          key: '{{workflow.parameters.cvat-finetune-checkpoint}}'
      - git:
          # [CHANGE] Point this to your code repository
          # For private repositories see: https://docs.onepanel.ai/docs/reference/workflows/artifacts#git
          repo: https://github.com/onepanelio/templates.git
          revision: v0.18.0
        name: src
        path: /mnt/src/train
  name: train-model
  outputs:
    artifacts:
      - name: model
        optional: true
        path: /mnt/output

# [CHANGE] Volumes that will mount to /mnt/data (annotated data) and /mnt/output (models, checkpoints, logs)
# Update this depending on your annotation data, model, checkpoint, logs, etc. sizes
# Example values: 250Mi, 500Gi, 1Ti
volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes:
        - ReadWriteOnce
      resources:
        requests:
          storage: 200Gi
  - metadata:
      name: output
    spec:
      accessModes:
        - ReadWriteOnce
      resources:
        requests:
          storage: 200Gi
```

## 1. Upload code to Github

Now that you know your code will work with CVAT, let's go ahead and create a workflow for the same.The first step here is to upload your repository to Github. The workflow you are about to create will clone this repository and execute training command. 

For this example, you are going to add a training workflow for DEtection TRansformer (DETR). [DETR](https://github.com/facebookresearch/detr) was recently published by Facebook Research. Unlike many state-of-the-art object detection models, this works end-to-end using Transformers. Currently, Faster RCNN is a popular model for object detection. But it works in two phases. These multiple phases not only create overhead in training, they also take more time to train. This new model addresses these issues by approaching object detection task as a set prediction task. This is not a completely new approach but previous approaches didn't report accuracy as good as Faster RCNN-based models.

The first thing you need to do is clone their Github [repository](https://github.com/facebookresearch/detr). We are cloning this because you may need to make some changes in code. If your code is stored locally, then you'll have to upload it to Github. Also note that this code supports MS COCO format, so you can use this directly from CVAT.

## 2. Running code in JupyterLab

Before you create a workflow for this, you need to make sure it works without any issues and also understand how it works. You may also need to make some minor changes. You can do this locally or create a JupyterLab workspace on Onepanel. 

Here, our goal is to have one script in this repository that takes required inputs (i.e epochs and other hyperparameters) from user and starts training, inference, etc. For this example, our goal is to create a workflow for training. So, we will focus on training part only. You can have a flag in this script and run training or inference based on user input.

The only major different between running this code localy and in a workflow is that our annotated data will be dumped onto cloud storage, so we will map that directory with any local directory. Hence, you need to update directory structure and fix it to any directory (i.e `/mnt/data/dataset/`). This is where you will mount our dataset from cloud storage. 

Now, let's see if DETR has main script which takes user inputs and runs training. If you look at `main.py` in the root directory, you will find that this script accepts a myriad of arguments from user and runs training/inference. So, you don't have to create a new script. 

**If your code supports one of the dataset format that CVAT can export into, then you'll have to modify only two things: input and output paths.**

### a. Input paths
Since you will be mounting dataset at a fixed location (i.e `/mnt/data/datasets/`), you can hard-code this path in your code. Moreover, you also need to look at directory structure inside this directory. Since our code accepts data in COCO format, let's export data from CVAT in MS COCO format and take a look at it's directory structure.

![COCO Directory Structure](/img/coco_dir.png)

If you are familiar with officail COCO directory structure or even take a look at DETR code, you will find that this does not follow official COCO directory structure. Since this code supports officail COCO directory structure, you need to modify some lines to make it work. Also, the `file_path` attribute in JSON file points to frames on the machine where it was exported. So, this won't work on other machine (i.e workflows that you will be running).

So, you will need to make two changes.

**1. Update directory structure in the code (`datasets/coco.py`).**
This is very simple. You just need to update following lines from [`datasets/coco.py`](https://github.com/onepanelio/detr/blob/master/datasets/coco.py#L151)

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

Note that for simplicity we are using train set as a validation set. But that's not the ideal thing to do. You can split train set into train and val set. Or use other dataset present on cloud storage while executing the workflow.

**2. Write a function/script to update `file_path` in a JSON file.**

Since we will be mounting dataset at `/mnt/data/datasets/`, you can update paths in JSON accordingly. Hence, we will write a script (`prepare_data.py`) that does this. And, we will execute this script before we call `main.py`.

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

Once this is done. You are good to go. You can now go ahead and create Onepanel Workflow. This can be used from CVAT or can be executed directly.

### b. Output path

If you want Onepanel Workflows to store outputs on cloud storage, you can just write output to `/mnt/output/` and it will automatically upload outputs onto cloud storage. For this to work, you just need to add output artifact in our template as discussed in the following section.

## 3. Create a Workflow Template

Now, let's go ahead and actually create a workflow. You can create a new workflow but we recommend you just clone MaskRCNN Training Workflow which is included by default and make changes there.

![Clone Workflow](/img/maskrcnn_clone.png)

You will see a YAML editor as shown below.

![Create workflow](/img/maskrcnn_clone_editor.png)

Give this template an appropriate name. For this example, we will be using `DETR Training`.

You can use [MaskRCNN template](https://github.com/onepanelio/templates/blob/master/workflows/maskrcnn-training/template.yaml) as our starting point and you can modify it for your needs.

Below is a MaskRCNN template which we'll use as our base template. Hints and other unnecessary stuff was removed for brevity. You can find complete template [here](https://github.com/onepanelio/templates/blob/master/workflows/maskrcnn-training/template.yaml).

Even though this looks cryptic, it isn't. Let us go through following three steps to create template for DETR.

### a. Update parameters

The first thing you should do is add/remove parameters from above template. Now, how do you figure out which parameters should you use in there? Use arguments/parameters that you take from user plus some system related parameter (optional). Some examples of this is `epochs`, `batch_size`, etc. Again, this depends on your code as well. In this case, our `main.py` accepts all those hyperparameters as an argument. If your code didn't have such an argument parser, then you can pass all hyperparameters, as shown above for `hyperparameters` parameter, and parse it in your code.

First, you need to update `source` parameter to use code that you just clones. If your code is in private mode, [refer to our guide](/docs/reference/workflows/templates#git-integration-with-workflows) on git integration to know how you can use private repositories with Workflows. We will also have to update docker image to use PyTorch with cuda. Since we will be deploying this on Azure for this guide, we will use `Standard_NC6` for `sys-node-pool`. This machine has K80 GPU.

Next, you can remove `hyperparameters`, `cvat-num-classes`, and `cvat-finetune-checkpoint` as you won't need them.

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
    visibility: public
      
  - name: pytorch-image
    value: pytorch/pytorch:1.6.0-cuda10.1-cudnn7-runtime
    visibility: public

  - name: sys-node-pool
    value: Standard_NC6
    visibility: public
```

Here, if `visibility` is public, then it will be shown in CVAT. Notice some parameters are prefixed with `cvat-`, they will be automatically populated by CVAT. `dump-format` specifies which format should CVAT dump data into. If you have this parameter in a workflow and has correct value (i.e cvat_coco), then it won't be shown in CVAT. 

Basically, you don't have to specify any parameter to run this workflow from CVAT. 

Now, let's go ahead and add some parameters that you might need for this model.

Let's add `epochs` and `batch_size` as you will be using them to run the training.

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
    visibility: public
      
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
### b. Update container block

Now, let's take a look at the second block of a base template.

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
        --ref_model_path="{{workflow.parameters.cvat-finetune-checkpoint}}"  \
        --num_classes="{{workflow.parameters.cvat-num-classes}}" \
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
        key: '{{workflow.namespace}}/{{workflow.parameters.cvat-annotation-path}}'
    - git:
        repo: '{{workflow.parameters.source}}'
        revision: "no-boto"
      name: src
      path: /mnt/src/{{workflow.name}}
  name: tensorflow
  outputs:
    artifacts:
    - name: model
      optional: true
      path: /mnt/output
      s3:
        key: '{{workflow.namespace}}/{{workflow.parameters.cvat-output-path}}/{{workflow.name}}'
```

First thing you may do is rename the template name from `tensorflow` to `detr`, its not required though. Then, you can remove that `no-boto` branch from `git` section as we will be using default (`master`) branch for DETR.

Lastly, you just need to update the command that starts the training. You can see ~20 lines of commands. But you won't need that many for this. Let's remove those lines and write our own.

```shell
    apt-get update \
    && apt-get install -y build-essential \
    && pip install cython pycocotools scipy \
    && python /mnt/src/prepare_data.py \
    && python /mnt/src/main.py --coco_path=/mnt/data/datasets/ --output_dir=/mnt/output/ --batch_size={{workflow.parameters.batch-size}} --epochs={{workflow.parameters.epochs}}
```
We know that we need to run `prepare_data.py` script to modify paths as we observed in the last section and run `main.py` to start the training.

Finally, our updated block looks like this:

```yaml
entrypoint: main
templates:
- dag:
    tasks:
    - name: train-model
      template: detr
  name: main
- container:
    args:
    - |
      apt-get update \
      && apt-get install -y build-essential \
      && pip install cython pycocotools scipy \
      && python /mnt/src/prepare_data.py \
      && python /mnt/src/main.py --coco_path=/mnt/data/datasets/ --output_dir=/mnt/output/ --batch_size={{workflow.parameters.batch-size}} --epochs={{workflow.parameters.epochs}}
    command:
    - sh
    - -c
    image: '{{workflow.parameters.pytorch-image}}'
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
        key: '{{workflow.namespace}}/{{workflow.parameters.cvat-annotation-path}}'
    - git:
        repo: '{{workflow.parameters.source}}'
      name: src
      path: /mnt/src
  name: detr
  outputs:
    artifacts:
    - name: model
      optional: true
      path: /mnt/output
      s3:
        key: '{{workflow.namespace}}/{{workflow.parameters.cvat-output-path}}/{{workflow.name}}'
```

Note that docker image parameter was also updated to `pytorch-image`.

We also attached some input and output artifacts. For inputs, we had training data and source code. For output, we will be dumping data from `/mnt/output/` directory to `{{workflow.namespace}}/{{workflow.parameters.cvat-output-path}}/{{workflow.name}}`.

Also notice that we selected a node with machine that user specified through parameter `sys-node-pool`. What we are essentially doing here is that we are using PyTorch container on this machine, attaching input artifacts (i.e training data), and running commands that perform required tasks (i.e training a model).

### c. Update volume claims

Now, let's take a look at the final block.

```yaml
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

As you can see, this block defines volume claims. Based on your model and data, you can change this from 200 GB to whatever you need. But you can keep this as it is.

One last thing you need to do in order to use this template from CVAT is to add a label as shown below. If you want to use a Workflow in CVAT, add a label with `key`=`used-by` and `value`=`cvat`.

![Workflow Label](/img/update_labels.png)

With this, you have a final template for training DETR model.

## 4. Using the new Workflow in CVAT 

Now, you can use this model to train models from CVAT.

Click on `Actions` menu under the CVAT task you want to train model on, select `Execute training Workflow`.

Select the newly created template. In my case, it was `DETR Training`.

![DETR Execute](/img/detr_execute.png)

Modify parameters, if you want. But changes aren't required. Just hit `Submit` and it will start the training by executing this workflow. 

![DETR Training](/img/detr_training.png)

You can find your trained model (i.e output) in `cvat-output-path` directory on your cloud storage.
