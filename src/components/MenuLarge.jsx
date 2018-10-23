import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

class MenuLarge extends Component {
  render() {
    return (
      <div style={{ background: '#079948', borderBottom: 'thin solid #017f31' }}>
        <Container>
          <Row>
            <Col md="12">
              <ul style={{ margin: 0, padding: 0 }} className="ulMenuLarge">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tentang-kami">Tentang Kami</Link></li>
                <li><Link to="/klinik">Klinik</Link></li>
                <li><Link to="/kontak">Kontak</Link></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MenuLarge;