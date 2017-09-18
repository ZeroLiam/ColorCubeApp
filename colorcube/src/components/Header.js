import React, { Component } from 'react';
import logo from './../assets/CuboLogo.svg';
import './../App.css';

class Header extends Component{
  render(){
    return(
      <div className="App-header">
        <div className="header-menu">
            <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="header-content">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>{this.props.title}</h3>
        </div>
        <div className="header-dropdown">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Header;
