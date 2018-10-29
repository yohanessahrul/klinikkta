import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import Navigation from '../components/Navigation';
import StickyHeader from '../components/StickyHeader';

class Contact extends Component {
  constructor (props) {
    super (props)
    this.state = {
      fullname: '',
      subject: '',
      email: '',
      message: '',
      stickyMenu: false,
    }
    this.scrollShowMenu = this.scrollShowMenu.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount () {
    document.title = "Klinik KTA Group";
    document.querySelector('meta[property="og:title"]').setAttribute("content", "Klinik KTA Group");
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
  onChange (e) {
    console.log(e.target.name, ' ===> ', e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit (e) {
    e.preventDefault();
    console.log('SIMPAN FORM', this.state)
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
      <div style={{ textAlign: 'left' }}>
        {StickyMenu()}
        <Navigation/>
        <div style={{ width: '100%', height: '50px', background: 'white' }}></div>
        <Container>
          <h1>Kontak</h1>
            {/* { `${this.state.fullname}, ${this.state.subject}, ${this.state.email}, ${this.state.message}` } <br/> */}
          <Row>
            <Col md="5">
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Input onChange={this.onChange} type="text" name="fullname" placeholder="Nama Lengkap"/>
                </FormGroup>
                <FormGroup>
                  <Input onChange={this.onChange} type="text" name="subject" placeholder="Subject"/>
                </FormGroup>
                <FormGroup>
                  <Input onChange={this.onChange} type="email" name="email" placeholder="Alamat Email"/>
                </FormGroup>
                <FormGroup>
                  <Input onChange={this.onChange} type="textarea" name="message" placeholder="Isi Pesan"/>
                </FormGroup>
                <FormGroup>
                  <Button color="warning">Kirim Pesan</Button>
                </FormGroup>
              </Form>
            </Col>
            <Col md="7" style={{ background: '#e3f6f6', paddingTop: '45px' }}>
              <div className="detailKontak" style={{ textAlign: 'center' }}>
                <h4>Alamat Kantor Pusat</h4>
                <p>
                  Kondominium Taman Anggrek Twr 2-L7 <br/>
                  Jl. Let. Jend. S. Parman Kav 21,<br/>
                  Slipi, Jakarta Barat 11470
                  Telp: 021-560-9432
                </p>
              </div>
              <div className="detailKontak" style={{ textAlign: 'center' }}>
                <h4>Nomor Telepon dan Email</h4>
                <p>
                  Mobile : 0811-8981-666<br/>
                  Email : info@klinik-kta.com
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;