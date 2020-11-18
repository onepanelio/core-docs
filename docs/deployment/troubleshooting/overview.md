---
title: Troubleshooting
sidebar_label: Troubleshooting
description: Troubleshooting deployments
---

This document outlines steps to troubleshoot issues that may arise after initial deployment of Onepanel.


## General troubleshooting steps

Once you have setup DNS accordingly but the site isn't showing up or you can't login, double check that you have set up DNS correctly:

```bash
opctl app status
```

The command above will return a result similar to the following:

```
Your deployment is ready.

In your DNS, add an A record for *.sub.example.com and point it to '52.225.33.112'
Once complete, your application will be running at https://app.sub.example.com
```

:::note
Depending on your provider, the `opctl app status` may prompt you to set up a `CNAME` record.
:::

If you see "Your deployment is ready", double check that your DNS record is correct, then ping the domain in the URL above to confirm it is ready:

```bash
$ ping app.sub.example.com
PING app.sub.example.com (52.225.33.112) 56(84) bytes of data.
```

If you see "Not all required pods are running. Your deployment is not ready.", run the following command:

```bash
kubectl get pods -A
```

For `Pending` pods, check the `Age`, if it has been less than 5 minutes, wait and check again.

If the pods are showing `Error` or have been in `Pending` state for more than 5 minutes, check the pod in more details by running `kubectl describe` for more details. You can also check the pod log by running `kubectl logs`. 

In most cases, pods stuck in `Pending` state could mean that you need to add another node to your cluster.


## Troubleshooting deployments with cert-manager
Onepanel uses [cert-manager](https://cert-manager.io/) to automatically manages TLS certificates when you install Onepanel with the following flags:

```bash
opctl init ... --enable-cert-manager --dns-provider <provider>
```

All cert-manager resources in Onepanel are installed in the `istio-system` namespace.

If you have enabled cert-manager and your application after following [General troubleshooting steps](#general-troubleshooting-steps), then you're most likely running into certificate issues.

You can troubleshoot these issues by following the steps in [Troubleshooting Issuing ACME Certificates](https://cert-manager.io/docs/faq/acme/). Make sure to run all the commands in the `istio-system` namespace. For example to get the certificate that Onepanel uses:

```bash
kubectl describe certificate cert-manager-wildcard-certificate -n istio-system
```

## Still having issues?
Reach out in [Slack](https://join.slack.com/t/onepanel-ce/shared_invite/zt-eyjnwec0-nLaHhjif9Y~gA05KuX6AUg) or [GitHub discussions](https://github.com/onepanelio/core/discussions).
