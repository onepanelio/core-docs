---
title: Quick start
sidebar_label: Quick start
description: Get started with Onepanel on AKS, EKS or GKE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

It's easy to get started with Onepanel. First, you install the CLI (`opctl`) and then using `opctl`, you generate a `params.yaml` file and update it to configure your deployment. Once complete, you can access your deployment from any browser.

In this quick start, we will walk you through:

1. Deploying Onepanel to one of the major cloud providers.
2. Labelling your images or video using the integrated annotation Workspace.
3. Training your model with the newly labelled data using the integrated training Workflows.

Before getting started, take a look at [concepts](/docs/getting-started/concepts/namespaces) to understand the different components in Onepanel.

:::tip
You can also follow along with our getting started videos, but be sure to use the commands from the docs:

- [Getting started with Microsoft Azure](https://youtu.be/CQBIYfBk3Zk)
- [Getting started with Amazon EKS](https://youtu.be/Ipdd8f6D6IM)
- [Getting started with Google Cloud GKE](https://youtu.be/pZRO63SnQ8A)
:::

## Step 0: Create a Kubernetes cluster
Let's get started by creating a Kubernetes cluster in one of the following cloud providers:

<Tabs
  groupId="cloud-provider"
  defaultValue="aks"
  values={[
    { label: 'Azure AKS', value: 'aks', },
    { label: 'Amazon EKS', value: 'eks', },
    { label: 'Google Cloud GKE', value: 'gke', },
    // { label: 'Minikube', value: 'minikube', },
    // { label: 'Microk8s', value: 'microk8s', },
  ]
}>
<TabItem value="aks">

:::important
Make sure the **latest version** of [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) (`az`) is installed before proceeding.
:::

Run this `az` command to create a bare minimum cluster with 2 `Standard_D4s_v3` nodes:

```bash
az aks create --resource-group <resource-group> --name <cluster-name> --location <region> \
    --node-count 2 \
    --node-vm-size Standard_D4s_v3 \
    --node-osdisk-size 100 \
    --min-count 2 \
    --max-count 5 \
    --enable-cluster-autoscaler \
    --network-plugin azure \
    --network-policy azure \
    --enable-addons monitoring \
    --generate-ssh-keys
```

You can then get access credentials by running:

```bash
az aks get-credentials --resource-group <resource-group> --name <cluster-name> --admin
```

</TabItem>
<TabItem value="eks">

:::important
Make sure the **latest version** of [Amazon EKS CLI](https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html) (`eksctl`) is installed before proceeding.
:::

Run this `eksctl` commands to create a bare minimum cluster with 2 `m5.xlarge` nodes:

```bash
eksctl create cluster --name=<cluster-name> --region <region> --zones <<region>a>,<<region>b> --node-zones <<region>a> \
    --nodes 2  \
    --node-type m5.xlarge \
    --node-volume-size 100 \
    --nodes-min 2 \
    --nodes-max 5 \
    --asg-access \
    --ssh-access \
    --tags "onepanel.io/enabled=true,k8s.io/cluster-autoscaler/node-template/label/node.kubernetes.io/instance-type=m5.xlarge"
```

:::note 
In order to [support scale to and from zero](https://github.com/aws/containers-roadmap/issues/724), we need to use EKS unmanaged nodes. These do not show up in EKS console but you can view them by going to **EC2** > **Auto Scaling groups**.
:::

The `eksctl` command above will automatically retrieve your cluster's access credentials but you can also get them by running:

```bash
eksctl utils write-kubeconfig --cluster=<cluster-name> --region <region>
```

If you want to give another user admin access to this cluster after creation:

```bash
eksctl create iamidentitymapping --cluster <cluster-name> --arn arn:aws:iam::<number>:user/<username> --group system:masters --username <username>
```

We also recommend enabling CloudWatch monitoring as follows:

```bash
eksctl utils update-cluster-logging --enable-types all
```

</TabItem>
<TabItem value="gke">

:::important
Make sure the **latest version** of [Google Cloud SDK](https://cloud.google.com/sdk/install) (`gcloud`) is installed before proceeding.
:::

Run this `gcloud` command to create a bare minimum cluster with 2 `n1-standard-4` nodes:

```bash
gcloud container --project <project-name> clusters create <cluster-name> --zone <zone> --node-locations <zone> \
    --num-nodes 2 \
    --machine-type n1-standard-4 \
    --disk-size 100 \
    --min-nodes 2 \
    --max-nodes 5 \
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

:::tip
Once you are done with these quick start steps, see [adding more nodes](/docs/deployment/components/nodes) to add additional CPU or GPU nodes to your cluster.
:::

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
      // { label: 'Minikube', value: 'minikube', },
      // { label: 'Microk8s', value: 'microk8s', },
    ]
  }>
  <TabItem value="aks">

  ```bash
  opctl init --provider aks \
    --artifact-repository-provider s3 \
    --gpu-device-plugins nvidia
  ```

  </TabItem>
  <TabItem value="eks">

  ```bash
  opctl init --provider eks \
    --artifact-repository-provider s3 \
    --gpu-device-plugins nvidia
  ```

  </TabItem>
  <TabItem value="gke">

  ```bash
  opctl init --provider gke \
    --artifact-repository-provider s3 \
    --gpu-device-plugins nvidia
  ```

  </TabItem>

  <TabItem value="minikube">

  ```bash
  opctl init --provider minikube \
      --enable-metallb \
      --artifact-repository-provider s3
  ```

  </TabItem>

  <TabItem value="microk8s">

  ```bash
  opctl init --provider microk8s \
      --enable-metallb \
      --artifact-repository-provider s3
  ```

  :::note
  If you have GPU nodes, you need to set the `--gpu-device-plugins` flag. Valid values are `nvidia` and `amd` or a comma separated combination of both `nvidia,amd`.
  :::

  </TabItem>
  </Tabs>

  :::note
  Currently, the only valid option for `--artifact-repository-provider` flag is `s3`, which supports any S3 compatible object storage like [Minio](https://docs.min.io/) and [GCS (with HMAC key enabled)](https://cloud.google.com/storage/docs/authentication/managing-hmackeys#create).
  :::

3. Populate `params.yaml` by following the instructions in the template, and referring to [configuration file sections](/docs/deployment/configuration/files#sections) for more detailed information.

4. Finally, run the following command to deploy Onepanel to your cluster:

  <Tabs
    groupId="cloud-provider"
    defaultValue="aks"
    values={[
      { label: 'Azure AKS', value: 'aks', },
      { label: 'Amazon EKS', value: 'eks', },
      { label: 'Google Cloud GKE', value: 'gke', },
      // { label: 'Minikube', value: 'minikube', },
      // { label: 'Microk8s', value: 'microk8s', },
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

7. Wait a few minutes and check the URL mentioned in the instructions above. Your applications should load with a screen prompting you to enter a token.

  :::note
  If the application is not loading, visit our [Troubleshooting](/docs/deployment/troubleshooting/overview) page for some steps that can help resolve most issues. If you are still having issues, reach out in [Slack](https://join.slack.com/t/onepanel-ce/shared_invite/zt-eyjnwec0-nLaHhjif9Y~gA05KuX6AUg) or [GitHub discussions](https://github.com/onepanelio/core/discussions).
  :::

8. Use the following command to get your auth token to log into Onepanel:

  ```bash
  opctl auth token
  ```

## Step 2: Annotate your data

Onepanel is fully integrated with [Computer Vision Annotation Tool (CVAT)](https://github.com/opencv/cvat), allowing you to annotate images and videos and then train models on the annotated data with a few clicks. You can then use these newly trained models to automatically pre-annotate additional data, iteratively improving your object detection or semantic segmentation models.

1. Go to **Workspaces** and click **Create Workspace**.

  ![Create Workspace](/img/create_workspaces_button_in_workspaces_page.png)

2. Select the CVAT template and enter a name for your Workspace.

  ![](/img/quickstart-115738.png)

3. Select a node pool that Onepanel will use to provision a machine for running CVAT. CVAT requires at least 16GB of RAM.
  
  ![](/img/quickstart-133251.png)
  
  :::note
  Some providers have limits on how many volumes you can attach to a node. The default CVAT template in Onepanel requires 3 volumes, so make sure to pick a machine that can support at least that many volumes.
  :::

4. Next, add the directory you want Onepanel to pull raw input data and store training output (pickled models, classes, etc.). This directory should be in the default object storage you configured when you launched Onepanel and in a directory that matches your current namespace.

  ![](/img/quickstart-171037.png)

5. Click **Create and Run** to launch your CVAT Workspace.

6. Once CVAT is running, click **View**.

  ![](/img/quickstart-173734.png)

7. In CVAT, click **Create new task**.

  ![](/img/quickstart-173841.png)

8. Enter a name for your task and then under **Constructor**, add your labels. See [CVAT's user guide](https://github.com/opencv/cvat/blob/develop/cvat/apps/documentation/user_guide.md#creating-an-annotation-task) for additional information on more advanced label configuration.

9. Under "Select files", click **Connected file share**. Files from your object storage location above should have already synced here. Pick the ones you want to annotate.
  
  ![](/img/quickstart-180004.png)
  :::important
  Onepanel's FileSyncer automatically syncs files from your object storage location to this CVAT instance every 5 minutes.
  :::

10. Click **Submit** and then click the **Tasks** menu item to go to the tasks list.

11. Click **Open** to open task details.
  
  ![](/img/cvat_open.png)

12. Click **Job #1** to go into CVAT to start annotating your data. See [CVAT's user guide](https://github.com/opencv/cvat/blob/develop/cvat/apps/documentation/user_guide.md#interface-of-the-annotation-tool) for more information on the annotation tool interface.

## Step 3: Train a model on annotated data

Onepanel allows you to train deep learning models on annotated data in CVAT in a matter of a few clicks. 

You can directly train object detection or segmentation model from CVAT which you can use later to pre-annotate new data. This dramatically reduces time it takes to train new models and use them to pre-annotate new data. Moreover, apart from default models that we provide, you easily add new models or even modify exising model workflows.

1. Click on **Open** for a task you want to train a model on.

  ![Open task](/img/cvat_open.png)

2. Click on **Job #X**, where X could be any job number. Annotate few frames. For testing you can just annotate one frame. But ideally you want to have thousands of objects to train a deep learning model on. Alternatively, you can just run pre-annotation if your labels are common ones.

3. Click on **Actions** for a task you want to train a model on. Then, click on **Execute training Workflow**.

  ![Select training workflow](/img/cvat_select_workflow_execution.png)

4. Select Workflow template (i.e model to train). By default, you can use TensorFlow Object Detection for object detection or MaskRCNN for semantic segmentation. Below image shows a case for Tensorflow Object Detection.
  
  ![Train a model from CVAT](/img/tf-object-detection.png)

5. Update hyper-parameters and settings as per your requirements. Most of the parameters visible above are related to the model (MaskRCNN) and system (i.e machine). For this guide, you can change `num-steps` from default 10000 to 1000. You can also select the checkpoint path from previously trained model. You can leave it empty if you don't have an appropriate, previously trained model.

6. Click **Submit**. This will execute the Onepanel Workflow for selected model. You can see Workflow logs by going to Workflow execution page. You can find the URL for the same in the notification card.
  
  ![Workflow URL](/img/execution_url.png)

:::tip
Note that you can easily add your own models as well. See [adding custom models](/docs/getting-started/use-cases/computervision/annotation/cvat/adding_custom_model) for more information on adding custom models.

You can also use this trained model to run pre-annotation in CVAT. See [automatic annotation](/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation) for more information on pre-annotation.
:::

For more information about CVAT on Onepanel, see our [CVAT documentation](/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_quick_guide).
