---
title: Training and other metrics
sidebar_label: Training and other metrics
description: Onepanel - Training and other metrics
---


## Advance example

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
        
        # Write to metrics to `/tmp/sys-metrics.json`
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
        
        # Write to metrics to `/tmp/sys-metrics.json`
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