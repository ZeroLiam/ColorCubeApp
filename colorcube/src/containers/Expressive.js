import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeContainer from "./../components/CubeContainer";
import AboutMore from './../components/AboutMore';
import "./../styles/components_styles.css";
import img3 from './../assets/ex/003.jpg';

class Expressive extends Component {
  render() {
    return (
      <div className="Home">
        <Header title="Expressive" />
        <CubeContainer type="expressive" />
      </div>
    );
  }
}

export default Expressive;
