---
title: Adding components
sidebar_label: Adding components
description: Onepanel - Adding components
---

Before adding components, we recommend you back up your `params.yaml` file.

:::tip
It is highly recommended that you commit `params.yaml` file into a private repository and encrypt it with [BlackBox](https://github.com/StackExchange/blackbox) or use a secret management service like [Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/), [AWS Secret Manager](https://aws.amazon.com/secrets-manager/), [GCP Secret Manager](https://cloud.google.com/secret-manager) or [HashiCorp Vault](https://www.vaultproject.io/).
:::

## Adding components
To add additional components to Onepanel: 

1. Run `opctl init` with additional flags.
  :::tip
  You can find the `opctl` command you initially ran at the top of your `params.yaml` file.
  :::

  For example if you initially ran:

  ```bash
  opctl init --provider gke \
    --artifact-repository-provider s3 
  ```

  You can enable TLS and `cert-manager` by running:

  ```bash
  opctl init --provider gke \
    --artifact-repository-provider s3 \
    --enable-https \
    --enabl-cert-manager \
    --dns-provider clouddns
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
  If the application is not loading after these updates, visit our [Troubleshooting](/docs/deployment/troubleshooting/overview) page for some steps that can help resolve most issues. If you are still having issues, reach out in [GitHub discussions](https://github.com/onepanelio/core/discussions).
  :::
