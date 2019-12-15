import React from 'react';
import styles from './projects.css';

function Projects() {
  return (
    <section className={styles.projectsComp}>
      <div className={styles.spacerDiv}></div>
      <div className={styles.projBlock}>
        <a href="https://boring-kepler-b775fe.netlify.com/" target="_blank" 
          rel="noopener noreferrer">
          <img src="../../assets/astroview.png" className={styles.projImg}></img>
        </a>
        <p className={styles.projText}>
          <a href="https://boring-kepler-b775fe.netlify.com/" target="_blank" 
            rel="noopener noreferrer">AstroView</a> A
              Front end for the NASA Astronomy Picture of the Day API. Browse decades of awesome,
              daily astronomy photos. This project was built with React to interface with a REST API.
        </p>
      </div>
      <div className={styles.spacerDiv}></div>
      <div className={styles.projBlock}>
        <a href="https://happy-lovelace-66fb73.netlify.com/auth.html" target="_blank" 
          rel="noopener noreferrer">
          <img src="../../assets/joliliah.png" className={styles.projImg}></img>
        </a>
        <p className={styles.projText}>
          <a href="https://happy-lovelace-66fb73.netlify.com/auth.html" target="_blank"
            rel="noopener noreferrer">
            I Believe In URL</a> A URL shortening app built with JavaScript, 
            using Node, Express and MongoDB.  Provides a shorter URL alternative
            when one is needed.
        </p>
      </div>
      <div className={styles.spacerDiv}></div>
      <div className={styles.projBlock}>
        <a href="https://moddo.netlify.com/" target="_blank" rel="noopener noreferrer">
          <img src="../../assets/moddo.png" className={styles.projImg}></img>
        </a>
        <p className={styles.projText}>
          <a href="https://moddo.netlify.com/" target="_blank"
            rel="noopener noreferrer">Moddo: Advice and 
            Inspire</a> Moddo is a fullstack app built as an exercise
            in using Firebase database system.  It gives you a bit of random 
            adivce which inspires your to complete the paired to do list.
        </p>
      </div>
      <div className={styles.spacerDiv}></div>
      <div className={styles.projBlock}>
        <a href="https://confident-shirley-560be5.netlify.com/index.html" target="_blank"
          rel="noopener noreferrer">
          <img src="../../assets/simpsons.png" className={styles.projImg}></img>
        </a>
        <p className={styles.projText}>
          <a href="https://confident-shirley-560be5.netlify.com/index.html" target="_blank"
            rel="noopener noreferrer">
            Jonny's Simpsons Quotes!</a> A project I created that pulls data from a Simpsons API
            and displays that data as with a Simpsons-themed presentation style.
        </p>
      </div>
      <div>
        Please consider viewing my <a href="https://github.com/MustardJoe" target="_blank"
          rel="noopener noreferrer">
        GitHub</a> to see more!
      </div>
      <div className={styles.spacerDiv}></div><div className={styles.spacerDiv}></div>
 
    </section>

  );
}

export default Projects;
