module.exports = {
  title: 'Onepanel CE',
  tagline: 'Build highly scalable, distributed and reproducible computer vision workflows on any cloud or on-premises.',
  url: 'https://docs.onepanel.ai',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'onepanelio', // Usually your GitHub org/user name.
  projectName: 'core-docs', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    sidebarCollapsible: false,
    navbar: {
      title: '',
      logo: {
        alt: 'Onepanel logo',
        src: 'img/onepanel-logo-blue-white.png',
      },
      links: [
        {to: 'docs/getting-started/quickstart', label: 'Getting Started', position: 'left'},
        {to: 'docs/deployment/overview', label: 'Deploy and Manage', position: 'left'},
        {to: 'docs/reference/overview', label: 'Reference', position: 'left'},
        {to: 'docs/api-sdk/overview', label: 'APIs and SDKs', position: 'left'},
        // {to: 'blog', label: 'Changelog', position: 'left'},
        {
          href: 'https://join.slack.com/t/onepanel-ce/shared_invite/zt-eyjnwec0-nLaHhjif9Y~gA05KuX6AUg',
          position: 'right',
          className: 'header-icon-link header-slack-link',
        },
        {
          href: 'https://github.com/onepanelio/core',
          position: 'right',
          className: 'header-icon-link header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Onepanel, Inc.`,
    },
    algolia: {
      apiKey: '882b068ae95b9413f0e9ef625db7964e',
      indexName: 'onepanelio',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    googleAnalytics: {
      trackingID: 'UA-106005416-5',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/onepanelio/core-docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
