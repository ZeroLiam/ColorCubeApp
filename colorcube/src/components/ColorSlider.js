import React, { Component } from 'react';
import _ from 'lodash';
import './../styles/components_styles.css';

class ColorSlider extends Component{
  constructor(props){
    super(props);

    this.state = {
      intensityLvl: 0
    }
  }

  onIntensityChange(e){
    let value = e.target.value;
    this.props.onUpdate(e.target.value);

    if(!_.isEmpty(e.target.value)){
      this.setState(prevState =>{
        prevState.intensityLvl = value;
        return prevState;
      });
    }
  }

  getColorLabel(color){
    switch(color){
      case 'red':
        return 'R';
      case 'green':
        return 'G';
      case 'blue':
        return 'B';
      default:
        return '';
    }
  }

  render(){
    return(
        <div className="sliderControl">
          <label htmlFor={this.props.Color}>{this.getColorLabel(this.props.Color)} </label>
          <input type="range" id={this.props.Color} min="0" max="255" value={this.state.intensityLvl} onInput={(...args) => this.onIntensityChange(...args)} />
          <output htmlFor={this.props.Color} id="level">{this.state.intensityLvl}</output>
      </div>
    );
  }
}

export default ColorSlider;
