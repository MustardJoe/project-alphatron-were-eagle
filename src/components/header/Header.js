import React from 'react';
import randomHeaderMsg from '../../services/randomHeaderMsg';
import styles from './header.css';

function Header() {
  let topMsg = randomHeaderMsg();

  return (
    <div className={styles.wayback}>
      <header className={styles.header}>
        <a href="./">
          <h1>
              Hi! <span className={styles.difFont}>I&apos;m Jon Forney.</span> {topMsg}
          </h1>
        </a>
      </header>
    </div>
  );
}

export default Header;
