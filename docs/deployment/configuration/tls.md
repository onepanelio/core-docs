---
title: TLS certificates
sidebar_label: TLS certificates
---

TLS certificate can be added in two ways:
- Manually managed certificates
- Automatically managed certificates with [Let's Encrypt](https://letsencrypt.org/)

## Manually managed certificates
To enable HTTPS and HTTPS redirection, but manage your own certificate, add the following flag to `opctl init`:

```bash
opctl init ... --enable-https
```

## Automatically managed certificates
To enable HTTPS and HTTPS redirection and enable automated certificate manage through [Let's Encrypt](https://letsencrypt.org), add the following flags to `opctl init`:

```bash
opctl init ... --enable-https --enable-cert-manager --dns-provider <supported-dns-provider>
```

### Supported DNS providers