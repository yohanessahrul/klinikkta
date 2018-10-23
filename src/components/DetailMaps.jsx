import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class DetailMaps extends Component {
  constructor (props) {
    super (props)
    this.state = {
      currentMap: 'kta',
    }
    this.chooseMap = this.chooseMap.bind(this);
  }
  chooseMap (e) {
    console.log('Ini map dari klinik', e.target.id)
    
  }
  render() {
    const iframeMap = () => {
      if (this.state.currentMap === 'kta') {
        return (<iframe src="https://www.google.com/maps/d/embed?mid=1Z3QjLsvMRmcT8kYFQQ2z2-lEqosHMqML" width="640" height="100%"></iframe>)
      }
    }
    return (
      <div>
        <Container>
          <Row>
            <Col md="5">
              <div className="klinikDetail mapRed">
                <h4 className="h4KlinikDetail">Klinik Taman Anggrek</h4>
                <p className="pKlinikDetail">
                  Kondominium Taman Anggrek Twr 2-L7<br/>
                  Jl. Let. Jend. S. Parman Kav 21,<br/>
                  Slipi, Jakarta Barat 11470<br/>
                  Telp: 021-560-9432
                </p>
                {/* <Button id="kta" onClick={this.chooseMap} size="sm" color="warning" className="btnMap">Lihat Map</Button> */}
              </div>
              <div className="klinikDetail mapOrange">
                <h4 className="h4KlinikDetail">Klinik KTA Srengseng Junction</h4>
                <p className="pKlinikDetail">
                  Srengseng Junction Lt 2<br/>
                  Jl. Srengseng Raya No. 69<br/>
                  Kel. Srengseng – Kembangan, Jakarta Barat<br/>
                  Telp: 021-948-75-942
                </p>
                {/* <Button id="srengseng" onClick={this.chooseMap} size="sm" color="warning" className="btnMap">Lihat Map</Button> */}
              </div>
              <div className="klinikDetail mapBlue">
                <h4 className="h4KlinikDetail">Klinik KTA Jagakarsa</h4>
                <p className="pKlinikDetail">
                  Apotek Roxy Jagakarsa<br/>
                  Jl. Jagakarsa Raya no. 45 RT 002/ RW 007<br/>
                  Jagakarsa – Jakarta Selatan<br/>
                  Telp: 021-905-37-557
                </p>
                {/* <Button id="jagakarsa" onClick={this.chooseMap} size="sm" color="warning" className="btnMap">Lihat Map</Button> */}
              </div>
            </Col>
            <Col md="7">
              <div className="mapWrapper">
                <iframe src="https://www.google.com/maps/d/embed?mid=1Z3QjLsvMRmcT8kYFQQ2z2-lEqosHMqML" width="100%" height="100%"></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DetailMaps;