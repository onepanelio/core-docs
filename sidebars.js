/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  gettingStarted: {
    'About': ['about/onepanel', 'about/use-cases'],
    'Getting started': [
      'getting-started/overview',
      'getting-started/contributing'
    ],
    'API reference': [
      {
        type: 'link',
        label: 'API documentation',
        href: 'https://onepanelio.github.io/core-api-docs/',
      },
      {
        type: 'link',
        label: 'Python SDK',
        href: 'https://github.com/onepanelio/python-sdk/tree/v1.0.0-beta1#onepanelcoreapi',
      }
    ],
  },
  deployment: [
    {
      type: 'doc',
      id: 'deployment/overview',
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
        'deployment/single-node/linux',
        'deployment/single-node/macos',
        'deployment/single-node/windows',
      ]
    }
  ],
  integration: {

  }
};
