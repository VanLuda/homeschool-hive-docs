import {type ReactNode, useState} from 'react';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      history.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className={styles.hero}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          How can we help you?
        </Heading>
        <p className={styles.heroSubtitle}>
          Search our knowledge base or browse categories below
        </p>
        <form onSubmit={handleSearchSubmit} className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search for articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search"
            />
            <span className={styles.searchShortcut}>
              <kbd>Enter</kbd>
            </span>
          </div>
        </form>
      </div>
    </header>
  );
}

function RoleCards() {
  return (
    <section className={styles.roleSection}>
      <div className="container">
        <div className={styles.roleGrid}>
          <Link to="/docs/category/for-parents" className={styles.roleCard}>
            <div className={styles.roleIconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.roleIcon}>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className={styles.roleContent}>
              <Heading as="h2" className={styles.roleTitle}>I'm a Parent</Heading>
              <p className={styles.roleDescription}>
                Find groups, RSVP for events, manage payments, and track scholarship invoices
              </p>
              <span className={styles.roleLink}>
                Browse parent guides
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.arrowIcon}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </Link>

          <Link to="/docs/category/for-group-leaders" className={styles.roleCard}>
            <div className={styles.roleIconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.roleIcon}>
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className={styles.roleContent}>
              <Heading as="h2" className={styles.roleTitle}>I'm a Group Leader</Heading>
              <p className={styles.roleDescription}>
                Create groups, manage members, host events, and handle payments with Stripe
              </p>
              <span className={styles.roleLink}>
                Browse leader guides
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.arrowIcon}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

type CategoryItem = {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  articles: {title: string; link: string}[];
};

const categories: CategoryItem[] = [
  {
    title: 'Getting Started',
    description: 'Set up your account and get familiar with Homeschool Hive',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    link: '/docs/category/getting-started',
    articles: [
      {title: 'Create an Account', link: '/docs/getting-started/create-account'},
      {title: 'Complete Your Profile', link: '/docs/getting-started/complete-profile'},
      {title: 'Set Up Notifications', link: '/docs/getting-started/notifications'},
    ],
  },
  {
    title: 'Groups & Membership',
    description: 'Find communities and manage your group memberships',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    link: '/docs/parents/find-groups',
    articles: [
      {title: 'Find Groups', link: '/docs/parents/find-groups'},
      {title: 'Group Membership', link: '/docs/parents/group-membership'},
      {title: 'Create a Group', link: '/docs/group-leaders/create-group'},
    ],
  },
  {
    title: 'Events & Activities',
    description: 'Discover events, register, and manage RSVPs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    link: '/docs/parents/find-events',
    articles: [
      {title: 'Find Events', link: '/docs/parents/find-events'},
      {title: 'RSVP for Events', link: '/docs/parents/rsvp-events'},
      {title: 'Create Events', link: '/docs/group-leaders/create-events'},
    ],
  },
  {
    title: 'Payments & Billing',
    description: 'Handle payments, refunds, and financial tracking',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    link: '/docs/parents/payments',
    articles: [
      {title: 'Payment Methods', link: '/docs/parents/payments'},
      {title: 'Stripe Connect Setup', link: '/docs/group-leaders/payments-stripe'},
      {title: 'Membership Fees', link: '/docs/group-leaders/membership-fees'},
    ],
  },
  {
    title: 'Scholarship Invoices',
    description: 'Generate and track invoices for ESA reimbursement',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    link: '/docs/parents/scholarship-invoices',
    articles: [
      {title: 'View Your Invoices', link: '/docs/parents/scholarship-invoices'},
      {title: 'Generate Invoices', link: '/docs/group-leaders/scholarship-invoices'},
    ],
  },
  {
    title: 'Account Settings',
    description: 'Manage your profile, family, and preferences',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    link: '/docs/category/account--settings',
    articles: [
      {title: 'Profile Settings', link: '/docs/account/profile-settings'},
      {title: 'Family Members', link: '/docs/account/family-members'},
      {title: 'Payment Methods', link: '/docs/account/payment-methods'},
    ],
  },
];

function CategoryCard({title, description, icon, link, articles}: CategoryItem) {
  return (
    <div className={styles.categoryCard}>
      <Link to={link} className={styles.categoryHeader}>
        <div className={styles.categoryIcon}>{icon}</div>
        <div>
          <Heading as="h3" className={styles.categoryTitle}>{title}</Heading>
          <p className={styles.categoryDescription}>{description}</p>
        </div>
      </Link>
      <ul className={styles.articleList}>
        {articles.map((article, idx) => (
          <li key={idx}>
            <Link to={article.link} className={styles.articleLink}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={link} className={styles.viewAllLink}>
        View all articles
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.arrowIcon}>
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </Link>
    </div>
  );
}

function CategoriesSection() {
  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Browse by Category
        </Heading>
        <div className={styles.categoriesGrid}>
          {categories.map((category, idx) => (
            <CategoryCard key={idx} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactCard}>
          <div className={styles.contactContent}>
            <Heading as="h2" className={styles.contactTitle}>
              Can't find what you're looking for?
            </Heading>
            <p className={styles.contactDescription}>
              Our support team is here to help. Reach out and we'll get back to you as soon as possible.
            </p>
          </div>
          <a href="mailto:support@homeschoolhive.co" className={styles.contactButton}>
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Help Center"
      description="Find answers, learn features, and get the most out of Homeschool Hive">
      <HeroSection />
      <main>
        <RoleCards />
        <CategoriesSection />
        <ContactSection />
      </main>
    </Layout>
  );
}
