---
title: Minio
sidebar_label: Minio
description: Onepanel deployment with MinIO
---

MinIO is an object storage server that exposes S3-compatible APIs and it has a gateway feature that allows proxying requests to Azure Blob Storage. To setup our gateway, we will make use of Azure’s Web App on Linux.

To get started, make sure you have installed Azure CLI and you are logged in (az login). Proceed to create a Resource group, if you don’t have one already:

```shell
az group create --name "<group-name>" --location "<location>"
```

## Storage Account

Create a Storage account in your resource group, the name of the storage account must be globally unique:

```shell
az storage account create \
    --name "<storage-name>" \
    --kind BlobStorage \
    --sku Standard_LRS \
    --access-tier Cool \
    --resource-group "<resource-group>" \
    --location "<location>"
```

Retrieve the account key for the storage account:

```shell
az storage account show-connection-string \
    --name "<storage-name>" \
    --resource-group "<resource-group>"
```

The output should be in the format:

```json
{
    "connectionString": "DefaultEndpointsProtocol=https;EndpointSuffix=core.windows.net;AccountName=gitlab-azure-minio-storage;AccountKey=h0tSyeTebs+..."
}
```

## Deploy MinIO to Web App on Linux

First, we need to create an App Service Plan in the same resource group.

```shell
az appservice plan create \
    --name "<app-plan-name>" \
    --is-linux \
    --sku B1 \
    --resource-group "<resource-group>" \
    --location "<location>"
```

Create a Web app configured with the minio/minio Docker container, the name you specify will be used in the URL of the web app:

```shell
az webapp create \
    --name "<app-name>" \
    --deployment-container-image-name "minio/minio" \
    --plan "<app-plan-name>" \
    --resource-group "<resource-group>"
```

The Web app should now be accessible at https://gitlab-minio-app.azurewebsites.net.

Lastly, we need to set up the startup command and create environment variables that will store our storage account name and key for use by the web app, MINIO_ACCESS_KEY & MINIO_SECRET_KEY.

```shell
az webapp config appsettings set \
    --settings "MINIO_ACCESS_KEY=<storage-name>" "MINIO_SECRET_KEY=<secret-key>" "PORT=9000" \
    --name "<app-name>" \
    --resource-group "<resource-group>"

# Startup command
az webapp config set \
    --startup-file "gateway azure" \
    --name "<app-name>" \
    --resource-group "<resource-group>"
```

## Conclusion

You can proceed to use this gateway with any client with s3-compability. Your webapp URL will be the **s3 endpoint**, storage account name will be your **accesskey**, and storage account key will be your **secretkey**.

This guide was adapted for posterity from [Alessandro Segala’s blog post on same topic](https://withblue.ink/2017/10/29/how-to-use-s3cmd-and-any-other-amazon-s3-compatible-app-with-azure-blob-storage.html).

# LOCAL SERVER DEPLOYMENT

In this guide, we'll deploy Onepanel using a local Minio server.

## Installation
 
First install [Minio](https://min.io/download)

```shell
docker run -p 9000:9000 -e MINIO_ACCESS_KEY=AKIAIOSFODNN7EXAMPLE \
                        -e MINIO_SECRET_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY \
                        -e MINIO_REGION_NAME=us-west-2 \
                        -v /mnt/data:/data minio/minio server /data
                        ```
```shell
Attempting encryption of all config, IAM users and policies on MinIO backend
Endpoint:  http://172.17.0.2:9000  http://127.0.0.1:9000
Browser Access:
   http://172.17.0.2:9000  http://127.0.0.1:9000
Object API (Amazon S3 compatible):
   Go:         https://docs.min.io/docs/golang-client-quickstart-guide
   Java:       https://docs.min.io/docs/java-client-quickstart-guide
   Python:     https://docs.min.io/docs/python-client-quickstart-guide
   JavaScript: https://docs.min.io/docs/javascript-client-quickstart-guide
   .NET:       https://docs.min.io/docs/dotnet-client-quickstart-guide
```

Once your server's running, you'll need to set the port for Minio server into public so kubectl can sync all FTPs into your local Minio server.
To do this we'll use [Ngrok](https://ngrok.com/), this tool exposes local servers behind NATs and firewalls to the public internet over secured tunnels.

Open a separate terminal and install
```shell
snap install ngrok
```
then, confirm installation by running
```shell
ngrok version
```
once installation is complete, you can immediately start tunneling your local server
```shell
ngrok http 9000
```
```shell
ngrok by @inconshreveable                                                                                                                                                                   (Ctrl+C to quit)
Session Status                online                                                                                                                                                                        
Session Expires               7 hours, 34 minutes                                                                                                                                                           
Version                       2.3.35                                                                                                                                                                        
Region                        United States (us)                                                                                                                                                            
Web Interface                 http://127.0.0.1:4040                                                                                                                                                         
Forwarding                    http://f67f39e6b94d.ngrok.io -> http://localhost:9000                                                                                                                         
Forwarding                    https://f67f39e6b94d.ngrok.io -> http://localhost:9000                                                                                                                        
Connections                   ttl     opn     rt1     rt5     p50     p90                                                                                                                                   
                              17      6       0.04    0.01    300.48  686.52
```
:::note
copy forwarding tunnel to use for onepanel configurations, in this example it's `http://f67f39e6b94d.ngrok.io`
:::
:::caution
Ngrok exposes your Minio server in public! make sure to keep the tunnel information secured or add authentication by visiting their [website](https://ngrok.com/)
:::

Once everything is set up go to [configurations](./files.md#local-server) guide for `params.yaml`, once completed run `opctl apply` to deploy with local Minio server
