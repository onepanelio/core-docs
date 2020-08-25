---
title: Quick start
sidebar_label: Quick start
description: Get started with Onepanel on AKS, EKS or GKE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

It's easy to get started with Onepanel. First, you install the CLI (`opctl`) and then using `opctl`, you generate a `params.yaml` file and update it to configure your deployment. Once complete, you can access your deployment from any browser using your Kubernetes authentication token. Finally, you can run a Workflow or create a Workspace.

:::important
The steps in the Quick start allow you to quickly setup a Onepanel cluster for testing. To setup a production cluster with TLS and auto scaling enabled see [instructions for your cloud provider](/docs/deployment/overview#installing-on-public-cloud).

You can also [add components](/docs/deployment/upgrade/overview) at later time to make this cluster production ready.
:::

Before getting started, take a look at [concepts](/docs/getting-started/concepts/namespaces) to understand the different components in Onepanel.

## Step 0: Create a Kubernetes cluster
Next, create a Kubernetes cluster in one of the following cloud providers:

<Tabs
  groupId="cloud-provider"
  defaultValue="aks"
  values={[
    { label: 'Azure AKS', value: 'aks', },
    { label: 'Amazon EKS', value: 'eks', },
    { label: 'Google Cloud GKE', value: 'gke', },
    { label: 'Minikube', value: 'minikube', },
    { label: 'Microk8s', value: 'microk8s', },
  ]
}>
<TabItem value="aks">

:::note
Make sure [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) (`az`) is installed before proceeding.
:::

Run this `az` command to create a bare minimum cluster with 2 `Standard_D4s_v3` nodes:

```bash
az aks create --resource-group <resource-group> --name <cluster-name> --location <region> \
    --node-count 2 \
    --node-vm-size Standard_D4s_v3 \
    --node-osdisk-size 100 \
    --min-count 2 \
    --max-count 2 \
    --enable-cluster-autoscaler \
    --network-plugin azure \
    --network-policy azure \
    --enable-addons monitoring \
    --generate-ssh-keys
```

You can then get access credentials by running:

```
az aks get-credentials --resource-group <resource-group> --name <cluster-name> --admin
```

</TabItem>
<TabItem value="eks">

:::note
Make sure [Amazon EKS CLI](https://eksctl.io/introduction/#installation) (`eksctl`) is installed before proceeding.
:::

Run this `eksctl` commands to create a bare minimum cluster with 2 `m5.xlarge` nodes:

```bash
eksctl create cluster --name=<cluster-name> --region <region> \
    --nodes 2  \
    --node-type m5.xlarge \
    --node-volume-size 100 \
    --nodes-min 2 \
    --nodes-max 2 \
    --asg-access \
    --managed \
    --ssh-access
```

The `eksctl` command above will automatically retrieve your cluster's access credentials but you can also get them by running:

```
eksctl utils write-kubeconfig --cluster=<cluster-name> --region <region>
```

</TabItem>
<TabItem value="gke">

:::note
Make sure [Google Cloud SDK](https://cloud.google.com/sdk/install) (`gcloud`) is installed before proceeding.
:::

Run this `gcloud` command to create a bare minimum cluster with 2 `n1-standard-4` nodes:

```bash
gcloud container --project <project-name> clusters create <cluster-name> --zone <zone> \
    --num-nodes 2 \
    --machine-type n1-standard-4 \
    --disk-size 100 \
    --min-nodes 0 \
    --max-nodes 2 \
    --enable-autoscaling \
    --enable-network-policy \
    --enable-stackdriver-kubernetes \
    --addons HorizontalPodAutoscaling,HttpLoadBalancing
```

The command above will automatically retrieve your cluster's access credentials but you can also get them by running:

```
gcloud container clusters get-credentials <cluster-name> --zone <zone>
```

</TabItem>
<TabItem value="minikube">

:::note
Make sure [Minikube](https://minikube.sigs.k8s.io/docs/start/) (`minikube`) is installed before proceeding.
:::

Run the following `minikube` command to create a cluster:
<Tabs
  groupId="operating-systems"
  defaultValue="linux"
  values={[
      { label: 'Linux', value: 'linux', },
      { label: 'macOS', value: 'macos', },
      { label: 'Windows', value: 'windows', },
      ]
      }>
<TabItem value="linux">

```shell script
minikube start --driver=virtualbox --memory '8gb' --cpus=4 --disk-size '40g' \
    --extra-config=apiserver.service-account-signing-key-file=/var/lib/minikube/certs/sa.key \
    --extra-config=apiserver.service-account-key-file=/var/lib/minikube/certs/sa.pub \
    --extra-config=apiserver.service-account-issuer=api \
    --extra-config=apiserver.service-account-api-audiences=api,nats \
    --extra-config=apiserver.authorization-mode=Node,RBAC
```
</TabItem>

<TabItem value="macos">

```shell script
minikube start --driver=virtualbox --memory '8gb' --cpus=4 --disk-size '40g' \
    --extra-config=apiserver.service-account-signing-key-file=/var/lib/minikube/certs/sa.key \
    --extra-config=apiserver.service-account-key-file=/var/lib/minikube/certs/sa.pub \
    --extra-config=apiserver.service-account-issuer=api \
    --extra-config=apiserver.service-account-api-audiences=api,nats \
    --extra-config=apiserver.authorization-mode=Node,RBAC
```
</TabItem>

<TabItem value="windows">

```shell script
minikube start --driver=virtualbox --memory="8gb" --cpus=4 --disk-size="40gb"^
    --extra-config=apiserver.service-account-signing-key-file=/var/lib/minikube/certs/sa.key^
    --extra-config=apiserver.service-account-key-file=/var/lib/minikube/certs/sa.pub^
    --extra-config=apiserver.service-account-issuer=api^
    --extra-config=apiserver.service-account-api-audiences=api,nats^
    --extra-config=apiserver.authorization-mode=Node,RBAC
```
</TabItem>
</Tabs>

Your kubectl context will be automatically updated once minikube finishes starting.

</TabItem>
<TabItem value="microk8s">

First, install Multipass for your operating system:

<Tabs
  groupId="operating-system"
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

Run the following `multipass` command to launch Multipass:

```shell script
multipass launch --name microk8s-vm --mem 8G --disk 40G --cpus 4 # 8G ram recommended for Istio
```

Multipass creates a virtual machine (VM). Inside that VM, we will create a Kubernetes cluster with microk8s.

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
exit
multipass shell microk8s-vm
```

Then, enable the following required add-ons:

```bash
sudo microk8s.enable storage dns rbac dashboard
```

Enable TokenRequest feature (required by Istio) by passing in extra argument to `kube-apiserver`.

```shell script
nano /var/snap/microk8s/current/args/kube-apiserver
```
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

Exit out of the VM for the next steps.
```shell script
exit
```

Next, get the kubeconfig by running

```shell script
   multipass exec microk8s-vm -- /snap/bin/microk8s.config > kubeconfig
 ```

</TabItem>
</Tabs>

## Step 1: Install Onepanel

1. Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/core/releases/latest).

<Tabs
  groupId="operating-systems"
  defaultValue="linux"
  values={[
    { label: 'Linux', value: 'linux', },
    { label: 'macOS', value: 'macos', },
    { label: 'Windows', value: 'windows', },
  ]
}>
<TabItem value="linux">

```bash
# Download the binary
curl -sLO https://github.com/onepanelio/core/releases/latest/download/opctl-linux-amd64

# Make binary executable
chmod +x opctl-linux-amd64

# Move binary to path
mv ./opctl-linux-amd64 /usr/local/bin/opctl

# Test installation
opctl version
```

</TabItem>
<TabItem value="macos">

```bash
# Download the binary
curl -sLO https://github.com/onepanelio/core/releases/latest/download/opctl-macos-amd64

# Make binary executable
chmod +x opctl-macos-amd64

# Move binary to path
mv ./opctl-macos-amd64 /usr/local/bin/opctl

# Test installation
opctl version
```

</TabItem>
<TabItem value="windows">

:::info
Download the [attached executable](https://github.com/onepanelio/core/releases/latest/download/opctl-windows-amd64.exe), rename it to `opctl` and move it to a folder that is in your PATH environment variable.
:::

</TabItem>
</Tabs>

2. Run the following command to initialize a `params.yaml` template for your provider:

<Tabs
  groupId="cloud-provider"
  defaultValue="aks"
  values={[
    { label: 'Azure AKS', value: 'aks', },
    { label: 'Amazon EKS', value: 'eks', },
    { label: 'Google Cloud GKE', value: 'gke', },
    { label: 'Minikube', value: 'minikube', },
    { label: 'Microk8s', value: 'microk8s', },
  ]
}>
<TabItem value="aks">

```bash
opctl init --provider aks \
  --artifact-repository-provider s3
```

:::note
If you have GPU nodes, you need to set the `--gpu-device-plugins` flag. Valid values are `nvidia` and `amd` or a comma separated combination of both `nvidia,amd`.
:::

</TabItem>
<TabItem value="eks">

```bash
opctl init --provider eks \
  --artifact-repository-provider s3
```

:::note
If you have GPU nodes, you need to set the `--gpu-device-plugins` flag. Valid values are `nvidia` and `amd` or a comma separated combination of both `nvidia,amd`.
:::

</TabItem>
<TabItem value="gke">

```bash
opctl init --provider gke \
    --artifact-repository-provider s3
```

</TabItem>

<TabItem value="minikube">

```bash
opctl init --provider minikube \
    --enable-metallb \
    --artifact-repository-provider s3
```

:::note
metallb is used as a loadbalancer 
:::

:::note
If you have GPU nodes, you need to set the `--gpu-device-plugins` flag. Valid values are `nvidia` and `amd` or a comma separated combination of both `nvidia,amd`.
:::

</TabItem>

<TabItem value="microk8s">

```bash
opctl init --provider microk8s \
    --enable-metallb \
    --artifact-repository-provider s3
```

:::note
metallb is used as a loadbalancer 
:::

:::note
If you have GPU nodes, you need to set the `--gpu-device-plugins` flag. Valid values are `nvidia` and `amd` or a comma separated combination of both `nvidia,amd`.
:::

</TabItem>
</Tabs>

:::important
You can use different object storage than S3 by setting the `--artifact-repository-provider` flag. 

See [CLI overview](/docs/deployment/configuration/cli) for additional flags that that may apply.
:::

3. Populate `params.yaml` by following the instructions in the template, you can also refer to [configuration file sections](/docs/deployment/configuration/files#sections) for more detailed information.

4. Finally, run the following command to deploy Onepanel to your cluster:

<Tabs
  groupId="cloud-provider"
  defaultValue="aks"
  values={[
    { label: 'Azure AKS', value: 'aks', },
    { label: 'Amazon EKS', value: 'eks', },
    { label: 'Google Cloud GKE', value: 'gke', },
    { label: 'Minikube', value: 'minikube', },
    { label: 'Microk8s', value: 'microk8s', },
  ]
}>
<TabItem value="aks">

```bash
opctl apply
```

</TabItem>
<TabItem value="eks">

```bash
opctl apply
```

</TabItem>
<TabItem value="gke">

```bash
opctl apply
```

</TabItem>

<TabItem value="minikube">

```bash
opctl apply
```

</TabItem>

<TabItem value="microk8s">

```bash
KUBECONFIG=./kubeconfig opctl apply
```

:::note
If you do not have a loadbalancer setup, you can use metallb
```shell script
opctl init --provider microk8s --enable-metallb
```
:::

</TabItem>
</Tabs>

:::note
If the command completes but it indicates that your cluster is not ready, you can check status again by running `opctl app status`. If you're still seeing issues, visit our [Troubleshooting](/docs/deployment/troubleshooting/overview) page.
:::

5. Once the deployment completes, the CLI will display the host name and wildcard domain you need to use to setup your DNS. You can also get this information again by running:

```bash
opctl app status
```

6. Create the appropriate DNS record in your DNS provider based on the instructions above.

:::tip
If you don't have a domain name handy or you're waiting for your DNS record to propogate, you can set up a [hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) to quickly test the deployment.
:::

7. Wait a few minutes and check the URL mentioned in the instructions above. Your applications should load with a screen prompting you to enter a token.

:::note
If the application is not loading, visit our [Troubleshooting](/docs/deployment/troubleshooting/overview) page for some steps that can help resolve most issues. If you are still having issues, join our [Slack community](https://join.slack.com/t/onepanel-ce/shared_invite/zt-eyjnwec0-nLaHhjif9Y~gA05KuX6AUg) or open an issue in [GitHub](https://github.com/onepanelio/core/issues).
:::

8. Depending on your provider, you may need to take the following steps to access the application:

<Tabs
  groupId="cloud-provider"
  defaultValue="aks"
  values={[
    { label: 'Azure AKS', value: 'aks', },
    { label: 'Amazon EKS', value: 'eks', },
    { label: 'Google Cloud GKE', value: 'gke', },
    { label: 'Minikube', value: 'minikube', },
    { label: 'Microk8s', value: 'microk8s', },
  ]
}>
<TabItem value="aks">

:::info
 No additional steps required.
:::

</TabItem>
<TabItem value="eks">

:::info
 No additional steps required.
:::

</TabItem>
<TabItem value="gke">

:::info
 No additional steps required.
:::

</TabItem>
<TabItem value="minikube">

:::info
 No additional steps required.
:::

</TabItem>
<TabItem value="microk8s">
To get access to this new cluster via browser, we need to carry out extra steps.

Example request flow
  
<img src="/img/multipass_request_flow.png" alt="Request Flow with Multipass" width="800px"/>

Execute these steps in the host machine.

```shell script
multipass list
```

you should see something like this

```text
Name                    State             IPv4             Image
microk8s-vm             Running           10.174.163.50    Ubuntu 18.04 LTS
```

Grab the IP address, 10.174.163.50 in this case.
  
Add an entry to your hosts file to point to the fqdn you setup in `params.yaml`
For example, if our fqdn was set up like this
```yaml
# The Fully Qualified Domain (FQDN) where Onepanel will be hosted.
# If `domain` above is set to example.com or sub.example.com, then your FQDN could be: app.example.com or app.sub.example.com respectively
fqdn: app.alex.xyz
```

Then we add this to `/etc/hosts` 
```text
10.174.163.50 app.alex.xyz
```
  
Adding this entry means the host browser will try to access the multipass vm we setup
for microk8s.
  
Next, enter into the multipass VM
```shell script
multipass shell microk8s-vm
```
  
:::note Execute inside the multipass VM
```shell script
microk8s.kubectl get services -n istio-system
```
:::

```text
NAME                   TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                                                                                                                      AGE
istio-ingressgateway   LoadBalancer   10.152.183.166   10.1.31.0     15020:31979/TCP,80:31394/TCP,443:30038/TCP,15029:32204/TCP,15030:32688/TCP,15031:31420/TCP,15032:30575/TCP,15443:30386/TCP   3d3h
```
  
Inside the multipass VM, add an entry to the `/etc/hosts` file using the EXTERNAL-IP from above.
```shell script
sudo nano /etc/hosts  
```
  
```text
10.1.31.0 app.alex.xyz
```
  
Once you have entered and saved the host change, verify the onepanel website is running.
  
```shell script
curl app.alex.xyz # This is the fqdn entry from params.yaml
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

Now, go back to your host machine, open your internet browser and go to:
`app.alex.xyz`.

You should see the website load up.
</TabItem>
</Tabs>

9. Use the following command to get your auth token to log into Onepanel:

```bash
opctl auth token
```

## Step 2: Launch CVAT for annotation
You can use the built-in CVAT to annotate visual data (images, videos). To launch CVAT, click on Workspaces, and you will find Create Workspace button as shown below.

![Create Workspace](/img/create_workspaces_button_in_workspaces_page.png)

Now, select CVAT, machine type, you can also modify other parameters such as disk size. Once done, click on `CREATE AND RUN`. This will launch a new CVAT workspace. Please note that minimum RAM requirement for CVAT is 16GB.

![Create CVAT](/img/launch_cvat.png)

Once in CVAT, you can annotate imges with bounding boxes, polygons, polylines, points, etc.

![CVAT sample](/img/draw_shape.PNG)

## Step 3: Train a model on annotated data

Onepanel CE allows you to train a deep learning model on annotated data in CVAT in a matter of a few clicks. 

You can directly train object detection or segmentation model from CVAT which you can use later to pre-annotate new data. This dramatically reduces time it takes to train new models and use them to pre-annotate new data. Moreover, apart from default models that we provide, you easily add new models or even modify exising model workflows.

To train a new model, first make sure you have some annotated data in a task. Then, click Actions or Menu button for a CVAT task on which you want to train a model. Click on `Execute training workflow`. You will see following pop up window.

![Train a model from CVAT](/img/create_annotation_model_base.png)

Here, you can select model to train. In this case, it's MaskRCNN. Most of the parameters visible above are related to the model (MaskRCNN). Number of classes should be equal to number of classes you have in that CVAT task + 1 for background. However, it is important to note that frames and corresponding annotation will be automatically dumped onto the cloud object storage (path: `<your-namespace>/annotation-dump/<time-stamp>/`) that you used while setting up Onepanel. Similary, output of a workflow (i.e trained model) will also be uploaded to cloud storage (path: `<your-namespace>/workflow-data/<workflow-uid>/<time-stamp>/`). Here, you can also select the checkpoint path from previously trained model. You can leave it empty if you don't have an appropriate, previously trained model.

Please note you can add your models as well. Once you select the model, you will see a list of parameter for that model (Onepanel Workflow) which you can modify or use default model. If your workflow does not have `dump-format` parameter set, then you will also have to select the Dump Format (i.e MS COCO or TFRecords) as well based on which workflow your model/workflow supports.

For more information about CVAT on Onepanel, please refer to our [docs on CVAT](/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_quick_guide).