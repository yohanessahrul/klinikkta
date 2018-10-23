import React, { Component } from 'react';
import history from '../history';
import { Container, Row, Col } from 'reactstrap';
import MenuHeaderLarge from '../components/MenuLarge';

class HeaderLarge extends Component {
  constructor (props) {
    super (props)
    this.goToHome = this.goToHome.bind(this)
  }
  goToHome () {
    console.log('klik')
    history.push('/');
  }
  render() {
    return (
      <div>
        <div className="headerWrapperMinTablet" style={styles.headerBg}>
          <Container>
            <Row>
              <Col md="6">
                <div>
                  <div style={styles.logoHeaderLarge}>
                    <img onClick={this.goToHome} className="logoLargeHeader" src={'./images/kta-logo.jpeg'} alt="kta-logo"/>
                    <p onClick={this.goToHome} className="logoNameLarge">KLINIK TAMAN ANGGREK</p>
                    <div className="clear"></div>
                  </div>
                </div>
              </Col>
              <Col md="6">
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id quo commodi itaque</p> */}
              </Col>
            </Row>
          </Container>
          <MenuHeaderLarge/>
        </div>
      </div>
    );
  }
}

const styles = {
  headerBg: {
    width: '100%',
    background: 'white',
  },
  logoHeaderLarge: {
    width: '100%',
    padding: '15px 0px'
    // background: 'orange',
  },
  logoSize: {
    width: '100px',
    float: 'left'
  },
}

export default HeaderLarge;