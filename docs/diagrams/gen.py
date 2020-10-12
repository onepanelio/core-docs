from diagrams import Cluster, Diagram

# K8s
from diagrams.k8s.group import Namespace
from diagrams.k8s.compute import Deployment, Pod, ReplicaSet
from diagrams.k8s.network import Ingress, Service
from diagrams.k8s.storage import PV
from diagrams.k8s.infra import Node

# AWS
from diagrams.aws.network import ELB, Route53
from diagrams.aws.storage import EBS
from diagrams.aws.compute import EC2

# Azure
from diagrams.azure.network import LoadBalancers
from diagrams.azure.network import DNSZones
from diagrams.azure.compute import VM, Disks

# GCP
from diagrams.gcp.network import LoadBalancing
from diagrams.gcp.storage import PersistentDisk
from diagrams.gcp.network import DNS
from diagrams.gcp.compute import ComputeEngine

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
    
    return node_1, node_2, ing

with Diagram('Amazon Web Services Diagram', show=False):
    node_1, node_2, ing = k8s('Elastic Kubernetes Service Cluster')
    
    Route53('Route53') >> ELB('Elastic Load Balancer') >> ing
    instance_1 = EC2('EC2 Instance 1\n(m5.xlarge)')
    disk_1 = EBS('EBS Disk 1\n(gp2)') 
    instance_2 = EC2('EC2 Instance 2\n(m5.xlarge)')
    disk_2 = EBS('EBS Disk 2\n(gp2)')
    instance_1 - disk_1
    instance_2 - disk_2
    node_1 - instance_1
    node_2 - instance_2

with Diagram('Azure Diagram', show=False):
    node_1, node_2, ing = k8s('Azure Kubernetes Service Cluster')
    
    DNSZones('AzureDNS') >> LoadBalancers('Azure Load Balancer') >> ing
    instance_1 = VM('Virtual Machine 1\n(Standard_D4s_v3)')
    disk_1 = Disks('Azure Disk 1\n(Standard_LRS)') 
    instance_2 = VM('Virtual Machine 2\n(Standard_D4s_v3)')
    disk_2 = Disks('Azure Disk 2\n(Standard_LRS)')
    instance_1 - disk_1
    instance_2 - disk_2
    node_1 - instance_1
    node_2 - instance_2

with Diagram('Google Compute Engine Diagram', show=False):
    node_1, node_2, ing = k8s('Google Kubernetes Engine Cluster')
    
    DNS('CloudDNS') >> LoadBalancing('TCP Load Balancer') >> ing
    instance_1 = ComputeEngine('VM Instance 1\n(n1-standard-4)')
    disk_1 = PersistentDisk('Persistent Disk 1\n(pd-standard)') 
    instance_2 = ComputeEngine('VM Instance 2\n(n1-standard-4)')
    disk_2 = PersistentDisk('Persistent Disk 2\n(pd-standard)')
    instance_1 - disk_1
    instance_2 - disk_2
    node_1 - instance_1
    node_2 - instance_2


