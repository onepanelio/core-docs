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


### Cloudflare

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
    email: <yourCloudflareEmail@example.com>
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

Open up that file and copy its contents.
Paste them into your `params.yaml`, so you should have something like this

```yaml
certManager:
  clouddns:
    projectId: my-project-id
    serviceAccountKey: |
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

### Route53

The flag is `route53`, as in 

```bash
opctl init ... --dns-provider route53
```

:::note
This guide has been adapted from the [cert-manager docs](https://cert-manager.io/docs/configuration/acme/dns01/route53/) 
:::

:::note
This guide assumes you have a hosted zone set up in Route53.
:::


#### Set up a IAM Role

In order to solve the DNS01 challenge, cert-manager needs permissions to add records to Route53.

Create a IAM policy with the following permissions:


```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "route53:GetChange",
            "Resource": "arn:aws:route53:::change/*"
        },
        {
            "Effect": "Allow",
            "Action": [
              "route53:ChangeResourceRecordSets",
              "route53:ListResourceRecordSets"
            ],
            "Resource": "arn:aws:route53:::hostedzone/*"
        },
        {
            "Effect": "Allow",
            "Action": "route53:ListHostedZonesByName",
            "Resource": "*"
        }
    ]
}
```

#### Credentials

You have two options for the set up - either create a user or a role and attach that policy from above. Using a role is considered best practice because you do not have to store permanent credentials in a secret.

We currently only support providing an accessKeyID and secretAccessKey for credentials.


#### Cross Account Access

Example: Account A manages a Route53 DNS Zone. Now you want account X to be able to manage records in that zone.

First, create a role with the policy above (let’s call the role dns-manager) and attach a trust relationship like the one below. Make sure role cert-manager in account X exists:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::XXXXXXXXXXX:role/cert-manager"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

This allows the role cert-manager in account X to manage the Route53 DNS Zone in account A.


#### Resulting Yaml

Finally, with everything setup as above, you can configure your yaml as follows,

```yaml
certManager:
  route53:
    access_key: <aws-access-key>
    region: <aws-region>
    secret_key: <aws-secret-key>
```