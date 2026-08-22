/**
 * Groups a rendered guide's `##` sections into <details> blocks.
 *
 * Rules that decide whether this helps or annoys:
 *   1. A deep link must land open. Arriving from search or the contents rail on
 *      #cancelling-and-refunds has to show that section, not a closed heading.
 *   2. Find-in-page: Chromium expands a closed <details> natively when the text
 *      inside matches, so Ctrl+F works there without help. Firefox and Safari do
 *      not, which is the accepted cost of any accordion — and why the first
 *      section is always open and the headings always stay visible.
 *   3. Short guides are left alone. Below six sections the machinery costs more
 *      than it saves.
 */

const MIN_SECTIONS = 6;
const MARKER = 'data-collapsed';

export function collapseSections(root: HTMLElement, hash: string): void {
  const article = root.querySelector<HTMLElement>('.markdown') ?? root;
  if (article.getAttribute(MARKER) === 'done') {
    if (hash) openTarget(article, hash);
    return;
  }

  const headings = Array.from(article.querySelectorAll<HTMLHeadingElement>(':scope > h2'));
  if (headings.length < MIN_SECTIONS) {
    article.setAttribute(MARKER, 'skipped');
    return;
  }

  headings.forEach((heading, index) => {
    const details = document.createElement('details');
    details.className = 'guideSection';

    const summary = document.createElement('summary');
    summary.className = 'guideSectionSummary';
    // Move the heading itself into the summary so the contents rail, which
    // tracks h2 elements, still finds it and still scrolls to it.
    heading.replaceWith(details);
    summary.appendChild(heading);
    details.appendChild(summary);

    const body = document.createElement('div');
    body.className = 'guideSectionBody';

    // Everything up to the next h2 belongs to this section.
    let node = details.nextSibling;
    while (node) {
      const next = node.nextSibling;
      if (node.nodeType === 1 && (node as HTMLElement).tagName === 'H2') break;
      body.appendChild(node);
      node = next;
    }
    details.appendChild(body);

    // The first section is open so the page never reads as a blank outline.
    if (index === 0) details.open = true;
  });

  article.setAttribute(MARKER, 'done');
  if (hash) openTarget(article, hash);
}

/** Opens the section containing the linked heading, and scrolls to it. */
function openTarget(article: HTMLElement, hash: string): void {
  let target: Element | null = null;
  try {
    target = article.querySelector(hash);
  } catch {
    return; // a hash that is not a valid selector
  }
  if (!target) return;

  const details = target.closest('details');
  if (details && !details.open) details.open = true;
  // Guarded: opening the right section matters, scrolling to it is a bonus.
  target.scrollIntoView?.({block: 'start'});
}
