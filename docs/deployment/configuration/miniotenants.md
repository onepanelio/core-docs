---
title: Microk8s Local Storage Deployment(MinIO)
sidebar_label: Microk8s Local Storage Deployment(MinIO)
description: Deploy your cluster with MinIO operator
---
One option to map a local storage volume within a Microk8s deployment is with [MinIO Operators](https://github.com/minio/operator#create-a-minio-tenant). 

:::note
* Make sure you have [Microk8s](/docs/getting-started/quickstart) installed before proceeding.  
* This process should be completed/running before you launch Onepanel.  
* Make sure that you initiated Onepanel with `--artifact-repository-provider s3`
:::


## Step 0: Create a Minio Tenant 
Let's get started by creating a MinIO tenant

1. First, create a namespace
    ```bash
    microk8s kubectl create ns minio-tenant
    ```

2. By default tenants runs with **TLS** enabled, to disable this set `requestAutoCert: true` to false.  
    Then, copy configurations below and save as operator.yaml
    
    ```bash
    ## Secret to be used as MinIO Root Credentials
    apiVersion: v1
    kind: Secret
    metadata:
      namespace: <namespace> # Your namespace here
      name: minio-autocert-no-encryption-minio-creds-secret
    type: Opaque
    data:
      ## Access Key for MinIO Tenant, base64 encoded (echo -n 'minio' | base64)
      accesskey: bWluaW8=
      ## Secret Key for MinIO Tenant, base64 encoded (echo -n 'minio123' | base64)
      secretkey: bWluaW8xMjM=
    ---
    ## Secret to be used for MinIO Console
    apiVersion: v1
    kind: Secret
    metadata:
      namespace: <namespace> # Your namespace here
      name: minio-autocert-no-encryption-console-secret
    type: Opaque
    data:
      ## Passphrase to encrypt jwt payload, base64 encoded (echo -n 'SECRET' | base64)
      CONSOLE_PBKDF_PASSPHRASE: U0VDUkVU
      ## Salt to encrypt jwt payload, base64 encoded (echo -n 'SECRET' | base64)
      CONSOLE_PBKDF_SALT: U0VDUkVU
      ## MinIO User Access Key (used for Console Login), base64 encoded (echo -n 'YOURCONSOLEACCESS' | base64)
      CONSOLE_ACCESS_KEY: WU9VUkNPTlNPTEVBQ0NFU1M=
      ## MinIO User Secret Key (used for Console Login), base64 encoded (echo -n 'YOURCONSOLESECRET' | base64)
      CONSOLE_SECRET_KEY: WU9VUkNPTlNPTEVTRUNSRVQ=
    ---
    ## MinIO Tenant Definition
    apiVersion: minio.min.io/v2
    kind: Tenant
    metadata:
      namespace: <namespace>
      name: minio-autocert-no-encryption
      ## Optionally pass labels to be applied to the statefulset pods
      labels:
        app: minio-autocert-no-encryption-minio
      ## Annotations for MinIO Tenant Pods
      annotations:
        prometheus.io/path: /minio/prometheus/metrics
        prometheus.io/port: "9000"
        prometheus.io/scrape: "true"

    spec:
      ## Registry location and Tag to download MinIO Server image
      image: minio/minio:RELEASE.2021-05-27T22-06-31Z
      imagePullPolicy: IfNotPresent

      ## Refers to the secret object created above.
      credsSecret:
        name: minio-autocert-no-encryption-minio-creds-secret

      ## Specification for MinIO Pool(s) in this Tenant.
      pools:
        - servers: 1
          volumesPerServer: 4
          volumeClaimTemplate:
            metadata:
              name: data
            spec:
              accessModes:
                - ReadWriteOnce
              resources:
                requests:
                  storage: 30Gi
      ## Mount path where PV will be mounted inside container(s).
      mountPath: /export

      ## Disables TLS
      requestAutoCert: false

      ## PodManagement policy for MinIO Tenant Pods. Can be "OrderedReady" or "Parallel"
      ## Refer https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/#pod-management-policy for details.
      podManagementPolicy: Parallel

      ## Define configuration for Console (Graphical user interface for MinIO)
      ## Refer https://github.com/minio/console
      console:
        image: minio/console:v0.7.4
        replicas: 2
        consoleSecret:
          name: minio-autocert-no-encryption-console-secret
    ```

3.  Update pool sizes as necessary, then run:
    ```bash
    microk8s kubectl apply -f file.yaml --namespace minio-tenant
    ```

    To check if pod is running run:
    ```bash
    microk8s kubectl get pods -A
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

