import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../header/Header';
import NavBar from '../navbar/NavBar';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import styles from './mainbody.css';

function MainBody() {
  return (
    <mainbody className={styles.mainbody}>
      <Header />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
    </mainbody>
  );
}

export default MainBody;
