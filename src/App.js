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
import KlinikTamanAnggrekPage from './pages/KlinikTamanAnggrekPage';
import KlinikKTASrengseng from './pages/KlinikKTASrengseng';
import KlinikSyifaMedika from './pages/KlinikSyifaMedika';
import KlinikKTASuryacipta from './pages/KlinikKTASuryacipta';

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
            <Route exact path="/klinik-taman-anggrek" component={KlinikTamanAnggrekPage}/>
            <Route exact path="/klinik-kta-srengseng-junction" component={KlinikKTASrengseng}/>
            <Route exact path="/klinik-syifa-medika" component={KlinikSyifaMedika}/>
            <Route exact path="/klinik-kta-surya-cipta" component={KlinikKTASuryacipta}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
