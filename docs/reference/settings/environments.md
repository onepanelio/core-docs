---
title: Environments
sidebar_label: Environments
description: Guide on environment variables
---

:::tip
You can set environment variables with provided and not limited to the details below, these are mostly specific to get you started with CVAT.
:::

## Settings
1. Click *Settings* in the top navigation bar. ![](/img/navigation_select_settings.png)
2. Click *Add Environment Variable*![](/img/settings_env_variables.png)
3. Set *KEY_NAME* and *VALUE* ![](/img/settings_set_variables.png)

## Default Environment Variables for CVAT

- **AWS_BUCKET_NAME**: Bucket you want to store your data into.
- **AWS_ACCESS_KEY_ID**: AWS access key for training new annotation models.
- **AWS_SECRET_ACCESS_KEY**: AWS secret access key for training new annotation models.
- **AWS_S3_PREFIX**: Directory in `AWS_BUCKET_NAME` where all the data will be stored.
- **ONEPANEL_OD_TEMPLATE_ID**: Template ID for Tensorflow Object Detection. Required only if you are training a new annotation model.
- **ONEPANEL_MASKRCNN_TEMPLATE_ID**: Template ID for MaskRCNN Segmentation. Required only if you are training a new annotation model.
- **ONEPANEL_AUTHORIZATION**: Token/password for Onepanel login.
- **DJANGO_SUPERUSER_USERNAME**: Username for the superuser. Default is `admin`.
- **DJANGO_SUPERUSER_PASSWORD**: Password for the superuser. Default is `admin`.
- **SYNC_S3_BUCKET_NAME**: Bucket to sync shared storage (`share` drive will be used for the same) with. You will be able to use data available on this bucket while creating new tasks and models.
- **SYNC_S3_PREFIX**: Prefix (directory) to use for above bucket. By default its empty. Thus, all data in that bucket will be fetched.
- **SYNC_DIRECTION**: Direction for SYNC. Options: `down`, `up`, `both`.
  - `down`: One way sync. Downloads all data from s3 to local folder.
  - `up`: One way sync. Uploads all data from local folder to S3. If you delete files from local folder it will delete those files from S3 as well.
  - `both`: Two way sync. Syncs files in both direction.
- **SYNC_DELAY**: Specifies time in seconds for the syncer to check for file updates. Default is `900` seconds.