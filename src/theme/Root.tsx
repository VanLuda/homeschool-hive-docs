import React from 'react';
import Head from '@docusaurus/Head';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Homeschool Hive',
  url: 'https://homeschoolhive.co',
  logo: 'https://assets.homeschoolhive.co/ips/icon.svg',
  description: 'The all-in-one platform for homeschool groups. Organize events, manage memberships, and build community.',
  sameAs: [
    'https://www.facebook.com/homeschoolhive.co',
    'https://www.linkedin.com/company/homeschoolhive/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@homeschoolhive.co',
    contactType: 'customer support',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Homeschool Hive Knowledge Base',
  url: 'https://kb.homeschoolhive.com',
  description: 'Find answers, learn features, and get the most out of Homeschool Hive',
  publisher: {
    '@type': 'Organization',
    name: 'Homeschool Hive',
    url: 'https://homeschoolhive.co',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://kb.homeschoolhive.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

interface RootProps {
  children: React.ReactNode;
}

export default function Root({ children }: RootProps): JSX.Element {
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
