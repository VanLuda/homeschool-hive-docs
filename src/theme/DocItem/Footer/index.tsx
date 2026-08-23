import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import WasThisHelpful from '@site/src/components/WasThisHelpful';

type Props = WrapperProps<typeof FooterType>;

/**
 * Wraps rather than ejects, so tags, the edit link and the prev/next pager keep
 * tracking upstream. We only append.
 */
export default function FooterWrapper(props: Props): React.ReactElement {
  return (
    <>
      <Footer {...props} />
      <WasThisHelpful />
    </>
  );
}
