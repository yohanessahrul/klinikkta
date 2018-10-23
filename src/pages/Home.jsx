import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import SlideComponent from '../components/SlideComponent';
import Service from '../components/Service';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <SlideComponent/>
        <Service/>
      </div>
    );
  }
}

export default Home;