---
title: Quick start
sidebar_label: Quick start
---

The quickest way to get started is to install and run Onepanel locally on your desktop. You can then deploy it on [public cloud](../deployment/overview#installing-on-public-cloud) to leverage distributed execution on more powerful machines.

Installing and running Onepanel is easy. First, you install the CLI (`opctl`). Using `opctl`, you will generate a `params.yaml` file and configure your deployment. Once complete, you can access your deployment from any browser, use your Kubernetes auth to login and finally run a workflow.

## Step 0: Create a local Kubernetes cluster
You can run a single-node Kubernetes cluster on your desktop using a [Multipass](https://multipass.run/) VM and [MicroK8s](https://microk8s.io/) 

First, install Multipass for your operating system:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="linux"
  values={[
    { label: 'Linux', value: 'linux', },
    { label: 'macOS', value: 'macos', },
    { label: 'Windows', value: 'windows', },
  ]
}>
<TabItem value="linux">

:::important Instructions
See [Installing on Linux](https://multipass.run/docs/installing-on-linux)
:::

</TabItem>
<TabItem value="macos">

:::important Instructions
See [Installing on macOS](https://multipass.run/docs/installing-on-macos)
:::

</TabItem>
<TabItem value="windows">

:::important Instructions
See [Installing on Windows](https://multipass.run/docs/installing-on-windows)
:::

</TabItem>
</Tabs>

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

Take a note of this IP as you will need to add it to your `params.yaml`.

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
sudo microk8s.enable storage dns
```

## Step 1: Install Onepanel

Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/cli/releases/latest)

Run the following command to create the `params.yaml` file for microk8s:

```bash
opctl init --provider microk8s
```

Populate `params.yaml` as outlined in [params documentation](../configuration/params)

Get Kubernetes config from MicroK8s:

```bash
multipass exec microk8s-vm -- /snap/bin/microk8s.config > kubeconfig
```

Finally, run the following command to deploy to your cluster:

```bash
KUBECONFIG=./kubeconfig opctl apply
```

:::important
The CLI will display the URL for accessing Onepanel once the deployment completes.
:::

Use the following command to get your auth token to log into Onepanel:

```bash
KUBECONFIG=./kubeconfig opctl auth token
```

You can then access Onepanel by going to `http://<microk8s-vm-ip>:<uiHTTPort>`