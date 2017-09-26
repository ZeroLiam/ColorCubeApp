import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeContainer from "./../components/CubeContainer";

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
