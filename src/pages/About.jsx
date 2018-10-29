import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from '../components/Navigation';
import StickyHeader from '../components/StickyHeader';
import CarouselComponent from '../components/CarouselComponent';
import Footer from '../components/Footer';

class About extends Component {
  constructor (props) {
    super (props)
    this.state = {
      stickyMenu: false
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
        <div style={{ width: '100%', height: '50px', background: 'white' }}></div>
        <Container>
          <h1 className="h1Konten">Tentang Kami</h1>
          <Row>
            <Col>
              <p className="pKonten">
                Kelompok Klinik KTA di awali dari klinik Taman Anggrek yang pertama didirikan pada
                tahun 2007 oleh Bapak Soedharmo Koentjoro dan dr. Soenardi. K. SpKJ di
                Kondominium Taman Anggrek, Jakarta Barat. Dimana awalnya tujuan pendirian
                tersebut hanyalah untuk melayani penghuni Kondominium Taman Anggrek, kini
                klinik tersebut telah melayani pasien dari berbagai area sekitar melalui kemitraan
                dengan BPJS Kesehatan 
                {/* dan beroperasi 24 Jam  */} 
                &nbsp; untuk memenuhi kebutuhan pasien
                yang terus meningkat.
              </p>
            </Col>
          </Row>
        </Container>
        <CarouselComponent/>
        <div style={{ width: '100%', height: '100px', background: 'white' }}></div>
        <Footer/>
      </div>
    );
  }
}

export default About;