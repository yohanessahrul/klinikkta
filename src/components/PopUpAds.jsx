import history from '../history';
import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class PopUpAds extends Component {
  constructor (props) {
    super (props);
    this.state = {
      modal: true
    };
    this.toggle = this.toggle.bind(this);
    this.gotoReservasi = this.gotoReservasi.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  gotoReservasi () {
    history.push('/reservasi');
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <Button onClick={this.toggle} style={{ position: 'absolute', right: '15px' }} size="sm" color="link">Close</Button>
            <img style={{ display: 'table', width: '100%' }} src={'./reservasi-popup.jpeg'} alt="reservasi-popup" />
          </ModalBody>
          <ModalFooter>
            <Button color="warning" size="lg" block onClick={this.gotoReservasi}>Reservasi</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PopUpAds;