import React from 'react';
import {useLocation} from '@docusaurus/router';
import NavbarItem from '@theme-original/NavbarItem';
import type NavbarItemType from '@theme/NavbarItem';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof NavbarItemType>;

export default function NavbarItemWrapper(props: Props): JSX.Element | null {
  const location = useLocation();
  const className = (props as any).className || '';

  // Hide homepage-only items on non-homepage pages
  if (className.includes('homepage-only') && location.pathname !== '/') {
    return null;
  }

  return <NavbarItem {...props} />;
}
