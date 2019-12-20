import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.css';

function Header({ currentHeadMsg }) {
  let compMsg = currentHeadMsg;

  return (
    <div className={styles.wayback}>
      <header className={styles.header}>
        <a href="./">
          <h1>
              Hi! <span className={styles.difFont}>I&apos;m Jon Forney.</span> {compMsg}
          </h1>
        </a>
      </header>
    </div>
  );
}

Header.propTypes = {
  currentHeadMsg: PropTypes.string.isRequired,
};

export default Header;
