---
title: CVAT 1.6.0 Workspace
sidebar_label: CVAT 1.6.0 Workspace
description: Onepanel - Running the CVAT 1.6.0 workspace
---

With the release of Onepanel 1.0.2, a new CVAT workspace template based off CVAT version 1.6.0 is included named `CVAT_1.6.0`.
This version of CVAT has one significant difference from previous versions - the annotation models are no longer built in.

However, you can use Onepanel's Models to replace these. 

# MASK RCNN

A MASK RCNN model is available, to deploy it and use it in cvat:

1. Go to `Models` in the navigation bar
2. Create a Model
3. Use the following YAML, replacing `<namespace>` with your own namespace

  ```yaml
  apiVersion: serving.kubeflow.org/v1beta1
  kind: InferenceService
  metadata:
    name: keras
    namespace: <namespace>
    labels:
      used-by: "cvat"
    annotations:
      modelName: model
      framework: "tensorflow"
      name: "keras"
      spec: "[{\"id\":1,\"name\":\"person\"},{\"id\":2,\"name\":\"bicycle\"},{\"id\":3,\"name\":\"car\"},{\"id\":4,\"name\":\"motorcycle\"},{\"id\":5,\"name\":\"airplane\"},{\"id\":6,\"name\":\"bus\"},{\"id\":7,\"name\":\"train\"},{\"id\":8,\"name\":\"truck\"},{\"id\":9,\"name\":\"boat\"},{\"id\":10,\"name\":\"trafficlight\"},{\"id\":11,\"name\":\"firehydrant\"},{\"id\":13,\"name\":\"stopsign\"},{\"id\":14,\"name\":\"parkingmeter\"},{\"id\":15,\"name\":\"bench\"},{\"id\":16,\"name\":\"bird\"},{\"id\":17,\"name\":\"cat\"},{\"id\":18,\"name\":\"dog\"},{\"id\":19,\"name\":\"horse\"},{\"id\":20,\"name\":\"sheep\"},{\"id\":21,\"name\":\"cow\"},{\"id\":22,\"name\":\"elephant\"},{\"id\":23,\"name\":\"bear\"},{\"id\":24,\"name\":\"zebra\"},{\"id\":25,\"name\":\"giraffe\"},{\"id\":27,\"name\":\"backpack\"},{\"id\":28,\"name\":\"umbrella\"},{\"id\":31,\"name\":\"handbag\"},{\"id\":32,\"name\":\"tie\"},{\"id\":33,\"name\":\"suitcase\"},{\"id\":34,\"name\":\"frisbee\"},{\"id\":35,\"name\":\"skis\"},{\"id\":36,\"name\":\"snowboard\"},{\"id\":37,\"name\":\"sportsball\"},{\"id\":38,\"name\":\"kite\"},{\"id\":39,\"name\":\"baseballbat\"},{\"id\":40,\"name\":\"baseballglove\"},{\"id\":41,\"name\":\"skateboard\"},{\"id\":42,\"name\":\"surfboard\"},{\"id\":43,\"name\":\"tennisracket\"},{\"id\":44,\"name\":\"bottle\"},{\"id\":46,\"name\":\"wineglass\"},{\"id\":47,\"name\":\"cup\"},{\"id\":48,\"name\":\"fork\"},{\"id\":49,\"name\":\"knife\"},{\"id\":50,\"name\":\"spoon\"},{\"id\":51,\"name\":\"bowl\"},{\"id\":52,\"name\":\"banana\"},{\"id\":53,\"name\":\"apple\"},{\"id\":54,\"name\":\"sandwich\"},{\"id\":55,\"name\":\"orange\"},{\"id\":56,\"name\":\"broccoli\"},{\"id\":57,\"name\":\"carrot\"},{\"id\":58,\"name\":\"hotdog\"},{\"id\":59,\"name\":\"pizza\"},{\"id\":60,\"name\":\"donut\"},{\"id\":61,\"name\":\"cake\"},{\"id\":62,\"name\":\"chair\"},{\"id\":63,\"name\":\"couch\"},{\"id\":64,\"name\":\"pottedplant\"},{\"id\":65,\"name\":\"bed\"},{\"id\":67,\"name\":\"diningtable\"},{\"id\":70,\"name\":\"toilet\"},{\"id\":72,\"name\":\"tv\"},{\"id\":73,\"name\":\"laptop\"},{\"id\":74,\"name\":\"mouse\"},{\"id\":75,\"name\":\"remote\"},{\"id\":76,\"name\":\"keyboard\"},{\"id\":77,\"name\":\"cellphone\"},{\"id\":78,\"name\":\"microwave\"},{\"id\":79,\"name\":\"oven\"},{\"id\":80,\"name\":\"toaster\"},{\"id\":81,\"name\":\"sink\"},{\"id\":82,\"name\":\"refrigerator\"},{\"id\":84,\"name\":\"book\"},{\"id\":85,\"name\":\"clock\"},{\"id\":86,\"name\":\"vase\"},{\"id\":87,\"name\":\"scissors\"},{\"id\":88,\"name\":\"teddybear\"},{\"id\":89,\"name\":\"hairdrier\"},{\"id\":90,\"name\":\"toothbrush\"}]"
      type: detector
    spec:
      description: "keras"
  spec:
    predictor:
      containers:
        - name: kfserving-container
          image: onepanel/transformer-keras:v1
          env:
            - name: MASK_RCNN_DIR
              value: /app/Mask_RCNN
          args:
           - --model_dir=/app/models
  ```

4. This model has a label `"used-by": cvat` that will allow it to show in CVAT.
5. You can use this model in CVAT as before.

For more information about this particular model, check out https://github.com/onepanelio/transformers
