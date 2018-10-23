import React, { Component } from 'react';
import './App.css';
import './responsive.css';
import history from './history';

import { Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Clinic from './pages/Clinic';
import NoMatch from './pages/NoMatch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/tentang-kami" component={About}/>
            <Route exact path="/kontak" component={Contact}/>
            <Route exact path="/klinik" component={Clinic}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
