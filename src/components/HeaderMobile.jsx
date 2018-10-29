import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';
import { Link } from 'react-router-dom';

class HeaderMobile extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <div className="headerMobile">
          <Navbar
            // style={{ marginTop: '10px' }}
            color="light" light expand="md" fixed="top">
            <NavbarBrand href="/">
              Klinik Taman Anggrek
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/tentang-kami">Tentang Kami</Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Klinik
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link to="/klinik-taman-anggrek">
                        Klinik Taman Anggrek
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/klinik-kta-srengseng-junction">
                        Klinik KTA Srengseng Junction
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/klinik-kta-surya-cipta">
                        Klinik KTA Surya Cipta
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/klinik-syifa-medika">
                        Klinik Syifa Medika
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <NavItem>
                  <Link to="/kontak">Kontak</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <div style={{ width: '100%', height: '43px' }}></div>
        </div>
      </div>
    );
  }
}

export default HeaderMobile;