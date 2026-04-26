import React from 'react';
import Head from '@docusaurus/Head';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Famlo',
  url: 'https://famlo.co',
  logo: 'https://assets.famlo.co/ips/Famlo.svg',
  description: 'The all-in-one platform for homeschool groups. Organize events, manage memberships, and build community.',
  sameAs: [
    'https://www.facebook.com/famlo',
    'https://www.linkedin.com/company/famlo-co/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@famlo.co',
    contactType: 'customer support',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Famlo Help Center',
  url: 'https://help.famlo.co',
  description: 'Find answers, learn features, and get the most out of Famlo',
  publisher: {
    '@type': 'Organization',
    name: 'Famlo',
    url: 'https://famlo.co',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://help.famlo.co/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

interface RootProps {
  children: React.ReactNode;
}

export default function Root({ children }: RootProps): React.JSX.Element {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Head>
      {children}
    </>
  );
}
