import React, { Component } from 'react';
import logo from './../assets/CuboLogo.svg';
import './../App.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="App-header">
          <div className="header-menu">
              <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div className="header-content">
              <img src={logo} className="App-logo" alt="logo" />
              <h3>Color Cube</h3>
          </div>
          <div className="header-dropdown">
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
