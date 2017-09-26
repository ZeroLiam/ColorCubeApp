import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeContainer from "./../components/CubeContainer";
import AboutMore from './../components/AboutMore';
import "./../styles/components_styles.css";
import img10 from './../assets/ex/010.jpg';

class ContrastF extends Component {
  render() {
    return (
      <div className="Home">
        <Header title="Quality Contrast" />

        <AboutMore>
            <p className="text-left">
            Quality or Saturation, relates to the degree of purity of a color. Contrast of saturation is the contrast between pure, intense colors and dull diluted ones. Colors can be diluted in four different ways: adding white to the color, mixing it with black (for subtractive mixture), mixing it with gray, and with its complementary colors.
            </p>

            <p className="text-left">
            For this exercise, the color selected can be diluted by adding white, grey and it&#8218;s complementary. The option of adding black is not possible since the project works with lights and black is equal to 0, the absence of light.
            </p>

            <p className="text-left">
            Küppers describes Saturation Contrast as a esthetic feature and calls it &#8220;Chromaticity or Achromaticity Degree&#8221;.
            </p>
            <p className="text-center">
                <img src={img10} alt="010.jpg" />
            </p>
        </AboutMore>

        <CubeContainer type="impressive" />
      </div>
    );
  }
}

export default ContrastF;
