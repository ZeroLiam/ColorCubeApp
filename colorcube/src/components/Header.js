import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/CuboLogo.svg';
import MainMenu from './MainMenu';
import $ from 'jquery';
import './../styles/components_styles.css';
import custommenu from './../lib/menu.json';

class Header extends Component{
  constructor(props) {
    super(props);

    this.state = {
      openMenu: false,
      menuItems: []
    }
  }

  componentDidMount(){
    this.setState({menuItems: custommenu.items});
  }

  //open and close Menu
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
        <Link to="/" className="header-content-link">
          <div className="header-content">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>{this.props.title}</h3>
            </div>
        </Link>
        <div className="header-dropdown">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>

      </div>
        <MainMenu source={this.state.menuItems} />
      </div>
    );
  }
}

export default Header;
