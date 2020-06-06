---
title: Troubleshooting
sidebar_label: Troubleshooting
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document outlines trouble shooting for various topics.

## You deployed to a cloud provided cluster using CloudFlare as DNS provider.

Issue:
- You enter the URL into your browser and the page does not load.

### Debugging steps:

#### Make sure all the pods are running with no errors

Execute:
```shell script
kubectl get pods -A
```

Check if all are running. If some are pending, wait for them to complete.
- If they take a long time, they may not be scheduling correctly.

If some are showing an error, check the pod logs with `kubectl log` or check
the pod in more detail with `kubectl describe` 

#### Test to see if the DNS is setup correctly.

We want to check that the domain is pointed to your IP.

Use `ping` shell command.

```text
$ ping app.web-demo.onepanel.ai
PING app.web-demo.onepanel.ai (52.224.34.111) 56(84) bytes of data.
```
- This is pointing to the right IP

#### Check your Cloudflare API Token Value

If your token was typo'd when entered, that can cause an issue.

If the token has non-alphanumerical characters, surround the token with single quotes.

Example:
```yaml
certManager:
  # DNS Provider: Cloudflare
  # Docs: https://onepanelio.github.io/core-docs/docs/deployment/configuration/tls#cloudflare
  # CLI flag: --dns-provider=cloudflare
  cloudflare:
    apiToken: token123ab_c
    email:
```
Should be
```yaml
certManager:
  # DNS Provider: Cloudflare
  # Docs: https://onepanelio.github.io/core-docs/docs/deployment/configuration/tls#cloudflare
  # CLI flag: --dns-provider=cloudflare
  cloudflare:
    apiToken: 'token123ab_c'
    email:
```

Then run `optcl apply` again.

#### Investigating kubernetes resources

You can use this as a resource:
- https://cert-manager.io/docs/faq/acme/

But in short:
- Check the status of the following resources (namespace: istio-system)

certificate(s) 
- kubectl get certificates -n istio-system
- kubectl describe certificate <resource_name> -n istio-system

certificaterequest(s)

order(s)

challenge(s)

There is a good chance that one of these will describe what the issue is.
