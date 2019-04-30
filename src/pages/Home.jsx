import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import StickyHeader from '../components/StickyHeader';
import SlideComponent from '../components/SlideComponent';
import Service from '../components/Service';
import CarouselComponent from '../components/CarouselComponent';
import Footer from '../components/Footer';
import PopUpAds from '../components/PopUpAds';

class Home extends Component {
  constructor (props) {
    super (props)
    this.state = {
      stickyMenu: false,
    }
    this.scrollShowMenu = this.scrollShowMenu.bind(this);
  }
  componentDidMount () {
    document.title = "Klinik KTA Group";
    document.querySelector('meta[property="og:title"]').setAttribute("content", "Klinik KTA Group");
    document.documentElement.scrollTop = 0;
    window.addEventListener('scroll', this.scrollShowMenu)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollShowMenu);
  }
  scrollShowMenu () {
    if (window.pageYOffset > 70) {
      this.setState({ stickyMenu: true })
    }
    if (window.pageYOffset < 69) {
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
        {/* <PopUpAds/> */}
        <SlideComponent/>
        <Service/>
        <CarouselComponent/>
        <Footer/>
      </div>
    );
  }
}

export default Home;