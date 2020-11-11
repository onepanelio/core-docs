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
        'getting-started/concepts/environment-variables',
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
    // { 
    //   type: 'category',
    //   label: 'Deployment',
    //   collapsed: false,
    //   items: [
    //     'deployment/public/aks',
    //     'deployment/public/eks',
    //     'deployment/public/gke',
    //     // 'deployment/single-node/microk8s',
    //     // 'deployment/single-node/minikube',
    //   ]
    // },
    { 
      type: 'category',
      label: 'Configuration',
      collapsed: false,
      items: [
        'deployment/configuration/cli',
        'deployment/configuration/files',
        'deployment/configuration/tls',
      ]
    },
    {
      type: 'category',
      label: 'Managing components',
      collapsed: false,
      items: [
        'deployment/components/add',
        'deployment/components/upgrade',
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
      label: 'Workflows',
      collapsed: false,
      items: [
        'reference/workflows/execute',
        'reference/workflows/templates',
        'reference/workflows/metrics',
        'reference/workflows/create',
      ]
    },
    { 
      type: 'category',
      label: 'CVAT Workspace',
      collapsed: false,
      items: [
        'getting-started/use-cases/computervision/annotation/cvat/cvat_quick_guide',
        'getting-started/use-cases/computervision/annotation/cvat/cvat_annotation_model',
        'getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation',
        'getting-started/use-cases/computervision/annotation/cvat/adding_custom_model',
        'getting-started/use-cases/computervision/annotation/cvat/using_cloud_storage',
        'getting-started/use-cases/computervision/annotation/cvat/cvat_customizing_workspace_template',
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
    // {
    //   type: 'category',
    //   label: 'Services',
    //   items: [
    //     'reference/services/overview',
    //     'reference/services/modeldb'
    //   ]
    // },
  ]
};
