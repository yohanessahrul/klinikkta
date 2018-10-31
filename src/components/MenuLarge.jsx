import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

class MenuLarge extends Component {
  constructor (props) {
    super (props)
    this.state = {
      hoverKlinik: false
    }
    this.hoverKlinik = this.hoverKlinik.bind(this);
    this.antiHoverKlinik = this.antiHoverKlinik.bind(this);
    this.scrollShowMenu = this.antiHoverKlinik.bind(this);
  }
  componentDidMount () {
    document.documentElement.scrollTop = 0;
    window.addEventListener('scroll', this.scrollShowMenu)
  }
  hoverKlinik () {
    console.log('Hover Klinik Menu')
    this.setState({
      hoverKlinik: true
    })
  }
  antiHoverKlinik () {
    this.setState({
      hoverKlinik: false
    })
  }
  scrollShowMenu () {
    if (window.pageYOffset > 70) {
      this.setState({ hoverKlinik: false })
    }
  }
  render() {
    const showHoverKlinik = () => {
      if (this.state.hoverKlinik) {
        return (
          <div className="hoverMenuKlinik">
            <ul>
              <li>
                <Link to="/klinik-taman-anggrek">Klinik Taman Anggrek</Link>
              </li>
              <li>
                <Link to="/klinik-kta-srengseng-junction">Klinik KTA Srengseng Junction</Link>
              </li>
              <li>
                <Link to="/klinik-okupasi-kta-suryacipta">Klinik Okupasi KTA Suryacipta</Link>
              </li>
              <li>
                <Link to="/klinik-syifa-medika">Klinik Syifa Medika</Link>
              </li>
            </ul>
          </div>
        )
      } else {
        return ''
      }
    }
    return (
      <div style={{ background: '#479569', borderBottom: 'thin solid #017f31' }}>
        <Container>
          <Row>
            <Col md="12">
              <ul style={{ margin: 0, padding: 0 }} className="ulMenuLarge">
                <li><Link to="/" onMouseOver={this.antiHoverKlinik}>Beranda</Link></li>
                <li><Link to="/tentang-kami" onMouseOver={this.antiHoverKlinik}>Tentang Kami</Link></li>
                <li style={{ position: 'relative' }}>
                  <Link to="#" onClick={this.hoverKlinik}>Klinik</Link>
                  {showHoverKlinik()}
                </li>
                <li><Link to="/kontak" onMouseOver={this.antiHoverKlinik}>Kontak</Link></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MenuLarge;