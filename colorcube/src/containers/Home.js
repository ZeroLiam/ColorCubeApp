import React, { Component } from 'react';
import Header from "./../components/Header";
import Splash from "./../components/Splash";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Splash />
        <Header title="Color Cube"/>
      </div>
    );
  }
}

export default Home;
