import React from 'react';
import Link from 'next/link';

// Styles
import Styles from './Navigation.module.scss';

// Component
const Navigation = ({ children }) => {
  return (
    <span className={Styles['navigation-black']}>
      {/* Static Links */}
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <Link href='/about-us'>
        <a>About Us</a>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>

      {/* Dynamic Links */}
      {children}
    </span>
  );
};

// Track Re-Renders
Navigation.whyDidYouRender = true;

// Export Pure Component
export default React.memo(Navigation);
