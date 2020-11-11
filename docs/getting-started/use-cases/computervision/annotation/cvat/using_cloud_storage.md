---
title: Using data from cloud storage in CVAT
sidebar_label: Using data from cloud storage in CVAT
description: Onepanel - vision AI model training pipelines
---

A lot of time, you may want to use data from your cloud storage (i.e S3) in CVAT for annotation. Since Onepanel is fully integrated with CVAT, you can easily use data from your cloud storage. The [CVAT quick guide](/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_quick_guide) explained minimum steps required to set up CVAT with cloud storage. This page provides detailed information about the same. This guide is applicable to all cloud storage providers (i.s S3, GCS, Azure Storage).

There are two times when you might be using data from object storage. 
- While creating CVAT tasks
- While uploading models to CVAT

The files you see under **Connected file share** while creating tasks or uploading models will be synced with the directory you specify while creating CVAT workspace (step - 4 of CVAT quick guide). By default, this will be **workflow-data**. CVAT templates automatically adds the name of your **namespace** to this path. So your final path will be **namespace-name/workflow-data**. For example, if your namespace name is **demo**, file syncer will download data from **demo/workflow-data**. 

The reason why the **namespace** is automatically added is that when you use train models from CVAT it will automatically generate a path to store trained models and annotated data. And this path also contains **namespace** which is same as your current **namespace** in Onepanel. So if you change path for file syncer while creating a CVAT workspace, the file syncer will still be able to download files but the trained models will be stored inside **namespace/workflow-data/output/**, where **namespace** is your current **namespace** in Onepanel. If you change the file syncer directory to some other directory, you no longer can directly upload trained models since they are stored some where else. 

If your new file syncer directory (**workflow-data** by default) is inside the **namespace** (i.e demo) folder then you can use following environment variables to control where CVAT stores trained models. As mentioned earlier, by default trained models will be stored at **namespace/workflow-data/output/**. You can change the last two directories by exporting following environment variables on Onepanel before creating CVAT Workspace.

- ONEPANEL_SYNC_DIRECTORY (default: **workflow-data**)
- ONEPANEL_WORKFLOW_MODEL_DIR (default: **output**)

If the directory that you specified for the file syncer does not start with the current namespace name (i.e it's not inside the **namespace**), then you will have to manually upload models to CVAT.

If you have any questions or feedback, please reach out to on our [Slack channel](https://join.slack.com/t/onepanel-ce/shared_invite/zt-eyjnwec0-nLaHhjif9Y~gA05KuX6AUg).