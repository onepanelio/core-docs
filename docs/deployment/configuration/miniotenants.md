---
title: Microk8s + Local Minio
sidebar_label: Microk8s + Local MinIO
description: Deploy your cluster with MinIO running locally
---

:::note
* Make sure you have [Microk8s](/docs/getting-started/quickstart) installed before proceeding.  
* This process should be completed before you launch Onepanel.  
:::


Sometimes you don't want to use cloud storage, but have it be on your local machine.
To achieve this, you can run MinIO locally.

## Install MinIO 

1. Install [krew](https://krew.sigs.k8s.io/docs/user-guide/setup/install/)

2. Then run the following command to install the MinIO Operator and Plugin:
  ```bash
  microk8s kubectl krew update
  microk8s kubectl krew install minio
  ```

3. Generate a yaml file so we can initialize the operator:
  ```bash
  microk8s kubectl minio init --output > minio_init.yaml
  ```

4. Then, apply the generated yaml file to Microk8s
  ```bash
  microk8s kubectl apply -f minio_init.yaml
  ```

## Create a New Tenant

:::note
The namespace used for MinIO tenants should be the same as the one you use for Onepanel.
This is the `application.defaultNamespace` value in your `params.yaml`
:::

1. To create a tenant we must first create a namespace.

  ```bash
  microk8s kubectl create ns example
  ```

2. Then create a file called `minio-tenant.yaml` and fill it with the content below. 
  ```yaml
  ## Secret to be used as MinIO Root Credentials
  apiVersion: v1
  kind: Secret
  metadata:
    namespace: example # your namespace here
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
    image: minio/minio:RELEASE.2021-06-07T21-40-51Z
    imagePullPolicy: IfNotPresent

    ## Secret with credentials to be used by MinIO Tenant.
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
                storage: 10Gi # your storage here. 

    ## Mount path where PV will be mounted inside container(s).
    mountPath: /data
      ## Sub path inside Mount path where MinIO stores data.
      # subPath: /data

    ## Enable automatic Kubernetes based certificate generation and signing as explained in
    ## https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster
    requestAutoCert: false

    ## PodManagement policy for MinIO Tenant Pods. Can be "OrderedReady" or "Parallel"
    ## Refer https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/#pod-management-policy
    ## for details.
    podManagementPolicy: Parallel

    ## Define configuration for Console (Graphical user interface for MinIO)
    ## Refer https://github.com/minio/console
    console:
      image: minio/console:v0.7.4
      replicas: 2
      consoleSecret:
        name: minio-autocert-no-encryption-console-secret
  ```

  In the above file, change the `namespace` to be your namespace. Also, make sure to set the `storage` value to however much space you want to give the tenant.
  Keep in mind it creates 4 volumes, so it's storage * 4. 

  Apply the configuration:
  ```bash
  microk8s kubectl apply -f minio-tenant.yaml
  ```

3. Make sure everything is running
  ```bash
  microk8s kubectl get pods -A
  ```
  The output should look similar to this:
  ```bash
  minio-operator   minio-operator-c4cc8db47-mrpnc                          1/1     Running   0          11m
  minio-operator   console-5f978bcbdf-d2wmn                                1/1     Running   0          11m
  example          minio-autocert-no-encryption-ss-0-0                     1/1     Running   0          29s
  example          minio-autocert-no-encryption-console-7887db8b54-n8nvg   1/1     Running   0          2s
  example          minio-autocert-no-encryption-console-7887db8b54-brvkq   1/1     Running   0          2s
  ```
## Create a bucket

  Use port-forwarding to access web UI.  
  ```bash
  microk8s kubectl port-forward svc/minio -n example 9000:80
  ```
  This example uses the following credentials:  
  Accesskey: **minio**  
  Secretkey: **minio123**

## Onepanel Configuration

1. Set the `--artifact-repository-provider` flag to `s3`

  For example

  ```bash
  opctl init --provider microk8s \
  --enable-metallb \
  --artifact-repository-provider s3
  ```

2. Params configuration

  In your `params.yaml` use the following for the `artifactRepository` configuration

  ```bash
  artifactRepository:
    s3:
      # S3 access key
      accessKey: 'minio'
      # Name of bucket, example: my-bucket
      bucket: 'test-bucket' # Your bucket here
      endpoint: 'minio.example.svc.cluster.local' # replace `example` with your namespace
      # Change to true if endpoint does NOT support HTTPS
      insecure: true
      # Key Format for objects stored by Workflows. This can reference Workflow variables
      keyFormat: artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}}
      # Bucket region, this can be anything since it is running locally
      region: us-west-2
      # S3 secret key
      secretKey: 'minio123'
  ```
