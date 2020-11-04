---
title: Using TensorBoard in JupyterLab
sidebar_label: Using TensorBoard
description: Onepanel - Using TensorBoard in JupyterLab
---

TensorBoard is installed in every JupyterLab Workspace and can be accessed in JupyterLab by running the following commands:

```bash
# Load the TensorBoard notebook extension.
%load_ext tensorboard

# Setting --path_prefix /tensorboard is required
%tensorboard --logdir <path-to-your-logs> --path_prefix /tensorboard
```

You will then be able to view and interact with TensorBoard in JupyterLab.

![](../../../static/img/tensorboard-135651.png)