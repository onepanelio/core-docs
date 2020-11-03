---
title: Getting started with JupyterLab
sidebar_label: Getting started
description: Onepanel - Getting started with JupyterLab
---

The JupyterLab Workspace in Onepanel is configured with all the tools and libraries you already use out of the box.

## Storage
By default, Onepanel mounts a volume to `/data` directory and sets this a JupyterLab's working directory. You can set the size for this volume when launching a JupyterLab workspace.

## Environment

### Packages, libraries and drivers

Here is a lit of the top packages, libraries and drivers:

- [PyPi](https://pypi.org/)
- [Conda](https://docs.conda.io/en/latest/)
- [PyTorch 1.6.0](https://pytorch.org/)
- [TensorFlow 2.3.0](https://www.tensorflow.org/)
- [OpenCV](https://opencv.org/)
- [NVIDIA GPU drivers](https://gitlab.com/nvidia/container-images/cuda/blob/master/dist/10.2/ubuntu18.04-x86_64/base/Dockerfile)

### JupyterLab exensions

- [JupyterLab Widgets](https://github.com/jupyter-widgets/ipywidgets#ipywidgets-interactive-html-widgets)
- [JupyterLab Git](https://github.com/jupyterlab/jupyterlab-git#jupyterlab-git)
- [JupyterLab GitHub](https://github.com/jupyterlab/jupyterlab-github#jupyterlab-github)
- [JupyterLab Debugger](https://github.com/jupyterlab/debugger#jupyterlabdebugger)
- [JupyterLab Language Server Protocol](https://github.com/krassowski/jupyterlab-lsp#language-server-protocol-integration-for-jupyterlab)
- [JupyterLab Diff and Merge Tool](https://github.com/jupyter/nbdime#nbdime-jupyter-notebook-diff-and-merge-tools)