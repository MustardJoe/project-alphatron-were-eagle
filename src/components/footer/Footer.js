import React from 'react';
import styles from './footer.css';
import footerMsgs from '../../services/footerMsgs';

let ourMsg = footerMsgs();

function Footer() {
  return (
    <section className={styles.footer}>
      <div>
        {ourMsg}
      </div>
      <div>
              © Jon Forney 2020
      </div>
    </section>
  );
}

export default Footer;
