import React from 'react';
import {
  Link
} from 'react-router-dom';
import styles from './navbar.css';

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.linkContainer}>

        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/projects" className={styles.link}>Projects</Link>
        <Link to="/links" className={styles.link}>Links/Refs</Link>
      </div>
    </nav>
  );
}

export default NavBar;
