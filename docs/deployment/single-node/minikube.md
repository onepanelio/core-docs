---
title: Minikube deployment guide
sidebar_label: Minikube deployment
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document outlines the installation steps for single node installation using [Minikube](https://kubernetes.io/docs/setup/learning-environment/minikube/).

## Install Minikube

See [Install Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) and follow the instructions for your operating system.

Once Minikube is installed, start it with at least 8 Gigabytes of RAM, 4 CPUs, and 40G of storage (for Istio) – you can pass these requirements as follows:

```bash
minikube start --driver=virtualbox --memory '8gb' --cpus=4 --disk-size '40g' \
    --extra-config=apiserver.service-account-signing-key-file=/var/lib/minikube/certs/sa.key \
    --extra-config=apiserver.service-account-key-file=/var/lib/minikube/certs/sa.pub \
    --extra-config=apiserver.service-account-issuer=api \
    --extra-config=apiserver.service-account-api-audiences=api,nats \
    --extra-config=apiserver.authorization-mode=Node,RBAC
```

You can now find the IP address which has been allocated by running:

```bash
minikube ip
```

Take a note of this IP as you will need to add it to your `params.yaml`.

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

2. Run the following command to initialize a `params.yaml` template for minikube:

  ```bash
  opctl init --provider minikube \
      --enable-metallb \
      --artifact-repository-provider s3
  ```

3. Populate `params.yaml` by following the instructions in the template, and referring to [configuration file sections](/docs/deployment/configuration/files#sections) for more detailed information.

4. Finally, run the following command to deploy to your cluster:

  ```bash
  opctl apply
  ```

  :::important
  The CLI will display the URL for accessing Onepanel once the deployment completes.
  :::

5. Use the following command to get your auth token to log into Onepanel:

  ```bash
  opctl auth token
  ```