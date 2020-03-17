---
title: Quick start
sidebar_label: Quick start
---

## Install `opctl`
Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/cli/releases/latest)

## Initializing `params.yaml` file
You can initialize a params.yaml template by running:

```bash
opectl init --provider <provider-name>
```

Available provider options are: `microk8s` for local installation or `aks`, `eks` and `gke` for public cloud installations.

To enable HTTPS but manage the TLS certificate yourself:

```bash
opectl init --provider <provider-name> --enable-https
```

To enable HTTPS and enable automatic TLS management:

```bash
opectl init --provider <provider-name> --enable-https --enable-cert-manager --dns-provider <dns-provider-name>
```

:::tip
Refer to [TLS certificates](../configuration/tls) section for more information and a list of supported DNS providers.
:::


:::note
Onepanel's admin CLI serves as a thin abstraction layer on top of `kubectl` and `kustomize`, therefore the CLI can easily be extended to manage additional Kubernetes modules.
:::