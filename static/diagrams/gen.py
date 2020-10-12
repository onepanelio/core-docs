from diagrams import Cluster, Diagram

# K8s
from diagrams.k8s.compute import Pod, Deployment, StatefulSet
from diagrams.k8s.network import Ingress, Service
from diagrams.k8s.storage import PV
from diagrams.k8s.infra import Node

# AWS
from diagrams.aws.network import ELB, Route53
from diagrams.aws.storage import EBS, S3
from diagrams.aws.compute import EC2, EKS
from diagrams.aws.database import RDS
from diagrams.aws.management import Cloudwatch

# Azure
from diagrams.azure.network import LoadBalancers
from diagrams.azure.network import DNSZones
from diagrams.azure.compute import VM, Disks, AKS
from diagrams.azure.database import DatabaseForPostgresqlServers
from diagrams.azure.storage import BlobStorage
from diagrams.azure.analytics import LogAnalyticsWorkspaces

# GCP
from diagrams.gcp.network import LoadBalancing
from diagrams.gcp.storage import PersistentDisk, GCS
from diagrams.gcp.network import DNS
from diagrams.gcp.compute import ComputeEngine, GKE
from diagrams.gcp.database import SQL
from diagrams.gcp.management import Logging

def k8s(name):
    with Cluster(name):
        with Cluster('namespace: onepanel'):
            svc_core = Service('core')
            pd_core = Pod('core-*')
            dep_core = Deployment('core')
            dep_core >> pd_core
            svc_core >> pd_core

            svc_core_ui = Service('core-ui')
            pd_core_ui = Pod('core-ui-*')
            dep_core_ui = Deployment('core-ui')
            dep_core_ui >> pd_core_ui
            svc_core_ui >> pd_core_ui
        
        with Cluster('namespace: istio-system'):
            ing = Ingress('istio-ingressgateway')
        
        with Cluster('namespace: my-project'):
            with Cluster('Workspace'):
                svc_workspace = Service('jupyterlab')
                pd_workspace = Pod('jupyterlab-*')
                pv_workspace = PV('jupyterlab-data-0')
                sts_workspace  = StatefulSet('jupyterlab')
                sts_workspace  >> pd_workspace 
                pd_workspace - pv_workspace
                svc_workspace >> pd_workspace

        ing >> [svc_core, svc_core_ui, svc_workspace]

        node_1 = Node('node-1')
        node_2 = Node('node-2')
        node_3 = Node('node-2')
        pd_core - node_1
        pd_core - node_2
        pd_core_ui - node_1
        pd_core_ui - node_2
        pd_workspace - node_3
    
    return node_1, node_2, node_3, ing, pd_core, pv_workspace

with Diagram('Onepanel', show=False, filename='onepanel', outformat='png'):
    with Cluster(''):
        node_1, node_2, node_3, ing, core, pv_workspace = k8s('Kubernetes Cluster')
        instance_1 = ComputeEngine('Server 1')
        disk_1 = PersistentDisk('OS Disk 1')
        instance_2 = ComputeEngine('Server 2')
        disk_2 = PersistentDisk('OS Disk 2')
        instance_3 = ComputeEngine('Server 3')
        disk_3 = PersistentDisk('OS Disk 3')

        pv_disk = PersistentDisk('SSD Disk 1') 
        node_1 - instance_1
        node_2 - instance_2
        node_3 - instance_3
        instance_1 - disk_1
        instance_2 - disk_2
        instance_3 - disk_3
        instance_3 - pv_disk
        pv_workspace - pv_disk
        core - SQL('PostgresSQL')

        core - GCS('Object Storage')
        DNS('DNS') >> LoadBalancing('Load Balancer') >> ing

with Diagram('Amazon Web Services', show=False, filename='aws', outformat='png'):
    with Cluster(''):
        with Cluster('Virtual Private Cloud'):
            kube = EKS('Elastic Kubernetes\nService')
            instance_1 = EC2('EC2 Instance 1\n(m5.xlarge)')
            disk_1 = EBS('EBS Disk 1\n(gp2)') 
            instance_2 = EC2('EC2 Instance 2\n(m5.xlarge)')
            disk_2 = EBS('EBS Disk 2\n(gp2)')

            instance_1 - disk_1
            instance_2 - disk_2
            kube - instance_1
            kube - instance_2
            kube - RDS('Amazon RDS\nfor PostgresSQL')
        
        kube - S3('S3')
        kube - Cloudwatch('Amazon CloudWatch')
        Route53('Route53') >> ELB('Elastic Load Balancer') >> kube

with Diagram('Microsoft Azure', show=False, filename='aks', outformat='png'):
    with Cluster(''):
        with Cluster('Virtual Network'):
            kube = AKS('Azure Kubernetes\nService')
            instance_1 = VM('Virtual Machine 1\n(Standard_D4s_v3)')
            disk_1 = Disks('Azure Disk 1\n(Standard_LRS)') 
            instance_2 = VM('Virtual Machine 2\n(Standard_D4s_v3)')
            disk_2 = Disks('Azure Disk 2\n(Standard_LRS)')
            
            instance_1 - disk_1
            instance_2 - disk_2
            kube - instance_1
            kube - instance_2
            kube - DatabaseForPostgresqlServers('Azure Database\nfor PostgresSQL')
        
        kube - BlobStorage('Azure Blob Storage')
        kube - LogAnalyticsWorkspaces('Azure Platform Logs')
        DNSZones('AzureDNS') >> LoadBalancers('Azure Load Balancer') >> kube

with Diagram('Google Cloud Platform', show=False, filename='gke', outformat='png'):
    with Cluster(''):
        with Cluster('Virtual Private Cloud'):
            kube = GKE('Google Kubernetes\nEngine')
            instance_1 = ComputeEngine('VM Instance 1\n(n1-standard-4)')
            disk_1 = PersistentDisk('Persistent Disk 1\n(pd-standard)') 
            instance_2 = ComputeEngine('VM Instance 2\n(n1-standard-4)')
            disk_2 = PersistentDisk('Persistent Disk 2\n(pd-standard)')

            instance_1 - disk_1
            instance_2 - disk_2
            kube - instance_1
            kube - instance_2
            kube - SQL('Cloud SQL\nfor PostgresSQL')

        kube - GCS('Google Cloud Storage')
        kube - Logging('Logging')
        DNS('CloudDNS') >> LoadBalancing('TCP Load Balancer') >> kube


