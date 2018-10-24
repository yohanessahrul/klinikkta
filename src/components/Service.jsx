import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Layanan extends Component {
  render() {
    return (
      <div>
        <Container style={{ margin: '70px auto' }}>
          <Row>
            <Col md="4">
              <img style={{ width: '180px', marginBottom: '40px' }} src={'./images/kta-logo.jpeg'} alt="jpg"/>
              <h3 className="h3Service">Terima BPJS</h3>
              <p className="pService">Sampai pada saat ini kami memiliki peserta BPJS terdaftar sebanyak 22.000 lebih.</p>
            </Col>
            <Col md="4">
              <img style={{ width: '180px', marginBottom: '40px' }} src={'./images/kta-logo.jpeg'} alt="jpg"/>
              <h3 className="h3Service">Pelayanan Lengkap</h3>
              <p className="pService">Kami memiliki pelayanan Dokter Umum, Dokter Gigi, Bidan, Apotik dan Laboratorium.</p>
            </Col>
            <Col md="4">
              <img style={{ width: '180px', marginBottom: '40px' }} src={'./images/kta-logo.jpeg'} alt="jpg"/>
              <h3 className="h3Service">Memiliki 3 Cabang</h3>
              <p className="pService">Sebagai Grup, klinik KTA memiliki 3 Cabang yang tersebar di Jakarta.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Layanan;