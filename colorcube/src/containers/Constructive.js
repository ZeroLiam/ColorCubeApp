import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeContainer from "./../components/CubeContainer";
import AboutMore from './../components/AboutMore';

class Constructive extends Component {
  render() {
    return (
      <div className="component-page">
        <div className="Home">
          <Header title="Constructive" />
          <CubeContainer type="constructive" />
        </div>
        <AboutMore>
        <p className="text-left">This app is inpired in the Color Theory of Johannes Itten described in the book “Elements of Color” Published in Germany in 1969.</p>
        <p className="text-left">Itten describes Color as forces, radiant energies that affect us positively or negatively.</p>
        <p className="text-left">The artist is interested in color effects from their aesthetic aspect that may be studied from 3 approaches:</p>
          <p>- Impressive (visually)<br/>
          - Expressive (emotionally)<br/>
          - Constructive (symbolically)</p>

          <p className="text-right"> &#34;<i>This three aspects are not independent, Symbolism without visual accuracy and without emotional force would be mere anemic formalism: visually impressive effect without symbolic verity and emotional power would be banal imitative naturalism; emotional effect without constructive symbolic content or visual strength would be limited to the plane of sentimental expression. Of course every artist will work according to his temperament. and must emphasize one or another of these aspects</i>&#34;.</p>
          <p className="text-right"><i>Itten</i>, 1969, p.13</p>

          <p className="text-left">
            Constructive color theory embraces the principles of color effects insofar as they can be derived empirically. (Itten 1961, p 28). Newton made different experiments about refraction of white light, he took the seven hues and explained they as a consequence of the different wave lengths of the light rays adding purple between red and violet. Creating an artificially augmented spectrum.
          </p>
        </AboutMore>
      </div>
    );
  }
}

export default Constructive;
