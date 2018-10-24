import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class StickyHeader extends Component {
  render() {
    return (
      <div className="stickyMenuClass animated fadeInDown" style={{ width: '100%', background: 'white', position: 'fixed', zIndex: 100 }}>
        <Container>
          <Row>
            <Col md="6" style={{ textAlign: 'left' }}>
              <div style={{ padding: '10px', float: 'left' }}>
                <img style={{ display: 'table', height: '30px' }} src={'./images/kta-logo.jpeg'} alt="logo-sticky-menu"/>
              </div>
              <h5 style={{ padding: '13px 10px 3px 0px', float: 'left', color: '#a0111b' }}>KLINIK TAMAN ANGGREK</h5>
            </Col>
            <Col md="6" style={{ textAlign: 'left' }}>
              <div style={{ width: '100%', background: 'yellow' }}>
                <ul style={{ padding: 0, margin: 0, float: 'right' }}>
                  <li style={{ listStyle: 'none', float: 'left', padding: '12px' }}>
                    <Link to="/">Home</Link>
                  </li>
                  <li style={{ listStyle: 'none', float: 'left', padding: '12px' }}>
                    <Link to="/tentang-kami">Tentang Kami</Link>
                  </li>
                  <li style={{ listStyle: 'none', float: 'left', padding: '12px' }}>
                    <Link to="/klinik">Klinik</Link>
                  </li>
                  <li style={{ listStyle: 'none', float: 'left', padding: '12px' }}>
                    <Link to="/kontak">Kontak</Link>
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