import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import StickyHeader from '../components/StickyHeader';
import SlideComponent from '../components/SlideComponent';
import Service from '../components/Service';
import Footer from '../components/Footer';

class Home extends Component {
  constructor (props) {
    super (props)
    this.state = {
      stickyMenu: false
    }
    this.scrollShowMenu = this.scrollShowMenu.bind(this);
  }
  componentDidMount () {
    window.addEventListener('scroll', this.scrollShowMenu)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollShowMenu);
  }
  scrollShowMenu () {
    if (window.pageYOffset > 150) {
      this.setState({ stickyMenu: true })
    }
    if (window.pageYOffset < 149) {
      this.setState({ stickyMenu: false })
    }
  }
  render() {
    const StickyMenu = () => {
      if (this.state.stickyMenu) {
        return ( <StickyHeader/> )
      } else {
        return ''
      }
    }
    return (
      <div>
        {StickyMenu()}
        <Navigation/>
        <SlideComponent/>
        <Service/>
        <Footer/>
      </div>
    );
  }
}

export default Home;