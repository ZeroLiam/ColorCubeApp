import React, { Component } from 'react';
import splashlogo from './../assets/colorcubelogoV.png';
import $ from 'jquery';
import "./../styles/components_styles.css";

class Splash extends Component {

  render() {
    window.setTimeout(()=>{
      $(".splash-container").removeClass("splash-component");
      $(".splash-container").addClass("splash-component-hide");
    },2600);

    return (
      <div className="splash-container">
        <div className="splash-component">
          <img src={splashlogo} />
        </div>
      </div>
    );
  }
}

export default Splash;
