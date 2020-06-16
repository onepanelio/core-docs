---
title: Configuration files
sidebar_label: Configuration files
description: Onepanel provider specific configuration files
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
  # CLI flag: --dns-provider=azuredns
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
  # CLI flag: --dns-provider=clouddns
  clouddns:
    projectId: <project-id>
    serviceAccountKey: <key.json-file-data>
  # DNS Provider: Cloudflare
  # Docs: https://onepanelio.github.io/core-docs/docs/deployment/configuration/tls#cloudflare
  # CLI flag: --dns-provider=cloudflare
  cloudflare:
    apiToken: <api-token>
    email: <email>
  # DNS Provider: Amazon Route53
  # Docs: https://onepanelio.github.io/core-docs/docs/deployment/configuration/tls#route53
  # CLI flag: --dns-provider=route53
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

### certManager
If you have run `opctl init` with `--enable-https`, `--enable-cert-manager` and `--dns-provider` flags set, you need to configure your respective DNS provider here so that Onepanel can create and renew your TLS certificates for you.

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

### Metal LB
This is to configure a load balancer for local or bare-metal deployments.

Example:
```yaml
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Component: Application and kubernetes load balancing on non-cloud deployments.
# Description: MetalLB, LoadBalancer
# CLI flag: --enable-metallb
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
metalLb:
  addresses:
  - 10.1.31.1/24
```

How to get the address range.
<Tabs
  defaultValue="minikube"
  values={[
    { label: 'Minikube', value: 'minikube', },
    { label: 'Microk8s', value: 'microk8s', },
  ]
}>
<TabItem value="minikube">

```shell script
ifconfig -a
ens33: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.157.130  netmask 255.255.255.0  broadcast 192.168.157.255
        inet6 fe80::9446:9952:69d3:d185  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:2e:78:11  txqueuelen 1000  (Ethernet)
        RX packets 46355  bytes 58715549 (58.7 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 10838  bytes 1159449 (1.1 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
[...Other Output...]
```
In our case, we have `192.168.157.130`

This means the addresses before 130 are used.
We want to use `minikube ip +1` to `255`

So we can use a range of `192.168.157.131` to `192.168.157.255`

```yaml
metalLb:
  addresses:
  - 192.168.157.131-192.168.157.255
```
</TabItem>
<TabItem value="microk8s">

Get inside the VM of multipass.

```shell script
multipass shell microk8s-vm
```

```shell script
ifconfig -a
cni0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1450
        inet 10.1.31.1  netmask 255.255.255.0  broadcast 0.0.0.0
        inet6 fe80::58ce:8dff:fe5e:2be5  prefixlen 64  scopeid 0x20<link>
        ether 5a:ce:8d:5e:2b:e5  txqueuelen 1000  (Ethernet)
        RX packets 37251  bytes 4363323 (4.3 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 38095  bytes 9152263 (9.1 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
[...Other output...]
```

We want CNI because it's the Container Network Interface.

In our case, we have `10.1.31.1`

So we can use `10.1.31.0/24` for a range of `10.1.31.0` to `10.1.31.255`

```yaml
metalLb:
  addresses:
  - 10.1.31.1/24
# or
# - 10.1.31.0 - 10.1.31.255
```

</TabItem>
</Tabs>

### Multipass, Microk8s, and Metal LB
We will need to configure a way for the host to talk to the cluster.

Example request flow

<img src="/img/multipass_request_flow.png" alt="Request Flow with Multipass" width="800px"/>

Execute these steps in the host machine.

```shell script
multipass list
```

Grab the IP address for your microk8s.
Example:
```text
Name                    State             IPv4             Image
microk8s-vm             Running           10.174.163.50    Ubuntu 18.04 LTS
```

Add an entry to your hosts file to point to the fqdn you setup in `params.yaml`
Example entry:
```yaml
  # The Fully Qualified Domain (FQDN) where Onepanel will be hosted.
  # If `domain` above is set to example.com or sub.example.com, then your FQDN could be: app.example.com or app.sub.example.com respectively
  fqdn: app.alex.xyz
```

Entry to `/etc/hosts`
```text
10.174.163.50 app.alex.xyz
```

Adding this entry means the host browser will try to access the multipass vm we setup
for microk8s.

Next, enter into multipass VM
```shell script
multipass shell microk8s-vm
```

```shell script
ubuntu@microk8s-vm:~$ microk8s.kubectl get services -n istio-system
NAME                   TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                                                                                                                      AGE
istio-ingressgateway   LoadBalancer   10.152.183.166   10.1.31.0     15020:31979/TCP,80:31394/TCP,443:30038/TCP,15029:32204/TCP,15030:32688/TCP,15031:31420/TCP,15032:30575/TCP,15443:30386/TCP   3d3h
```

Inside the multipass VM, add an entry to the `/etc/hosts` file.
```shell script
sudo nano /etc/hosts
```
```text
10.1.31.0 app.alex.xyz
```

Once you have entered and saved the host change, verify you the onepanel website
is running.

```shell script
curl app.alex.xyz # Your params.yaml fqdn entry
```

Example output.
```text
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Onepanel</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/icon/favicon.png">
  <link rel="icon" type="image/png" sizes="96x96" href="assets/icon/favicon.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/icon/favicon.png">
<link rel="stylesheet" href="styles.9b8cd86ace5a9057a37e.css"></head>
<body>
  <app-root></app-root>
<script src="runtime-es2015.edb2fcf2778e7bf1d426.js" type="module"></script><script src="runtime-es5.edb2fcf2778e7bf1d426.js" nomodule defer></script><script src="polyfills-es5.6696c533341b95a3d617.js" nomodule defer></script><script src="polyfills-es2015.2987770fde9daa1d8a2e.js" type="module"></script><script src="main-es2015.b17adb3826cd9f5e4a29.js" type="module"></script><script src="main-es5.b17adb3826cd9f5e4a29.js" nomodule defer></script></body>
</html>
```

We need a listener running on port 80. That listener should direct traffic
to the istio gateway.

```shell script
sudo apt install socat
sudo socat TCP-LISTEN:80,fork TCP:app.alex.xyz:80
```
This will run actively in the current terminal prompt.

Now, go back to your host machine browser and go to:
`app.alex.xyz`.

You should see the website load up.
