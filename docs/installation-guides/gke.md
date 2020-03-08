---
title: GKE installation guide
sidebar_label: Installing on GKE
---

This document outlines the installation steps for Google Kubernetes Engine (GKE).

## Launch a GKE cluster
We recommend launching a cluster with 2 `n1-standard-4` nodes to start, with autoscaling enabled and network policy enabled. You can add additional CPU/GPU node pools as needed later.

Example `gcloud` script:

```bash
gcloud beta container --project $PROJECTNAME \
    clusters create $CLUSTERNAME --zone "us-central1-a" \
    --no-enable-basic-auth --release-channel "regular" \
    --machine-type "n1-standard-4" --image-type "COS" \
    --disk-type "pd-standard" --disk-size "100" \
    --metadata disable-legacy-endpoints=true \
    --scopes "https://www.googleapis.com/auth/devstorage.read_only","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/monitoring","https://www.googleapis.com/auth/servicecontrol","https://www.googleapis.com/auth/service.management.readonly","https://www.googleapis.com/auth/trace.append" \
    --num-nodes $NUMNODES --enable-stackdriver-kubernetes \
    --enable-ip-alias --network $NETWORK --subnetwork $SUBNETWORK \
    --default-max-pods-per-node "110" --enable-network-policy \
    --addons HorizontalPodAutoscaling,HttpLoadBalancing --enable-autoupgrade \
    --enable-autorepair 
```

:::important
Onepanel uses `cert-manager` to automatically renew TLS certificates. You need to setup additional firewall rules in GKE for this to work, refer to [cert-manager compatibility](https://cert-manager.io/docs/installation/compatibility/#gke) for more information.
:::

## Install Onepanel Core
Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/cli/releases)

Run the following command to create `params.yaml` file for GKE:

```bash
opctl init --provider gke --dns-provider <dns-provider> --logging
```

:::note
For a list of supported `--dns-provider` values see [CLI documentation]() 
:::

Populate `params.yaml` as outlined in [common installation guide](installation-guides/common)

Then run the following command to deploy to your cluster:

```bash
opctl deploy
```

Once deployment completes, run the following command to get the external IP of Onepanel's gateway:

```bash
kubectl get service istio-ingressgateway -n istio-system
```

This is the IP address you need to point your FQDN to in your DNS provider.

Once deployment is complete, use the follownig command to get your auth token to log into Onepanel:

```bash
opctl auth token
```
:::important
For GKE, you have to run a simple `kubectl` (i.e. `kubectl get nodes`) for the above command to work.
:::
