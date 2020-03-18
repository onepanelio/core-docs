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
      id: 'getting-started/overview',
    },
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
      label: 'Configuration',
      items: [
        'deployment/configuration/cli',
        'deployment/configuration/params',
        'deployment/configuration/tls',
      ]
    },
    { 
      type: 'category',
      label: 'Deploy on public cloud',
      items: [
        'deployment/public/aks',
        'deployment/public/eks',
        'deployment/public/gke',
      ]
    },
    { 
      type: 'category',
      label: 'Deploy on single node',
      items: [
        'deployment/single-node/microk8s',
        'deployment/single-node/minikube',
      ]
    }
  ]
};
