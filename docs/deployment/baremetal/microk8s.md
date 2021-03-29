---
title: MicroK8s deployment guide
sidebar_label: MicroK8s deployment
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document outlines the installation steps for Ubuntu 20.04 and [MicroK8s](https://microk8s.io/).

## Install Microk8s

1. First, install microk8s.

    ```bash
    sudo snap install microk8s --channel=1.19/stable --classic
    ```

2. Make sure your current user has permissions to work with microk8s.

    ```bash
    sudo usermod -a -G microk8s $USER
    sudo chown -f -R $USER ~./kube
    ```

   :::note
   You will have restart your machine for this change to take effect.
   :::

   Wait for it to be ready.

   ```bash
   microk8s status --wait-ready
   ```

3. Enable the following required add-ons:

    ```bash
    sudo microk8s enable storage dns rbac
    ```

4. Enable TokenRequest feature (required by Istio) by passing in extra arguments to the api server.
    ```shell script
    sudo nano /var/snap/microk8s/current/args/kube-apiserver
    ```

   Add these lines:
    ```text
    --service-account-signing-key-file=${SNAP_DATA}/certs/serviceaccount.key
    --service-account-key-file=${SNAP_DATA}/certs/serviceaccount.key
    --service-account-issuer=api
    --service-account-api-audiences=api,nats
    ```
   Make sure this line is set to these values:
    ```text
    --authorization-mode=RBAC,Node
    ```

   Save your changes.

5. Restart daemon-apiserver for changes to take effect

    ```bash
    sudo systemctl restart snap.microk8s.daemon-apiserver
    ```

   Check microk8s is running with 
   ```bash
   microk8s status --wait-ready
   ```

## Install Onepanel

1. Download the latest `opctl` for linux from [our release page](https://github.com/onepanelio/core/releases/latest).

2. Run the following command to initialize a `params.yaml` template for microk8s:
    ```bash
    opctl init --provider microk8s \
      --enable-metallb \
      --artifact-repository-provider abs
    ```

   :::note
   The artifact-repository-provider is set to s3 above, but you can use s3, abs, or gcs.
   :::

3. Populate `params.yaml` by following the instructions in the template, and referring to [configuration file sections](/docs/deployment/configuration/files#sections) for more detailed information.
   
   For this example, I'm going to reference this part of my `params.yaml`

   ```yaml
   application:
      defaultNamespace: onepanel
      domain: "onepanel.test"
      fqdn: "app.onepanel.test"
      nodePool:
         label: node.kubernetes.io/instance-type
         options:
          - name: 'Local machine'
            value: local
   metalLb:
      addresses:
       - 192.168.99.0/32
   ```

4. Label your node(s)

   First, find your node names

    ```bash
    microk8s kubectl get nodes
    ```

   Mine is

    ```bash
    NAME     STATUS   ROLES    AGE   VERSION
    sample   Ready    <none>   11m   v1.19.8-34+811e9feeade1d3
    ```

   Then, for each node name, add the label from your `application.nodePool.label`
   from above. 
   
   Mine is 
   
   ```yaml
   nodePool:
      label: node.kubernetes.io/instance-type
      options:
         - name: 'Local machine'
           value: local
   ```

   and my node is called `sample`

   So I use

    ```bash
    microk8s kubectl label node sample node.kubernetes.io/instance-type=local
    ```

5. Get Kubernetes config from MicroK8s:

    ```bash
    microk8s config > kubeconfig
    ```

6. Finally, run the following command to deploy to your cluster:
    ```bash
    KUBECONFIG=./kubeconfig opctl apply
    ```

   :::important
   The CLI will display the URL for accessing Onepanel once the deployment completes.
   For this example, mine is 192.168.99.0 and fqdn is app.onepanel.test
   :::

## Set up DNS

1. Now we need to set up DNS so we can access our cluster. We're going to be using dnsmasq so we can use wildcards.

   First, install dnsmasq

    ```bash
    sudo apt install dnsmasq
    ```

2. Now let's update the DNS configuration

   edit the file `/etc/dnsmasq.conf`

   and add to the end

    ```text
    # This option is also commented above in the file, but we add it to the end for ease of use.
    bind-interfaces
    
    # The line below comes from what domain you set up in params.yaml
    # and the ip you get from the cli 
    address=/.onepanel.test/192.168.99.0
    ```

3. Restart dnsmasq

    ```bash
    sudo systemctl restart dnsmasq
    ```

4. Make dnsmasq dns server reachable

   First, install and enable `resolvconf`

  ```bash
  sudo apt-get install resolvconf
  sudo systemctl enable resolvconf
  sudo systemctl start resolvconf
  ```

   Then, edit the `/etc/resolvconf/resolv.conf.d/tail` file to make sure we keep the `127.0.0.53` nameserver.

  ```text
  nameserver 127.0.0.53
  ```

   Make sure the changes persist

  ```bash
  sudo resolvconf --enable-updates
  sudo resolvconf -u	
  ```

   Finally, reboot your machine.

5. Access Onepanel

   Now, you should be able to go to http://app.onepanel.test in your browser
   and access onepanel.

   Get your auth token with

   ```bash
   KUBECONFIG=./kubeconfig opctl auth token
   ```

   and login with admin / the auth token above
