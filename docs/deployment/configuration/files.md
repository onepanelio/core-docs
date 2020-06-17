---
title: Configuration files
sidebar_label: Configuration files
description: Onepanel provider specific configuration files
---

There are two files generated after running `opctl init --provider <provider>`:

- `params.yaml` - contains the fields that need to be updated to configure your deployment.
- `config.yaml` - contains components that are going to be included in the deployment. This file **should not** be updated unless you plan on adding custom Kustomize components to your deployment.

For further information on populating the `params.yaml` file, refer to the sections below. This information is also available inside the generated `params.yaml` template.

:::tip
It is highly recommended that you commit `params.yaml` file into a private repository and encrypt it with [BlackBox](https://github.com/StackExchange/blackbox) or a similar tool.
:::

## Content of configuration file `params.yaml`
:::important
The template below is automatically generated when your run `opctl init` for your provider.
:::

```yaml
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Component: Onepanel
# Description: Onepanel application information
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
application:
  cloud:
    # GRPC port for API
    apiGRPCPort: 8887
    # Path of API relative to host
    apiPath: /api
    # HTTP or HTTPS - Do not change, determined by `opctl init --enable-https`
    # CLI flag: --enable-https
    insecure: false
    # Path of UI relative to host
    uiPath: /
  # First namespace that will be created in Onepanel, more can be added later
  defaultNamespace: default
  # Domain or IP where Onepanel is hosted
  # Use an IP address if running local, use `minikube ip` or `multipass list` to get this IP
  # In the cloud, use a first-level or multi-level subdomain like example.com or sub.example.com
  domain: <ip-or-domain>
  # The Fully Qualified Domain (FQDN) where Onepanel will be hosted.
  # Use the same IP address as `domain` above if running local, use `minikube ip` or `multipass list` to get this IP
  # In the cloud, if `domain` above is set to example.com or sub.example.com, then your FQDN could be: app.example.com or app.sub.example.com respectively
  fqdn: <ip-or-fqdn>
  # Node pool or group label keys and values used for AutoScaling and for NodeSelectors
  # The provider will set these label key and values on your nodes automatically
  # These can also be customized depending on your provider
  nodePool:
    label: <node-pool-label>
    # Add more by following the format:
    # - name: <name>
    #   value: <value>
    # The first option will be used as default.
    options:
    - name: 'Use friendly name 1'
      value: <value-1>
    - name: 'Use friendly name 2'
      value: <value-2>
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Component: Artifact repository
# Description: S3 compatible object storage for storing files across Onepanel
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
artifactRepository:
  s3:
    # S3 access key
    accessKey: <access-key>
    # Name of bucket, example: my-bucket
    bucket: <bucket-name>
    # Endpoint for S3 compatible storage
    # Supported provider endpoints:
    #   AWS: s3.amazonaws.com
    #   GCS: storage.googleapis.com
    #   Minio: my-minio-endpoint.default:9000
    endpoint: s3.amazonaws.com
    # Change to true if endpoint does NOT support HTTPS
    insecure: false
    # Bucket region
    region: us-west-2
    # S3 secret key
    secretKey: <secret-key>
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Component: cert-manager
# Description: automatically creates and renews TLS certificates using Let's Encrypt
# Docs: https://onepanelio.github.io/core-docs/docs/deployment/configuration/tls
# CLI flag: --enable-cert-manager
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
certManager:
  # - - - - - - - - - - - - Select Only One DNS Provider - - - - - - - - - - - - -

  # DNS Provider: AzureDNS
  # Docs: https://onepanelio.github.io/core-docs/docs/deployment/configuration/tls#azuredns
  # CLI flag: --cert-manager-dns-provider=azuredns
  azuredns:
    clientId: <service-provider-app-id>
    spPassword: <service-provider-password>
    subscriptionId: <azure-subscription-id>
    tenantId: <tenant-id>
    resourceGroupName: <resource-group-name>
    hostedZoneName: <hosted-zone-name>
    environment: AzurePublicCloud
  # DNS Provider: Google CloudDNS
  # Docs: https://onepanelio.github.io/core-docs/docs/deployment/configuration/tls#google-clouddns
  # CLI flag: --cert-manager-dns-provider=clouddns
  clouddns:
    projectId: <project-id>
    serviceAccountKey: <key.json-file-data>
  # DNS Provider: Cloudflare
  # Docs: https://onepanelio.github.io/core-docs/docs/deployment/configuration/tls#cloudflare
  # CLI flag: --cert-manager-dns-provider=cloudflare
  cloudflare:
    apiToken: <api-token>
    email: <email>
  # DNS Provider: Amazon Route53
  # Docs: https://onepanelio.github.io/core-docs/docs/deployment/configuration/tls#route53
  # CLI flag: --cert-manager-dns-provider=route53
  route53:
    region: <aws-region>
    access_key: <aws-access-key>
    secret_key: <aws-secret-key>

  # - - - - - - - - - - - - - End DNS Provider Selection - - - - - - - - - - - - - -
  
  # Enter certificate admin email
  # Example: admin@example.com
  email: <cert-admin-email>
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Component: Database
# Description: Database connection information
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
database:
  # Name of database
  # If using an external production database, use the name of that database.
  # For in-cluster test database, use any name you like.
  databaseName: onepanel
  # Do not change, only `postgres` driver is supported at this time.
  driverName: postgres
  # Database host - use `postgres` for in-cluster test database
  host: <database-ip-or-hostname>
  # Database password
  # If using an external production database, use the password for that database.
  # For in-cluster test database, use any password you like.
  password: <password>
  # Database port
  port: 5432
  # Database username
  # If using an external production database, use the username for that database.
  # For in-cluster test database, use any username you like.
  username: <username>
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Component: Application and system logging
# Description: ElasticSearch, Fluentd and Kibana (EFK) logging
# CLI flag: --enable-efk-logging
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
logging:
  # ElasticSearch container image
  image: docker.elastic.co/elasticsearch/elasticsearch:7.6.0
  # Volume size for EFK logging
  volumeStorage: 100Gi
```

## Sections
What follows is a more detailed description of each section of the `params.yaml` file.

### application
This is where you set the basic application configuration. 

Below are the sections you will need to adjust.

#### cloud
Everything under this section is generated and should not be manually changed.  

The `insecure` field is set to `true` by default and will be set to `false` if you add the `--enable-https` when running `opctl init`.

#### defaultNamespace
This is the first [Namespace](/docs/getting-started/concepts/namespaces) you want created. This could be a project name or a team name. It is set to `default` by default but we recommend you use something more meaningful.

#### domain
This is the domain for your Onepanel resources. Some resources like Workspaces create subdomains of this domain so they can be accessed by a browser. This can be a top level domain like `example.com` or a subdomain `sub.example.com`.

#### fqdn
This is where Onepanel UI and API will be deployed. This should be a subdomain of the `domain` field mentioned above. Example: `app.example.com` or `app.sub.example.com`.

#### nodePool
Depending on your provider, these are either called node pools or node groups. They are labels on Kubernetes nodes that Onepanel uses for auto scaling nodes on demand.

A common `label` to identify these is `beta.kubernetes.io/instance-type` which most cloud providers automatically set. The value of this label is usually set to the instance type of the cloud provider.

You can see all labels on your nodes by running:

```bash
kubectl get nodes --show-labels
```

Note that this lists many different labels, so you can pick and choose any label key/value that is unique to that node.

For example after running the `kubectl` command above, you may get the following list of labels:

```bash {3}
agentpool=nodepool1,
beta.kubernetes.io/arch=amd64,
beta.kubernetes.io/instance-type=Standard_D2s_v3,
beta.kubernetes.io/os=linux,
failure-domain.beta.kubernetes.io/region=eastus,
```

You can then use the label key/value pairs as follows:

```yaml {2,4-5}
nodePool:
  label: beta.kubernetes.io/instance-type  # node label key
  options:
    - name: 'CPU: 2, RAM: 8GB'      # friendly name for instance
      value: 'Standard_D2s_v3'      # node label value
    - name: 'CPU: 4, RAM: 16GB'
      value: Standard_D4s_v3
    - name: 'GPU: 1xK80, CPU: 6, RAM: 56GB'
      value: Standard_NC6
```

### artifactRepository
This section allows you to setup the default object storage for your Workflow and Workspace artifacts, which includes Workflow log storage. Onepanel currently supports any S3 compatible artifact repository such as AWS, GCS and Minio. Support for additional object storages is coming soon.

Here's an example AWS S3 configuration:

```yaml
artifactRepository:
  s3:
    accessKey: AKIAJSIE27KKMHXI3BJQ
    bucket: pipelines.example.com
    endpoint: s3.amazonaws.com
    region: us-west-2
    secretKey: 5bEYu26084qjSFyclM/f2pz4gviSfoOg+mFwBH39
```

:::important
Onepanel Workflows will automatically upload or download artifacts from `artifacts/{{workflow.namespace}}/{{workflow.name}}/{{pod.name}}`. See [Workflow artifacts](/docs/reference/workflows/templates#artifacts) for more information.
:::

### containerRuntimeExecutor
This parameter allows you to adjust the workflow executors that argo uses.
Specifies the container runtime interface to use (default: docker).

Some are more performant than others, some are more secure.

See references:
- https://github.com/argoproj/argo/blob/master/docs/workflow-executors.md#docker-docker
- https://github.com/argoproj/argo/blob/master/docs/workflow-controller-configmap.yaml

Must be one of: `docker`, `kubelet`, `k8sapi`, `pns`

### certManager
If you have run `opctl init` with `--enable-https`, `--enable-cert-manager` and `--cert-manager-dns-provider` flags set, you need to configure your respective DNS provider here so that Onepanel can create and renew your TLS certificates for you.

See [TLS certificates](/docs/deployment/configuration/tls) for more information about configuring this section.

### database
This is the database settings section. 

For a test cluster, you can set the database `host` to `postgres` and use any `username` or `password`. This database will be automatically created in the cluster with the information you entered.

Note that you cannot change the username/password for the test database once it's created.

Example:

```yaml
database:
  databaseName: onepanel
  driverName: postgres
  host: postgres
  password: mypassword
  port: 5432
  # Database username
  # If using an external production database, use the username for that database.
  # For in-cluster test database, use any username you like.
  username: onepanel
```

:::important
For a production environment, use a managed database service and set the configuration accordingly.
:::