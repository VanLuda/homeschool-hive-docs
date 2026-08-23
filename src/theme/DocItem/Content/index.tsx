import React, {useEffect, useRef} from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type {WrapperProps} from '@docusaurus/types';
import {useLocation} from '@docusaurus/router';
import {collapseSections} from '@site/src/theme/DocItem/Content/collapse';

type Props = WrapperProps<typeof ContentType>;

/**
 * Turns each `##` section of a long guide into a collapsible block.
 *
 * Consolidating 63 short pages into 28 task-complete guides made every guide
 * long — a median of eight sections. Collapsing them is what stops that reading
 * as a wall of text; without it, the consolidation makes the docs worse.
 *
 * Done as a progressive enhancement rather than by writing <details> into the
 * markdown, for three reasons: the content stays in one flow for search and for
 * anyone with JavaScript off, the right-hand contents rail keeps working because
 * the headings are still headings, and 28 files did not have to be restructured
 * around a presentation choice.
 */
export default function ContentWrapper(props: Props): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const {pathname, hash} = useLocation();

  useEffect(() => {
    if (ref.current) collapseSections(ref.current, hash);
  }, [pathname, hash]);

  return (
    <div ref={ref}>
      <Content {...props} />
    </div>
  );
}
