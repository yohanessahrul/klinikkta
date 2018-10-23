import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Navigation from '../components/Navigation';
import DetailMaps from '../components/DetailMaps';

class Clinic extends Component {
  render() {
    return (
      <div style={{ textAlign: 'left' }}>
        <Navigation/>
        <div style={{ width: '100%', height: '50px', background: 'white' }}></div>
        <Container>
          <h1 className="h1Konten">Klinik</h1><br/>
        </Container>
        <DetailMaps/>
        <div style={{ width: '100%', height: '100px', background: 'white' }}></div>
      </div>
    );
  }
}

export default Clinic;