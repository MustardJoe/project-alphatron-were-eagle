import React from 'react';
import styles from './projects.css';
import Footer from '../footer/Footer';
import astroViewImg from '../../assets/astroview2.png';
import joliliahImg from '../../assets/joliliah2.png';
import moddoImg from '../../assets/moddo2.png';
import simpsonsImg from '../../assets/simpsons2.png';

function Projects() {
  return (
    <section className={styles.projectsComp}>
      <div className={styles.projBlock}>
        <a href="https://boring-kepler-b775fe.netlify.com/" target="_blank" 
          rel="noopener noreferrer">
          <img src={astroViewImg} className={styles.projImg} alt="AstroView"></img>
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
          <img src={joliliahImg} className={styles.projImg} alt="JoLiliah comes from JOn LILI and noAH"></img>
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
          <img src={moddoImg} className={styles.projImg}></img>
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
          <img src={simpsonsImg} className={styles.projImg}></img>
        </a>
        <p className={styles.projText}>
          <a href="https://confident-shirley-560be5.netlify.com/index.html" target="_blank"
            rel="noopener noreferrer">
            Jonny&apos;s Simpsons Quotes!</a> This app pulls data from a Simpsons-triva REST API
            and displays the data with an appropriately-themed presentation style.
        </p>
      </div>
      <div className={styles.spacerDiv}></div>
      <div className={styles.ghLink}>
        Please consider viewing my <a href="https://github.com/MustardJoe" target="_blank"
          rel="noopener noreferrer">
        GitHub</a> to see more!
      </div>
 
      <Footer />
    </section>
  );
}

export default Projects;
