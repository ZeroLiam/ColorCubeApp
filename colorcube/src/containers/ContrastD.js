import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeContainer from "./../components/CubeContainer";
import AboutMore from './../components/AboutMore';
import "./../styles/components_styles.css";
import img8 from './../assets/ex/008.jpg';

class ContrastD extends Component {
  render() {
    return (
      <div className="Home">
        <Header title="Complementary Contrast" />

        <AboutMore>
        <p className="text-left">
        According to Itten, two colors are complementary if their pigments, mixed together produce a neutral gray. Physically, light of two complementary colors, mixed together, will yield white.
        </p>

        <p className="text-left">
        There is always one color complementary to a given color. In the color circle, complementary colors are diametrically opposite each other.
        </p>
        <p className="text-center">
            <img src={img8} alt="008.jpg" />
        </p>

        <p className="text-left">
        In this case, and with the color cube, each complementary pair yields white. For example when having a blue color R=0 G=0 B=255 it&#8217;s complementary would be yellow= R=255 G=255 B=0 and when both colors are mixed te result would be R= 255 G= 255 B=255, white.
        </p>

        <p className="text-left">
        And also if one hue of the spectrum is suppressed all the others mixed together will yield its complementary. In the example if Blue is suppressed, the sum of the other colors, green and red actually yield yellow, its complementary. When the complementary colors are proportionally used they can create a sense of equilibrium, of compensated forces.
        </p>

        <p className="text-left">
        <i>Two such colors are a strange pair. They are opposite, they require each other. They incite each other to maximum vividness when adjacent; and they annihilate each other, to gray-black, when mixed - like fire and water.</i> p 49
        </p>
        </AboutMore>

        <CubeContainer type="impressive" />
      </div>
    );
  }
}

export default ContrastD;
