---
title: Microk8s + Local Minio
sidebar_label: Microk8s + Local MinIO
description: Deploy your cluster with MinIO running locally
---

:::important
We are only providing this guide as a reference. Due to the complexity of different installations, we can only provide open source support for clusters running Ubuntu 20.04 or higher as host OS on a local cluster.

Please visit our [Website](https://www.onepanel.ai/) and contact us for other bare metal installation options.
:::

:::note
* Make sure you have [Microk8s](/docs/getting-started/quickstart) installed before proceeding.  
* Enable storage with `sudo microk8s enable storage`  
* This process should be completed before you launch Onepanel.  
:::


Sometimes you don't want to use cloud storage and use your local machine instead.
To achieve this, you can run MinIO locally.

## Install MinIO 

1. Install [krew](https://krew.sigs.k8s.io/docs/user-guide/setup/install/)
  
  Make sure to add it to your path
  ```bash
  export PATH="${PATH}:${HOME}/.krew/bin"
  ```

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
    namespace: example # your namespace here
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
    namespace: example # your namespace here
    name: minio-autocert-no-encryption
    ## Optionally pass labels to be applied to the statefulset pods
    labels:
      app: minio-autocert-no-encryption-minio
    ## Annotations for MinIO Tenant Pods
    annotations:
      prometheus.io/path: /minio/v2/metrics/cluster
      prometheus.io/port: "9000"
      prometheus.io/scrape: "true"
  
  ## If a scheduler is specified here, Tenant pods will be dispatched by specified scheduler.
  ## If not specified, the Tenant pods will be dispatched by default scheduler.
  # scheduler:
  #  name: my-custom-scheduler
  
  spec:
    ## Registry location and Tag to download MinIO Server image
    image: minio/minio:RELEASE.2021-08-17T20-53-08Z
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
                storage: 10Gi # your storage here
    ## Mount path where PV will be mounted inside container(s).
    mountPath: /data
      ## Sub path inside Mount path where MinIO stores data.
      # subPath: /data
  
    ## Enable automatic Kubernetes based certificate generation and signing as explained in
    ## https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster
    requestAutoCert: false
  
    ## This field is used only when "requestAutoCert" is set to true. Use this field to set CommonName
    ## for the auto-generated certificate. Internal DNS name for the pod will be used if CommonName is
    ## not provided. DNS name format is *.minio.default.svc.cluster.local
    certConfig:
      commonName: ""
      organizationName: []
      dnsNames: []
  
    ## PodManagement policy for MinIO Tenant Pods. Can be "OrderedReady" or "Parallel"
    ## Refer https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/#pod-management-policy
    ## for details.
    podManagementPolicy: Parallel
  
    ## Add environment variables to be set in MinIO container (https://github.com/minio/minio/tree/master/docs/config)
    # env:
    # - name: MINIO_BROWSER
    #   value: "off" # to turn-off browser
    # - name: MINIO_STORAGE_CLASS_STANDARD
    #   value: "EC:2"
  
    ## PriorityClassName indicates the Pod priority and hence importance of a Pod relative to other Pods.
    ## This is applied to MinIO pods only.
    ## Refer Kubernetes documentation for details https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#priorityclass/
    # priorityClassName: high-priority
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
:::note
  This example uses the following credentials:  
  Accesskey: **minio**  
  Secretkey: **minio123**
:::

  1. Download **MinIO client**:
    ```bash
    wget https://dl.min.io/client/mc/release/linux-amd64/mc
    chmod +x mc
    sudo mv ./mc /usr/local/bin/mc
    ```
  2. Get the endpoint for MinIO:
    ```bash
    microk8s kubectl get endpoints -A  

    NAMESPACE        NAME                                   ENDPOINTS                                           AGE  
    example          minio                                  10.1.131.146:9000                                   6m46s
    ```
  3. Create a MinIO client alias:
    ```bash
    mc alias set minio http://10.1.131.146:9000 minio minio123
    ```
  4. You can then proceed to create the bucket by running:
    ```bash
    mc mb minio/mybucket
    ```
  5. Verify if bucket was successfully created by running:
    ```bash
    mc ls minio

    output:
    [2021-06-18 18:55:32 UTC]     0B mybucket/
    ```

## Onepanel Configuration

1. Set the `--artifact-repository-provider` flag to `s3`

  For example

  ```bash
  opctl init --provider microk8s \
  --enable-metallb \
  --artifact-repository-provider s3
  ```

2. Params configuration

## Local machine

  In your `params.yaml` use the following for the `artifactRepository` configuration

  ```bash
  artifactRepository:
    s3:
      # S3 access key
      accessKey: 'minio'
      # Name of bucket, example: my-bucket
      bucket: 'mybucket' # Your bucket here
      endpoint: 'minio.example.svc.cluster.local' # replace `example` with your namespace
      publicEndpoint: 10.1.131.146:9000 # The IP address from minio
      # Change to true if endpoint does NOT support HTTPS
      insecure: true
      # Key Format for objects stored by Workflows. This can reference Workflow variables
      keyFormat: artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}}
      # Bucket region, this can be anything since it is running locally
      region: us-west-2
      # S3 secret key
      secretKey: 'minio123'
  ```

## Remote machine, using Nginx

In your `params.yaml` use the following for the `artifactRepository` configuration

  ```bash
  artifactRepository:
    s3:
      # S3 access key
      accessKey: 'minio'
      # Name of bucket, example: my-bucket
      bucket: 'mybucket' # Your bucket here
      endpoint: 'minio.example.svc.cluster.local' # replace `example` with your namespace
      publicEndpoint: <remote machine ip>:9000 # The IP address of the machine running microk8s
      # Change to true if endpoint does NOT support HTTPS
      insecure: true
      # Key Format for objects stored by Workflows. This can reference Workflow variables
      keyFormat: artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}}
      # Bucket region, this can be anything since it is running locally
      region: us-west-2
      # S3 secret key
      secretKey: 'minio123'
  ```

  Then to edit your nginx config

  ```bash
  sudo nano /etc/nginx/sites-available/default 
  ```

  Add below `#Default server configuration`

  ```
  # Default server configuration
  #
  
  server {
          listen 9000 default_server;
          listen [::]:9000 default_server;
  
          server_name _;
  
          location / {
                  proxy_pass http://10.1.131.146:9000; # 10.1.131.146 is the ip address of minio
          }
  }
  
  # original server config, keep this
  server {
        listen 80 default_server;
  ```

  Finally, reload your configuration 
  ```bash
  sudo nginx -s reload
  ```
