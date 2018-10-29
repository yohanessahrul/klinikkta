import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import KlinikTamanAnggrek from '../components/KlinikTamanAnggrek';
import KlinikSrengseng from '../components/KlinikSrengseng';
import KlinikKTASuryaCipta from '../components/KlinikKTASuryaCipta';
import KlinikSyifaMedikaCarousel from '../components/KlinikSyifaMedikaCarousel';

class CarouselComponent extends Component {
  render() {
    return (
      <div>
        <Container>
          <hr/>
          <Row style={{ margin: '50px 0 100px 0' }}>
            <Col md="3">
              <KlinikTamanAnggrek/>
            </Col>
            <Col md="3">
              <KlinikSrengseng/>
            </Col>
            <Col md="3">
              <KlinikKTASuryaCipta/>
            </Col>
            <Col md="3">
              <KlinikSyifaMedikaCarousel/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CarouselComponent;