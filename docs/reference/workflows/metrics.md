---
title: Persisting training metrics
sidebar_label: Persisting training metrics
description: Onepanel - Persisting training metrics
---

## Persisting metrics metrics in tasks

You can persist metrics into as JSON in a special file `/tmp/sys-metrics.json`. The JSON syntax is as an array as follows:

```json
[
    {
      "name": "accuracy", // Name of metric, should be string
      "value": 0.98,      // Value of metric, should be a `number`
      "format": ""        // Optional, valid values: "" or "%"
    },
    ...
]
```

Here's an example in Python:

```python
import json

# JSON format for metrics
metrics = [
    {'name': 'accuracy', 'value': 0.981},
    {'name': 'loss', 'value': 0.018},
]

# Write metrics to `/tmp/sys-metrics.json`
with open('/tmp/sys-metrics.json', 'w') as f:
    json.dump(metrics, f)
```

Once the Workflow task completes, you can view these metrics under **Artifacts** in the task info panel:

![](../../../static/img/metrics-230759.png)

## Passing metrics between tasks

Onepanel automatically outputs a `sys-metrics` artifact from a completed task, which you can access in a subsequent task as follows:

```yaml
entrypoint: main
templates:
  - name: main
    dag:
      tasks:
      - name: A
        template: task-a-script
      - name: B
        dependencies: [A]
        template: task-b-script
        arguments:
          # Use sys-metrics artifact output from task A
          artifacts:
          - name: task-a-metrics
            from: "{{tasks.A.outputs.artifacts.sys-metrics}}"
  - name: task-a-script
    script:
      image: python:3.7-alpine
      command: [python, '-u']
      source: |
        import json
        
        # JSON format for metrics
        metrics = [
          {'name': 'accuracy', 'value': 0.981},
          {'name': 'loss', 'value': 0.018},
        ]
        
        # Write metrics to `/tmp/sys-metrics.json`
        with open('/tmp/sys-metrics.json', 'w') as f:
            json.dump(metrics, f)
  
  - name: task-b-script
    inputs:
      artifacts:
      # Mount the argument to `/tmp/task-a-metrics.json` file
      # You can optionally write to `/tmp/sys-metrics.json` to 
      # continously pass metrics to subsequent tasks.
      - name: task-a-metrics
        path: /tmp/task-a-metrics.json
    script:
      image: python:3.7-alpine
      command: [python, '-u']
      source: |
        import json
        
        # Load Task A metrics
        with open('/tmp/task-a-metrics.json') as f:
            task_a_metrics = json.load(f)
        
        # Print to logs (optional)
        print(task_a_metrics)
```

## Persisting metrics in Workflows

You can use Onepanel's [Python SDK](https://github.com/onepanelio/python-sdk#pip-install) to persist final metrics for a Workflow. These metrics are displayed in Workflow listing and detail pages and can also be edited using the web UI.

The Python SDK snippet looks like this:

```python
# Set metrics variable to be passed into Onepanel SDK
metrics = [
    {'name': 'accuracy', 'value': 0.981},
    {'name': 'loss', 'value': 0.018}
]

# Configure API authorization
configuration = onepanel.core.api.Configuration(
    host = '<api-url>',
    api_key = {
        'authorization': '<token>'
    }
)
configuration.api_key_prefix['authorization'] = 'Bearer'

# Call SDK method to save metrics
with onepanel.core.api.ApiClient(configuration) as api_client:
    api_instance = onepanel.core.api.WorkflowServiceApi(api_client)
    namespace = '<namespace>'
    uid = '<workflow-uid>'
    body = onepanel.core.api.AddWorkflowExecutionsMetricsRequest()
    body.metrics = metrics
    try:
        api_response = api_instance.add_workflow_execution_metrics(namespace, uid, body)
        print('Metrics added.')
    except ApiException as e:
        print("Exception when calling WorkflowServiceApi->add_workflow_execution_metrics: %s\n" % e)
```

Alternatively, you can simply use the [Metrics Writer Task](https://github.com/onepanelio/templates/blob/release-v0.18.0/tasks/metrics-writer/template.yaml) in your Workflow Template.