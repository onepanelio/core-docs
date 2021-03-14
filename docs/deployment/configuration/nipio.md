---
title: NIP.IO
sidebar_label: Nipio
description: Simple wildcard DNS for any IP Address.
---

NIP.IO is powered by [PowerDNS](https://powerdns.com/) with a simple, custom [PipeBackend](https://doc.powerdns.com/authoritative/backends/pipe.html): [backend.py](https://github.com/exentriquesolutions/nip.io/blob/master/nipio/backend.py)

## Setup
To deploy Onepanel's wildcard dns with nipio, you have to add some placeholder domain to your `params.yaml` first:
```yaml
domain: domain.com
fqdn: app.domain.com
```
then, do `opctl apply` which will give you an ip address that hosts onepanel:
```bash
In your DNS, add an A record for domain.com and point it to '20.62.148.118'
Once complete, your application will be running at http://app.domain.com
```

and then, when you get the IP address, plug it back into params.yaml as domain and fqdn and use `nip.io` as  your service host:
```yaml
domain: 20.62.148.118.nip.io
fqdn: app.20.62.148.118.nip.io
```

run `opctl apply` once more to redeploy the new configuration, once complete it'll provide you an updated url with the `nip.io` domain, copy/paste it into your browser and it should redirect you to Onepanel's login page.

Use the following command to get your auth token to log into Onepanel:
```bash
opctl auth token
```