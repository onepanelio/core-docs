---
title: Upgrading components
sidebar_label: Upgrading components
description: Onepanel - Upgrading components to the latest version
---

Before upgrading components, we highly recommend you back up your `params.yaml` file and try the upgrade on a copy of your production cluster.

:::tip
It is highly recommended that you commit `params.yaml` file into a private repository and encrypt it with [BlackBox](https://github.com/StackExchange/blackbox) or use a secret management service like [Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/), [AWS Secret Manager](https://aws.amazon.com/secrets-manager/), [GCP Secret Manager](https://cloud.google.com/secret-manager) or [HashiCorp Vault](https://www.vaultproject.io/).
:::

## Upgrading components

When upgrading Onepanel, it is best to upgrade one minor version at a time (e.g. 0.14.0 => 0.15.0).

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

3. Run `opctl init` with the initial flags you used.

  :::tip
  You can find the `opctl` command you initially ran at the top of your `params.yaml` file.
  :::

  For example:

  ```bash
  opctl init --provider gke \
    --artifact-repository-provider s3
  ```

  :::important
  Run `opctl init` only with the initial flags, you can add additional flags after the upgrade completes.
  :::

4. Apply your changes:

  ```bash
  opctl apply
  ```

  :::note
  If the application is not loading after these updates, visit our [Troubleshooting](/docs/deployment/troubleshooting/overview) page for some steps that can help resolve most issues. If you are still having issues, reach out in [GitHub discussions](https://github.com/onepanelio/core/discussions).
  :::