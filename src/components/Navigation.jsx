import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import { Container, Row, Col } from 'reactstrap';
import HeaderLarge from '../components/HeaderLarge';
import HeaderMobile from '../components/HeaderMobile';

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="test"></div>
        {/* <div className="responsive-bg" style={styles.navigationWrapper}></div> */}
        <HeaderLarge/>
        <HeaderMobile/>
      </div>
    );
  }
}

// const styles = {
//   navigationWrapper: {
//     width: '100%',
//     height: '5px',
//   }
// }

export default Navigation;