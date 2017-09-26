import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeContainer from "./../components/CubeContainer";
import AboutMore from './../components/AboutMore';
import "./../styles/components_styles.css";
import img5 from './../assets/ex/005.jpg';

class ContrastB extends Component {
  render() {
    return (
      <div className="Home">
        <Header title="Light-Dark Contrast" />

        <AboutMore>
            <p className="text-left">
            Light and dark like day and night are natural contrasts and the maximal polarity can be found with white and black. Placing those values at the extremes different shades of gray can be located in the middle.
            </p>

            <p className="text-left">
            Grey is a neutral color that can be easily influenced by the colors surrounding it. With chromatics colors is more difficult to create darklight gradations, for that the exercise provided attempts to help to identify the equal brilliance in each step of the color gradations. This contrast is fundamental to understand and develope the chiaroscuro technique.
            </p>
            <p className="text-center">
                <img src={img5} alt="005.jpg" />
            </p>
        </AboutMore>

        <CubeContainer type="impressive" />
      </div>
    );
  }
}

export default ContrastB;
