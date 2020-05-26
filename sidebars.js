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
      type: 'category',
      label: 'Use Cases',
      items: [
        {
          type: 'category',
          label: 'Computer Vision',
          items: [
            {
              type: 'category',
              label: 'CVAT',
              items: [
                {
                  type: 'doc',
                  id: 'getting-started/use-cases/computervision/annotation/cvat/cvat_quick_guide'
                },
                {
                  type: 'doc',
                  id: 'getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation'
                },
                {
                  type: 'doc',
                  id: 'getting-started/use-cases/computervision/annotation/cvat/cvat_annotation_model'
                }
              ]
            }
          ]
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
      ]
    },
    { 
      type: 'category',
      label: 'Configuration',
      items: [
        'deployment/configuration/cli',
        'deployment/configuration/files',
        'deployment/configuration/tls',
      ]
    }
  ]
};
