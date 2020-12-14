---
title: Workflows
sidebar_label: Workflows
description: Onepanel Workflows allow you to compose and chain multiple tasks or tools in a reproducible, scalable manner
---

Workflows allow you to define highly scalable, reproducible and version controlled training and data processing pipelines.

Workflows are defined as Directed Acyclic Graphs (DAG), composed of multiple Tasks, where each Task can contain one or more containers, with a corresponding command or script written in any programming language supported by the underlying container. This allows you to run each task in the DAG on a single machine or on multiple machines with their own dedicated resources. For example, you can create a Workflow that scrapes data from multiple sources, runs each task on a dedicated CPU machine and then passes this data to a different task that trains a model on the scraped data on a GPU machine.

You define Workflows using Workflow Templates. Workflow Templates are reusable templates that are a combination of Docker images and a YAML definition. See [Workflow Templates](/docs/reference/workflows/templates) in **User Guide** for more detailed information.