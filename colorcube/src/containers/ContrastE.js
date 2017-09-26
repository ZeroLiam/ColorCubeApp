import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeContainer from "./../components/CubeContainer";
import AboutMore from './../components/AboutMore';
import "./../styles/components_styles.css";
import img9 from './../assets/ex/009.jpg';

class ContrastE extends Component {
  render() {
    return (
      <div className="Home">
        <Header title="Simultaneous Contrast" />

        <AboutMore>
            <p className="text-left">
            Simultaneous contrast results from the fact that for any given color the eye simultaneously requires and triggers the complementary color, and generates it spontaneously, it is a sensation and is not objectively present.
            </p>
            <p className="text-center">
                <img src={img9} alt="009.jpg" />
            </p>

            <p className="text-left">
            According to Itten simultaneous effects become more intense the longer the background is viewed and the more luminous the color. This effect has a major importance. For Goethe simultaneous contrast determines the aesthetic utility of color. Itten 1969.
            </p>

            <p className="text-left">
            In this case after selecting the color the user should concentrate the view in the cube for ten seconds. After that the cube would be gray but due to this special effect the user would be able to perceive the complementary of the color selected. The photo option would not be present for this exercise since it involves a physiological process.
            </p>
        </AboutMore>

        <CubeContainer type="impressive" />
      </div>
    );
  }
}

export default ContrastE;
