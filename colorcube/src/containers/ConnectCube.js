import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeCSS from "./../components/CubeCSS";

class ConnectCube extends Component {
  constructor(props) {
      super(props);

      this.state = {
        rotx: -26,
        roty: 48,
        rotz: -31,
        rcol: 0,
        gcol: 0,
        bcol: 0
      }
    }

  render() {
    return (
      <div className="Home">
        <Header title="Connect Color Cube" />
        <div className="mainCube">
          <CubeCSS  floorRows="4" floorCols="4" floors="4"
                    leftside="4" rightside="3"
                    sequenceL="7" sequenceR="0"
                    rX={this.state.rotx} rY={this.state.roty} rZ={this.state.rotz}
                    cR={this.state.rcol} cG={this.state.gcol} cB={this.state.bcol}/>
        </div>
      </div>
    );
  }
}

export default ConnectCube;
