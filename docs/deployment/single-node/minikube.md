---
title: Minikube installation guide
sidebar_label: Installing on Minikube
---

This document outlines the installation steps for single node installation using [Minikube](https://kubernetes.io/docs/setup/learning-environment/minikube/).

## Install Minikube

See [Install Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) and follow the instructions for your operating system.

Once Minikube is installed, start it with at least 4 Gigabytes of RAM and 40G of storage – you can pass these requirements as follows:

```bash
minikube start --memory '4gb' --disk-size '40g'
```

You can now find the IP address which has been allocated by running:

```bash
minikube ip
```

Take a note of this IP as you will need to add it to your `params.yaml`.

## Install Onepanel

1. Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/cli/releases/latest)

2. Run the following command to create `params.yaml` file for minikube:

```bash
opctl init --provider minikube
```

3. Populate `params.yaml` as outlined in [configuration files](../configuration/files)

4. Finally, run the following command to deploy to your cluster:

```bash
opctl apply
```

:::important
The CLI will display the URL for accessing Onepanel once the deployment completes.
:::

5. Use the following command to get your auth token to log into Onepanel:

```bash
opctl auth token
```