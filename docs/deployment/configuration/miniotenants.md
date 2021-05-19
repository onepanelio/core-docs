---
title: Microk8s Local Storage Deployment(MinIO)
sidebar_label: Microk8s Local Storage Deployment(MinIO)
description: Deploy your cluster with MinIO operator
---

## Create a Minio Tenant
:::note
Make sure to use `microk8s kubectl` as you follow through the guide with creating the tenant.  
Also, this will only work if you initiated your deployment with **--artifact-repository-provider s3**
:::

1. One option to map a local storage volume within a Microk8s deployment is with [MinIO Tenants](https://github.com/minio/operator#create-a-minio-tenant).  

    By default these tenants run with **TLS**, we can disable this by using this [example](https://github.com/minio/operator/blob/master/examples/tenant-with-autocert-encryption-disabled.yaml) and changing **requestAutoCert** to **false**.  
    
    feel free to update pools to the storage size you'll use for the deployment, then run.  
    ```bash
    kubectl apply -f file.yaml --namespace minio-tenant-1
    ```

2. Make sure that the tenant pods is running.
    ```bash
    kubectl get pods -A
    NAMESPACE            NAME                                      READY   STATUS    RESTARTS   AGE
    minio-tenant-1       minio-tenant-ss-0-0                       2/2     Running   0          151m
    ```

3. Next, you'll need to **create a bucket**, to do this you can use port-forwarding with kubectl.  
   ```bash
   kubectl port-forward svc/minio -n minio-tenant-1 9000:80    
   ```
   You can use the following credentials for this example  
   Accesskey: **minio**  
   Secretkey: **minio123**

4. Next, fetch the ip address from the tenant's pod.
   ```bash
   kubectl describe pods minio-tenant-ss-0-0 -n minio-tenant-1 | grep "IP"
   ```

5. Next, update **params.yaml**.  
    ```bash
    artifactRepository:
        s3:
            # S3 access key
            accessKey: minio
            # Name of bucket, example: my-bucket
            bucket: test
            # Endpoint for S3 compatible storage
            # Supported provider endpoints:
            #   AWS: s3.amazonaws.com
            #   GCS: storage.googleapis.com
            #   Minio: my-minio-endpoint.default:9000
            endpoint: <pod-ip-address>:9000
            # Change to true if endpoint does NOT support HTTPS
            insecure: true
            # Key Format for objects stored by Workflows. This can reference Workflow variables
            keyFormat: artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}}
            # Bucket region
            region: us-west-2
            # S3 secret key
            secretKey: minio123
    ```

6. Finally, deploy Onepanel with Minio Tenant.
    ```bash
    KUBECONFIG=./kubeconfig opctl apply
    ```

