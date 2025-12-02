import React from 'react';
import {useLocation} from '@docusaurus/router';
import SearchBar from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchBar';

export default function SearchBarWrapper(props: any): JSX.Element | null {
  const location = useLocation();

  // Hide search bar on homepage
  if (location.pathname === '/') {
    return null;
  }

  return <SearchBar {...props} />;
}
