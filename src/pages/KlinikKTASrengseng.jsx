import React, { Component } from 'react';
import { Container, Row, Col, Table, Badge, Button } from 'reactstrap';
import Navigation from '../components/Navigation';
import StickyHeader from '../components/StickyHeader';
import KlinikKTASrengsengCarousel from '../components/KlinikSrengseng';
import DetailMap from '../components/DetailMaps';
import Footer from '../components/Footer';
import { Icon } from 'react-icons-kit';
import {
  check,
  facebookSquare,
  // twitterSquare,
  // youtubePlay,
  instagram,
} from 'react-icons-kit/fa';

class KlinikKTASrengseng extends Component {
  constructor (props) {
    super (props)
    this.state = {
      stickyMenu: false
    }
    this.scrollShowMenu = this.scrollShowMenu.bind(this);
  }
  componentDidMount () {
    document.title = "Klinik KTA Srengseng Junction";
    document.querySelector('meta[property="og:title"]').setAttribute("content", "Klinik KTA Srengseng Junction");
    document.documentElement.scrollTop = 0;
    window.addEventListener('scroll', this.scrollShowMenu)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollShowMenu);
  }
  scrollShowMenu () {
    if (window.pageYOffset > 70) {
      this.setState({ stickyMenu: true })
    }
    if (window.pageYOffset < 69) {
      this.setState({ stickyMenu: false })
    }
  }
  render() {
    const StickyMenu = () => {
      if (this.state.stickyMenu) {
        return ( <StickyHeader/> )
      } else {
        return ''
      }
    }
    return (
      <div>
        {StickyMenu()}
        <Navigation/>
        <div style={{ width: '100%', height: '50px', background: 'white' }}></div>
        <Container>
          <h1 className="h1Konten">Klinik KTA Srengseng Junction</h1><br/>
          <Row>
            <Col md="4">
              <div className="koleksiFotoKlinik">
                <KlinikKTASrengsengCarousel/>
              </div>
              <Button
                target="_blank"
                href="https://api.whatsapp.com/send?phone=6287878519000"
                style={{ background: '#53C657', border: 'thin solid #53C657', marginBottom: '20px' }}
                size="lg"
                block
              >Whatsapp Chat</Button>
            </Col>
            <Col md="8">
              <h4>Alamat</h4>
              <p style={{ color: '#555555' }}>
                Srengseng Junction Lt 2
                Jl. Srengseng Raya No. 69<br/>
                Kel. Srengseng – Kembangan, Jakarta Barat
                Telp: 021-948-75-942
              </p>
              <p style={{ fontWeight: 'bold' }}>
                Jam Operasional : <span style = {{ color: '#e54444' }}>Setiap hari, Pukul 11:00 - 20:00 WIB</span>
              </p>
              <div className="layananTags dokter-color">
                <h4 style={{ marginTop: '-15px' }}>Tenaga Ahli</h4>
                <ul>
                  <li>dr. Albert Nugraha</li>
                  <li>dr. Maria Th Simadibrata</li>
                  <li>dr. Novi Atim Suistaya</li>
                  <li>drg. Eunike Oktaviane H</li>
                  <li>drg. Edwin Kurniawan T</li>
                  <li>drg. Johan Drison</li>
                  <li>drg. Dian Purnamasari</li>
                  <li>Lisa Setiawati., Amd. Kep.</li>
                  <div className="clear"></div>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{ background: '#f0f0f0', padding: '80px 0', marginTop: '70px', borderTop: 'thin solid #d8d8d8' }}>
          <Container>
            <Row>
              <Col md="6">
                <Table className="boxShadow hoverList" bordered style={{ width: '100%', background: 'white', display: 'table', marginBottom: '30px' }}>
                  <thead>
                    <tr style={{ background: '#d5482a', color: 'white' }}>
                      <th>
                        <h5 style={{ textAlign: 'center' }}>Daftar Layanan<Badge style={{ marginLeft: '10px', paddingRight: '9px', color: 'white', background: '#a30101' }}>9</Badge></h5>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Pelayanan Apotik Medical Plus</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Pelayanan Laboratorium Bio Life</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Pelayanan Audiologi Sound Life</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Pelayanan Bidan Mandiri Lesmianna Saragih</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Pelayanan Bidan Mandiri Hj. Djariah</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Pelayanan Rumah Sunat dr. Karno Ariwibowo</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Pelayanan Laboratorium klinik permata indah</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Rekam Medis & Telehealth Practech</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Distributor Suplemen oleh Herbacure</td></tr>
                  </tbody>
                </Table>
                <Table className="boxShadow" bordered style={{ background: 'white' }}>
                  <thead>
                    <tr style={{ background: '#d5482a', color: 'white' }}>
                      <th>
                        <h5 style={{ textAlign: 'center' }}>Daftar Asuransi Rekanan</h5>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="layananTags others-color" style={{ padding: '0px 20px 20px 20px' }}>
                          <ul>
                            <li>BPJS Kesehatan</li>
                            <li>CAR</li>
                            <li>Reliance</li>
                            <li>MNC Life</li>
                            <li>Bintang</li>
                            <li>Jiwasraya</li>
                            <li>BCA Life</li>
                            <li>Astra Aviva Life</li>
                            <li>Jiwa Recapital</li>
                            <li>AA Internasional Indonesia</li>
                            <li>Takaful</li>
                            <li>Astra Buana</li>
                            <li>Asuransi Central Asia (ACA)</li>
                            <li>Tugu Mandiri</li>
                            <li>Pan Pasific</li>
                            <li>MSIG (Sinar Mas)</li>
                            <li>Healthcare</li>
                            <li>Fullerton Health</li>
                            <div className="clear"></div>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col md="6">
                <DetailMap/>
                <Table className="boxShadow hoverList" bordered style={{ width: '100%', background: 'white', display: 'table', marginBottom: '30px', marginTop: '30px' }}>
                  <thead>
                    <tr style={{ background: '#d5482a', color: 'white' }}>
                      <th>
                        <h5 style={{ textAlign: 'center' }}>Sosial Media</h5>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Icon icon={facebookSquare} size={30} style={{ color: '#3662a7', marginRight: '10px' }} />
                        <a style={{ color: '#2e2e2e', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/klinikKTASrengsengJunction/">
                          Klinik KTA Srengseng Junction : @kliniksrengseng
                        </a>
                      </td>
                    </tr>
                    {/* <tr>
                      <td>
                        <Icon icon={twitterSquare} size={30} style={{ color: '#12c9d5', marginRight: '10px' }} />
                        <a style={{ color: '#2e2e2e', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https:youtube.com">
                          Twitter Klinik KTA - Srengseng
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Icon icon={youtubePlay} size={30} style={{ color: '#f44c4c', marginRight: '10px' }} />
                        <a style={{ color: '#2e2e2e', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https:youtube.com">
                          Youtube Klinik KTA - Srengseng
                        </a>
                      </td>
                    </tr> */}
                    <tr>
                      <td>
                        <Icon icon={instagram} size={30} style={{ color: '#454545', marginRight: '10px' }} />
                        <a style={{ color: '#2e2e2e', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/klinikKTASrengsengJunction/">
                          Klinik KTA Srengseng Junction : @klinikktasrengsengjunction
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default KlinikKTASrengseng;