import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from '../components/Navigation';

class Clinic extends Component {
  render() {
    return (
      <div style={{ textAlign: 'left' }}>
        <Navigation/>
        <div style={{ width: '100%', height: '50px', background: 'white' }}></div>
        <Container>
          <h1>Klinik</h1>
          <Row>
            <Col>
              <p>Kelompok Klinik KTA di awali dari klinik Taman Anggrek yang pertama didirikan pada tahun 2007 oleh Bapak Soedharmo Koentjoro dan dr. Soenardi. K. SpKJ di Kondominium Taman Anggrek, Jakarta Barat. Dimana awalnya tujuan pendirian tersebut hanyalah untuk melayani penghuni Kondominium Taman Anggrek, kini klinik tersebut telah melayani pasien dari berbagai area sekitar melalui kemitraan dengan BPJS Kesehatan dan beroperasi 24 Jam untuk memenuhi kebutuhan pasien yang terus meningkat.</p>
              <p>Klinik KTA dan Grup dilengkapi dengan pelayanan dokter umum, dokter gigi, jejaring bidan, apotik dan lab. Klinik KTA kini telah memiliki jaringan 3 klinik di Jakarta dan memiliki 22.000 lebih perserta BPJS terdaftar.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Clinic;