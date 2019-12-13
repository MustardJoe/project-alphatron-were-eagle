import React from 'react';
import Header from '../header/Header';
import Home from '../home/Home';
import styles from './mainbody.css';

function MainBody() {
  return (
    <mainbody className={styles.mainbody}>
      <Header />
      <Home />
      Here is stuff
    </mainbody>
  );
}

export default MainBody;
