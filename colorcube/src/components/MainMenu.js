import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menulogo from './../assets/colorcubelogoH.png';
import _ from 'lodash';
import "./../styles/components_styles.css";

class MainMenu extends Component {

//Show Menu list
  listMenu(){
    return(
        _.map(this.props.source, (value, key)=>{
          return (
            <Link key={key} to={value.link}>
              <li id={value.id} className={window.location.pathname === value.link ? 'active' : 'deactive'}> {value.title} </li>
            </Link>
          )
        })
    );
  }

  render() {

    return (
      <div className="main-menu main-menu-out">
        <div className="main-menu-logo">
            <Link to="/"><img src={menulogo} alt="Color Cube Logo" /></Link>
        </div>
        <ul className="menu-link-list">{this.listMenu()}</ul>
      </div>
    );
  }
}

export default MainMenu;
