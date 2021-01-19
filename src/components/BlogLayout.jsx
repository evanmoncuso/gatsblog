import * as React from 'react';
import { Link } from 'gatsby';

import Header from './Header';
import SEO from './SEO'

import styles from './bloglayout.module.css';

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <SEO title={pageTitle} />

      <Header pageTitle={pageTitle} />

      <main className={styles.container}>
        <p>
          <Link className={styles.backLink} to="/">back</Link>
        </p>
        {children}
        <p>
          <Link className={styles.backLink} to="/">back</Link>
        </p>
      </main>
    </>
  )
}

export default Layout;