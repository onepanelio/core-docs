---
title: macOS installation guide
sidebar_label: Installing on macOS
---

This document outlines the installation steps for macOS.

## Install MicroK8s with Multipass

First install Multipass:

```bash
brew cask install multipass
```

With multipass installed, you can now create a VM to run MicroK8s. At least 4 Gigabytes of RAM and 40G of storage is recommended – you can pass these requirements when you launch the VM:

```bash
multipass launch --name microk8s-vm --mem 4G --disk 40G
```

You can now find the IP address which has been allocated. Running:

```bash
multipass list
```

Will return something like:

```bash
Name                    State             IPv4             Release
microk8s-vm             RUNNING           10.72.145.216    Ubuntu 18.04 LTS
```

Take a note of this IP as you will need it for your `params.yaml` file and for accessing the application.

Run a shell into your VM:

```bash
multipass shell microk8s-vm
```

Install the MicroK8s snap and configure the network:

```bash
sudo snap install microk8s --classic --channel=1.17/stable
sudo iptables -P FORWARD ACCEPT
```

You will also need to add `ubuntu` user to `microk8s` group as follows:

```bash
sudo usermod -a -G microk8s ubuntu
```

Then, enable the following required add-ons:

```bash
microk8s.enable storage dns
```

You can optionally enabled Kubernetes dashboard:

```bash
microk8s.enable dashboard
```

## Install Onepanel Core

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
KUBECONFIG=./kubeconfig opctl apply
```

Once deployment is complete, use the follownig command to get your auth token to log into Onepanel:

```bash
KUBECONFIG=./kubeconfig opctl auth token
```

You can then access Onepanel Core by going to `http://<microk8s-vm-ip>:<uiHTTPort>`