---
title: macOS installation guide
sidebar_label: Installing on macOS
---

This document outlines the installation steps for macOS.

## Install MicroK8S with Multipass

First install Multipass:

```bash
brew cask install multipass
```

Then, follow the [MicroK8S installation guide](https://microk8s.io/docs/install-alternatives#multipass)

## Install Onepanel Core

If you are in your Multipass shell, exit the shell and run the following command:

```bash
multipass list
```

Take a note of this IP as you will need it for your `params.yaml` file and for accessing the application.

Then, download the latest `opctl` for macOS from [our release page](https://github.com/onepanelio/cli/releases/latest)

Run the following command to create `params.yaml` file for microk8s:

```bash
opctl init --provider microk8s --enable-efk-logging
```

Populate `params.yaml` as outlined in [configuration documentation](installation-guides/configuration)

Get Kubernetes config from MicroK8S:

```bash
multipass exec <microk8s-vm-name> -- /snap/bin/microk8s.config > kubeconfig
```

Finally, run the following command to deploy to your cluster:

```bash
KUBECONFIG=./kubconfig opctl apply
```

Once deployment is complete, use the follownig command to get your auth token to log into Onepanel:

```bash
KUBECONFIG=./kubconfig opctl auth token
```

You can then access Onepanel Core by going to `http://<microk8s-vm-ip>:<uiHTTPort>`