---
title: Hyperparameter tuning
sidebar_label: Hyperparameter tuning
description: Onepanel - Hyperparameter tuning
---

Onepanel supports hyperparameter tuning for your TensorFlow and PyTorch models by fully integrating with [NNI](https://github.com/microsoft/nni) and its [built-in tuners](https://nni.readthedocs.io/en/stable/Tuner/BuiltinTuner.html).

To understand how to add hyperparameter tuning into Onepanel Workflows, we'll walk through this [simple MNIST example](https://github.com/onepanelio/templates/tree/master/workflows/hyperparameter-tuning/mnist). Note that this example is also available when you deploy Onepanel under **Workflows** > **Workflow Templates** > **Hyperparameter Tuning Example**, so you can **Clone** it and make minor changes to make it work with your own model architecture and training code.

There are 4 parts to configuring hyperparameter tuning into your Workflows:

1. Model training code - Make minor updates to grab hyperparameters from NNI and report accuracies back to NNI.
2. Workflow Template - Minor changes to the clone of **Hyperparameter Tuning Example** that describes training pipeline with hyperparameter tuning.
3. Search space configuration (`search_space.json`) - The search space for hyperparameters and their corresponding ranges
4. Tuner configuration (`config.yaml`)- This is where you indicate the type of tuner (e.g. TPE), path to your model training code, whether to use GPUs, etc.

## Setting up your Workflow Template

1. First, make changes to your training code to grab the parameters from NNI and report results back to NNI. Highlighted below are all the changes we had to make to [MNIST example code](https://github.com/onepanelio/templates/tree/master/workflows/hyperparameter-tuning/mnist/main.py) to support hyperparameter tuning. The `...` indicate code that was removed for brevity.

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

2. Go to **Workflows** > **Workflow Templates** > **Hyperparameter Tuning Example** and click **Clone**.

3. Update the cloned Workflow Template to use your repository and update the paths in `/mnt/src` to match your repository's directory structure. The `...` indicate sections that were removed for brevity.
    ```yaml {6,26,31,40}
    entrypoint: main
    arguments:
        parameters:
        - name: source
          # Path to your training code repository
          value: https://github.com/onepanelio/templates
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
          # Path to where your tuner configuration (config.yaml) will be written - same directory as your training code
          path: /mnt/data/src/<path-to-training-code-directory>/config.yaml
          raw:
            data: '{{workflow.parameters.config}}'
        - name: search-space
          # Path to where your hyperparameter search space (search_space.json) will be written - same directory as your training code
          path: /mnt/data/src/<path-to-training-code-directory>/search_space.json
          raw:
            data: '{{workflow.parameters.search-space}}'
    ...
      container:
        image: onepanel/dl:0.17.0
        args:
            - --config
            # Path to config.yaml file that is written above
            - /mnt/data/src/<path-to-training-code-directory>/config.yaml
    ...
    ```

4. Update the Workflow Template title and click **Save**.
