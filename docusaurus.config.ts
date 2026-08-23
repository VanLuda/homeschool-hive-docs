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
    './src/clientModules/analytics.ts',
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
          showReadingTime: true,
          blogTitle: "What's New",
          blogDescription: 'Feature announcements and product news from Famlo',
          blogSidebarTitle: 'All announcements',
          blogSidebarCount: 'ALL',
          // Long-form posts, few of them: one scrolling page rather than
          // pagination. This also permanently frees /changelog/page/* so the
          // archive's own pagination can never collide with it.
          postsPerPage: 'ALL',
          // Frees /changelog/archive for the redirect to the release archive.
          archiveBasePath: null,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: "Famlo — What's New",
            description: 'Feature announcements from Famlo',
          },
          // These three are the enforcement mechanism for the new format: a
          // typo'd tag, an undefined author, or a missing truncate marker fails
          // the build rather than shipping a broken feed card.
          onInlineTags: 'throw',
          onInlineAuthors: 'throw',
          onUntruncatedBlogPosts: 'throw',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          // '/tags/**' never matched /changelog/tags/** — it needs the wildcard prefix.
          ignorePatterns: ['**/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.map((item) => {
              // /docs/getting-started no longer exists — it became
              // /docs/families/getting-started in the 2026-08 restructure.
              // how-to/ carries the search traffic, so it ranks with intro.
              if (item.url.includes('/docs/intro')) {
                item.priority = 1.0;
              } else if (item.url.includes('/docs/how-to/')) {
                item.priority = 0.9;
              } else if (item.url.includes('/docs/families/getting-started')) {
                item.priority = 0.9;
              } else if (item.url.includes('/changelog/releases/')) {
                // The frozen archive: real, indexable, but not what anyone
                // should land on from a search.
                item.priority = 0.3;
                item.changefreq = 'yearly';
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

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        // The 89 version-numbered release notes, June 2025 to March 2026.
        // Frozen: new work is announced in the long-form feed at /changelog.
        id: 'releases',
        routeBasePath: 'changelog/releases',
        path: './releases',
        blogTitle: 'Release notes archive',
        blogDescription:
          'Version-by-version release notes for Famlo, June 2025 through March 2026.',
        blogSidebarTitle: 'Release history',
        blogSidebarCount: 'ALL',
        postsPerPage: 20,
        showReadingTime: false,
        archiveBasePath: null,
        feedOptions: {type: null},
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Pages removed in the 2026-08 audit because they documented features
        // that do not exist. Each points at the nearest page that answers the
        // question the reader actually had — never a generic landing page.
        //
        // NOTE: GitHub Pages cannot serve real 301s. This plugin emits
        // meta-refresh stubs, which Google treats as soft redirects and
        // consolidates more slowly. Keep the list short for that reason.
        // Every archived post moved from /changelog/<slug> to
        // /changelog/releases/<slug>. Generated rather than hand-listed.
        createRedirects(existingPath) {
          const prefix = '/changelog/releases/';
          if (!existingPath.startsWith(prefix)) return undefined;
          const rest = existingPath.slice(prefix.length);
          // Post permalinks only. The main instance owns /changelog/tags and
          // /changelog/authors, so redirecting onto them would collide.
          if (rest.includes('/')) return undefined;
          if (['tags', 'page', 'authors'].includes(rest)) return undefined;
          return [`/changelog/${rest}`];
        },
        redirects: [
          {from: '/changelog/archive', to: '/changelog/releases'},
          {from: '/docs/parents/invite-flow', to: '/docs/families/organizations'},
          {from: '/docs/parents/scholarship-invoices', to: '/docs/families/payments-and-refunds'},
          {from: '/docs/parents/social-feed', to: '/docs/families/organizations'},
          {from: '/docs/group-leaders/custom-roles', to: '/docs/organizations/members-and-roles'},
          {from: '/docs/group-leaders/group-reports', to: '/docs/organizations/insights'},
          {from: '/docs/group-leaders/import-events', to: '/docs/organizations/activities'},
          {from: '/docs/account/blocked-users', to: '/docs/families/organizations'},
          {from: '/docs/how-to/membership-tiers', to: '/docs/organizations/membership-dues'},
          {from: '/docs/account/help-feedback', to: '/docs/account/support'},
          {from: '/docs/getting-started/create-account', to: '/docs/families/getting-started'},
          {from: '/docs/getting-started/complete-profile', to: '/docs/families/getting-started'},
          {from: '/docs/getting-started/notifications', to: '/docs/account/notifications'},
          {from: '/docs/parents/find-events', to: '/docs/families/finding-activities'},
          {from: '/docs/parents/find-groups', to: '/docs/families/organizations'},
          {from: '/docs/parents/group-membership', to: '/docs/families/organizations'},
          {from: '/docs/parents/rsvp-events', to: '/docs/families/registering'},
          {from: '/docs/parents/event-checkout', to: '/docs/families/registering'},
          {from: '/docs/parents/payments', to: '/docs/families/payments-and-refunds'},
          {from: '/docs/parents/calendar', to: '/docs/families/calendar'},
          {from: '/docs/parents/watchlist', to: '/docs/families/saved-and-alerts'},
          {from: '/docs/parents/location-alerts', to: '/docs/families/saved-and-alerts'},
          {from: '/docs/account/payment-methods', to: '/docs/families/payments-and-refunds'},
          {from: '/docs/account/subscriptions', to: '/docs/families/memberships'},
          {from: '/docs/account/family-members', to: '/docs/families/your-family'},
          {from: '/docs/account/profile-settings', to: '/docs/account/login-and-security'},
          {from: '/docs/account/support-tickets', to: '/docs/account/support'},
          {from: '/docs/account/delete-account', to: '/docs/account/closing-your-account'},
          {from: '/docs/group-leaders/create-group', to: '/docs/organizations/listing-your-organization'},
          {from: '/docs/group-leaders/group-settings', to: '/docs/organizations/settings'},
          {from: '/docs/group-leaders/create-events', to: '/docs/organizations/activities'},
          {from: '/docs/group-leaders/event-series', to: '/docs/organizations/activities'},
          {from: '/docs/group-leaders/manage-events', to: '/docs/organizations/activities'},
          {from: '/docs/group-leaders/tickets-pricing', to: '/docs/organizations/tickets-and-pricing'},
          {from: '/docs/group-leaders/manage-members', to: '/docs/organizations/members-and-roles'},
          {from: '/docs/group-leaders/announcements', to: '/docs/organizations/members-and-roles'},
          {from: '/docs/group-leaders/membership-fees', to: '/docs/organizations/membership-dues'},
          {from: '/docs/group-leaders/discount-codes', to: '/docs/organizations/promo-codes'},
          {from: '/docs/group-leaders/check-in', to: '/docs/organizations/attendance'},
          {from: '/docs/group-leaders/payments-stripe', to: '/docs/organizations/getting-paid'},
          {from: '/docs/group-leaders/scholarship-invoices', to: '/docs/organizations/scholarships'},
          {from: '/docs/group-leaders/analytics', to: '/docs/organizations/insights'},
          {from: '/docs/group-leaders/delete-group', to: '/docs/organizations/closing-your-listing'},
        ],
      },
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
        // Announcements are searchable; the 89 archived release notes are not.
        // blogRouteBasePath is matched as a route prefix, so 'changelog' alone
        // would swallow /changelog/releases/* — hence the exclusion.
        indexBlog: true,
        blogRouteBasePath: ['changelog'],
        blogDir: ['blog'],
        ignoreFiles: [/^changelog\/releases(\/|$)/],
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
          label: 'Families',
          to: '/docs/category/for-families',
          position: 'left',
        },
        {
          label: 'Organizations',
          to: '/docs/category/for-organizations',
          position: 'left',
        },
        {
          to: '/changelog',
          label: "What's New",
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
              label: 'For families',
              to: '/docs/category/for-families',
            },
            {
              label: 'For organizations',
              to: '/docs/category/for-organizations',
            },
            {
              label: 'Account',
              to: '/docs/category/account',
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
              label: "What's New",
              to: '/changelog',
            },
            {
              label: 'Release notes archive',
              to: '/changelog/releases',
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
