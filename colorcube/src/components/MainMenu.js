import React, { Component } from 'react';
import menulogo from './../assets/colorcubelogoH.png';
import "./../styles/components_styles.css";

class MainMenu extends Component {
  render() {
    return (
      <div className="main-menu main-menu-out">
        <div className="main-menu-logo">
            <img src={menulogo} />
        </div>
      </div>
    );
  }
}

export default MainMenu;
