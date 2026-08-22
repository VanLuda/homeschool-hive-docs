import React, {useState} from 'react';
import {useLocation} from '@docusaurus/router';
import {captureHelpful} from '@site/src/clientModules/analytics';
import styles from './styles.module.css';

/**
 * "Was this helpful?" — an event, not a database write, which is why it works
 * on a static site.
 *
 * A bare thumbs-down is close to useless: it tells you a page failed without
 * telling you what the reader wanted. So "No" opens one short text box. That
 * answer is the whole value; the vote is a sort key.
 */
export default function WasThisHelpful(): React.ReactElement {
  const {pathname} = useLocation();
  const [state, setState] = useState<'asking' | 'commenting' | 'done'>('asking');
  const [comment, setComment] = useState('');

  function answer(helpful: boolean) {
    captureHelpful(pathname, helpful);
    setState(helpful ? 'done' : 'commenting');
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const text = comment.trim();
    if (text) captureHelpful(pathname, false, text.slice(0, 500));
    setState('done');
  }

  if (state === 'done') {
    return (
      <aside className={styles.block} aria-live="polite">
        <p className={styles.thanks}>Thank you — this helps us fix the right pages first.</p>
      </aside>
    );
  }

  if (state === 'commenting') {
    return (
      <aside className={styles.block}>
        <form onSubmit={submit} className={styles.form}>
          <label htmlFor="helpful-comment" className={styles.label}>
            What were you looking for?
          </label>
          <textarea
            id="helpful-comment"
            className={styles.textarea}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            maxLength={500}
            placeholder="Tell us what was missing or wrong."
          />
          <p className={styles.hint}>
            Please do not include personal details. If you need help with your own
            account, <a href="/docs/account/support">open a support ticket</a> instead.
          </p>
          <div className={styles.actions}>
            <button type="submit" className={styles.primary}>Send</button>
            <button type="button" className={styles.quiet} onClick={() => setState('done')}>
              Skip
            </button>
          </div>
        </form>
      </aside>
    );
  }

  return (
    <aside className={styles.block}>
      <span className={styles.question}>Was this page helpful?</span>
      <div className={styles.actions}>
        <button type="button" className={styles.vote} onClick={() => answer(true)}>Yes</button>
        <button type="button" className={styles.vote} onClick={() => answer(false)}>No</button>
      </div>
    </aside>
  );
}
