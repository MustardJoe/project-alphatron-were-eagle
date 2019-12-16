import React from 'react';
import styles from './links.css';

function Links() {
  return (
    <div class="hidden soc-media">
      <div className={styles.spacerDiv}></div>
      <div className={styles.twitterTag}>
        Feel free to contact me with your professional opportunities!
      </div>
      <div class="img-links-div">
        <a href="https://github.com/MustardJoe" class="img-links" target="blank">
          <img src="./assets/github-grn2.png" alt="GitHub icon"></img>
        </a>
        <a href="https://www.linkedin.com/in/jonathan-forney-52431a79/" class="img-links" target="blank">
          <img src="./assets/linkedin2.png" alt="linked in icon"></img>
        </a>
        <a href="https://twitter.com/GodzillaJonny" class="img-links" target="blank">
          <img src="./assets/twittergood.png" alt="linked in icon"></img>
        </a>
      </div>
      <div class="spacer-div"></div>
      <div class="cartoon-ref">
        <img src="./assets/jonvatar.png"></img>
        <p class="maya-ref">
        Cartoon Jon avatar by <a href="https://www.mayacastillo.com/" target="blank">
        Maya Castillo</a>
        </p>
      </div>
    </div>
  );
}

export default Links;
