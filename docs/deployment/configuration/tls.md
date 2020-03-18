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

#### Google CloudDNS

The flag is `clouddns`, as in 

```bash
opctl init ... --dns-provider clouddns
```

:::note
This guide has been adapted from the [cert-manager docs](https://cert-manager.io/docs/configuration/acme/dns01/google/) 
:::

This guide assumes you have `gcloud` installed and set to the correct project and zone.

First set your project id so we can easily reference it

```bash
export PROJECT_ID=myproject-id
```

##### Create service account

```bash
gcloud iam service-accounts create dns01-solver --display-name "dns01-solver"
```

Then,

```bash
gcloud projects add-iam-policy-binding $PROJECT_ID \
   --member serviceAccount:dns01-solver@$PROJECT_ID.iam.gserviceaccount.com \
   --role roles/dns.admin
```

##### Get credentials

Create the `dns01-solver` service account if you have not already.

```bash
gcloud iam service-accounts create dns01-solver
```

Now, we get the credential data we need.

```bash
gcloud iam service-accounts keys create key.json \
   --iam-account dns01-solver@$PROJECT_ID.iam.gserviceaccount.com
```

This command will save the credentials into `key.json`.

Open up that file and copy it's contents.
Paste them into your `params.yaml`, so you should have something like this

```yaml
certManager:
  commonName: *.website.com
  email: test@email.com
  clouddns:
    projectId: my-project-id
    data: >
      {
        "type": "service_account",
        "project_id": "my-project-id",
        "private_key_id": "private_key_id",
        "private_key": "private_key",
        "client_email": "client_email",
        "client_id": "client_id",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "cert_url"
      }
```