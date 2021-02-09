---
title: Built-in data augmentation Workflows
sidebar_label: Data augmentation
description: Onepanel - Built-in data augmentation Workflows
---

Out of the box, Onepanel supports [Albumentations](https://albumentations.ai/) for data augmentation/preprocessing in the [built-in training Workflow Templates](/docs/reference/workflows/training).

![](../../../static/img/data-augmentation-102228.png)

**Number of augmentation cycles** indicates the number of times to apply the transforms. Setting this field to `0`, bypasses any data augmentation.

**Preprocessing parameters** field can contain [Albumentations transforms](https://albumentations.ai/docs/api_reference/augmentations/transforms/) specified in YAML format.