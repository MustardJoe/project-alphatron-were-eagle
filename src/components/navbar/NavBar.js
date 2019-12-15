import React from 'react';
import {
  Link
} from 'react-router-dom';
import styles from './navbar.css';

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/projects" className={styles.link}>Projects</Link>
    </nav>
  );
}

export default NavBar;
