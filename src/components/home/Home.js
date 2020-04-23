import React from 'react';
import Footer from '../footer/Footer';
import styles from './home.css';
import jonvatar from '../../assets/jonpic2small.png';
                           
function Home() {
  return (
    <>
      <section className={styles.home}>
        <div className="jonvatar">
          <img src={jonvatar}></img>
        </div>
        <div></div>
        <div className={styles.textPara}>
          Welcome to my internet home (away from home). I&apos;m a 
          fullstack software devoloper (he/him) living
          in Portland, Or.
        </div>

        <div className={styles.textPara}>
          I&apos;m an empathetic, intelligent and diligent individual
          with a quiet but quirky sense of humor, and a passion for continuous learning.
          The most important thing to me in any job is being part of a great fitting team 
          that works well together and supports each other as we all grow our knowledge.
        </div>

        <div className={styles.textPara}>
          I grew up in Alaska, I play several musical instruments and my 3rd favorite
          movie is the original 1954 Godzilla.
        </div>

        <div className={styles.textPara}>
          Please use this site as a helpful resource to learn about me!
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;

