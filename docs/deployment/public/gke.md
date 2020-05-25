---
title: GKE deployment guide
sidebar_label: GKE deployment
---

This document outlines the installation steps for Google Kubernetes Engine (GKE).

## Launch a GKE cluster
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

## Install Onepanel
1. Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/core/releases/latest).

2. Run the following command to initialize a `params.yaml` template for GKE:

```bash
opctl init --provider gke \
    --enable-https \
    --enable-cert-manager \
    --dns-provider <dns-provider>
```

:::note
The `--enable-https` flag is optional and requires a TLS certificate, but it is highly recommended. You can optionally set the `--enable-cert-manager` and `--dns-provider` flags, so TLS certificates are automatically created and renewed via [Let's Encrypt](https://letsencrypt.org/). If you do not set this flag and your DNS provider isn't one of the [supported DNS providers](/docs/deployment/configuration/tls#supported-dns-providers), then you have to create a wildcard certificate and manually manage it.
:::

:::note
GKE automatically adds GPU device plugins to GPU nodes, so you do not have to set the `--gpu-device-plugins` flag.
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
      value: n1-standard-4
```
You need to figure out information about your nodes.
Execute:
```bash
kubectl get nodes --show-labels
```
You will get output similar to:
```bash
beta.kubernetes.io/arch=amd64,
beta.kubernetes.io/fluentd-ds-ready=true,
beta.kubernetes.io/instance-type=n1-standard-4, #<----------------------------
beta.kubernetes.io/masq-agent-ds-ready=true,
beta.kubernetes.io/os=linux,
cloud.google.com/gke-nodepool=default-pool,
cloud.google.com/gke-os-distribution=cos,
failure-domain.beta.kubernetes.io/region=us-west1,
failure-domain.beta.kubernetes.io/zone=us-west1-a,
kubernetes.io/arch=amd64,
kubernetes.io/hostname=gke-alexme-default-pool-b2c91de9-45dl,
kubernetes.io/os=linux,
node.kubernetes.io/masq-agent-ds-ready=true,
projectcalico.org/ds-ready=true
```
We want the values:

```bash
beta.kubernetes.io/instance-type=n1-standard-4
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

6. Create an `A` record in your DNS provider based on the instructions above.

:::tip
Note that you should use a wildcard `A` record, for example: `*.example.com` or `*.subdomain.example.com`
:::

7. Use the following command to get your auth token to log into Onepanel:

```bash
opctl auth token
```

