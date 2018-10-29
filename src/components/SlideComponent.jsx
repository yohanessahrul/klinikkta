import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import { Icon } from 'react-icons-kit';
import {arrowCircleRight} from 'react-icons-kit/fa';

class SlideComponent extends Component {
  render() {
    return (
      <div>
        <div className="slideWrap">
          <div className="hueSaturation"></div>
          <img className="imgSlide" src={'./images/image-dokter-slide.jpeg'} alt="dokter-slide"/>
          <div className="slideContent">
            <Container>
              <Row>
                <Col md="10">
                  <h1 className="h1Slide animated bounceInDown">Pelayanan Kesehatan KTA</h1>
                  <h4 className="h4Slide animated bounceInLeft">
                    Klinik KTA dan Grup dilengkapi dengan pelayanan dokter umum, dokter gigi, jejaring
                    bidan, apotik dan lab. Klinik KTA kini telah dipercaya oleh lebih dari 30.000 peserta
                    BPJS Kesehatan terdaftar (terbesar di Jakarta Barat) dan mengoperasikan 5 Klinik
                    Pratama di Jakarta dan sekitar-nya.
                  </h4><br/>
                  <Button className="btnSlide animated infinite bounce" size="lg" color="warning" href="/tentang-kami">Pelajari Lebih Lanjut <Icon style={{ paddingLeft: '8px' }} size={25} icon={arrowCircleRight}/></Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideComponent;