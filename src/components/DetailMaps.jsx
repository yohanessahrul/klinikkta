import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

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
    return (
      <div>
          <Row>
            <Col md="12">
              <div className="mapWrapper">
                <iframe src="https://www.google.com/maps/d/embed?mid=1Z3QjLsvMRmcT8kYFQQ2z2-lEqosHMqML" width="100%" height="100%" title="iframe"></iframe>
              </div>
            </Col>
          </Row>
      </div>
    );
  }
}

export default DetailMaps;