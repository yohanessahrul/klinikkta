import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from '../components/Navigation';
import StickyHeader from '../components/StickyHeader';
import KlinikTamanAnggrek from '../components/KlinikTamanAnggrek';
import KlinikSrengseng from '../components/KlinikSrengseng';
import KlinikJagakarsa from '../components/KlinikJagakarsa';

class About extends Component {
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
      <div style={{ textAlign: 'left' }}>
        {StickyMenu()}
        <Navigation/>
        <div style={{ width: '100%', height: '50px', background: 'white' }}></div>
        <Container>
          <h1 className="h1Konten">Tentang Kami</h1>
          <Row>
            <Col>
              <p className="pKonten">Kelompok Klinik KTA di awali dari klinik Taman Anggrek yang pertama didirikan pada tahun 2007 oleh Bapak Soedharmo Koentjoro dan dr. Soenardi. K. SpKJ di Kondominium Taman Anggrek, Jakarta Barat. Dimana awalnya tujuan pendirian tersebut hanyalah untuk melayani penghuni Kondominium Taman Anggrek, kini klinik tersebut telah melayani pasien dari berbagai area sekitar melalui kemitraan dengan BPJS Kesehatan dan beroperasi 24 Jam untuk memenuhi kebutuhan pasien yang terus meningkat.</p>
              <p className="pKonten">Klinik KTA dan Grup dilengkapi dengan pelayanan dokter umum, dokter gigi, jejaring bidan, apotik dan lab. Klinik KTA kini telah memiliki jaringan 3 klinik di Jakarta dan memiliki 22.000 lebih perserta BPJS terdaftar.</p>
            </Col>
          </Row>
        </Container>
        <Container>
          {/* <h2 style={{ textAlign: 'center' }} className="h1Konten">KTA Group</h2> */}
          <hr/>
          <Row>
            <Col md="4">
              <KlinikTamanAnggrek/>
            </Col>
            <Col md="4">
              <KlinikSrengseng/>
            </Col>
            <Col md="4">
              <KlinikJagakarsa/>
            </Col>
          </Row>
        </Container>
        <div style={{ width: '100%', height: '100px', background: 'white' }}></div>
      </div>
    );
  }
}

export default About;