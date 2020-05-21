---
title: Quick start
sidebar_label: Quick start
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

It's easy to get started with Onepanel. First, install the CLI (`opctl`) and then using `opctl`, generate a `params.yaml` file and configure your deployment. Once complete, you can access your deployment from any browser, use your Kubernetes auth to login and finally run a workflow.

## Step 0: Create a Kubernetes cluster
First, create a Kubernetes cluster in one of the following cloud providers:

<Tabs
  defaultValue="aks"
  values={[
    { label: 'Azure AKS', value: 'aks', },
    { label: 'Amazon EKS', value: 'eks', },
    { label: 'Google Cloud GKE', value: 'gke', },
  ]
}>
<TabItem value="aks">

We recommend launching a cluster with 2 `Standard_D4s_v3` nodes to start, with autoscaling and network policy enabled. You can add additional CPU/GPU node pools as needed later.

Here is a sample `az` command to create a bare minimum cluster:

```bash
az aks create --resource-group <resource-group> --name <cluster-name> \
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

:::note
The `--enable-addons monitoring` flag in the command above enables Azure Monitor for log aggregation which can incur additional charges. You can optionally remove this flag and add `--enable-efk-logging` to `opctl` command below.
:::

You can then get access credentials by running:

```
az aks get-credentials --resource-group <resource-group> --name <cluster-name> --admin
```

</TabItem>
<TabItem value="eks">

We recommend launching a cluster with 2 `m5.xlarge` nodes to start, with autoscaling and network policy enabled. You can add additional CPU/GPU node pools as needed later.

Here are sample [eksctl](https://eksctl.io/introduction/installation/) commands to create a bare minimum cluster:

```bash
eksctl create cluster --name=<cluster-name> --region <region> \
    --nodes 2  \
    --node-volume-size 100 \
    --nodes-min 2 \
    --nodes-max 2 \
    --asg-access \
    --managed \
    --ssh-access
```
To enable auto scaling see [Enable Auto Scaling](https://eksctl.io/usage/autoscaling/)

To enable network policy see [Installing Calico on Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/calico.html)

To enable logging see [Enabling CloudWatch logging](https://eksctl.io/usage/cloudwatch-cluster-logging/)

:::note
You can optionally skip the logging configuration above and add `--enable-efk-logging` to `opctl` command below.
:::

The `eksctl` command above will automatically retrieve your cluster's access credentials but you can also get them by running:

```
eksctl utils write-kubeconfig --cluster=<cluster-name> --region <region>
```

</TabItem>
<TabItem value="gke">

We recommend launching a cluster with 2 `n1-standard-4` nodes to start, with autoscaling and network policy enabled. You can add additional CPU/GPU node pools as needed later.

Here is sample `gcloud` command to create a bare minimum cluster:

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

:::note
The `--enable-stackdriver-kubernetes` flag in above command enables Google Stackdriver for log aggregation which can incur additional charges. You can optionally remove this flag and add `--enable-efk-logging` to `opctl` command below.
:::

:::note
You can optionally add the `--enable-tpu` flag to enable TPUs in GKE.
:::

The command above will automatically retrieve your cluster's access credentials but you can also get them by running:

```
gcloud container clusters get-credentials <cluster-name> --zone <zone>
```

</TabItem>
</Tabs>


## Step 1: Install Onepanel

1. Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/core/releases/latest).

2. Run the following command to initialize a `params.yaml` template for your provider:

<Tabs
  defaultValue="aks"
  values={[
    { label: 'Azure AKS', value: 'aks', },
    { label: 'Amazon EKS', value: 'eks', },
    { label: 'Google Cloud GKE', value: 'gke', },
  ]
}>
<TabItem value="aks">

```bash
opctl init --provider aks \
  --enable-https \
  --enable-cert-manager \
  --dns-provider <dns-provider>
```

:::note
If you have GPU nodes, you need to set the `--gpu-device-plugins` flag. Valid values are `nvidia` and `amd` or a comma separated combination of both `nvidia,amd`.
:::

</TabItem>
<TabItem value="eks">

```bash
opctl init --provider eks \
  --enable-https \
  --enable-cert-manager \
  --dns-provider <dns-provider>
```

:::note
If you have GPU nodes, you need to set the `--gpu-device-plugins` flag. Valid values are `nvidia` and `amd` or a comma separated combination of both `nvidia,amd`.
:::

</TabItem>
<TabItem value="gke">

```bash
opctl init --provider gke \
  --enable-https \
  --enable-cert-manager \
  --dns-provider <dns-provider>
```

:::note
GKE automatically adds GPU device plugins to GPU nodes, so you do not have to set the `--gpu-device-plugins` flag.
:::

</TabItem>
</Tabs>

:::note
The `--enable-https` flag is optional and requires a TLS certificate, but it is highly recommended. You can optionally set the `--enable-cert-manager` and `--dns-provider` flags, so TLS certificates are automatically created and renewed via [Let's Encrypt](https://letsencrypt.org/). If you do not set this flag and your DNS provider isn't one of the [supported DNS providers](/docs/deployment/configuration/tls#supported-dns-providers), then you have to create a wildcard certificate and manually manage it.
:::


3. Populate `params.yaml` by following the instructions in the template, you can also refer to the [configuration files](/docs/deployment/configuration/files) section.

4. Finally, run the following command to deploy to your cluster:

```bash
opctl apply
```

5. Once the deployment completes, the CLI will display the IP and wildcard domain you need to use to setup your DNS. You can also get this information again by running:

```bash
opctl app ip
```

6. Create an `A` record in your DNS provider based on the instructions above.

7. Use the following command to get your auth token to log into Onepanel:

```bash
opctl auth token
```