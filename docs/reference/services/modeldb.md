---
title: ModelDB
sidebar_label: ModelDB
description: Information regarding [ModelDB](https://github.com/VertaAI/modeldb) 
---

## Overview

[ModelDB](https://github.com/VertaAI/modeldb) is an open-source system to version machine learning models including their ingredients code, data, config, and environment and to track ML metadata across the model lifecycle.

## Cloud Storage Setup

In order to allow your deployment to access cloud storage such as S3, you need to update the CORS configuration for the bucket.

The configuration below is sufficient, 
where 

`$ORIGIN` = `https://modeldb--$application.defaultNamespace.$application.domain`

These `$` values come from your `params.yaml`


```xml
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>$ORIGIN</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedMethod>DELETE</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>
```

## Using the SDK

In order to use the verta SDK in a workspace, run this to set up the connection.

```python
from verta import Client
import os

url = os.getenv("ONEPANEL_SERVICES_MODELDB_API_URL")

client = Client(url, _connect=False)
client._conn.auth['onepanel-auth-token'] = "<your token here>"

# Code below is a sample to create a project and experiment.

proj = client.set_project("My first ModelDB project")
expt = client.set_experiment("Default Experiment")

# log the first run
run = client.set_experiment_run("Second Run")
```

## Configuration

ModelDB needs two parts, a database and cloud storage.
Right now only Postgres databases are supported.

You can omit some cloud storage and database configuration, and Onepanel will use the information
provided under `artifactRepository` and `database` instead.

Here's the minimal configuration required.

```yaml
services:
  modelDb:
    artifactRepository:
      s3:
        # An s3 bucket to store your modeldb artifacts
        # The key/secret provided under artifactRepository config is used in this case.
        bucket: example-modeldb-test
        region: us-west-2
    database:
      # The name of the database where modeldb records will be stored.
      # This will be automatically created if it does not exist
      # The connection information under the database config is used in this case.
      databaseName: modeldb
      # This must be a database that already exists. It is used to establish a connection
      # so the system can create the databaseName.
      defaultDatabaseName: postgres
``` 

A complete configuration is below.

```yaml
services:
  modelDb:
    artifactRepository:
      s3:
        accessKey: <access_key> 
        secretKey: <secret_key>
        bucket: <bucket_name>
        region: us-west-2
    database:
      databaseName: modeldb
      defaultDatabaseName: postgres
      host: <database_hose>
      username: <database_username>
      password: <database_password>
      port: 5432
```





