import * as React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.css';

const Header = ({ pageTitle = '' }) => {

  return (
    <header className={styles.main}>
      <div className={styles.col}>
        <Link to="/">
          <h1 className={styles.title}>gatsblog.evanmoncuso.com</h1>
        </Link>
        <h2 className={styles.subtitle}>{pageTitle}</h2>
      </div>

      <nav className={styles.row}>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/why">Why?</Link>
      </nav>
    </header>
  );
}

export default Header;