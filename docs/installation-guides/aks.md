---
title: AKS installation guide
sidebar_label: Installing on AKS
---

This document outlines the installation steps for Azure Kubernetes Service (AKS).

## Launch an AKS cluster
We recommend launching a cluster with 2 `Standard_D4s_v3` nodes to start, with autoscaling and network policy enabled. You can add additional CPU/GPU node pools as needed later.

Here is a sample `az` command to create a bare minimum cluster:

```bash
az aks create --resource-group <resource-group> --name <cluster-name> \
    --node-count 2 \
    --node-vm-size Standard_D4s_v3 \
    --node-osdisk-size 100 \
    --min-count 0 \
    --max-count 2 \
    --enable-cluster-autoscaler \
    --network-plugin azure \
    --network-policy azure \
    --enable-addons monitoring \
    --generate-ssh-keys
```

:::note
The `--enable-addons monitoring` flag in above command enables Azure Monitor for log aggregation which can incur additional charges. You can optionally remove this flag and add `--enable-efk-logging` to `opctl` command below.
:::

You can then get access credentials by running:

```
az aks get-credentials --resource-group <resource-group> --name <cluster-name>
```

## Install Onepanel Core
Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/cli/releases/latest)

Run the following command to create `params.yaml` file for AKS:

```bash
opctl init --provider aks --enable-https --enable-cert-manager --dns-provider <dns-provider>
```

:::note
The `--enable-https` is optional and requires a TLS certificate, but it is highly recommended. You can optionally set the `--enable-cert-manager` and `--dns-provider` flags, so TLS certificates are automatically created and renewed via [Let's Encrypt](https://letsencrypt.org/). If you do not set this flag and your DNS provider isn't one of the [supported DNS providers](), then you have to create a wildcard certificate and manually manage it.
:::

:::note
If you have GPU nodes, you need to set the `--gpu-device-plugins` flag. Valid values are `nvidia` and `amd` or a comma separated combination of both `nvidia,amd`.
:::

Populate `params.yaml` as outlined in [configuration documentation](installation-guides/configuration)

Finally, run the following command to deploy to your cluster:

```bash
opctl apply
```

Once deployment completes, run the following command to get the external IP of Onepanel's gateway:

```bash
kubectl get service istio-ingressgateway -n istio-system -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

Create an A record in your DNS provider that points to the IP returned from the above command.

:::tip
Note that you should use Wildcard A record, for example: `*.example.com` or `*.subdomain.example.com`
:::

Once deployment is complete, use the follownig command to get your auth token to log into Onepanel:

```bash
opctl auth token
```

