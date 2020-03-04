/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    'About': ['about/onepanel', 'about/use-cases'],
    'Getting started': ['getting-started/overview', 'getting-started/installation', 'getting-started/contributing'],
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
};
