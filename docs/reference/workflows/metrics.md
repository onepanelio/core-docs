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

Here's a full Python script example that installs Onepanel's SDK and persists metrics in a Workflow:

```python {7-8,10-13,38-68}
import os
import datetime
import subprocess
import sys
import tensorflow as tf

# Install onepanel-sdk
subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'onepanel-sdk==0.16.0b10'])

import onepanel.core.api
from onepanel.core.api.models.metric import Metric
from onepanel.core.api.rest import ApiException
from onepanel.core.api.models import Parameter

mnist = tf.keras.datasets.mnist

(x_train, y_train),(x_test, y_test) = mnist.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0

def create_model():
  return tf.keras.models.Sequential([
    tf.keras.layers.Flatten(input_shape=(28, 28)),
    tf.keras.layers.Dense(512, activation='relu'),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(10, activation='softmax')
  ])

model = create_model()
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

history = model.fit(x=x_train, 
          y=y_train, 
          epochs=10, 
          validation_data=(x_test, y_test))

# Set metrics variable to be passed into Onepanel SDK
metrics = [
    {'name': 'accuracy', 'value': history.history['accuracy'][-1]},
    {'name': 'loss', 'value': history.history['loss'][-1]}
]

# Get mounted service account token to use as API Key
with open('/var/run/secrets/kubernetes.io/serviceaccount/token') as f:
    token = f.read()

# Configure API authorization
configuration = onepanel.core.api.Configuration(
    host = os.getenv('ONEPANEL_API_URL'),
    api_key = {
        'authorization': token
    }
)
configuration.api_key_prefix['authorization'] = 'Bearer'

# Call SDK method to save metrics
with onepanel.core.api.ApiClient(configuration) as api_client:
    api_instance = onepanel.core.api.WorkflowServiceApi(api_client)
    namespace = '{{workflow.namespace}}'
    uid = '{{workflow.name}}'
    body = onepanel.core.api.AddWorkflowExecutionsMetricsRequest()
    body.metrics = metrics
    try:
        api_response = api_instance.add_workflow_execution_metrics(namespace, uid, body)
        print('Metrics added.')
    except ApiException as e:
        print("Exception when calling WorkflowServiceApi->add_workflow_execution_metrics: %s\n" % e)
```

You can use the above example in a Workflow script template:

```yaml
- name: metrics-example
  script: 
    image: tensorflow/tensorflow:2.3.0
    command: [python, '-u']
    source: |
      <INSERT ABOVE SCRIPT HERE>
```
