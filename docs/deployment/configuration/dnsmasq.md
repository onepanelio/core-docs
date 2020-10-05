---
title: DNSMASQ - Ubuntu18.04
sidebar_label: DNSMasq
description: Manage your Onepanel deployment using dnsmasq
---

:::caution
This will temporarily break your internet
:::

1. To use dnsmasq we'll need to first disable Ubuntu’s resolver service.
    ```bash
    sudo systemctl stop systemd-resolved
    ```
2. We’re going to edit /etc/resolv.conf, so we'll back it up
    ```bash
    sudo cp /etc/resolv.conf /etc/resolv.conf.bk
    ```
3. Then, set Googles DNS server for our use.
    ```bash
    shell script echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
    ```
4. Your internet should work at this point. Run `sudo apt update` Then install dnsmasq
    ```bash
    sudo apt install dnsmasq
    ```
5. Next, we want to pick a domain name. In this case, we’ll use dnsmasq, add this value to your /etc/hosts file.
    ```bash
    sudo nano /etc/hosts
    ```
   Add:
    ```
    127.0.0.1 dnsmasq
    # Other values
    ```
   Then save the file.
6. Then, we want to edit dnsmasq.conf file, make sure to back it up before editing.
    ```bash
    sudo cp /etc/dnsmasq.conf /etc/dnsmasq.conf.bk
    sudo nano /etc/dnsmasq.conf
    ```
7. Assuming our web-url we want accessible, from our dnsmasq, is `onepanel.lan` and all the subdomains, such as `waffles.onepanel.lan`, or `app.onepanel.lan`  
We need the IP address of onepanel.lan , which is `52.142.34.187` for our guide  
You want the following values to be set:

    port=53
    domain-needed
    bogus-priv
    strict-order
    expand-hosts
    #IMPORTANT TO MATCH YOUR /etc/hosts value!
    domain=dnsmasq
    #IP ADDRESS MAY NEED TO BE LOOKED UP FIRST
    address=/onepanel.lan/52.142.34.187
    
   You may have to run the find command to find these places to update. - Or you can start with a blank conf file and just add those values in.

8. Finally, we are almost ready to use dnsmasq.  
Add one more nameserver.  
`sudo nano /etc/resolve.conf`

    nameserver 127.0.0.1
    nameserver 8.8.8.8  
    
:::important
Note the order of the nameservers. This is **IMPORTANT**.  
We are instructing DNSMasq the order to check in.
:::
Finally, run 
```bash
sudo dnsmasq
```
Then, you can test out in your CLI or Browser. 
```bash
dig onepanel.lan
dig loc.onepanel.lan 
or
dig waffles.onepanel.lan  
```
The server should return *127.0.0.1#53*  

If you load it in the browser, you’ll get a 404 if the sub-domain has no content it can serve up. - But not a failure to look up Domain