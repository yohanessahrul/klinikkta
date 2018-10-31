import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class StickyHeader extends Component {
  constructor (props) {
    super (props)
    this.state = {
      hoverKlinik: false
    }
    this.hoverKlinik = this.hoverKlinik.bind(this);
    this.antiHoverKlinik = this.antiHoverKlinik.bind(this);
  }

  hoverKlinik () {
    console.log('Hover Klinik Menu')
    this.setState({
      hoverKlinik: true
    })
  }
  antiHoverKlinik () {
    this.setState({
      hoverKlinik: false
    })
  }
  render() {
    const showHoverKlinik = () => {
      if (this.state.hoverKlinik) {
        return (
          <div className="hoverMenuKlinik leftMinus">
            <ul>
              <li>
                <Link to="/klinik-taman-anggrek">Klinik Taman Anggrek</Link>
              </li>
              <li>
                <Link to="/klinik-kta-srengseng-junction">Klinik KTA Srengseng Junction</Link>
              </li>
              <li>
                <Link to="/klinik-okupasi-kta-suryacipta">Klinik Okupasi KTA Suryacipta</Link>
              </li>
              <li>
                <Link to="/klinik-syifa-medika">Klinik Syifa Medika</Link>
              </li>
            </ul>
          </div>
        )
      } else {
        return ''
      }
    }
    return (
      <div className="stickyMenuClass animated fadeInDown" style={{ width: '100%', background: '#479569', position: 'fixed', zIndex: 100 }}>
        <Container>
          <Row>
            <Col md="6" style={{ textAlign: 'left' }}>
              <div style={{ padding: '7px', float: 'left' }}>
                <img style={{ display: 'table', height: '40px', padding:'3px 5px 3px 3px', background: 'white', borderRadius: '5px' }} src={'./images/kta-logo.jpeg'} alt="logo-sticky-menu"/>
              </div>
              <p className="stickyLogoName">KLINIK TAMAN ANGGREK</p>
            </Col>
            <Col md="6" style={{ textAlign: 'left' }}>
              <div className="stickyMenus">
                <ul>
                  <li>
                    <Link to="/" onMouseOver={this.antiHoverKlinik}>Beranda</Link>
                  </li>
                  <li>
                    <Link to="/tentang-kami" onMouseOver={this.antiHoverKlinik}>Tentang Kami</Link>
                  </li>
                  <li style={{ position: 'relative' }}>
                    <Link to="#" onClick={this.hoverKlinik}>Klinik</Link>
                    {showHoverKlinik()}
                  </li>
                  <li>
                    <Link to="/kontak" onMouseOver={this.antiHoverKlinik}>Kontak</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default StickyHeader;