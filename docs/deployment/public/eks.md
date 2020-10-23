---
title: EKS deployment guide
sidebar_label: EKS deployment
description: Deploy Onepanel on Amazon Elastic Kubernetes Service (EKS)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document outlines the installation steps for Amazon Elastic Kubernetes Service (EKS).

:::tip
This document outlines a production deployment of Onepanel. If you want to quickly try Onepanel, start with our [Quick start](/docs/getting-started/quickstart).
:::

## Launch an EKS cluster
:::note
Make sure [Amazon EKS CLI](https://eksctl.io/introduction/#installation) (`eksctl`) (version 0.30.0 or higher) is installed before proceeding.
:::

We recommend launching a cluster with 2 `m5.xlarge` nodes to start, with autoscaling and network policy enabled. You can add additional CPU/GPU node pools as needed later.

Here are sample `eksctl` commands to create a bare minimum cluster:

```bash
eksctl create cluster --name=<cluster-name> --region <region> --zones <<region>a>,<<region>b> --node-zones <<region>a> \
    --nodes 2  \
    --node-type m5.xlarge \
    --node-volume-size 100 \
    --nodes-min 2 \
    --nodes-max 5 \
    --asg-access \
    --ssh-access \
    --tags "onepanel.io/enabled=true,k8s.io/cluster-autoscaler/node-template/label/node.kubernetes.io/instance-type=m5.xlarge"
```

To enable network policy see [Installing Calico on Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/calico.html)

The `eksctl` command above will automatically retrieve your cluster's access credentials but you can also get them by running:

```
eksctl utils write-kubeconfig --cluster=<cluster-name> --region <region>
```

:::note
If you are not the person that created the cluster, you will need to be [added to the cluster](https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html) before you can use `kubectl` with these credentials.
:::

We also recommend enabling CloudWatch monitoring as follows:

```bash
eksctl utils update-cluster-logging --enable-types all
```

You can also add additional auto-scaling node groups to the cluster as follows:

```bash
eksctl create nodegroup --name <nodegroup-name> --cluster <cluster-name> --region <region> --node-zones <<region>a> \
    --nodes 0  \
    --node-type <node-type> \
    --node-volume-size 100 \
    --nodes-min 0 \
    --nodes-max 5 \
    --asg-access \
    --ssh-access \
    --tags "onepanel.io/enabled=true,k8s.io/cluster-autoscaler/node-template/label/node.kubernetes.io/instance-type=<node-type>"
```

:::note 
In order to support scale to and from zero, we need to use EKS unmanaged nodes. These do not show up in EKS console but you can view them by going to **EC2** > **Auto Scaling groups**.
:::

In step <strong>3</strong> below, you can configure Onepanel to automatically scale these nodes as needed.

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

2. Run the following command to initialize a `params.yaml` template for EKS:

  ```bash
  opctl init --provider eks \
      --artifact-repository-provider s3 \
      --gpu-device-plugins nvidia \
      --enable-https \
      --enable-cert-manager \
      --dns-provider <dns-provider>
  ```

  :::note
  The `--enable-https` flag is optional and requires a TLS certificate, but it is highly recommended. You can optionally set the `--enable-cert-manager` and `--dns-provider` flags, so TLS certificates are automatically created and renewed via [Let's Encrypt](https://letsencrypt.org/). If you do not set this flag and your DNS provider isn't one of the [supported DNS providers](/docs/deployment/configuration/tls#supported-dns-providers), then you have to create a wildcard certificate and manually manage it.
  :::

  :::note
  Valid options for `--gpu-device-plugins` are `nvidia` and `amd` or a comma separated combination of both `nvidia,amd`.
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

5. Once the deployment completes, the CLI will display the host name and wildcard domain you need to use to setup your DNS. You can also get this information again by running:

  ```bash
  opctl app status
  ```

6. Create a `CNAME` record in your DNS provider based on the instructions above.

  :::note
  You should use a wildcard `CNAME` record, for example: `*.example.com` or `*.subdomain.example.com`
  :::

  :::tip
  If you're waiting for your DNS record to propogate, you can set up a [hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) to quickly test the deployment.
  :::

7. Wait a few minutes and check the URL mentioned in the instructions above. Your applications should load with a screen prompting you to enter a token.

  :::note
  If the application is not loading, visit our [Troubleshooting](/docs/deployment/troubleshooting/overview) page for some steps that can help resolve most issues. If you are still having issues, reach out in [GitHub discussions](https://github.com/onepanelio/core/discussions).
  :::

8. Use the following command to get your auth token to log into Onepanel:

  ```bash
  opctl auth token
  ```

