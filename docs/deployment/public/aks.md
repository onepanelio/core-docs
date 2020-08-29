---
title: AKS deployment guide
sidebar_label: AKS deployment
description: Deploy Onepanel on Azure Kubernetes Service (AKS)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document outlines the installation steps for Azure Kubernetes Service (AKS).

:::tip
This document outlines a production deployment of Onepanel. If you want to quickly try Onepanel, start with our [Quick start](/docs/getting-started/quickstart).
:::

## Launch an AKS cluster
:::note
Make sure [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) (`az`) is installed before proceeding.
:::

We recommend launching a cluster with 2 `Standard_D4s_v3` nodes to start, with autoscaling and network policy enabled. You can add additional CPU/GPU node pools as needed later.

Here is a sample `az` command to create a bare minimum cluster:

```bash
az aks create --resource-group <resource-group> --name <cluster-name> --location <region> \
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

:::note
You can specify the version of the cluster.
Get a list of versions by running:
```shell script
az aks get-versions --location eastus --output table
```
Example output
```text
KubernetesVersion    Upgrades
-------------------  -------------------------------------------------
1.18.2(preview)      None available
1.18.1(preview)      1.18.2(preview)
1.17.5(preview)      1.18.1(preview), 1.18.2(preview)
1.17.4(preview)      1.17.5(preview), 1.18.1(preview), 1.18.2(preview)
1.16.9               1.17.4(preview), 1.17.5(preview)
1.16.8               1.16.9, 1.17.4(preview), 1.17.5(preview)
1.15.11              1.16.8, 1.16.9
1.15.10              1.15.11, 1.16.8, 1.16.9
1.14.8               1.15.10, 1.15.11
1.14.7               1.14.8, 1.15.10, 1.15.11
```

Add the flag to the above command:
```shell script
az aks create --resource-group <resource-group> --name <cluster-name> \
    --node-count 2 \
    --kubernetes-version 1.16.9 \
    ...
```

:::

You can then get access credentials by running:

```
az aks get-credentials --resource-group <resource-group> --name <cluster-name> --admin
```

## Install Onepanel
1. Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/core/releases/latest).

  <Tabs
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
  <TabItem value="windows">

  :::info
  Download the [attached executable](https://github.com/onepanelio/core/releases/latest/download/opctl-windows-amd64.exe), rename it to `opctl` and move it to a folder that is in your PATH environment variable.
  :::

  </TabItem>

  </Tabs>

2. Run the following command to initialize a `params.yaml` template for AKS:

  ```bash
  opctl init --provider aks \
      --artifact-repository-provider s3 \
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

3. Populate `params.yaml` by following the instructions in the template, and referring to [configuration file sections](/docs/deployment/configuration/files#sections) for more detailed information.

  :::tip
  It is highly recommended that you commit `params.yaml` file into a private repository and encrypt it with [BlackBox](https://github.com/StackExchange/blackbox) or use a secret management service like [Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/), [AWS Secret Manager](https://aws.amazon.com/secrets-manager/), [GCP Secret Manager](https://cloud.google.com/secret-manager) or [HashiCorp Vault](https://www.vaultproject.io/).
  :::

4. Finally, run the following command to deploy to your cluster:

  ```bash
  opctl apply
  ```

  :::note
  If the command completes but it indicates that your cluster is not ready, you can check status again by running `opctl app status`. If you're still seeing issues, visit our [Troubleshooting](/docs/deployment/troubleshooting/overview) page.
  :::

5. Once the deployment completes, the CLI will display the IP and wildcard domain you need to use to setup your DNS. You can also get this information again by running:

  ```bash
  opctl app status
  ```

6. Create an `A` record in your DNS provider based on the instructions above.

  :::note
  You should use a wildcard `A` record, for example: `*.example.com` or `*.subdomain.example.com`
  :::

  :::tip
  If you're waiting for your DNS record to propogate, you can set up a [hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) to quickly test the deployment.
  :::

7. Wait a few minutes and check the URL mentioned in the instructions above. Your applications should load with a screen prompting you to enter a token.

  :::note
  If the application is not loading, visit our [Troubleshooting](/docs/deployment/troubleshooting/overview) page for some steps that can help resolve most issues. If you are still having issues, join our [Slack community](https://join.slack.com/t/onepanel-ce/shared_invite/zt-eyjnwec0-nLaHhjif9Y~gA05KuX6AUg) or open an issue in [GitHub](https://github.com/onepanelio/core/issues).
  :::

8. Use the following command to get your auth token to log into Onepanel:

  ```bash
  opctl auth token
  ```

