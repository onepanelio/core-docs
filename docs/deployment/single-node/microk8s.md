---
title: MicroK8s deployment guide
sidebar_label: MicroK8s deployment
---

This document outlines the installation steps for single node installation using [Multipass](https://multipass.run/) VM and [MicroK8s](https://microk8s.io/).

## Install MicroK8s with Multipass

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

:::info Instructions
See [Installing on Linux](https://multipass.run/docs/installing-on-linux)
:::

</TabItem>
<TabItem value="macos">

:::info Instructions
See [Installing on macOS](https://multipass.run/docs/installing-on-macos)
:::

</TabItem>
<TabItem value="windows">

:::info Instructions
See [Installing on Windows](https://multipass.run/docs/installing-on-windows)
:::

</TabItem>
</Tabs>

With multipass installed, you can now create a VM to run MicroK8s. At least 8 Gigabytes of RAM and 40G of storage is recommended – you can pass these requirements when you launch the VM:

```bash
multipass launch --name microk8s-vm --mem 8G --disk 40G --cpus 4 # 8G ram for Istio, recommended
```

You can now find the IP address which has been allocated by running:

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
sudo snap install microk8s --classic --channel=1.18/stable
sudo iptables -P FORWARD ACCEPT
```

You will also need to add `ubuntu` user to `microk8s` group as follows:

```bash
sudo usermod -a -G microk8s ubuntu
# Re-enter bash session for group changes
```

Then, enable the following required add-ons:

```bash
sudo microk8s.enable storage dns rbac dashboard
```

Enable TokenRequest feature (required by Istio) by passing in extra argument to the api server.
```shell script
nano /var/snap/microk8s/current/args/kube-apiserver
```

:::note
If you don't see any content, try exiting the multipass vm and entering again.
:::

Add the lines:
```text
--service-account-signing-key-file=${SNAP_DATA}/certs/serviceaccount.key
--service-account-key-file=${SNAP_DATA}/certs/serviceaccount.key
--service-account-issuer=api
--service-account-api-audiences=api,nats
```
Make sure this line is set to these values:
```text
--authorization-mode=RBAC,Node
```

Save your changes.
Execute to make changes take effect
```shell script
sudo systemctl restart snap.microk8s.daemon-apiserver
```

Check microk8s is running with `microk8s status`
:::note
If you see a "not running" error, run `microk8s inspect`.
- Since the api server was just changed, it's most likely that's where the error is.
- Check what reports as "FAIL"
- Assuming it's the api server
- Untar the report file, go to the daemon-apiserver folder, open `journal` log file.
- Search for "error" and see what comes up.
:::

## Install Onepanel

1. Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/core/releases/latest).

2. Run the following command to initialize a `params.yaml` template for microk8s:

```bash
opctl init --provider microk8s
```

:::note
If you don't have a loadbalancer, and want to use a local one, you can use metallb.
```shell script
opctl init --provider microk8s --enable-metallb
```
:::


3. Populate `params.yaml` before applying, follow the instructions in the template, you can also refer to the [configuration files](/docs/deployment/configuration/files) section.

:::note
See [configuration metallb](/docs/deployment/configuration/files#metal-lb) for metallb specific details. 
:::

4. Get Kubernetes config from MicroK8s:

```bash
multipass exec microk8s-vm -- /snap/bin/microk8s.config > kubeconfig
```

5. Finally, run the following command to deploy to your cluster:

```bash
KUBECONFIG=./kubeconfig opctl apply
```

:::important
The CLI will display the URL for accessing Onepanel once the deployment completes.
:::

6. To get access to this new cluster via browser, we need to carry out extra steps.

Example request flow

<img src="/img/multipass_request_flow.png" alt="Request Flow with Multipass" width="800px"/>

Execute these steps in the host machine.

```shell script
multipass list
```

Grab the IP address for your microk8s.
Example:
```text
Name                    State             IPv4             Image
microk8s-vm             Running           10.174.163.50    Ubuntu 18.04 LTS
```

Add an entry to your hosts file to point to the fqdn you setup in `params.yaml`
Example entry:
```yaml
  # The Fully Qualified Domain (FQDN) where Onepanel will be hosted.
  # If `domain` above is set to example.com or sub.example.com, then your FQDN could be: app.example.com or app.sub.example.com respectively
  fqdn: app.alex.xyz
```

Entry to `/etc/hosts`
```text
10.174.163.50 app.alex.xyz
```

Adding this entry means the host browser will try to access the multipass vm we setup
for microk8s.

Next, enter into multipass VM
```shell script
multipass shell microk8s-vm
```

:::note Execute inside the multipass VM
```shell script
microk8s.kubectl get services -n istio-system
```

```text
NAME                   TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                                                                                                                      AGE
istio-ingressgateway   LoadBalancer   10.152.183.166   10.1.31.0     15020:31979/TCP,80:31394/TCP,443:30038/TCP,15029:32204/TCP,15030:32688/TCP,15031:31420/TCP,15032:30575/TCP,15443:30386/TCP   3d3h
```

Inside the multipass VM, add an entry to the `/etc/hosts` file.
```shell script
sudo nano /etc/hosts
```
```text
10.1.31.0 app.alex.xyz
```

Once you have entered and saved the host change, verify you the onepanel website
is running.

```shell script
curl app.alex.xyz # Your params.yaml fqdn entry
```

Example output.
```text
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Onepanel</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/icon/favicon.png">
  <link rel="icon" type="image/png" sizes="96x96" href="assets/icon/favicon.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/icon/favicon.png">
<link rel="stylesheet" href="styles.9b8cd86ace5a9057a37e.css"></head>
<body>
  <app-root></app-root>
<script src="runtime-es2015.edb2fcf2778e7bf1d426.js" type="module"></script><script src="runtime-es5.edb2fcf2778e7bf1d426.js" nomodule defer></script><script src="polyfills-es5.6696c533341b95a3d617.js" nomodule defer></script><script src="polyfills-es2015.2987770fde9daa1d8a2e.js" type="module"></script><script src="main-es2015.b17adb3826cd9f5e4a29.js" type="module"></script><script src="main-es5.b17adb3826cd9f5e4a29.js" nomodule defer></script></body>
</html>
```

You can debug the request with `curl -vvv app.alex.xyz`

We need a listener running on port 80. That listener should direct traffic
to the istio gateway.

```shell script
sudo apt install socat
sudo socat TCP-LISTEN:80,fork TCP:app.alex.xyz:80
```
This will run actively in the current terminal prompt.
:::

Now, go back to your host machine, open your internet browser and go to:
`app.alex.xyz`.

You should see the website load up.

7. Use the following command to get your auth token to log into Onepanel:

```bash
KUBECONFIG=./kubeconfig opctl auth token
```
