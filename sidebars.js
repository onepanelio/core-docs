/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  gettingStarted: [
    {
      type: 'doc',
      id: 'getting-started/quickstart',
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        // 'getting-started/concepts/overview',
        'getting-started/concepts/namespaces',
        'getting-started/concepts/workspaces',
        'getting-started/concepts/workflows',
        'getting-started/concepts/labels',
        'getting-started/concepts/environment-variables',
        'getting-started/concepts/sdk',
      ]
    },
    {
      type: 'doc',
      id: 'getting-started/contributing',
    },
  ],
  deployment: [
    {
      type: 'doc',
      id: 'deployment/overview',
    },
    { 
      type: 'category',
      label: 'Configuration',
      collapsed: false,
      items: [
        'deployment/configuration/cli',
        'deployment/configuration/files',
        'deployment/configuration/tls',
        'deployment/configuration/dns',
        'deployment/configuration/remote-microk8s',
      ]
    },
    {
      type: 'category',
      label: 'Management',
      collapsed: false,
      items: [
        'deployment/components/add',
        'deployment/components/upgrade',
        'deployment/components/nodes',
      ]    
    },
    { 
      type: 'doc',
      id: 'deployment/cluster/cluster',
    },
    { 
      type: 'doc',
      id: 'deployment/troubleshooting/overview'
    }
  ],
  reference: [
    {
      type: 'doc',
      id: 'reference/overview',
    },
    { 
      type: 'category',
      label: 'Workspaces',
      collapsed: false,
      items: [
        'reference/workspaces/launching',
        'reference/workspaces/pause-and-resume',
        'reference/workspaces/upgrade',
        'reference/workspaces/delete',
        'reference/workspaces/templates',
      ]
    },
    { 
      type: 'category',
      label: 'Sidecars',
      collapsed: false,
      items: [
        'reference/sidecars/filesyncer',
      ]
    },
    { 
      type: 'category',
      label: 'Workflows',
      collapsed: false,
      items: [
        'reference/workflows/execute',
        'reference/workflows/templates',
        'reference/workflows/artifacts',
        'reference/workflows/create',
        'reference/workflows/metrics',
        'reference/workflows/tensorboard',
        'reference/workflows/hyperparameter-tuning',
        'reference/workflows/troubleshooting',
      ]
    },
    { 
      type: 'category',
      label: 'Built-in and custom Workflows',
      collapsed: false,
      items: [
        'reference/workflows/training',
        'reference/workflows/data-augmentation',
      ]
    },
    { 
      type: 'category',
      label: 'CVAT Workspace',
      collapsed: false,
      items: [
        'reference/cvat/quickstart',
        'reference/cvat/built-in-models',
        'reference/cvat/automatic-annotation',
        'reference/cvat/custom-models',
      ]
    },
    { 
      type: 'category',
      label: 'JupyterLab Workspace',
      collapsed: false,
      items: [
        'reference/jupyterlab/overview',
        'reference/jupyterlab/git',
        'reference/jupyterlab/tensorboard',
        'reference/jupyterlab/debugging',
        'reference/jupyterlab/language-server',
      ]
    },
    { 
      type: 'category',
      label: 'SDKs',
      collapsed: false,
      items: [
        'reference/sdks/python',
      ]
    },
  ]
};
