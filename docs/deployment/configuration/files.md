---
title: Configuration files
sidebar_label: Configuration files
---

There are two files generated after running `opctl init --provider <provider>`:

- `params.yaml` - contains the fields that need to be updated to configure your deployment.
- `config.yaml` - contains components that are going to be included in the deployment. This file **should not** be updated unless you plan on adding custom Kustomize components to your deployment.

For further information on populating the `params.yaml` file, refer to the sections below. This information is also available inside the generated `params.yaml` template.

## Single-node deployment `params.yaml`

```yaml
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Component: Onepanel
# Description: Onepanel application information
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
application:
  # First namespace that will be created in Onepanel, more can be added later
  defaultNamespace: default
  # Domain name or IP where Onepanel is hosted
  # Use an IP address if running local, use `minikube ip` or `multipass list` to get this IP
  # In the cloud, use a first-level or multi-level subdomain like app.example.com or app.sub.example.com
  host: <ip-or-fqdn>
  local:
    # GRPC port for API
    apiGRPCPort: 32001
    # HTTP port for API
    apiHTTPPort: 32000
    # HTTP port for UI
    uiHTTPPort: 32002
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Component: Artifact repository
# Description: S3 compatible object storage for storing files across Onepanel
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
artifactRepository:
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

## Cloud deployment `params.yaml`

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
  # Domain name or IP where Onepanel is hosted
  # Use an IP address if running local, use `minikube ip` or `multipass list` to get this IP
  # In the cloud, use a first-level or multi-level subdomain like app.example.com or app.sub.example.com
  host: <ip-or-fqdn>
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Component: Artifact repository
# Description: S3 compatible object storage for storing files across Onepanel
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
artifactRepository:
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
  # DNS Provider: Google CloudDNS
  # Docs: https://onepanelio.github.io/core-docs/docs/deployment/configuration/tls#google-clouddns
  # CLI flag: --dns-provider=clouddns
  clouddns:
    projectId: <project-id>
    serviceAccountKey: <key.json-file-data>
  # Enter a wildcard domain name
  # Examples: *.example.com or *.subdomain.example.com
  commonName: <wildcard-fqdn>
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