import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeContainer from "./../components/CubeContainer";
import AboutMore from './../components/AboutMore';
import "./../styles/components_styles.css";
import img6 from './../assets/ex/006.jpg';
import img7 from './../assets/ex/007.jpg';

class ContrastC extends Component {
  render() {
    return (
      <div className="Home">
        <Header title="Cold-Warm Contrast" />

        <AboutMore>
            <p className="text-left">
            Color temperature is a subjective matter. Warm colors can be found in the red/yellow segment of the color circle and cold ones in the purple blue segment.
            </p>

            <p className="text-left">
            But cold and warm can be relative. a color can be described as warmer or colder in comparison with another color. For instance: red looks warmer than magenta, but magenta looks warmer in comparison with blue.
            </p>

            <p className="text-left">
            Warm- cold contrast is effective for representing depth and distance. Warmer colors come to a first plane, a closer distance while colder colors tempt to suggest depth and a longer distance.
            </p>
            <p className="text-center">
                <img src={img6} alt="006.jpg" />
            </p>

            <p className="text-left">
            Itten describes 9 opposite contrary terms in order to show the expressive power of coldwarm contrast.
            </p>
            <p className="text-center">
                <img src={img7} alt="007.jpg" />
            </p>
        </AboutMore>

        <CubeContainer type="impressive" />
      </div>
    );
  }
}

export default ContrastC;
