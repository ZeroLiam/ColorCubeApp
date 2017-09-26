import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeContainer from "./../components/CubeContainer";
import AboutMore from './../components/AboutMore';
import "./../styles/components_styles.css";
import img3 from './../assets/ex/003.jpg';

class Expressive extends Component {
  render() {
    return (
      <div className="Home">
        <Header title="Expressive" />

        <AboutMore>
            <p className="text-left">
            In the the Theory of Color Expression Itten said that color effects besides being physical and chemical generate also psychological responses, affecting principal areas of mental and emotional experience.
            </p>

            <p className="text-left">
            Taking into account Goethe&#8217;s Color theory. Itten expressed that color can transmit different emotions related with it. For that it is very important to consider and define the specific hue of the color and consider the context in which it is situated.
            </p>

            <p className="text-right">
              <i>The majestic cycle of respiration performed by nature in these four phases can hence be clearly and objectively represented in color: but unless we apply reason to the choice of color combinations, keeping the entire universe of color before us, we shall find none but private solutions and miss those of general truth and validity.</i><br/>Itten 1969, p84.
            </p>
        </AboutMore>

        <CubeContainer type="expressive" />
      </div>
    );
  }
}

export default Expressive;
