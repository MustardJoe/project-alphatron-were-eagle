import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../header/Header';
import NavBar from '../navbar/NavBar';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import Links from '../links/Links';
import randomHeaderMsg from '../../services/randomHeaderMsg';
import styles from './mainbody.css';

let onLoadHeadMsg = randomHeaderMsg();

class MainBody extends Component {
  state = {
    currentHeadMsg: onLoadHeadMsg,
  }

  updateHeadMsg = () => {
    let newMsg = randomHeaderMsg();
    return this.setState({ currentHeadMsg: newMsg });
  }

  render() {
    const { currentHeadMsg } = this.state;
    return (
      <div className={styles.mainbody}>
        <Header currentHeadMsg={currentHeadMsg} />
        <Router>
          <NavBar updateHeadMsg={this.updateHeadMsg}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Links path="/links" component={Links} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default MainBody;
