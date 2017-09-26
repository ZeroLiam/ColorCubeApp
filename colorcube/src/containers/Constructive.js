import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeContainer from "./../components/CubeContainer";
import AboutMore from './../components/AboutMore';
import "./../styles/components_styles.css";
import img1 from './../assets/ex/001.jpg';
import img2 from './../assets/ex/002.jpg';

class Constructive extends Component {
  render() {
    return (
      <div className="component-page">
        <div className="Home">
          <Header title="Constructive" />

          <AboutMore>
            <p className="text-left">
              Constructive color theory embraces the principles of color effects insofar as they can be derived empirically. (Itten 1961, p 28).
            </p>
            <p className="text-left">
              Newton made different experiments about refraction of white light, he took the seven hues and explained they as a consequence of the different wave lengths of the light rays adding purple between red and violet, creating an artificially augmented spectrum.
            </p>
            <p className="text-center">
                <img src={img1} alt="001.jpg" />
            </p>
            <p className="text-left">
              Itten took first a sphere for his color model (inspired by Phillip Otto Runge). Then he also propound his color circle to represent his theory. For that he established three primary colors (red, blue and yellow) placed as an equilateral triangle with yellow at the top. red at the lower right and blue at the lower left.
            </p>
            <p className="text-left">
              After that the triangle is situated in the middle of a circle which is inscribed by an hexagon, in its vertices the primary colors are placed and between them the secondary colors, and between them the tertiary colors. creating a 12 hue color circle.
            </p>
            <p className="text-center">
                <img src={img2} alt="002.jpg" />
            </p>
            <p className="text-left">
              In this case RGB model is used to represent and interact with Itten’s color theory. This model consist on a cube created by three values R-G- B lights (used as primary colors). With this interactive cube, base in the RGB model, by changing the values of the different lights many colors and mixtures can be created in order to test and interact with color and Itten&#8217;s theory.
              </p>
          </AboutMore>

          <CubeContainer type="constructive" />
        </div>
      </div>
    );
  }
}

export default Constructive;
