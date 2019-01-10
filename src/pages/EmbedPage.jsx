import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import StickyHeader from '../components/StickyHeader';

class EmbedPage extends Component {
  constructor (props) {
    super (props);
    this.state = {
      stickyMenu: false,
    }
    this.scrollShowMenu = this.scrollShowMenu.bind(this);
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
        <iframe
          name="edudok"
          title="edudok"
          src="https://www.edudok.com/login"
          border="0"
          framspacing="0"
          marginheight="0"
          marginwidth="0"
          vspace="0"
          hspace="0"
          frameborder="0"
          height="600px"
          scrolling="yes"
          width="100%">
        </iframe>
      </div>
    );
  }
}

export default EmbedPage;