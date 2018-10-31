import React, { Component } from 'react';
import { Container, Row, Col, Table, Badge, Button } from 'reactstrap';
import Navigation from '../components/Navigation';
import StickyHeader from '../components/StickyHeader';
import KlinikKTASuryaCipta from '../components/KlinikKTASuryaCipta';
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

class KlinikKTASuryacipta extends Component {
  constructor (props) {
    super (props)
    this.state = {
      stickyMenu: false
    }
    this.scrollShowMenu = this.scrollShowMenu.bind(this);
  }
  componentDidMount () {
    document.title = "Klinik Okupasi KTA Suryacipta";
    document.querySelector('meta[property="og:title"]').setAttribute("content", "Klinik Okupasi KTA Suryacipta");
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
          <h1 className="h1Konten">Klinik Okupasi KTA Suryacipta</h1><br/>
          <Row>
            <Col md="4">
              <div className="koleksiFotoKlinik">
                <KlinikKTASuryaCipta/>
              </div>
              <Button
                target="_blank"
                href="https://web.whatsapp.com/send?phone=628118981666"
                style={{ background: '#53C657', border: 'thin solid #53C657', marginBottom: '20px' }}
                size="lg"
                block
              >Whatsapp Chat</Button>
            </Col>
            <Col md="8">
              <h4>Alamat</h4>
              <p style={{ color: '#555555' }}>
                Jl Surya Utama Kav C-1, The Promenade Blok C1 No. 9, Suryacipta City Of Industry<br/>
                Desa Kulamekar, Kecamatan Ciampel, Kabupaten Karawang
                Telp: 0878-8080-8356 / 0267-8404-119
              </p>
              <p style={{ fontWeight: 'bold' }}>
                Jam Operasional : <span style = {{ color: '#e54444' }}>24 Jam</span>
              </p>
              <div className="layananTags dokter-color">
                <h5 style={{ marginTop: '-15px' }}>Tenaga Ahli</h5>
                <ul>
                  <li>dr Friska Pratiwi</li>
                  <li>dr Trisnadi Dani</li>
                  <li>dr Ricky Indra</li>
                  <li>dr Yanti</li>
                  <li>drg Priska H.I</li>
                  <li>Fitria A., Amd.Kep</li>
                  <li>Maria R., Amd.Kep</li>
                  <li>Ivana Y, S.Farm, Apt</li>
                  <li>Perawat Istiqomah</li>
                  <li>Dr. Muh Ilyas Sp. OK</li>
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
                        <h5 style={{ textAlign: 'center' }}>Daftar Layanan <Badge style={{ marginLeft: '10px', paddingRight: '9px', color: 'white', background: '#a30101' }}>9</Badge></h5>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Pelayanan Obat</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Coffee Shop Maximo</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Pelayanan Optik</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Klinik Inhouse di PT. Chuhatsu Indonesia</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Telehealth Halodoc</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Distributor Suplemen Herbacure</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Rekam Medis Digital oleh MyClinicalPro</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Asosiasi HRD Suryacipta (ASPHRI)</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Laboratorium , Radiologi dan MCU</td></tr>
                  </tbody>
                </Table>
                <Table className="boxShadow" bordered style={{ width: '100%', background: 'white', display: 'table', marginBottom: '30px' }}>
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
                            <li>CAR</li>
                            <li>Healthcare</li>
                            <li>AA Internasional Indonesia</li>
                            <li>Pan Pasific</li>
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
                        <a style={{ color: '#2e2e2e', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/KTAsuryaciptaklinik/">
                          Klinik KTA -Surya Cipta : @klinik.kta.surya.cipta
                        </a>
                      </td>
                    </tr>
                    {/* <tr>
                      <td>
                        <Icon icon={twitterSquare} size={30} style={{ color: '#12c9d5', marginRight: '10px' }} />
                        <a style={{ color: '#2e2e2e', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https:youtube.com">
                          Twitter Klinik Taman Anggrek
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Icon icon={youtubePlay} size={30} style={{ color: '#f44c4c', marginRight: '10px' }} />
                        <a style={{ color: '#2e2e2e', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https:youtube.com">
                          Youtube Klinik Tamab Anggrek
                        </a>
                      </td>
                    </tr> */}
                    <tr>
                      <td>
                        <Icon icon={instagram} size={30} style={{ color: '#454545', marginRight: '10px' }} />
                        <a style={{ color: '#2e2e2e', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/klinikKTASuryacipta/">
                          Klinik Kta Surya Cipta : @klinikktasuryacipta
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

export default KlinikKTASuryacipta;