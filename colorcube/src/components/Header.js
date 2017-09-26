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
      openMore: false,
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

    if(value){//fa-bars
      $(".header-menu .fa").removeClass("active");
      $(".header-menu .fa").addClass("deactive");
        $(".main-menu").removeClass("main-menu-out");
        $(".main-menu").addClass("main-menu-in");
    }else{
      $(".header-menu .fa").removeClass("deactive");
      $(".header-menu .fa").addClass("active");
        $(".main-menu").removeClass("main-menu-in");
        $(".main-menu").addClass("main-menu-out");
    }
  }

  //open and close More (chevron arrows)
  clickMore(e){
    let value = !this.state.openMore;

    this.setState({openMore: value});

    if(value){
      $(".header-dropdown .fa").removeClass("fa-chevron-down");
      $(".header-dropdown .fa").addClass("fa-chevron-up");
      $(".about-more").removeClass("about-more-out");
      $(".about-more").addClass("about-more-in");
    }else{
    $(".header-dropdown .fa").removeClass("fa-chevron-up");
    $(".header-dropdown .fa").addClass("fa-chevron-down");
      $(".about-more").removeClass("about-more-in");
      $(".about-more").addClass("about-more-out");
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
        <div className="header-dropdown" onClick={(...args) => this.clickMore(...args)} >
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>

      </div>
        <MainMenu source={this.state.menuItems} />
      </div>
    );
  }
}

export default Header;
