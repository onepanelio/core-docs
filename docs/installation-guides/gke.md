---
title: GKE installation guide
sidebar_label: Installing on GKE
---

This document outlines the installation steps for Google Kubernetes Engine (GKE).

## Launch a GKE cluster
We recommend launching a cluster with 2 `n1-standard-4` nodes to start, with autoscaling and network policy enabled. You can add additional CPU/GPU node pools as needed later.

Here is sample `gcloud` command to create a bare minimum cluster:

```bash
gcloud beta container --project <project-name> clusters create <cluster-name> \
    --zone <zone> \
    --machine-type "n1-standard-4" \
    --disk-type "pd-standard" \
    --disk-size "100" \
    --num-nodes 2 \
    --min-nodes 0 \
    --max-nodes 2 \
    --enable-autoscaling \
    --enable-stackdriver-kubernetes \
    --enable-network-policy \
    --addons HorizontalPodAutoscaling,HttpLoadBalancing
```

:::note
The `--enable-stackdriver-kubernetes` flag in above command enables Google Stackdriver for log aggregation which can incur additional charges. You can optionally remove this flag and add `--enable-efk-logging` to `opctl` command below.
:::

The command above will automatically retrieve your cluster's access credentials but you can also get them by running:

```
gcloud container clusters get-credentials <cluster-name> --zone <zone>
```

## Install Onepanel Core
Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/cli/releases)

Run the following command to create `params.yaml` file for GKE:

```bash
opctl init --provider gke --dns-provider <dns-provider>
```

:::note
For a list of supported `--dns-provider` values see [opctl documentation]() 
:::

Populate `params.yaml` as outlined in [configuration documentation](installation-guides/configuration)

Finally, run the following command to deploy to your cluster:

```bash
opctl apply
```

Once deployment completes, run the following command to get the external IP of Onepanel's gateway:

```bash
kubectl get service istio-ingressgateway -n istio-system
```

This is the IP address you need to point your Wildcard FQDN to in your DNS provider.

:::tip
Example Wildcard FQDN would be `*.example.com` or `*.subdomain.example.com`
:::

Once deployment is complete, use the follownig command to get your auth token to log into Onepanel:

```bash
opctl auth token
```

