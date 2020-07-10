---
title: Namespaces
sidebar_label: Namespaces
description: Isolate teams or projects on Onepanel using Namespaces
---

Namespaces in Onepanel are thin abstractions of [Kubernetes namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/). 

They provide scope for all the resources (Workspaces, Workflows, Environment variables, etc.) in Onepanel. Resource names must be unique in each namespace and the same resource can only belong to one namespace.

They are intended to be used to isolate teams or projects. Role based access control (RBAC) can be used to restrict users to one or more namespaces.

Namespaces follow the same naming standard of their Kubernetes counterparts. They must:

- contain at most 63 characters
- contain only lowercase alphanumeric characters or ‘-’
- start with an alphanumeric character
- end with an alphanumeric character

:::important
Onepanel additionally creates network policies that prevent resources in one namespace from accessing resources in the other.
:::
