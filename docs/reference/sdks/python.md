---
title: Python SDK
sidebar_label: Python SDK
description: Onepanel - Python SDK
---

Onepanel's Python SDK can be used to programmatically perform any task that is available through the web UI.

Additionally, you can use the Python SDK to [define and execute](https://github.com/onepanelio/python-sdk/blob/master/examples/python-defined-workflow.ipynb) Workflows in Python instead of YAML.

## Installation
:::important
The Python SDK is already installed in all the Workspace and Workflow templates that are available in Onepanel out of the box.
:::

The Python SDK can be installed via PyPi as follows:

```bash
pip install onepanel-sdk
```

## Reference

See [Getting started](https://github.com/onepanelio/python-sdk#getting-started) in the Python SDK repository for sample code and API reference.

## Defining Workflows in Python

The Python SDK is integrated with [Couler](https://github.com/couler-proj/couler) making it possible to define Workflows in Python instead of YAML.

For a complete example of defining a Workflow with data augmentation and training tasks, see [this notebook](https://github.com/onepanelio/python-sdk/blob/master/examples/python-defined-workflow.ipynb).

## Sample JupyterLab notebooks

Here are some example notebooks that you can run from a JupyterLab Workspace in Onepanel:

- [Define Workflows in Python](https://github.com/onepanelio/python-sdk/blob/master/examples/python-defined-workflow.ipynb)
- [Execute Workflows from Workspaces](https://github.com/onepanelio/python-sdk/blob/master/examples/execute-workflow.ipynb)
- [Automatically launch CVAT annotation Workspaces](https://github.com/onepanelio/templates/tree/release-v0.18.0/workflows/auto-cvat)