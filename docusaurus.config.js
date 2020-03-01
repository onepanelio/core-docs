module.exports = {
  title: 'Onepanel Core',
  tagline: 'Build highly scalable, distributed and reproducible ML workflows on Kubernetes',
  url: 'https://onepanelio.github.io',
  baseUrl: '/core-docs/',
  favicon: 'img/favicon.png',
  organizationName: 'onepanelio', // Usually your GitHub org/user name.
  projectName: 'core-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Onepanel logo',
        src: 'img/onepanel-logo-white.svg',
      },
      links: [
        {to: 'docs/getting-started/core-concepts', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
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
