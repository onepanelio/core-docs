---
id: object-detection-ensemble
title: Ensembling multiple object detection models
author: Savan Visalpara
author_title: Machine Learning Engineer Intern
author_url: https://github.com/savan77
author_image_url: http://1.gravatar.com/avatar/0d1dd8e9d8d8c1198781c5fe8af36184
tags: []
---

In the previous blog(<link>), we saw how we can add new models to train it directly from CVAT. Once the model has been trained you would also like to use it to run the inference. By default, CVAT supports inference on models supported by TensorFlow Object Detection API and Mask RCNN. Currently, the inference runs inside CVAT itself, which will be changed in the near future to serverless functions. So, it will be easier to add support for new models. But for now, you can create a Workflow that runs the inference and outputs an CVAT XML or any other file that you can upload to CVAT. You can also update the training Workflow to accept a flag for training/inference and do the same, if you prefer to have only one Workflow. In this blog post, we will see how you can create a Workflow to run inference on two different models running on different machines. To further demonstrate how you can add post-processing blocks, we will see how you combine output from multiple object detection models.


## Ensemble of Object Detectors
Let's first briefly review how we can review output from multiple object detection models. We will be using a technique described in this [paper](https://drive.google.com/file/d/1ku8X8lHs6lethEa5Adhj7frzV44NTbl4/view). This method takes a list (i.e L) of lists where each sublist is a list of bounding boxes detected in any given image. The first step in the ensembling process is to flatten this list such that L now has a list of detections rather than a list of lists.

Next, the overlapping boxes will be grouped together using intersection over union. Below is a formula for the calculation of IoU. 

<image-iou>

For a pair of bounding boxes, IoU tells how much area is overlapping. With this operation, we now have a list of lists where each sublist is a list of detected objects surrounded around one particular area. Their algorithm uses the length of each of these sublists to determine if this region contains an object or not. The final decision can be taken using one of the three methods.

1. Affirmative: In this, all sublists are kept. In other words, all original detections are considered valid.
2. Consensus: In this strategy, sublist with length greater than m/2 are kept. Here, m is the size of the initial list. As the author describes in the paper, this entails that the detectors must agree that given region contains an object. This method is analogus to the majority voting method widely used for classification tasks.
3. Unanimous: In this, sublist that has length same as number of detectors as kept.

