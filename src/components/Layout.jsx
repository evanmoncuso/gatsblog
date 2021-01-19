import * as React from 'react';

import Header from './Header';
import SEO from './SEO'

import styles from './layout.module.css';

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <SEO title={pageTitle} />
      <Header pageTitle={pageTitle} />

      <main className={styles.container}>
        {children}
      </main>
    </>
  )
}

export default Layout;