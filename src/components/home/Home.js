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
          Welcome to my internet home (away from home) for me, Jon Forney (he/him),
           a Cloud Operations Engineer living in Portland, Oregon.
        </div>

        <div className={styles.textPara}>
          I&apos;m a curious and empathetic <b>cloud operations 
          engineer</b>, with a full-stack web dev background, working primarily 
          with <b>Linux</b> systems hosted in <b>AWS</b> cloud environments. I&apos;m dedicated 
          to continuous improvement, with an appetite for learning/mastering
          modern cloud infrastructure trends and technology. I love to learn
          new things, and then learn to automate them. More than anything, I
          value a good fitting team that works well together, and whose 
          members support each other!
        </div>

        {/* <div className={styles.textPara}>
          I grew up in Alaska, I play several musical instruments and my 3rd favorite
          movie is the original 1954 Godzilla.
        </div>

        <div className={styles.textPara}>
          Please use this site as a helpful resource to learn about me!
        </div> */}
        <Footer />
      </section>
    </>
  );
}

export default Home;

