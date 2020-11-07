---
title: Persisting training metrics
sidebar_label: Persisting training metrics
description: Onepanel - Persisting training metrics
---
## Persisting metrics

You can persist metrics into as JSON in a special file `/tmp/sys-metrics.json`. The JSON syntax is as an array as follows:

```json
[
    {"name": "<metric-1-name>", "value": "metric-1-value"},
    {"name": "<metric-2-name>", "value": "metric-2-value"},
    ...
]
```

Here's an example in Python:

```python
import json

# JSON format for metrics
metrics = [
    {'name': 'accuracy', 'value': 0.98},
    {'name': 'loss', 'value': 0.02},
]

# Write metrics to `/tmp/sys-metrics.json`
with open('/tmp/sys-metrics.json', 'w') as f:
    json.dump(metrics, f)
```

Once the Workflow task completes, you can view these metrics under **Artifacts** in the task info panel.

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
          {'name': 'accuracy', 'value': 0.98},
          {'name': 'loss', 'value': 0.02},
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

## Advance example

This example shows a Workflow that saves metrics (`accuracy` and `loss`) in two different tasks **A** and **B**, and then compares the accuracies in a subsequent task **C**, and finally sends a Slack notification of the metrics with the best accuracy.

```yaml
entrypoint: main
templates:
  - name: main
    dag:
      tasks:
      - name: A
        template: task-a-script
      - name: B
        template: task-b-script
      - name: C
        dependencies: [A, B]
        template: task-c-script
        arguments:
          artifacts:
          - name: task-a-metrics
            from: "{{tasks.A.outputs.artifacts.sys-metrics}}"
          - name: task-b-metrics
            from: "{{tasks.B.outputs.artifacts.sys-metrics}}"
      - name: notify-in-slack
        dependencies: [C]
        template: slack-notify-success
        arguments:
          artifacts:
          - name: task-c-metrics
            from: "{{tasks.C.outputs.artifacts.sys-metrics}}"
  - name: task-a-script
    script:
      image: python:3.7-alpine
      command: [python, '-u']
      source: |
        import json
        
        # Training code here
        
        # JSON format for metrics
        metrics = [
          {'name': 'accuracy', 'value': 0.98},
          {'name': 'loss', 'value': 0.02},
        ]
        
        # Write metrics to `/tmp/sys-metrics.json`
        with open('/tmp/sys-metrics.json', 'w') as f:
            json.dump(metrics, f)
        
        # Print to logs (optional)
        print(metrics)
  
  - name: task-b-script
    script:
      image: python:3.7-alpine
      command: [python, '-u']
      source: |
        import json
        
        # Training code here
        
        # JSON format for metrics
        metrics = [
          {'name': 'accuracy', 'value': 0.95},
          {'name': 'loss', 'value': 0.05},
        ]
        
        # Write metrics to `/tmp/sys-metrics.json`
        with open('/tmp/sys-metrics.json', 'w') as f:
            json.dump(metrics, f)
            
        # Print to logs (optional)
        print(metrics)
  
  - name: task-c-script
    inputs:
      artifacts:
      - name: task-a-metrics
        path: /tmp/task-a-metrics.json
      - name: task-b-metrics
        path: /tmp/task-b-metrics.json
    script:
      image: python:3.7-alpine
      command: [python, '-u']
      source: |
        import json
        
        # Load Task A metrics
        with open('/tmp/task-a-metrics.json') as f:
            task_a_metrics = json.load(f)
        
        # Load Task B metrics
        with open('/tmp/task-b-metrics.json') as f:
            task_b_metrics = json.load(f)
        
        # Pick the metrics with best accuracy
        task_a_accuracy = [m['value'] for m in task_a_metrics if m['name'] == 'accuracy'][0]
        task_b_accuracy = [m['value'] for m in task_b_metrics if m['name'] == 'accuracy'][0]
        
        if task_a_accuracy > task_b_accuracy:
          metrics = task_a_metrics
        else:
          metrics = task_b_metrics
        
        # Write to metrics to `/tmp/sys-metrics.json`
        with open('/tmp/sys-metrics.json', 'w') as f:
            json.dump(metrics, f)
            
        # Print to logs (optional)
        print(metrics)
  
  - name: slack-notify-success
    container:
      image: technosophos/slack-notify
      command: [sh,-c]
      args: ['SLACK_USERNAME=Worker SLACK_TITLE="{{workflow.name}} metrics" SLACK_MESSAGE=$(cat /tmp/task-c-metrics.json)} ./slack-notify']
    inputs:
      artifacts:
      - name: task-c-metrics
        path: /tmp/task-c-metrics.json
```