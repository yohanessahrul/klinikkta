import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <div style={{ background: 'teal' }}>
        <Container>
          <Row>
            <Col md="6">
              <p className="pSimpleFooter" style={{ float: 'left' }}>Copyright PT Mitra Kesehatan Masyarakat 2018</p>
            </Col>
            <Col md="6">
              <p className="pSimpleFooter" style={{ float: 'right' }}></p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;