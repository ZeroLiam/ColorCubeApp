import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeContainer from "./../components/CubeContainer";

class Impressive extends Component {
  render() {
    return (
      <div className="Home">
        <Header title="Impressive" />
        <CubeContainer type="impressive" />
      </div>
    );
  }
}

export default Impressive;
