---
title: Adding more nodes
sidebar_label: Adding more nodes
description: Onepanel - Adding more nodes to AKS, EKS, GKE and Microk8s cluster
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can easily add auto-scaling nodes to your Onepanel cluster by:

1. Adding the node to your Kubernetes cluster
2. Adding information about the node to your `params.yaml` file
3. Applying the updates to Onepanel by running `opctl apply`

## Step 1. Add nodes to Kubernetes provider

You can add additional auto-scaling node pools (node groups in EKS) to your Kubernetes cluster by running the following commands for your provider.

<Tabs
  groupId="cloud-provider"
  defaultValue="aks"
  values={[
    { label: 'Azure AKS', value: 'aks', },
    { label: 'Amazon EKS', value: 'eks', },
    { label: 'Google Cloud GKE', value: 'gke', },
  ]
}>
<TabItem value="aks">

```bash
az aks nodepool add --resource-group <resource-group> --cluster-name <cluster-name> \
  --name <nodepool-name> \
  --node-vm-size <node-vm-size> \
  --enable-cluster-autoscaler \
  --node-count 1 \
  --min-count 0 \
  --max-count <max-count>
```

For example, to add a node pool with 1 Tesla V100 GPU that scales from 0 to 5 nodes:

```bash {3,7}
az aks nodepool add --resource-group my-resource-group --cluster-name my-cluster-name \
  --name mygpunode \
  --node-vm-size Standard_NC6s_v3 \
  --enable-cluster-autoscaler \
  --node-count 1 \
  --min-count 0 \
  --max-count 5
```

</TabItem>
<TabItem value="eks">

```bash
eksctl create nodegroup --name <nodegroup-name> --cluster <cluster-name> --region <region> --node-zones <<region>a> \
    --nodes 0  \
    --node-type <node-type> \
    --node-volume-size 100 \
    --nodes-min 0 \
    --nodes-max <nodes-max> \
    --asg-access \
    --ssh-access \
    --tags "onepanel.io/enabled=true,k8s.io/cluster-autoscaler/node-template/label/node.kubernetes.io/instance-type=<node-type>"
```

:::note 
In order to [support scale to and from zero](https://github.com/aws/containers-roadmap/issues/724), we need to use EKS unmanaged nodes. These do not show up in EKS console but you can view them by going to **EC2** > **Auto Scaling groups**.
:::

For example, to add a node group with 1 Tesla V100 GPU that scales from 0 to 5 nodes:

```bash {3,6,9}
eksctl create nodegroup --name mygpunodegroup --cluster my-cluster-name --region us-west-1 --node-zones us-west-1a \
    --nodes 0  \
    --node-type p3.2xlarge \
    --node-volume-size 100 \
    --nodes-min 0 \
    --nodes-max 5 \
    --asg-access \
    --ssh-access \
    --tags "onepanel.io/enabled=true,k8s.io/cluster-autoscaler/node-template/label/node.kubernetes.io/instance-type=p3.2xlarge"
```

</TabItem>
<TabItem value="gke">

```bash
gcloud container node-pools create <node-pool-name> --cluster <cluster-name> --zone <zone> \
  --machine-type <machine-type> \
  --disk-size 100 \
  --num-nodes 0 \
  --min-nodes 0 \
  --max-nodes <max-nodes> \
  --enable-autoscaling \
  --accelerator "type=<type>,count=<count>"  # optional, example: "type=nvidia-tesla-v100,count=1"
```

:::note
In GKE you can add GPUs to any machine type, so the `--accelerator` flag is optional and only needs to be set if you are adding GPU nodes. See [GCP GPU documentation](https://cloud.google.com/compute/docs/gpus) for a list of GPU types by region.
:::

For example, to add a node pool with 1 Tesla V100 GPU that scales from 0 to 5 nodes:

```bash {2,6,8}
gcloud container node-pools create mygpunodepool --cluster my-cluster-name --zone us-west1-a \
  --machine-type n1-standard-8 \
  --disk-size 100 \
  --num-nodes 0 \
  --min-nodes 0 \
  --max-nodes 5 \
  --enable-autoscaling \
  --accelerator 'type=nvidia-tesla-v100,count=1'
```

</TabItem>
</Tabs>

## Step 2. Update `params.yaml`

Next, you need to add the new nodes in your `params.yaml` file. Note that you can set `name` to anything, but we recommend using a value that is descriptive since this will show in the web UI.

Setting `resources.limits` is only required if you are adding GPU nodes.

<Tabs
  groupId="cloud-provider"
  defaultValue="aks"
  values={[
    { label: 'Azure AKS', value: 'aks', },
    { label: 'Amazon EKS', value: 'eks', },
    { label: 'Google Cloud GKE', value: 'gke', },
  ]
}>
<TabItem value="aks">

```yaml {6-10}
  nodePool:
    ...
    options:
      - name: 'CPU: 4, RAM: 16GB'
        value: Standard_D4s_v3
      - name: 'GPU: 1xV100, CPU: 6, RAM: 112GB'
        value: Standard_NC6s_v3
        resources:
          limits:
            nvidia.com/gpu: 1
```

</TabItem>
<TabItem value="eks">

```yaml {6-10}
  nodePool:
    ...
    options:
      - name: 'CPU: 4, RAM: 16GB'
        value: m5.xlarge
      - name: 'GPU: 1xV100, CPU: 8, RAM: 61GB'
        value: p3.2xlarge
        resources:
          limits:
            nvidia.com/gpu: 1
```

</TabItem>
<TabItem value="gke">

```yaml {6-10}
  nodePool:
    ...
    options:
      - name: 'CPU: 4, RAM: 15GB'
        value: n1-standard-4
      - name: 'GPU: 1xV100, CPU: 8, RAM: 30GB'
        value: n1-standard-8
        resources:
          limits:
            nvidia.com/gpu: 1
```

</TabItem>
</Tabs>

## Step 3. Apply updates to Onepanel
In the final step, you need to apply your changes so that Onepanel can recognize the new node pools:

```bash
opctl apply
```