import React, { Component } from 'react';
import { Container, Row, Col, Table, Badge, Button } from 'reactstrap';
import Navigation from '../components/Navigation';
import StickyHeader from '../components/StickyHeader';
import KlinikTamanAnggrekCarousel from '../components/KlinikTamanAnggrek';
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

class KlinikTamanAnggrek extends Component {
  constructor (props) {
    super (props)
    this.state = {
      stickyMenu: false
    }
    this.scrollShowMenu = this.scrollShowMenu.bind(this);
  }
  componentDidMount () {
    document.title = "Klinik Taman Anggrek";
    document.querySelector('meta[property="og:title"]').setAttribute("content", "Klinik Taman Anggrek");
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
          <h1 className="h1Konten">Klinik Taman Anggrek</h1><br/>
          <Row>
            <Col md="4">
              <div className="koleksiFotoKlinik">
                <KlinikTamanAnggrekCarousel/>
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
                Kondominium Taman Anggrek Twr 2-L7
                Jl. Let. Jend. S. Parman Kav 21, Slipi<br/>
                Jakarta Barat 11470,
                Telp: 021-560 9432
              </p>
              {/* <p style={{ fontWeight: 'bold' }}>
                Jam Operasional : <span style = {{ color: '#e54444' }}>24 Jam</span>
              </p> */}
              <div className="layananTags dokter-color">
                <h4 style={{ marginTop: '-15px' }}>Tenaga Ahli</h4>
                <ul>
                  <li>dr. Adelia melianti</li>
                  <li>dr. Vandalita Kusuma Wardhani</li>
                  <li>dr. Kwok Ah Phak</li>
                  <li>dr. Irvan Tanpomas</li>
                  <li>dr. Andre Darmawan</li>
                  <li>dr. Anastasia Rosy Wahyu Kartika</li>
                  <li>dr. Maria TH Simadibrata</li>
                  <li>dr. Sylvia Sari Dewi</li>
                  <li>drg. Endah Kumala Sari</li>
                  <li>drg. Eunike Oktaviane Hindrajaya</li>
                  <li>drg. Michelle Teodora Setiawan</li>
                  <li>Mega Kristina., S.Farm, Apt</li>
                  <li>Agus Suratman., S.Farm, Apt</li>
                  <li>Kurniawan Wahyu Argo ., S.Kep</li>
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
                        <h5 style={{ textAlign: 'center' }}>Daftar Layanan <Badge style={{ marginLeft: '10px', paddingRight: '9px', color: 'white', background: '#a30101' }}>4</Badge></h5>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Pelayanan Laboratorium Prodia</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Pelayanan Apotik Roxy</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Pelayanan alat bantu dengar Soundlife</td></tr>
                    <tr><td><Icon icon={check} size={20} style={{ color: '#79cf79', marginRight: '10px' }} />Pelayanan Bidan Jejaring</td></tr>
                  </tbody>
                </Table>
                <Table className="boxShadow" bordered style={{ width: '100%', background: 'white', display: 'table', marginBottom: '30px' }}>
                  <thead>
                    <tr style={{ background: '#d5482a', color: 'white' }}>
                      <th>
                        <h5 style={{ textAlign: 'center' }}>Asuransi Rekanan</h5>
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
                        <a style={{ color: '#2e2e2e', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/klinikTA/">
                          Klinik Taman Anggrek : @klinikTA
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
                        <a style={{ color: '#2e2e2e', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/Klinik.taman.anggrek/">
                          Klinik Taman Anggrek : @klinik.taman.anggrek
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

export default KlinikTamanAnggrek;