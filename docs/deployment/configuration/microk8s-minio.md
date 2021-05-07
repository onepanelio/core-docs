---
title: Microk8s Local Storage Deployment(MinIO)
sidebar_label: Microk8s Local Storage Deployment(MinIO)
description: Deploy your cluster with MinIO operator
---

## Create a Minio Tenant
:::note
Make sure to use `microk8s kubectl` as you follow through the guide with creating the tenant.  
also microk8s stores certificates in `/var/snap/microk8s/current/certs/` directory.
:::

1. To map a local storage volume within a Microk8s deployment, users must first deploy a [MinIO Tenant](https://github.com/minio/operator#create-a-minio-tenant) inside the cluster.

2. Once complete, users can access the tenant and use the generated credentials after it was created.
    ```bash
    microk8s kubectl port-forward svc/minio -n minio-tenant-1 443:443
    ```

3. note that you will need to use `https:\\localhost:<port>` when you open the service in a browser.
    ![](/img/microk8s/minio.png)

4. Create a bucket

5. Once deployed update `params.yaml` and under `artifactRepository`
    ```yaml
    artifactRepository:
    s3:
        # S3 access key
        accessKey: tenant_access_key
        # Name of bucket, example: my-bucket
        bucket: bucket_name
        # Endpoint for S3 compatible storage
        # Supported provider endpoints:
        #   AWS: s3.amazonaws.com
        #   GCS: storage.googleapis.com
        #   Minio: my-minio-endpoint.default:9000
        endpoint: minio.minio-tenant-1.svc.cluster.local:443
        # Change to true if endpoint does NOT support HTTPS
        insecure: false
        # Key Format for objects stored by Workflows. This can reference Workflow variables
        keyFormat: artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}}
        # Bucket region
        region: us-west-2
        # S3 secret key
        secretKey: tenant_secret_key
    ```

6. Finally deploy Onepanel with Minio Tenant
    ```bash
    KUBECONFIG=./kubeconfig opctl apply
    ```