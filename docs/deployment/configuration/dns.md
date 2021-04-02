---
title: DNS
sidebar_label: Local DNS
description: Set up DNS for microk8s
---

:::note
This guide is for Ubuntu 20.04
:::

## Set up DNS with DNSMASQ

:::important
Make sure you have an ip address and the domain you want to use ready.
:::


1. We're going to be using dnsmasq so we can use wildcards.

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
    
    # The line below comes from the domain you want to use and what ip you want to point it to
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
