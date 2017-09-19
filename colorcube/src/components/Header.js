import React, { Component } from 'react';
import logo from './../assets/CuboLogo.svg';
import MainMenu from './MainMenu';
import $ from 'jquery';
import './../styles/components_styles.css';

class Header extends Component{
  constructor(props) {
    super(props);

    this.state = {
      openMenu: false
    }
  }

  //openMenu
  clickMenu(e){
    let value = !this.state.openMenu;

    this.setState({openMenu: value});

    if(value){
      $(".main-menu").removeClass("main-menu-out");
      $(".main-menu").addClass("main-menu-in");
    }else{
      $(".main-menu").removeClass("main-menu-in");
      $(".main-menu").addClass("main-menu-out");
    }
  }

  render(){
    return(
      <div className="header-component">
      <div className="App-header">
        <div className="header-menu" onClick={(...args) => this.clickMenu(...args)} >
            <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <a href="/" className="header-content-link">
          <div className="header-content">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>{this.props.title}</h3>
            </div>
        </a>
        <div className="header-dropdown">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>

      </div>
        <MainMenu />
      </div>
    );
  }
}

export default Header;
