import React from 'react';
import styles from './footer.css';

function Footer() {
  return (
    <section className={styles.footer}>
      <div>
              You&apos;ve made it to the bottom of the page! Congratulations!
      </div>
      <div>
              © Jon Forney 2019
      </div>
    </section>
  );
}

export default Footer;
