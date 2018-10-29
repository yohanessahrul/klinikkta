import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <div style={{ background: '#294733' }}>
        <Container>
          <Row>
            <Col md="12">
              <p className="pSimpleFooter" style={{ textAlign: 'center' }}>Copyright PT Mitra Kesehatan Masyarakat 2018</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;