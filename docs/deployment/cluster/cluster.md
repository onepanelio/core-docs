---
title: Architecture and cost estimates
sidebar_label: Architecture  and cost estimates
description: Architecture diagrams and cost estimates for AWS, Azure and GCP
---

## Kubernetes cluster architecture

Note that minimum supported Kubernetes version is 1.16.0. All the provided cloud provider CLI commands at minimum install Kubernetes 1.18.x.

### Diagram
:::note
Diagram is simplified for illustration and does not include all resources
:::

![](/diagrams/onepanel.png)

## Amazon Elastic Kubernetes Service (EKS)

### Diagram
![](/diagrams/eks.png)

### Cost estimates
This is the estimated cost for cluster with 1 managed master and 2 nodes.

| Resource                          | Cost per hour
|-----------------------------------|-------------
| 1 x EKS Cluster                   | $ 0.10
| 2 x m5.xlarge                     | $ 0.384
| 2 x 100GB EBS gp2                 | $ 0.027
| 1 x Elastic Load Balancer (ELB)   | $ 0.025

## Azure Kubernetes Service (AKS)

### Diagram
![](/diagrams/aks.png)

### Cost estimates
This is the estimated cost for cluster with 1 managed master and 2 nodes.

| Resource                          | Cost per hour
|-----------------------------------|-------------
| 1 x AKS Cluster                   | $ 0.10
| 2 x standard_d4s_v3               | $ 0.384
| 2 x 100GB Standard_LRS            | $ 0.026
| 1 x Azure Load Balancer           | $ 0.025

## Google Kubernetes Engine (GKE)

### Diagram
![](/diagrams/gke.png)

### Cost estimates
This is the estimated cost for cluster with 1 managed master and 2 nodes.

| Resource                          | Cost per hour
|-----------------------------------|-------------
| 1 x GKE Cluster                   | $ 0.10
| 2 x n1-standard-4                 | $ 0.380
| 2 x 100GB pd-standard             | $ 0.046
| 1 x TCP Load Balancer             | $ 0.025