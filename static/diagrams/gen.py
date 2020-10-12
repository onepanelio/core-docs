from diagrams import Cluster, Diagram

# K8s
from diagrams.k8s.group import Namespace
from diagrams.k8s.compute import Deployment, Pod, ReplicaSet
from diagrams.k8s.network import Ingress, Service
from diagrams.k8s.storage import PV
from diagrams.k8s.infra import Node

# Generic
from diagrams.onprem.compute import Server
from diagrams.onprem.database import PostgreSQL
from diagrams.generic.storage import Storage
from diagrams.oci.storage import ObjectStorage
from diagrams.oci.network import LoadBalancer
from diagrams.oci.connectivity import DNS as OCIDNS

# AWS
from diagrams.aws.network import ELB, Route53
from diagrams.aws.storage import EBS, S3
from diagrams.aws.compute import EC2, EKS
from diagrams.aws.database import RDS

# Azure
from diagrams.azure.network import LoadBalancers
from diagrams.azure.network import DNSZones
from diagrams.azure.compute import VM, Disks, AKS
from diagrams.azure.database import DatabaseForPostgresqlServers
from diagrams.azure.storage import BlobStorage

# GCP
from diagrams.gcp.network import LoadBalancing
from diagrams.gcp.storage import PersistentDisk, GCS
from diagrams.gcp.network import DNS
from diagrams.gcp.compute import ComputeEngine, GKE
from diagrams.gcp.database import SQL

def k8s(name):
    with Cluster(name):            
        svc_core = Service('core')
        pd_core = Pod('core')
        svc_core >> pd_core

        svc_core_ui = Service('core-ui')
        pd_core_ui = Pod('core-ui')
        svc_core_ui >> pd_core_ui
        
        ing = Ingress('istio')
        ing >> [svc_core, svc_core_ui]

        node_1 = Node('node-1')
        node_2 = Node('node-2')
        pd_core >> node_1
        pd_core >> node_2
        pd_core_ui >> node_1
        pd_core_ui >> node_2
    
    return node_1, node_2, ing, pd_core

with Diagram('System Diagram', show=False, filename='sys', outformat='png'):
    with Cluster(''):
        node_1, node_2, ing, core = k8s('Kubernetes Cluster')
        instance_1 = Server('Server 1')
        disk_1 = Storage('Disk 1') 
        instance_2 = Server('Server 2')
        disk_2 = Storage('Disk 2')

        instance_1 - disk_1
        instance_2 - disk_2
        node_1 - instance_1
        node_2 - instance_2
        core - PostgreSQL('PostgresSQL')

        core - ObjectStorage('Object Storage')
        OCIDNS('DNS') >> LoadBalancer('Load Balancer') >> ing

with Diagram('Amazon Web Services', show=False, filename='aws', outformat='png'):
    with Cluster(''):
        with Cluster('Virtual Private Cloud'):
            kube = EKS('Elastic Kubernetes Service')
            instance_1 = EC2('EC2 Instance 1\n(m5.xlarge)')
            disk_1 = EBS('EBS Disk 1\n(gp2)') 
            instance_2 = EC2('EC2 Instance 2\n(m5.xlarge)')
            disk_2 = EBS('EBS Disk 2\n(gp2)')

            instance_1 - disk_1
            instance_2 - disk_2
            kube - instance_1
            kube - instance_2
            kube - RDS('Amazon RDS for PostgresSQL')
        
        kube - S3('S3')
        Route53('Route53') >> ELB('Elastic Load Balancer') >> kube

with Diagram('Microsoft Azure', show=False, filename='aks', outformat='png'):
    with Cluster(''):
        with Cluster('Virtual Network'):
            kube = AKS('Azure Kubernetes Service')
            instance_1 = VM('Virtual Machine 1\n(Standard_D4s_v3)')
            disk_1 = Disks('Azure Disk 1\n(Standard_LRS)') 
            instance_2 = VM('Virtual Machine 2\n(Standard_D4s_v3)')
            disk_2 = Disks('Azure Disk 2\n(Standard_LRS)')
            
            instance_1 - disk_1
            instance_2 - disk_2
            kube - instance_1
            kube - instance_2
            kube - DatabaseForPostgresqlServers('Azure Database for PostgresSQL')
        
        kube - BlobStorage('Azure Blob Storage')
        DNSZones('AzureDNS') >> LoadBalancers('Azure Load Balancer') >> kube

with Diagram('Google Cloud Platform', show=False, filename='gke', outformat='png'):
    with Cluster(''):
        with Cluster('Virtual Private Cloud'):
            kube = GKE('Google Kubernetes Engine')
            instance_1 = ComputeEngine('VM Instance 1\n(n1-standard-4)')
            disk_1 = PersistentDisk('Persistent Disk 1\n(pd-standard)') 
            instance_2 = ComputeEngine('VM Instance 2\n(n1-standard-4)')
            disk_2 = PersistentDisk('Persistent Disk 2\n(pd-standard)')

            instance_1 - disk_1
            instance_2 - disk_2
            kube - instance_1
            kube - instance_2
            kube - SQL('Cloud SQL for PostgresSQL')

        kube - GCS('Google Cloud Storage')
        DNS('CloudDNS') >> LoadBalancing('TCP Load Balancer') >> kube


