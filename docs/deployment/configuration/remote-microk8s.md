---
title: MicroK8s on remote machines
sidebar_label: MicroK8s on remote machines
description: Onepanel - Setting up MicroK8s on a remote machines
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::important
We are only providing this guide as a reference. Due to the complexity of different installations, we can only provide open source support for clusters running Ubuntu 20.04 or higher as host OS on a local cluster.

Please visit our [Website](https://www.onepanel.ai/) and contact us for other bare metal installation options.
:::

You can set up and access Onepanel on a remote computer that you can access via SSH.

This can be a VM in the cloud, or Multipass running locally. In either case, it has to be running Ubuntu 20.04 or higher.

## Microk8s installation and setup

1. Set up your VM

  <Tabs
    groupId="provider"
    defaultValue="cloud_vm"
    values={[
      { label: 'Cloud VM', value: 'cloud_vm', },
      { label: 'Multipass', value: 'multipass', },
    ]
    }>
  <TabItem value="cloud_vm">

  Set up your VM according to your cloud provider instructions.

  :::important
  Onepanel requires at least 40GB of hard disk space. If your VM doesn't have that much you'll
  have to mount an external disk. In that case, make sure to do step 5.
  :::

  </TabItem>
  <TabItem value="multipass">

  Install [Multipass](https://multipass.run/), then launch a VM

  ```bash
  multipass launch --cpus 2 --mem 12G --disk 40G --name sample
  ```

  </TabItem>
  </Tabs>

2. Install MicroK8s

  :::note
  All further instructions are in your remote computer/vm unless otherwise indicated.
  :::

  ```bash
  sudo snap install microk8s --channel=1.19/stable --classic
  ```

2. Update your permissions

  ```bash
  sudo usermod -a -G microk8s $USER
  sudo chown -f -R $USER ~./kube
  ```

  Log out and in for changes to take effect

  Wait for microk8s to be ready

  ```bash
  microk8s status --wait-ready
  ```

3. Update API server config

  ```bash
  sudo nano /var/snap/microk8s/current/args/kube-apiserver
  ```

  Add to the top

  ```bash
  --service-account-signing-key-file=${SNAP_DATA}/certs/serviceaccount.key
  --service-account-key-file=${SNAP_DATA}/certs/serviceaccount.key
  --service-account-issuer=api
  --service-account-api-audiences=api,nats
  ```

  Restart microk8s for the changes to take effect

  ```bash
  microk8s stop && microk8s start && microk8s status --wait-ready
  ```

4. Enable microk8s addons

  ```bash
  sudo microk8s enable storage dns rbac
  microk8s status --wait-ready
  ```

5. Configure DNS

  <Tabs
  groupId="provider"
  defaultValue="cloud_vm"
  values={[
  { label: 'Cloud VM', value: 'cloud_vm', },
  { label: 'Multipass', value: 'multipass', },
  ]
  }>
  <TabItem value="cloud_vm">
  
  i. Edit the resolvconf
  
    ```bash
    sudo nano /var/snap/microk8s/current/args/kubelet
    ```
  
  Add to the top
  
    ```bash
    --resolv-conf=/run/systemd/resolve/resolv.conf
    ```
  
  ii. Edit coredns configmap so we point to the resolv.conf file
  
    ```bash
    microk8s kubectl edit cm coredns -n kube-system
    ```
  
  Set the forward section to:
  
    ```bash
    forward . /etc/resolv.conf 8.8.8.8  8.8.4.4
    ```
  
  iii. Restart microk8s
  
    ```bash
    microk8s stop && microk8s start && microk8s status --wait-ready
    ```
  
    </TabItem>
    <TabItem value="multipass">
    No configuration is required for multipass.
    </TabItem>
    </Tabs>

## (Optional) Mount external disks
  
  If you are using a VM in the cloud, you need at least 40GB of hard disk space.
  Mount your disk if you haven't already. We'll assume your disk is mounted at `/data`

  We need to tell microk8s to use the mounted disk so we have more storage space.

  Create the following directories

  ```bash
  sudo mkdir -p /data/var/lib/containerd
  sudo mkdir -p /data/run/containerd
  ```
  
  Edit the containerd arguments

  ```bash
  sudo nano /var/snap/microk8s/current/args/containerd
  ```

  Change the contents to

  ```bash  
  --config ${SNAP_DATA}/args/containerd.toml
  --root /data/var/lib/containerd
  --state /data/run/containerd
  --address ${SNAP_COMMON}/run/containerd.sock
  ```

  Then, restart microk8s

  ```bash
  microk8s stop && microk8s start && microk8s status --wait-ready
  ```

## Install Onepanel

1. Install

  ```bash
  curl -sLO https://github.com/onepanelio/onepanel/releases/download/v0.21.0/opctl-linux-amd64
  chmod +x opctl-linux-amd64
  sudo mv ./opctl-linux-amd64 /usr/local/bin/opctl
  ```

2. Initialize Onepanel

  ```bash
  opctl init --provider microk8s \
  --enable-metallb \
  --artifact-repository-provider abs
  ```

  :::note
  I used Azure Block Storage (abs) as the artifact-repository-provider above, but you can use s3, abs, or gcs
  :::

3. Populate `params.yaml` by following the instructions in the template, and referring to [configuration file sections](/docs/deployment/configuration/files#sections) for more detailed information.

  Here's a mostly filled out `params.yaml` for a quickstart. You'll need to fill out `artifactRepository`

  ```yaml
  application:
    defaultNamespace: example
    domain: onepanel.test
    fqdn: app.onepanel.test
    insecure: true
    nodePool:
      label: node.kubernetes.io/instance-type
      options:
        - name: 'Local machine'
          value: 'local'
    provider: microk8s
  # You need to fill this part out according to your artifact repository provider
  artifactRepository:
    # FILL ME OUT
  certManager:
    email: test@test.com # Not used in local deployments as certs are generated locally
  metalLb:
    addresses:
      - 192.168.99.0/32
  ```
  
4. Deploy onepanel

  ```bash
  microk8s config > kubeconfig
  KUBECONFIG=./kubeconfig opctl apply
  ```

5. Label your nodes

  To allow Workspaces to run on your machine(s) you need to label them.
  
  First, get the names of your nodes by running:
  
    ```bash
    microk8s kubectl get nodes
    ```
  
  You will get results similar to below:
  
    ```bash
    NAME     STATUS   ROLES    AGE   VERSION
    sample   Ready    <none>   11m   v1.19.8-34+811e9feeade1d3
    ```
  
  Then, for each node name, add the label from your `application.nodePool.label` from your `params.yaml`, above we used,
  
    ```yaml
    nodePool:
        label: node.kubernetes.io/instance-type
        options:
          - name: 'Local machine'
            value: local
    ```
  
  and the node above is called `sample`, you can label the node as follows:
  
    ```bash
    microk8s kubectl label node sample node.kubernetes.io/instance-type=local
    ```

## Expose Onepanel using Nginx

  Since Onepanel is running inside a VM, we need to expose it so we can access it on our local computers.
  To do so, we use nginx.

  First, install nginx.

  ```bash
  sudo apt-get install nginx
  ```

  Then, configure nginx to expose Onepanel

  ```bash
  sudo nano /etc/nginx/sites-available/default 
  ```

  Change this
  ```text
  location / {
          # First attempt to serve request as file, then
          # as directory, then fall back to displaying a 404.
          try_files $uri $uri/ =404;
  }
  ```

  to
  
  ```text
  location / {
    client_max_body_size 0; # No size limit to upload requests    
    proxy_pass http://192.168.99.0; # the ip address you gave metallb
    proxy_set_header Host $host;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_request_buffering off;
  }
  ```

  Then, stop editing and run
  ```bash
  sudo nginx -s reload
  ```

## Configure Local DNS

  On your local machine, we need to point DNS so it knows about Onepanel.
  
  Below we edit the hosts file, but you can use DNSMasq for a more robust set up.

  Get the IP address of your VM. For VMs in the cloud, this is given to you. 
  In multipass you can see it with `multipass list`

  For this example, we'll assume the IP is: `15.92.2.237`

  Then, edit your hosts file using a text editor. The location depends on your operation system.

  <Tabs
  groupId="os"
  defaultValue="linux"
  values={[
    { label: 'Linux', value: 'linux', },
    { label: 'Mac', value: 'mac', },
    { label: 'Windows', value: 'windows', },
  ]
  }>
  <TabItem value="linux">

  `/etc/hosts`

  </TabItem>
  <TabItem value="mac">

  `/etc/hosts`

  </TabItem>
  <TabItem value="windows">

  `C:\Windows\System32\drivers\etc\hosts`

  </TabItem>
  </Tabs>

  and add to the top

  ```text
  # <ip> <fqdn>
  15.92.2.237 app.onepanel.test
  ```

## Use Onepanel

  In your VM, Get your authentication login with
  ```bash
  microk8s config > kubeconfig
  KUBECONFIG=./kubeconfig opctl auth token
  ```
  
  Open up `app.onepanel.test` in your browser, paste in the credentials, and you are good to go!


## GPU Setup
:::note
For instances running with GPUs we recommend having a disk size of at least 100GB.  
All further instructions are in your remote computer/vm unless otherwise indicated.
:::

1. Verify you have a CUDA capable GPU.

  From the command line, enter
  ```bash
  lspci | grep -i nvidia
  ```
  sample output
  ```bash
  0001:00:00.0 3D controller: NVIDIA Corporation GK210GL [Tesla K80] (rev a1)
  ```

2. Verify the system has the correct kernel headers and development packages installed

  The CUDA Driver requires that the kernel headers and development packages for the running version of the kernel be installed at the time of the driver installation, as well whenever the driver is rebuilt.

  The version of the kernel your system is running can be found by running the following command:
  ```bash
  uname -r
  ```
  The kernel headers and development packages for the currently running kernel can be installed with:
  ```bash
  sudo apt-get install linux-headers-$(uname -r)
  ```

3. Install NVIDIA CUDA 

  You can download it at https://developer.nvidia.com/cuda-downloads

  Or run the commands below
  ```bash
  wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/cuda-ubuntu2004.pin
  sudo mv cuda-ubuntu2004.pin /etc/apt/preferences.d/cuda-repository-pin-600
  wget https://developer.download.nvidia.com/compute/cuda/11.3.1/local_installers/cuda-repo-ubuntu2004-11-3-local_11.3.1-465.19.01-1_amd64.deb
  sudo dpkg -i cuda-repo-ubuntu2004-11-3-local_11.3.1-465.19.01-1_amd64.deb
  sudo apt-key add /var/cuda-repo-ubuntu2004-11-3-local/7fa2af80.pub
  sudo apt-get update
  sudo apt-get -y install cuda
  ```

  You'll need to restart your machine after installation.

4. Verify installation with:
  ```bash
  nvidia-smi
  ```

  sample output:
  ```bash
  +-----------------------------------------------------------------------------+
  | NVIDIA-SMI 465.19.01    Driver Version: 465.19.01    CUDA Version: 11.3     |
  |-------------------------------+----------------------+----------------------+
  | GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
  | Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
  |                               |                      |               MIG M. |
  |===============================+======================+======================|
  |   0  NVIDIA Tesla K80    On   | 00000001:00:00.0 Off |                    0 |
  | N/A   41C    P8    25W / 149W |      0MiB / 11441MiB |      0%      Default |
  |                               |                      |                  N/A |
  +-------------------------------+----------------------+----------------------+

  +-----------------------------------------------------------------------------+
  | Processes:                                                                  |
  |  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
  |        ID   ID                                                   Usage      |
  |=============================================================================|
  |  No running processes found                                                 |
  +-----------------------------------------------------------------------------+
  ```

5. Enable NVIDIA GPU support for MicroK8s.
  ```bash
  microk8s enable gpu
  ```

6. In your `params.yaml` make sure to update the `nodePool:` section

  It should look something like this:
  ```yaml
  nodePool:
      # Cloud providers will automatically set label key as "node.kubernetes.io/instance-type" on all nodes
      # For Kubernetes 1.16.x, use "beta.kubernetes.io/instance-type"
      label: node.kubernetes.io/instance-type
      # These are the machine type options that will be available in Onepanel
      #   `name` can be any user friendly name
      #   `value` should be the instance type in your cloud provider
      #   `resources.limits` should only be set if the node pool has GPUs
      # The first option will be used as default.
      options:
        - name: 'Local GPU'
          value: gpu
          resources:
            limits:
              nvidia.com/gpu: 1
  provider: microk8s
  ```
  and then overwrite the label for your gpu nodes.
  ```bash
  microk8s kubectl label node sample node.kubernetes.io/instance-type=gpu --overwrite
  ```

7. Make sure to apply changes to use GPU nodes in your deployment:
  ```bash
  microk8s config > kubeconfig
  KUBECONFIG=./kubeconfig opctl apply
  ```
