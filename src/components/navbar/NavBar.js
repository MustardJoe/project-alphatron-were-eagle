import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';
import styles from './navbar.css';

function NavBar({ updateHeadMsg }) {
  return (
    <nav className={styles.navBar}>
      <div className={styles.linkContainer}>

        <Link to="/" className={styles.link} onClick={updateHeadMsg}>Home</Link>
        <Link to="/projects" className={styles.link} onClick={updateHeadMsg}>Projects</Link>
        <Link to="/links" className={styles.link} onClick={updateHeadMsg}>Links/Refs</Link>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  updateHeadMsg: PropTypes.func.isRequired,
};

export default NavBar;
