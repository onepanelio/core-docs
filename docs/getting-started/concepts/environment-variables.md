---
title: Environment variables
sidebar_label: Environment variables
description: Manage environment variables on Onepanel
---

Environment variables are unique to each namespace and will automatically added to any container in [Workspaces](/docs/getting-started/concepts/workspaces) or [Workflows](/docs/getting-started/concepts/workflows).

The following system environment variables are always automatically added to both Workspaces and Workflow containers:

- `ONEPANEL_API_URL` Platform API URL that can be used to make SDK or API calls from any container.
- `ONEPANEL_FQDN` Fully qualified domain name (FQDN) where platform UI and API is installed. Example: `app.sub.domain.com`
- `ONEPANEL_DOMAIN` Domain name where the platofrm is installed. Example: `sub.domain.com`
- `ONEPANEL_RESOURCE_NAMESPACE` The namespace where the resource is running.
- `ONEPANEL_RESOURCE_UID` The unique ID of the resource in namespace.
