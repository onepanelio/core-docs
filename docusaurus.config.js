module.exports = {
  title: 'Onepanel CE',
  tagline: 'Build highly scalable, distributed and reproducible computer vision workflows on any cloud or on-premises.',
  url: 'https://docs.onepanel.ai',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'onepanelio', // Usually your GitHub org/user name.
  projectName: 'core-docs', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: '',
      logo: {
        alt: 'Onepanel logo',
        src: 'img/onepanel-logo-white.svg',
      },
      links: [
        {to: 'docs/getting-started/quickstart', label: 'Getting Started', position: 'left'},
        {to: 'docs/deployment/overview', label: 'Deploy and Manage', position: 'left'},
        {to: 'docs/api-sdk/overview', label: 'APIs and SDKs', position: 'left'},
        // {to: 'blog', label: 'Changelog', position: 'left'},
        {
          href: 'https://github.com/onepanelio/core',
          label: 'GitHub',
          position: 'right',
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
