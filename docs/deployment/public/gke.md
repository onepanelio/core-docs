---
title: GKE deployment guide
sidebar_label: GKE deployment
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document outlines the installation steps for Google Kubernetes Engine (GKE).

## Launch a GKE cluster
:::important
Make sure [Google Cloud SDK](https://cloud.google.com/sdk/install) (`gcloud`) is installed before proceeding.
:::

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

<Tabs
  defaultValue="linux"
  values={[
    { label: 'Linux', value: 'linux', },
    { label: 'macOS', value: 'macos', },
  ]
}>
<TabItem value="linux">

```bash
# Download the binary
curl -sLO https://github.com/onepanelio/core/releases/download/latest/opctl-linux-amd64

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
curl -sLO https://github.com/onepanelio/core/releases/download/latest/opctl-macos-amd64

# Make binary executable
chmod +x opctl-macos-amd64

# Move binary to path
mv ./opctl-macos-amd64 /usr/local/bin/opctl

# Test installation
opctl version
```

</TabItem>
</Tabs>

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

3. Populate `params.yaml` by following the instructions in the template, you can also refer to [configuration files](/docs/deployment/configuration/files) for more detailed information.

4. Finally, run the following command to deploy to your cluster:

```bash
opctl apply
```

:::note
If the command completes but it indicates that your cluster is not ready, you can check status again by running `opctl app status`. If you're still seeing issues, run `kubectl get pods --all-namespaces` to see if there are any crashing pods.
:::

5. Once the deployment completes, the CLI will display the IP and wildcard domain you need to use to setup your DNS. You can also get this information again by running:

```bash
opctl app status
```

6. Create an `A` record in your DNS provider based on the instructions above.

:::tip
Note that you should use a wildcard `A` record, for example: `*.example.com` or `*.subdomain.example.com`
:::

7. Use the following command to get your auth token to log into Onepanel:

```bash
opctl auth token
```

