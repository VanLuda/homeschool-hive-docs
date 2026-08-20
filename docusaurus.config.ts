import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Famlo Help Center',
  tagline: 'Find answers, learn features, and get the most out of Famlo',
  favicon: 'https://assets.famlo.co/ips/favicon/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://help.famlo.co',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'VanLuda', // Usually your GitHub org/user name.
  projectName: 'famlo-help-center', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  clientModules: [
    './src/clientModules/routeListener.ts',
  ],

  markdown: {
    mdx1Compat: {
      comments: true,
    },
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://assets.famlo.co',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'dns-prefetch',
        href: 'https://assets.famlo.co',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
         },
        blog: {
          routeBasePath: 'changelog',
          path: './blog',
          showReadingTime: false,
          blogTitle: 'Changelog',
          blogDescription: 'Release history for Famlo',
          blogSidebarTitle: '📦 Release History',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.map((item) => {
              // Higher priority for main docs
              if (item.url.includes('/docs/intro')) {
                item.priority = 1.0;
              } else if (item.url.includes('/docs/getting-started')) {
                item.priority = 0.9;
              } else if (item.url.includes('/docs/')) {
                item.priority = 0.8;
              } else if (item.url === 'https://help.famlo.co/') {
                item.priority = 1.0;
              }
              return item;
            });
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Famlo Logo',
        src: 'https://assets.famlo.co/ips/Famlo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'All Guides',
        },
        {
          label: 'Parents',
          to: '/docs/category/for-parents',
          position: 'left',
        },
        {
          label: 'Group Leaders',
          to: '/docs/category/for-group-leaders',
          position: 'left',
        },
        {
          label: 'Getting Started',
          to: '/docs/category/getting-started',
          position: 'left',
        },
        {
          to: '/changelog',
          label: 'Changelog',
          position: 'right',
          className: 'homepage-only',
        },
        {
          href: 'https://famlo.co/login',
          label: 'Login',
          position: 'right',
          className: 'no-external-icon homepage-only',
        },
        {
          href: 'https://famlo.co/register',
          label: 'Sign Up Free',
          position: 'right',
          className: 'button no-external-icon mr-4 homepage-only',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'For Parents',
              to: '/docs/category/for-parents',
            },
            {
              label: 'For Group Leaders',
              to: '/docs/category/for-group-leaders',
            },
            {
              label: 'Account & Settings',
              to: '/docs/category/account--settings',
            },
          ],
        },
        {
          title: 'Famlo',
          items: [
            {
              label: 'Go to App',
              href: 'https://famlo.co',
            },
            {
              label: 'Browse activities',
              href: 'https://famlo.co/activities',
            },
            {
              label: 'Browse organizations',
              href: 'https://famlo.co/places',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Changelog',
              to: '/changelog',
            },
            {
              label: 'Contact Support',
              href: 'mailto:support@famlo.co',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Hive Network, LLC. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
