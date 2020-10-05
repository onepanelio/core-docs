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
      items: [
        {
          type: 'doc',
          id: 'getting-started/concepts/namespaces'
        },
        {
          type: 'doc',
          id: 'getting-started/concepts/workspaces'
        },
        {
          type: 'doc',
          id: 'getting-started/concepts/workflows'
        },
        {
          type: 'doc',
          id: 'getting-started/concepts/environment-variables'
        }
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
      label: 'Deployment',
      items: [
        'deployment/public/aks',
        'deployment/public/eks',
        'deployment/public/gke',
        'deployment/single-node/microk8s',
        'deployment/single-node/minikube',
      ]
    },
    { 
      type: 'category',
      label: 'Configuration',
      items: [
        'deployment/configuration/cli',
        'deployment/configuration/files',
        'deployment/configuration/tls',
        'deployment/configuration/dnsmasq',
      ]
    },
    { 
      type: 'doc',
      id: 'deployment/upgrade/overview'
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
      items: [
        'reference/workspaces/templates',
        'reference/workspaces/launching',
        'reference/workspaces/pause-and-resume',
        'reference/workspaces/upgrade',
        'reference/workspaces/delete',
      ]
    },
    { 
      type: 'category',
      label: 'Workflows',
      items: [
        'reference/workflows/templates',
        'reference/workflows/create',
        'reference/workflows/execute'
      ]
    },
    { 
      type: 'category',
      label: 'Auto annotation with CVAT',
      items: [
        'getting-started/use-cases/computervision/annotation/cvat/cvat_quick_guide',
        'getting-started/use-cases/computervision/annotation/cvat/cvat_annotation_model',
        'getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation',
        'getting-started/use-cases/computervision/annotation/cvat/adding_custom_model',
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