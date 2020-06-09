---
title: Adding or upgrading components
sidebar_label: Upgrading
---

Before adding features or upgrading your cluster, we highly recommend you back up your `params.yaml` file. You can optionally commit it into a private repository and encrypt it with [BlackBox](https://github.com/StackExchange/blackbox) or similar tools.

:::tip
We also highly recommend to try these steps on a copy of the production cluster first.
:::

## Adding components
To add additional features to Onepanel: 

1. Run `opctl init` with additional flags. For example if you initially ran:

```bash
opctl init --provider gke
```

You can enable https and cert-manager by running:

```bash
opctl init --provider gke --enable-https --enabl-cert-manager --dns-provider clouddns
```

2. Review your `params.yaml` file and complete the new fields accordingly.

:::tip
See [configuration files](/docs/deployment/configuration/files) for additional information.
:::

3. Apply your changes:

```bash
opctl apply
```

:::note
If the application is not loading after these updates, visit our [Troubleshooting](/docs/deployment/troubleshooting/overview) page for some steps that can help resolve most issues. If you are still having issues, join our [Slack community](https://join.slack.com/t/onepanel-ce/shared_invite/zt-eyjnwec0-nLaHhjif9Y~gA05KuX6AUg) or open an issue in [GitHub](https://github.com/onepanelio/core/issues).
:::


## Upgrading components
When upgrading Onepanel, it is best to upgrade one minor version at a time (e.g. 0.9.0 => 0.10.0).

To upgrade Onepanel:

1. Check the current version of `opctl`:

```bash {3}
opctl version

CLI version: 0.10.0
Manifest version: v0.10.0
API version: v0.10.0
Web UI version: v0.10.0

```

2. Download the next version up of `opctl` for your operating system from [our release page](https://github.com/onepanelio/core/releases).

3. Run `opctl init` with the initial flags you used, for example:

```bash
opctl init --provider gke
```

:::important
Run `opctl init` only with the initial flags, you can add additional flags after the upgrade completes.
:::

4. Apply your changes:

```bash
opctl apply
```

:::note
If the application is not loading after these updates, visit our [Troubleshooting](/docs/deployment/troubleshooting/overview) page for some steps that can help resolve most issues. If you are still having issues, join our [Slack community](https://join.slack.com/t/onepanel-ce/shared_invite/zt-eyjnwec0-nLaHhjif9Y~gA05KuX6AUg) or open an issue in [GitHub](https://github.com/onepanelio/core/issues).
:::