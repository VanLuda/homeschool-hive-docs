import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function updateBodyClass() {
  if (!ExecutionEnvironment.canUseDOM) return;

  const isHomepage = window.location.pathname === '/';

  if (isHomepage) {
    document.body.classList.add('is-homepage');
    document.body.classList.remove('is-not-homepage');
  } else {
    document.body.classList.add('is-not-homepage');
    document.body.classList.remove('is-homepage');
  }
}

// Run on initial load
if (ExecutionEnvironment.canUseDOM) {
  updateBodyClass();
}

// Export for route changes
export function onRouteDidUpdate() {
  updateBodyClass();
}
