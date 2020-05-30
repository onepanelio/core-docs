---
title: CLI overview
sidebar_label: CLI overview
---

## Install `opctl`
Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/core/releases/latest)

## Initializing configuration file
You can initialize configuration files by running the following command. See [configuration files](/docs/deployment/configuration/files) section for more information.

```bash
opctl init --provider <provider-name>
```

Available provider options are: `aks`, `eks` and `gke` for public cloud installations.

HTTPS is not enabled by default, to enable HTTPS but manage the TLS certificate yourself:

```bash
opctl init --provider <provider-name> --enable-https
```

To enable HTTPS and enable automatic TLS management:

```bash
opctl init --provider <provider-name> \
    --enable-https \
    --enable-cert-manager \
    --dns-provider <dns-provider-name>
```

:::tip
Refer to [TLS certificates](/docs/deployment/configuration/tls) section for more information and a list of supported DNS providers.
:::

To add ElasticSearch, Fluentd, and Kibana (EFK) logging, add the `--enable-logging` flag.

:::note
Onepanel's admin CLI serves as a thin abstraction layer on top of `kubectl` and `kustomize`, therefore the CLI can easily be extended to manage additional Kubernetes modules.
:::
