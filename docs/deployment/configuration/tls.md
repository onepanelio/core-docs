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

## Supported DNS providers

### AzureDNS

The flag is `azuredns`, as in 

```bash
opctl init ... --dns-provider azuredns
```

:::note
This guide has been adapted from the [cert-manager docs](https://cert-manager.io/docs/configuration/acme/dns01/azuredns/) 
:::

This guide assumes you have `azure-cli` installed.


First set some variables for your project


```bash
# Choose a name for the service principal that contacts azure DNS to present the challenge
$ AZURE_CERT_MANAGER_NEW_SP_NAME=NEW_SERVICE_PRINCIPAL_NAME
# This is the name of the resource group that you have your dns zone in
$ AZURE_DNS_ZONE_RESOURCE_GROUP=AZURE_DNS_ZONE_RESOURCE_GROUP
# The DNS zone name. It should be something like domain.com or sub.domain.com
$ AZURE_DNS_ZONE=AZURE_DNS_ZONE
```

Then run,

```bash
az ad sp create-for-rbac --name $AZURE_CERT_MANAGER_NEW_SP_NAME
```

Look at the output, it should be something like this.

```{
     "appId": "app_id",
     "displayName": "display_name",
     "name": "http://something",
     "password": "password",
     "tenant": "tenant"
   }
```

You will also need the id from 

```bash
az account show
```

Here's how the `params.yaml` portion connects to the above keys and variables.

```yaml
certManager:
  azuredns:
    clientId: appId
    environment: AzurePublicCloud
    hostedZoneName: $AZURE_DNS_ZONE
    resourceGroupName: $AZURE_DNS_ZONE_RESOURCE_GROUP
    spPassword: password
    subscriptionId: this comes from `az account show` then the id field.
    tenantId: tenant
``` 


### CloudFlare

The flag is `cloudflare`, as in 

```bash
opctl init ... --dns-provider cloudflare
```

:::note
This guide has been adapted from the [cert-manager docs](https://cert-manager.io/docs/configuration/acme/dns01/cloudflare/) 
:::

Currently only API Tokens are supported.

To create an API Token, login to your CloudFlare account and go to
*User Profile > API Tokens > API Tokens*. 

The following settings are recommended:

* Permissions:
  * Zone - DNS - Edit
  * Zone - Zone - Read
* Zone Resources:
  * Include - All Zones

Once you create your token, copy it.

Here's how the `params.yaml` should look with the above token.

```yaml
certManager:
  cloudflare:
    apiToken: <api-token goes here>
    email: <yourCloudFlareEmail@example.com>
``` 

### Google CloudDNS

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

#### Create service account

```bash
gcloud iam service-accounts create dns01-solver --display-name "dns01-solver"
```

Then,

```bash
gcloud projects add-iam-policy-binding $PROJECT_ID \
   --member serviceAccount:dns01-solver@$PROJECT_ID.iam.gserviceaccount.com \
   --role roles/dns.admin
```

#### Get credentials

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