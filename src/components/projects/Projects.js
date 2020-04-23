import React from 'react';
import styles from './projects.css';
import Footer from '../footer/Footer';
import astroViewImg from '../../assets/astroview2.png';
import joliliahImg from '../../assets/joliliah2.png';
import moddoImg from '../../assets/moddo2.png';
import simpsonsImg from '../../assets/simpsons2.png';
import grindoImg from '../../assets/grindo2.png';
import twinPeaksImg from '../../assets/twinpeaksproj.png';

function Projects() {
  return (
    <section className={styles.projectsComp}>
      <div className={styles.projBlock}>
        <a href="https://friendly-kilby-8a97fe.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src={twinPeaksImg} className={styles.projImg}></img>
        </a>
        <p className={styles.projText}>
          <a href="https://friendly-kilby-8a97fe.netlify.app/" target="_blank"
            rel="noopener noreferrer">Twin Peaks, the REST API</a> A place for Twin Peaks 
            trivia, this app is made for fans of the David LynchTV show. It&apos;s a
            back-end project built using Node, Express and MongoDB, using REST API 
            architecture to provide the user endpoints to query specific types of data
            (in this case, trivia from the TV show Twin Peaks) in JSON format.
        </p>
      </div>
      <div className={styles.projBlock}>
        <a href="https://jolly-visvesvaraya-9df6c6.netlify.com/" target="_blank" rel="noopener noreferrer">
          <img src={grindoImg} className={styles.projImg}></img>
        </a>
        <p className={styles.projText}>
          <a href="https://jolly-visvesvaraya-9df6c6.netlify.com/" target="_blank"
            rel="noopener noreferrer">Grind-O-Tron</a> A turn-based-combat engine (inspired 
            by early Final Fantasy games), providing classic RPG-style content. Smash some
            pixel-art baddies and level up! A diversion for times when it&apos;s needed. 
            Built with React, deployed on Netlify. 
        </p>
      </div>
      <div className={styles.spacerDiv}></div>
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
