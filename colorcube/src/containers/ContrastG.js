import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeContainer from "./../components/CubeContainer";
import AboutMore from './../components/AboutMore';
import "./../styles/components_styles.css";
import img11 from './../assets/ex/011.jpg';

class ContrastG extends Component {
  render() {
    return (
      <div className="Home">
        <Header title="Quantity Contrast" />

        <AboutMore>
            <p className="text-left">
            Also described as Contrast of Extension, it involves the relative areas of two or more colors and their intensities. The Extension harmony is a point where two colors are balanced into equal appearance by adjusting their areas to their intensities.
            </p>

            <p className="text-left">
            Itten designed to a color wheel with the proportions of complementaries adequate for the two factors determine the force of a pure color, its brilliance and its extension. He recommended that, to estimate brilliance or light value, is important to compare the pure colors on a neutral gray background of medium brilliance.
            </p>
            <p className="text-center">
                <img src={img11} alt="011.jpg" />
            </p>
        </AboutMore>

        <CubeContainer type="impressive" />
      </div>
    );
  }
}

export default ContrastG;
