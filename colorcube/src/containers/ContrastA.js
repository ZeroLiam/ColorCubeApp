import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeContainer from "./../components/CubeContainer";
import AboutMore from './../components/AboutMore';
import "./../styles/components_styles.css";
import img4 from './../assets/ex/004.jpg';

class ContrastA extends Component {
  render() {
    return (
      <div className="Home">
        <Header title="Contrast of Hue" />

        <AboutMore>
            <p className="text-left">
            Contrast of hue, is created using the undiluted colors in their most intense luminosity. According to Itten the he strongest combination is created with the primary colors: red blue yellow.
            </p>

            <p className="text-left">
            In this case the contrast options provided are made with the RGB, another with yellow red and blue and also with CMY primary colors, in a pure undiluted way.
            </p>

            <p className="text-left">
            <i>As Itten said: The significance of this contrast involves the interplay of primeval luminous forces. The undiluted primaries and secondaries always have a character of aboriginal cosmic splendor as well as concrete actuality. Therefore they serve equally well to portray a celestial coronation or a mundane still life.</i> (1969. p.34)
            </p>
            <p className="text-center">
                <img src={img4} alt="004.jpg" />
            </p>
        </AboutMore>

        <CubeContainer type="impressive" />
      </div>
    );
  }
}

export default ContrastA;
