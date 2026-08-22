import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

/**
 * Analytics for the help center, behind the same consent gate the rest of the
 * product honours.
 *
 * Two trackers, one gate:
 *   - GA4 for acquisition. The application runs it only on its public marketing
 *     and SEO surface; the help center is that surface, and the how-to pages
 *     exist to be found in search.
 *   - PostHog for product analytics, which is where the "was this helpful?"
 *     answers land.
 *
 * These are loaded by hand rather than through @docusaurus/plugin-google-gtag
 * on purpose. That plugin injects its tag into <head> unconditionally, which
 * would fire before any consent check could run and would make the help center
 * the one surface that ignores a preference the rest of the product respects.
 */

const GA4_ID = 'G-R200XRR15S';
// Production project 184264. This is a project token: public and write-only.
// It ships in page source on every request by design, and nothing can be read
// out of PostHog with it. Do not put a personal key (phx_/phs_) here — those
// can read data.
const POSTHOG_KEY = 'phc_9shqNIJ2WHvA5UgXLmf8JaQ0JeKkmbbUlpVnCUpse9h';
const POSTHOG_HOST = 'https://us.i.posthog.com';

let started = false;

/**
 * Mirrors the application's three-state consent model: true = objected,
 * false = affirmatively allowed, undefined = no opinion.
 *
 * `famlo_consent` is set on the main site. It is only readable here if it is
 * scoped to `.famlo.co`; if it is host-only, this returns undefined and the
 * signal checks below still apply. That is the safe direction — an objection we
 * cannot see falls through to Global Privacy Control, which a person who
 * objects is very likely to be sending anyway.
 */
function hasObjected(): boolean {
  const nav = navigator as Navigator & {globalPrivacyControl?: boolean};

  // Global Privacy Control is a legally recognised objection in several US
  // states. Honour it before anything else.
  if (nav.globalPrivacyControl === true) return true;
  if (nav.doNotTrack === '1') return true;

  const match = document.cookie.match(/(?:^|;\s*)famlo_consent=([^;]*)/);
  if (!match) return false;

  const value = decodeURIComponent(match[1]).toLowerCase();
  return value === 'denied' || value === 'rejected' || value === 'false' || value === '0';
}

function loadGa4() {
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(s);

  const w = window as unknown as {dataLayer: unknown[]; gtag: (...a: unknown[]) => void};
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag('js', new Date());
  w.gtag('config', GA4_ID, {send_page_view: true});
}

function loadPostHog() {
  const s = document.createElement('script');
  s.async = true;
  s.src = `${POSTHOG_HOST}/static/array.js`;
  s.onload = () => {
    const w = window as unknown as {posthog?: {init: (k: string, o: unknown) => void}};
    w.posthog?.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: true,
      // Every event carries its source, matching how the application already
      // separates traffic inside this project. Without it, help center
      // pageviews would silently inflate the product's web analytics.
      loaded: (ph: {register: (p: Record<string, unknown>) => void}) =>
        ph.register({app: 'help-center'}),
      // The help center is anonymous. Nothing here should build a profile.
      persistence: 'memory',
      autocapture: false,
    });
  };
  document.head.appendChild(s);
}

function start() {
  if (started || !ExecutionEnvironment.canUseDOM) return;
  if (window.location.hostname === 'localhost') return;
  if (hasObjected()) return;
  started = true;
  loadGa4();
  loadPostHog();
}

/** Records a helpfulness answer. No-ops when consent was withheld. */
export function captureHelpful(slug: string, helpful: boolean, comment?: string) {
  if (!started) return;
  const w = window as unknown as {
    posthog?: {capture: (e: string, p: Record<string, unknown>) => void};
    gtag?: (...a: unknown[]) => void;
  };
  const props: Record<string, unknown> = {slug, helpful};
  if (comment) props.comment = comment;
  w.posthog?.capture('help_feedback', props);
  w.gtag?.('event', 'help_feedback', {page_slug: slug, helpful});
}

if (ExecutionEnvironment.canUseDOM) start();

export function onRouteDidUpdate() {
  // A route change may follow a consent decision made on the main site in
  // another tab, so re-check rather than assuming the first answer stands.
  start();
  const w = window as unknown as {gtag?: (...a: unknown[]) => void};
  if (started) w.gtag?.('event', 'page_view', {page_path: window.location.pathname});
}
