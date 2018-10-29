import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from '../components/Navigation';
import StickyHeader from '../components/StickyHeader';
import DetailMaps from '../components/DetailMaps';

class Clinic extends Component {
  constructor (props) {
    super (props)
    this.state = {
      stickyMenu: false
    }
    this.scrollShowMenu = this.scrollShowMenu.bind(this);
  }
  componentDidMount () {
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
      <div style={{ textAlign: 'left' }}>
        {StickyMenu()}
        <Navigation/>
        <div style={{ width: '100%', height: '50px', background: 'white' }}></div>
        <Container>
          <h1 className="h1Konten">Klinik</h1><br/>
          <Row>
            <Col>
              <p className="pKonten">Klinik KTA merupakan Grup yang terdiri dari Klinik Taman Anggrek, Klinik-KTA Srengseng, dan Klinik-KTA Jagakarsa, Masing-masing klinik kami tersebar di wilayah Jakarta, antara lain :</p>
            </Col>
          </Row>
        </Container>
        <DetailMaps/>
        <div style={{ width: '100%', height: '100px', background: 'white' }}></div>
      </div>
    );
  }
}

export default Clinic;