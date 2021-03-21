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

    Wait for it to be ready.
    
    ```microk8s status --wait-ready```

3. Enable the following required add-ons:

    ```bash
    sudo microk8s enable storage dns rbac
    ```

4. Enable TokenRequest feature (required by Istio) by passing in extra argument to the api server.
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
   
5. Execute to make changes take effect

    ```shell script
    sudo systemctl restart snap.microk8s.daemon-apiserver
    ```
    
    Check microk8s is running with `microk8s status --wait-ready`

## Install Onepanel

1. Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/core/releases/latest).

2. Run the following command to initialize a `params.yaml` template for microk8s:
    ```bash
      opctl init --provider microk8s \
          --enable-metallb \
          --artifact-repository-provider s3 
    ```

    :::note
    The artifact-repository-provider is set to s3 above, but you can use s3, abs, or gcs.
    :::

3. Populate `params.yaml` by following the instructions in the template, and referring to [configuration file sections](/docs/deployment/configuration/files#sections) for more detailed information.

    :::note
    See [configuration metallb](/docs/deployment/configuration/files#metal-lb) for metallb specific details.
    :::

4. Get Kubernetes config from MicroK8s:

    ```bash
    microk8s config > kubeconfig
    ```

5. Finally, run the following command to deploy to your cluster:
    ```bash
    KUBECONFIG=./kubeconfig opctl apply
    ```

    :::important
    The CLI will display the URL for accessing Onepanel once the deployment completes.
    For this example, let's say it's 192.168.99.0 and fqdn is app.onepanel.test
    :::

## Set up DNS

1. Now we need to set up DNS so we can access our cluster. We're going to be using dnsmasq

    First, install dnsmasq
    
    ```bash
    apt install dnsmasq
    ```
    
2.  Next, we're going to have to disable `systemd-resolved`

    ```bash
    systemctl disable systemd-resolved
    systemctl stop systemd-resolved
    ```
    
3. Now let's update the DNS configuration
    
    edit the file `/etc/dnsmasq.conf`
    
    and add to the end
    
    ```
    # The line below comes from what domain you set up in params.yaml
    # and the ip you get from the cli 
    address=/.onepanel.test/192.168.99.0
    
    server=8.8.8.8
    server=1.1.1.1
    ```
    
4. Finally, restart dnsmasq
    
    ```bash
    sudo systemctl restart dnsmasq
    ```
   
5. Done
   
   Now, you should be able to go to http://app.onepanel.test in your browser
   and access onepanel.
