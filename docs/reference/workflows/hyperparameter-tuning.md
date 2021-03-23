---
title: Hyperparameter tuning
sidebar_label: Hyperparameter tuning
description: Onepanel - Hyperparameter tuning
---

Onepanel supports hyperparameter tuning for your TensorFlow and PyTorch models by fully integrating with [NNI](https://github.com/microsoft/nni) and its [built-in tuners](https://nni.readthedocs.io/en/stable/Tuner/BuiltinTuner.html).

To understand how to add hyperparameter tuning into Onepanel Workflows, we'll walk through the starter template under **Workflows** > **Workflow Templates** > **Create Template** > **Hyperparameter tuning**.

There are 3 steps for integrating hyperparameter tuning into any training Workflow:

1. Model training code - Make minor updates to grab hyperparameters from NNI and report accuracies back to NNI.
2. Workflow Template - Minor changes to the **Hyperparameter tuning** starter template to point to your code repository and paths.
3. Configuration - This is a field in the Workflow Template and it is where you indicate the type of tuner (e.g. TPE), the search space for hyperparameters and their corresponding ranges, path to your model training code, whether to use GPUs, etc.

## Setting up your Workflow Template

1. First, make changes to your training code to grab the parameters from NNI and report results back to NNI. Highlighted below are all the changes we had to make to [MNIST example code](https://github.com/onepanelio/templates/tree/v0.18.0/workflows/hyperparameter-tuning/mnist/main.py) which is used in the **Hyperparameter tuning** starter template to support hyperparameter tuning. The `...` indicate code that was removed for brevity.

    ```python {1,4-7,25,32,49-50}
    import nni

    # Callback class for reporting intermediate accuracy metrics.
    class ReportIntermediates(Callback):
        def on_epoch_end(self, epoch, logs=None):
            """Reports intermediate accuracy to NNI framework"""
            nni.report_intermediate_result(logs['val_accuracy'])

    def main(args, params):
        ...

        model = tf.keras.Sequential([
            ...
        ])
        model.compile(...)

        ...

        model.fit(
            x_train,
            y_train,
            batch_size=params['batch_size'],
            epochs=params['epochs'],
            # Add callback class for intermediate accuracy reporting
            callbacks=[ReportIntermediates(), tensorboard],
            validation_data=(x_test, y_test)
        )

        ...
        
        # send final accuracy to NNI tuner and web UI
        nni.report_final_result(accuracy)
        
        ...

    if __name__ == '__main__':
        ...

        params = {
            'dropout_rate': 0.5,
            'conv_size': 5,
            'hidden_size': 1024,
            'batch_size': 32,
            'learning_rate': 1e-4,
            'epochs': 10,
        }

        # fetch hyper-parameters from NNI tuner
        tuned_params = nni.get_next_parameter()
        params.update(tuned_params)

        _logger.info('Hyperparameters: %s', params)
        main(parser.parse_args(), params)
    ```

2. Go to **Workflows** > **Workflow Templates** > **Create Template** and select **Hyperparameter tuning**.

3. Update the Workflow Template to use your repository and update the paths in `/mnt/src` to match your repository's directory structure. The `...` indicate sections that were removed for brevity.

    ```yaml {7,11,33,46}
    entrypoint: main
    arguments:
        parameters:
        # [CHANGE] Path to your training/model architecture code repository
        # Change this value and revision value to your code repository and branch respectively
        - name: source
          value: https://github.com/onepanelio/templates
        # [CHANGE] Revision is the branch or tag that you want to use
        # You can change this to any tag or branch name in your repository
        - name: revision
          value: v0.18.0
    ...
    templates:
    - name: main
        dag:
            tasks:
            - name: hyperparameter-tuning
              template: hyperparameter-tuning
    ...
    - name: hyperparameter-tuning
      inputs:
        artifacts:
        - name: src
          # Clone the above repository into `/mnt/data/src` - see https://docs.onepanel.ai/docs/reference/workflows/artifacts#git for private repositories
          git:
            repo: '{{workflow.parameters.source}}'
            revision: '{{workflow.parameters.revision}}'
          path: /mnt/data/src
        - name: config
          # [CHANGE] Path where config.yaml will be generated or already exists
          # Update the path below so that config.yaml is written to the same directory as your main.py file
          # Note that your source code is cloned to /mnt/data/src
          path: /mnt/data/src/<path-to-training-code-directory>/config.yaml
          raw:
            data: '{{workflow.parameters.config}}'
    ...
      container:
        image: onepanel/dl:0.20.0
        command:
          - sh
          - -c
        args:
          # [CHANGE] Update the path below to point to your code and config.yaml path as described above
          # Note that you can "pip install" additional tools here if necessary
          - |
            cd /mnt/data/src/<path-to-training-code-directory>/ && \
            python -u /opt/onepanel/nni/start.py --config config.yaml
    ...
    ```

4. Update the Workflow Template title and click **Save**.

## Understanding the configurations

When executing your new hyperparameter tuning Workflow Template, you will most likely need to adjust the `Configuration` parameter to indicate the type of tuner (e.g. TPE), update the search space for hyperparameters and their corresponding ranges, set the path to your model training code and set the number of GPUs.

Here is a description of each of the fields in the `Configuration` parameter:

```yaml
experimentName: MNIST TF v2.x
maxExperimentDuration: 1h
maxTrialNumber: 10
trainingService:
  platform: local
  useActiveGpu: True
tuner:
  name: TPE                  # choices: TPE, Random, Anneal, Evolution, BatchTuner, MetisTuner, GPTuner
  classArgs:
    optimize_mode: maximize  # choices: maximize, minimize
trialConcurrency: 1
trialGpuNumber: 0            # update number to number of GPUs if GPU is present
trialCommand: python main.py --output /mnt/output
# [CHANGE] Search space configuration
# Change according to your hyperparameters and ranges
searchSpace:
  dropout_rate:
    _type: uniform
    _value: [0.5,0.9]
  conv_size:
    _type: choice
    _value: [2,3,5,7]
  hidden_size:
    _type: choice
    _value: [124,512,1024]
  batch_size:
    _type: choice
    _value: [16,32]
  learning_rate:
    _type: choice
    _value: [0.0001,0.001,0.01,0.1]
  epochs:
    _type: choice
    _value: [10]
```

:::important
See [NNI's Experiment Config Reference](https://nni.readthedocs.io/en/stable/reference/experiment_config.html) for more information and list of all available fields.
:::

## Executing your Workflow

Now that you have set up your hyperparameter tuning Workflow Template and have a good understanding of the various configurations, you can execute the Workflow via Onepanel [Web UI](/docs/reference/workflows/execute) or [Python SDK](https://github.com/onepanelio/python-sdk/blob/master/examples/execute-workflow.ipynb). 

Once the Workflow is running, you can see your training progress in **TensorBoard** and **NNI Web UI** right from your Workflow Task by clicking on the **hyperparameter-tuning** Task, then clicking **Outputs**.

![](../../../static/img/hyperparamtuning-170923.png)


Clicking **Open NNI Web UI** will display the following screen in a new tab:

![](../../../static/img/hyperparamtuning-171041.png)

You can also view the corresponding TensorBoard by clicking **Open TensorBoard**:

![](../../../static/img/hyperparamtuning-171133.png)

## Persisting best metrics, model and hyperparameters
Although optional, you should persist the best metrics to your Workflow and save the best model and parameters to your object storage.

Refer to the [MNIST example code](https://github.com/onepanelio/templates/tree/v0.18.0/workflows/hyperparameter-tuning/mnist/main.py) for an example of how to do this.

![](../../../static/img/hyperparamtuning-173059.png)