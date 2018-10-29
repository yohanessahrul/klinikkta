import React, { Component } from 'react';
import { Container, Row, Col, Table, Badge } from 'reactstrap';
import Navigation from '../components/Navigation';
import StickyHeader from '../components/StickyHeader';
import KlinikSyifaMedikaCarousel from '../components/KlinikSyifaMedikaCarousel';
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

class KlinikSyifaMedika extends Component {
  constructor (props) {
    super (props)
    this.state = {
      stickyMenu: false
    }
    this.scrollShowMenu = this.scrollShowMenu.bind(this);
  }
  componentDidMount () {
    document.title = "Klinik KTA Syifa Medika";
    document.querySelector('meta[property="og:title"]').setAttribute("content", "Klinik KTA Syifa Medika");
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
          <h1 className="h1Konten">Klinik Syifa Medika</h1><br/>
          <Row>
            <Col md="4">
              <div className="koleksiFotoKlinik">
                <KlinikSyifaMedikaCarousel/>
              </div>
            </Col>
            <Col md="8">
              <h4>Alamat</h4>
              <p style={{ color: '#555555' }}>
                Dsn. Sinarsari RT 008/002, Desa Kalangsari,
                Kecamatan Rengasdengklok, Kabupaten Karawang<br/>
                Telp: 0857-7909-1627
              </p>
              <p style={{ fontWeight: 'bold' }}>
                Jam Operasional : <span style = {{ color: '#e54444' }}>24 Jam</span>
              </p>
              <div className="layananTags dokter-color">
                <h4 style={{ marginTop: '-15px' }}>Tenaga Ahli</h4>
                <ul>
                  <li>dr Stefanie Rini S</li>
                  <li>dr Anggita Bonar</li>
                  <li>dr Ricky Indra</li>
                  <li>drg Priska H I</li>
                  <li>Siti Aisya, S.Kep</li>
                  <li>Stephanie, S.Kep</li>
                  <li>Evy M, Amd.Keb</li>
                  <li>Ivana Y, S.Farm, Apt</li>
                  <li>Perawat Devy</li>
                  <li>Bidan Evy Mei</li>
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
                        <h5 style={{ textAlign: 'center' }}>Daftar Layanan<Badge style={{ marginLeft: '10px', paddingRight: '9px', color: 'white', background: '#a30101' }}>5</Badge></h5>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Pelayanan Obat</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />MWCNU Rengasdengklok</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Distribustor suplemen Herbacure</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Distribusi Alat Bantu Dengar</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Rekam Medis Online Medico</td></tr>
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
                            <li>BPJS Ketenaga-kerjaan</li>
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
                        <a style={{ color: '#2e2e2e', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/KTAKlinikSyifaMedika/">
                          Klinik KTA Syifa Medika : @syifamedika
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
                        <a style={{ color: '#2e2e2e', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/syifamedika_klinik/">
                          Klinik Syifa Medika Dengklok : @syifamedika_klinik
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

export default KlinikSyifaMedika;