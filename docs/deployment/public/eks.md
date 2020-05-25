---
title: EKS deployment guide
sidebar_label: EKS deployment
---

This document outlines the installation steps for Amazon Elastic Kubernetes Service (EKS).

## Launch an EKS cluster
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

## Install Onepanel
1. Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/core/releases/latest).

2. Run the following command to initialize a `params.yaml` template for EKS:

```bash
opctl init --provider eks \
    --enable-https \
    --enable-cert-manager \
    --dns-provider <dns-provider>
```

:::note
The `--enable-https` flag is optional and requires a TLS certificate, but it is highly recommended. You can optionally set the `--enable-cert-manager` and `--dns-provider` flags, so TLS certificates are automatically created and renewed via [Let's Encrypt](https://letsencrypt.org/). If you do not set this flag and your DNS provider isn't one of the [supported DNS providers](/docs/deployment/configuration/tls#supported-dns-providers), then you have to create a wildcard certificate and manually manage it.
:::

:::note
If you have GPU nodes, you need to set the `--gpu-device-plugins` flag. Valid values are `nvidia` and `amd` or a comma separated combination of both `nvidia,amd`.
:::

3. Populate `params.yaml` by following the instructions in the template, you can also refer to the [configuration files](/docs/deployment/configuration/files) section.

#### Figuring out values for nodePool in `params.yaml`
```bash
  nodePool:
    label: beta.kubernetes.io/instance-type
    # Add more by following the format:
    # - name: <name>
    #   value: <value>
    # The first option will be used as default.
    options:
    - name: 'MainNode'
      value: m5.large
```
You need to figure out information about your nodes.
Execute:
```bash
kubectl get nodes --show-labels
```
You will get output similar to:
```bash
alpha.eksctl.io/cluster-name=alexeks,
alpha.eksctl.io/nodegroup-name=ng-8c1e9e1a,
beta.kubernetes.io/arch=amd64,
beta.kubernetes.io/instance-type=m5.large, #<---
beta.kubernetes.io/os=linux,
eks.amazonaws.com/nodegroup-image=ami-065418523a44331e5,
eks.amazonaws.com/nodegroup=ng-8c1e9e1a,
failure-domain.beta.kubernetes.io/region=us-west-2,
failure-domain.beta.kubernetes.io/zone=us-west-2d,
kubernetes.io/arch=amd64,
kubernetes.io/hostname=ip-192-168-4-243.us-west-2.compute.internal,
kubernetes.io/os=linux
```
We want the values:

```bash
beta.kubernetes.io/instance-type=m5.large
```

Use these to fill out that section.

4. Finally, run the following command to deploy to your cluster:

```bash
opctl apply
```

5. Once the deployment completes, the CLI will display the IP and wildcard domain you need to use to setup your DNS. You can also get this information again by running:

```bash
opctl app ip
```

6. Create a `CNAME` record in your DNS provider based on the instructions above.

:::tip
Note that you should use a wildcard `CNAME` record, for example: `*.example.com` or `*.subdomain.example.com`
:::

7. Use the following command to get your auth token to log into Onepanel:

```bash
opctl auth token
```