The authors have also published their [code](https://github.com/ancasag/ensembleObjectDetection) for us to experiment with. It has scripts to run inference using models such as Yolo, SSD, Mask RCNN, Faster RCNN, and Retina Net.

## Using on Onepanel

The first thing we need to do is make sure this code can be used from Onepanel Workflow. Normally, I would recommend to have a script in your repository which takes all the required inputs from user, usually using something like `argparse`, and performs certain actions based on those inputs. We are going to do something similar here. We are going to create a script `run.py` which takes inputs from user and performs appropriate actions.

This script will have one function which performs inference or ensembling based on user input. 

```python
def main(args):
    listModels = []
    models_list = args.models.split(",")
    if 'mask_rcnn' in models_list:
        maskRcnn = testTimeAugmentation.MaskRCNNPred('/mnt/src/mask_rcnn_coco.h5', '/mnt/src/coco.names')
        listModels.append(maskRcnn)
    if 'retinanet' in models_list:
        retinaResnet50 = testTimeAugmentation.RetinaNetResnet50Pred('/mnt/src/resnet50_coco_best_v2.1.0.h5', '/mnt/src/coco.csv')
        listModels.append(retinaResnet50)
    if 'yolo_darknet' in models_list:
        yoloDarknet = testTimeAugmentation.DarknetYoloPred('/mnt/src/yolov3.weights', '/mnt/src/coco.names','/mnt/src/yolov3.cfg')
        listModels.append(yoloDarknet)
    if 'ssd_resnet' in models_list:
        ssdResnet = testTimeAugmentation.MXnetSSD512Pred('/mnt/src/ssd_512_resnet50_v1_voc-9c8b225a.params', '/mnt/src/classesMXnet.txt')
        listModels.append(ssdResnet)
    if 'faster_resnet' in models_list:
        fasterResnet = testTimeAugmentation.MXnetFasterRCNNPred('/mnt/src/faster_rcnn_resnet50_v1b_voc-447328d8.params', '/mnt/src/classesMXnet.txt')
        listModels.append(fasterResnet)
        
    models(listModels,args.images_path,args.option, args.combine)
```

We will also have argument parser like this:

```python
parser = argparse.ArgumentParser()
parser.add_argument('--models', default="retinanet,yolo_darknet")
parser.add_argument('--images_path', default='/data/images')
parser.add_argument('--option', default='unanimous')
parser.add_argument("--combine", default=False)
args = parser.parse_args()
```

To further ensure we have all the dependencies installed, we will create a requirements.txt as follows. 

```python3
scikit-learn==0.22.2.post1
mxnet
lxml
gluoncv
keras
pandas
clodsa
imageio
scikit-image
future
opencv-python
```
:::tip
The best way to get a list of dependencies with specific version would be to use virtual environment to run this code and then use `pip freeze` to get a list of dependencies.
:::

To make setup smoother, we will create a setup.sh files which installs other dependencies.

```bash
git clone https://github.com/fizyr/keras-retinanet
pip install ./keras-retinanet/ --user
git clone https://github.com/onepanelio/Mask_RCNN
pip install ./Mask_RCNN/ --user
wget https://www.dropbox.com/sh/n21kckhsi200b52/AABxspis34aAZiMUp_cQ6RYFa?dl=1 -O weights.zip
unzip weights.zip -d /mnt/src/
pip install -r requirements.txt
```

Finally, in order to integrate this workflow with Onepanel seamlesslly we should use input and output artifacts. In simpler terms, we will be attaching S3 directory to grad input data from and will be dumping output into a S3 directory as well. This can be done while creating a Workflow but we just need
to make sure our code reads and writes to correct location.

We will be mounting input data to `/mnt/data/datasets` and output data from `/mnt/output` will be saved on S3 (or GCS). Therefore, we need to update our code to read data from `/mnt/data/datasets` and write data into `/mnt/output`. Thankfully, the script acceps input folder as an argument. So we can just pass `/mnt/data/datasets` as an input. For output, we will be moving all the files to `/mnt/output`. You can handle this case any way you like. We just need to ensure output files are in `/mnt/output`.

```python
for sub_dir in list_dir:
    os.makedirs(os.path.join("/mnt/output", sub_dir))
    for file in os.listdir(os.path.join(pathImg+'/../salida',sub_dir)):
        dir_to_move = os.path.join(pathImg+'/../salida', sub_dir, file)
        shutil.move(dir_to_move, os.path.join(dest, sub_dir, file))
```

Now, our code is good to go for Workflows.

## Creating template

It is usually a good idea to start with a base template and then make required changes to achieve our goal. For this template, our goal is to run inference using two different models on two different nodes. For this task, we can use following template as our starting point.

```yaml
entrypoint: main
templates:
  - name: main
    dag:
      tasks:
      - name: process-input-data
        template: bash
      - name: train-pytorch-model
        dependencies: [process-input-data]
        template: pytorch
      - name: train-tensorflow-model
        dependencies: [process-input-data]
        template: tensorflow
      - name: post-tensorflow-metrics
        dependencies: [train-tensorflow-model]
        template: slack-notify-success
        arguments:
          parameters:
          - name: status
            value: "{{tasks.train-tensorflow-model.status}}"
          artifacts:
          - name: metrics
            from: "{{tasks.train-tensorflow-model.outputs.artifacts.sys-metrics}}"
      - name: post-pytorch-metrics
        dependencies: [train-pytorch-model]
        template: slack-notify-success
        arguments:
          parameters:
          - name: status
            value: "{{tasks.train-pytorch-model.status}}"
          artifacts:
          - name: metrics
            from: "{{tasks.train-pytorch-model.outputs.artifacts.sys-metrics}}"
      - name: compare-performance
        dependencies: [train-pytorch-model, train-tensorflow-model]
        template: bash
  - name: tensorflow
    inputs:
      artifacts:
      - name: src
        path: /mnt/src
        git:
          repo: "https://github.com/onepanelio/tensorflow-examples.git"
    outputs:
      artifacts:
      - name: model
        path: /mnt/output
        optional: true
        archive:
          none: {}
    container:
      image: tensorflow/tensorflow:latest
      command: [sh,-c]
      args: ["python mnist/main.py --epochs=1"]
      workingDir: /mnt/src
  - name: pytorch
    inputs:
      artifacts:
      - name: src
        path: /mnt/src
        git:
          repo: "https://github.com/onepanelio/pytorch-examples.git"
    outputs:
      artifacts:
      - name: model
        path: /mnt/output
        optional: true
        archive:
          none: {}
    container:
      image: pytorch/pytorch:latest
      command: [sh,-c]
      args: ["python mnist/main.py --epochs=1"]
      workingDir: /mnt/src
      volumeMounts:
      - name: output
        mountPath: /mnt/output
  - name: slack-notify-success
    container:
      image: technosophos/slack-notify
      command: [sh,-c]
      args: ['SLACK_USERNAME=Worker SLACK_TITLE="{{workflow.name}} {{inputs.parameters.status}}" SLACK_ICON=https://www.gravatar.com/avatar/5c4478592fe00878f62f0027be59c1bd SLACK_MESSAGE=$(cat /tmp/metrics.json)} ./slack-notify']
    inputs:
      parameters:
      - name: status
      artifacts:
      - name: metrics
        path: /tmp/metrics.json
        optional: true
  - name: bash
    container:
      args:
      - sleep 15
      command:
      - bash
      - -c
      image: bash
volumeClaimTemplates:
  - metadata:
      name: output
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 2Gi
```

At first, it might look intimidating but a graph might be easier to look at. You can look at the graph by clicking on **SHOW GRAPH PREVIEW** while creating a Workflow. Here is how it looks like:

![Multi-model graph](/img/multi-model-graph.png)

As we can see, two models are being trained following a post processing node. However, our pipeline is simpler than this. We just want to run inference on two different nodes and then use output from those two as an input for ensemble method. Here is how our pipeline would look like visually.

![Ensemble graph](/img/ensemble-graph.png)

Now, let's see how to create this workflow.

### Update parameters
We will start out by updating parameters. Those are the parameters that we will take from user. For this case, we will be taking ensemble option, dataset path, and output path from user. So, we will add following part.

```yaml
arguments:
  parameters:
  - name: dataset-path
    value: annotation-dump/sample-image
    displayName: Path to dataset
  - name: ensemble-option
    value: unanimous
  - name: model-output-path
    value: model-comparison14
```

### Update tasks

Now, we will remove those unnecessary tasks such as post processing ones and rename others to match our needs.
```yaml
 dag:
    tasks:
    - name: process-input-data
    template: bash
    - name: predict-yolo-model
    dependencies: [process-input-data]
    template: yolo
    - name: predict-ssd-model
    dependencies: [process-input-data]
    template: ssd
    - name: ensemble
    dependencies: [predict-yolo-model, predict-ssd-model]
    template: ensemble
```

Next, we will update containers for each of the tasks except process-input-data. You can have `process-input-data` performce certain actions but I will leave it as it is for now.

First of all, we will update `predict-yolo-model`.

```yaml
- name: yolo
    inputs:
      artifacts:
      - name: src
        path: /mnt/src
        git:
          repo: "https://github.com/onepanelio/ensembleObjectDetection.git"
      - name: data
        path: /mnt/data/datasets/
        s3:
          key: '{{workflow.namespace}}/{{workflow.parameters.dataset-path}}'
    outputs:
      artifacts:
      - name: model
        path: /mnt/output
        optional: true
        s3:
          key: '{{workflow.namespace}}/{{workflow.parameters.model-output-path}}/{{workflow.name}}'
    container:
      image: tensorflow/tensorflow:latest
      command: [sh,-c]
      args:
       - |
        apt update \
        && apt install libgl1-mesa-glx ffmpeg libsm6 libxext6 libglib2.0-0 libxext6 libxrender-dev wget unzip -y \
        && bash setup.sh \
        && python TestTimeAugmentation/run.py --images_path=/mnt/data/datasets --models=yolo_darknet --option={{workflow.parameters.ensemble-option}} --combine=False \
      workingDir: /mnt/src
      volumeMounts:
      - name: output
        mountPath: /mnt/output
```

Here, we updated the command which executes the script, docker image, and artifacts.

Now, let's update `predict-ssd-model` and `ensemble`. All three are very similar.
```yaml
- name: ssd
    inputs:
      artifacts:
      - name: src
        path: /mnt/src
        git:
          repo: "https://github.com/onepanelio/ensembleObjectDetection.git"
      - name: data
        path: /mnt/data/datasets/
        s3:
          key: '{{workflow.namespace}}/{{workflow.parameters.dataset-path}}'
    outputs:
      artifacts:
      - name: model
        path: /mnt/output
        optional: true
        s3:
          key: '{{workflow.namespace}}/{{workflow.parameters.model-output-path}}/{{workflow.name}}'
    container:
      image: tensorflow/tensorflow:latest
      command: [sh,-c]
      args:
      - |
        apt update \
        && apt install libgl1-mesa-glx ffmpeg libsm6 libxext6 libglib2.0-0 libxext6 libxrender-dev wget unzip -y \
        && bash setup.sh \
        && python TestTimeAugmentation/run.py --images_path=/mnt/data/datasets --models=ssd_resnet --option={{workflow.parameters.ensemble-option}} --combine=False \
      workingDir: /mnt/src
```

```yaml
       template: ensemble
  - name: ensemble
    inputs:
      artifacts:
      - name: src
        path: /mnt/src
        git:
          repo:  "https://github.com/onepanelio/ensembleObjectDetection.git"
      - name: data
        path: /mnt/data/datasets/
        s3:
          key: '{{workflow.namespace}}/{{workflow.parameters.model-output-path}}/{{workflow.name}}'
    outputs:
      artifacts:
      - name: model
        path: /mnt/output
        optional: true
        s3:
          key: '{{workflow.namespace}}/{{workflow.parameters.model-output-path}}/{{workflow.name}}'
    container:
      image: tensorflow/tensorflow:latest
      command: [sh, -c]
      args:
       - |
        apt update \
        && apt install libgl1-mesa-glx ffmpeg libsm6 libxext6 libglib2.0-0 libxext6 libxrender-dev wget unzip -y \
        && bash setup.sh \
        && python TestTimeAugmentation/run.py --images_path=/mnt/data/datasets --models=yolo_darknet,ssd_resnet --option={{workflow.parameters.ensemble-option}} --combine=True \
      workingDir: /mnt/src
```
Note that each of these containers can run on different machines. Below example runs the container on K80 (Standard_NC6) GPU.

```yaml
       template: ensemble
  - name: ensemble
    inputs:
      artifacts:
      - name: src
        path: /mnt/src
        git:
          repo:  "https://github.com/onepanelio/ensembleObjectDetection.git"
      - name: data
        path: /mnt/data/datasets/
        s3:
          key: '{{workflow.namespace}}/{{workflow.parameters.model-output-path}}/{{workflow.name}}'
    outputs:
      artifacts:
      - name: model
        path: /mnt/output
        optional: true
        s3:
          key: '{{workflow.namespace}}/{{workflow.parameters.model-output-path}}/{{workflow.name}}'
    container:
      image: tensorflow/tensorflow:latest
      command: [sh, -c]
      args:
       - |
        apt update \
        && apt install libgl1-mesa-glx ffmpeg libsm6 libxext6 libglib2.0-0 libxext6 libxrender-dev wget unzip -y \
        && bash setup.sh \
        && python TestTimeAugmentation/run.py --images_path=/mnt/data/datasets --models=yolo_darknet,ssd_resnet --option={{workflow.parameters.ensemble-option}} --combine=True \
      workingDir: /mnt/src
    nodeSelector:
      beta.kubernetes.io/instance-type: Standard_NC6
```

Anyway, here is what our final template looks like.

```yaml
arguments:
  parameters:
  - name: dataset-path
    value: annotation-dump/sample-image
    displayName: Path to dataset
  - name: ensemble-option
    value: unanimous
  - name: model-output-path
    value: model-comparison14

entrypoint: main
templates:
  - name: main
    dag:
      tasks:
      - name: process-input-data
        template: bash
      - name: predict-yolo-model
        dependencies: [process-input-data]
        template: yolo
      - name: predict-ssd-model
        dependencies: [process-input-data]
        template: ssd
      - name: ensemble
        dependencies: [predict-yolo-model, predict-ssd-model]
        template: ensemble
  - name: ensemble
    inputs:
      artifacts:
      - name: src
        path: /mnt/src
        git:
          repo:  "https://github.com/onepanelio/ensembleObjectDetection.git"
      - name: data
        path: /mnt/data/datasets/
        s3:
          key: '{{workflow.namespace}}/{{workflow.parameters.model-output-path}}/{{workflow.name}}'
    outputs:
      artifacts:
      - name: model
        path: /mnt/output
        optional: true
        s3:
          key: '{{workflow.namespace}}/{{workflow.parameters.model-output-path}}/{{workflow.name}}'
    container:
      image: tensorflow/tensorflow:latest
      command: [sh, -c]
      args:
       - |
        ls /mnt/data/datasets/ \
        && apt update \
        && apt install libgl1-mesa-glx ffmpeg libsm6 libxext6 libglib2.0-0 libxext6 libxrender-dev wget unzip -y \
        && bash setup.sh \
        && python TestTimeAugmentation/run.py --images_path=/mnt/data/datasets --models=yolo_darknet,ssd_resnet --option={{workflow.parameters.ensemble-option}} --combine=True \
      workingDir: /mnt/src
  - name: ssd
    inputs:
      artifacts:
      - name: src
        path: /mnt/src
        git:
          repo: "https://github.com/onepanelio/ensembleObjectDetection.git"
      - name: data
        path: /mnt/data/datasets/
        s3:
          key: '{{workflow.namespace}}/{{workflow.parameters.dataset-path}}'
    outputs:
      artifacts:
      - name: model
        path: /mnt/output
        optional: true
        s3:
          key: '{{workflow.namespace}}/{{workflow.parameters.model-output-path}}/{{workflow.name}}'
    container:
      image: tensorflow/tensorflow:latest
      command: [sh,-c]
      args:
      - |
        apt update \
        && apt install libgl1-mesa-glx ffmpeg libsm6 libxext6 libglib2.0-0 libxext6 libxrender-dev wget unzip -y \
        && bash setup.sh \
        && python TestTimeAugmentation/run.py --images_path=/mnt/data/datasets --models=ssd_resnet --option={{workflow.parameters.ensemble-option}} --combine=False \
      workingDir: /mnt/src
  - name: yolo
    inputs:
      artifacts:
      - name: src
        path: /mnt/src
        git:
          repo: "https://github.com/onepanelio/ensembleObjectDetection.git"
      - name: data
        path: /mnt/data/datasets/
        s3:
          key: '{{workflow.namespace}}/{{workflow.parameters.dataset-path}}'
    outputs:
      artifacts:
      - name: model
        path: /mnt/output
        optional: true
        s3:
          key: '{{workflow.namespace}}/{{workflow.parameters.model-output-path}}/{{workflow.name}}'
    container:
      image: tensorflow/tensorflow:latest
      command: [sh,-c]
      args:
       - |
        apt update \
        && apt install libgl1-mesa-glx ffmpeg libsm6 libxext6 libglib2.0-0 libxext6 libxrender-dev wget unzip -y \
        && bash setup.sh \
        && python TestTimeAugmentation/run.py --images_path=/mnt/data/datasets --models=yolo_darknet --option={{workflow.parameters.ensemble-option}} --combine=False \
      workingDir: /mnt/src
      volumeMounts:
      - name: output
        mountPath: /mnt/output
  - name: bash
    container:
      args:
      - sleep 15
      command:
      - bash
      - -c
      image: bash
volumeClaimTemplates:
  - metadata:
      name: output
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 2Gi
```