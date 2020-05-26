---
title: AKS deployment guide
sidebar_label: AKS deployment
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

## Install Onepanel
1. Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/core/releases/latest).

2. Run the following command to initialize a `params.yaml` template for AKS:

```bash
opctl init --provider aks \
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
      value: Standard_D4s_v3
```
You need to figure out information about your nodes.
Execute:
```bash
kubectl get nodes --show-labels
```
You will get output similar to:
```bash
agentpool=nodepool1,
beta.kubernetes.io/arch=amd64,
beta.kubernetes.io/instance-type=Standard_D4s_v3, #<---
beta.kubernetes.io/os=linux,
failure-domain.beta.kubernetes.io/region=eastus,
failure-domain.beta.kubernetes.io/zone=0,
kubernetes.azure.com/cluster=MC_dev_alexaz_eastus,
kubernetes.azure.com/mode=system,kubernetes.azure.com/role=agent,
kubernetes.io/arch=amd64,kubernetes.io/hostname=aks-nodepool1-23378484-vmss000000,
kubernetes.io/os=linux,
kubernetes.io/role=agent,
node-role.kubernetes.io/agent=,
storageprofile=managed,storagetier=Premium_LRS
```
We want the values:

```bash
beta.kubernetes.io/instance-type=Standard_D4s_v3,
```

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

