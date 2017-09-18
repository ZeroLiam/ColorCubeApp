import React, { Component } from 'react';
import logo from './../assets/CuboLogo.svg';
import './../App.css';

class Header extends Component{
  constructor(props) {
    super(props);

    this.state = {
      openMenu: true
    }
  }

  //openMenu
  clickMenu(e){
    let value = !this.state.openMenu;

    this.setState({openMenu: value});

    console.log("openMenu: ", this.state.openMenu);
  }

  render(){
    return(
      <div className="App-header">
        <div className="header-menu" onClick={(...args) => this.clickMenu(...args)} >
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
