import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeContainer from "./../components/CubeContainer";

class ConnectCube extends Component {


  render() {
    return (
      <div className="Home">
        <Header title="Connect Cube" />
        <CubeContainer type="connect" />
      </div>
    );
  }
}

export default ConnectCube;
