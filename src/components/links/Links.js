import React from 'react';
import Footer from '../footer/Footer';
import styles from './links.css';
import twitterIcon from '../../assets/twittergoof.png';

function Links() {
  return (
    <>
      <div className={styles.socMedia}>
        <div className={styles.spacerDiv}></div>
        <div className={styles.twitterTag}>
        Feel free to contact me with your professional opportunities!
        </div>
        <div className={styles.imgLinksDiv}>
          <a href="https://github.com/MustardJoe" className={styles.imgLinks} target="blank">
            <img src="../../assets/github-grn2.png" alt="GitHub icon"></img>
          </a>
          <a href="https://www.linkedin.com/in/jonathan-forney-52431a79/" className={styles.imgLinks} 
            target="_blank" rel="noopener noreferrer">
            <img src="./src/assets/linkedin2.png" alt="Linked In icon"></img>
          </a>
          <a href="https://twitter.com/GodzillaJonny" className={styles.imgLinks} target="_blank"
            rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter icon"></img>
          </a>
        </div>
        <div className={styles.spacerDiv}></div>
        <div className={styles.cartoonRef}>
          <img src="./src/assets/jonvatar.png"></img>
          <p className={styles.mayaRef}>
        Cartoon Jon avatar by <a href="https://www.mayacastillo.com/" target="_blank"
              rel="noopener noreferrer">
        Maya Castillo</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Links;
