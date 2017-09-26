import React, { Component } from 'react';
import Header from "./../components/Header";
import gal from './../assets/gal.jpg';

class Gallery extends Component {
  render() {
    return (
      <div className="Home">
        <Header title="Gallery" />
        <div className="gallery-mockup">
        <p className="text-center">
            <img src={gal} alt="gallery" />
        </p>
        </div>
      </div>
    );
  }
}

export default Gallery;
