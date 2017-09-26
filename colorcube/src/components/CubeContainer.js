import React, { Component } from 'react';
import CubeCSS from "./CubeCSS";
import ColorSlider from "./ColorSlider";
// import socketio from './../lib/ws_client';

class CubeContainer extends Component {
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

  componentDidMount(){
    // let dtobj = {};
    // socketio.on('connect', () => {
    //   console.log("socketio.id: " + socketio.id); // Generate ID of client
    //   //Change the id of client and send it to the server
    //   dtobj.id = socketio.id;
    //   dtobj.luz = [this.state.rcol,this.state.gcol, this.state.bcol];
    //   socketio.emit('fromcube', dtobj);
    //   });
    //
    // socketio.on('disconnect', () =>{
    //   console.log('user disconnected');
    // });
  }

  componentDidUpdate(prevProps, prevState){

      // let luz = [this.state.rcol,this.state.gcol, this.state.bcol];
      // socketio.emit('lightvalues', luz);
  }

  onUpdateRX(val){
    this.setState(prevState =>{
      prevState.rotx = val;
      return prevState;
    });
  }

  onUpdateRY(val){
    this.setState(prevState =>{
      prevState.roty = val;
      return prevState;
    });
  }

  onUpdateRZ(val){
    this.setState(prevState =>{
      prevState.rotz = val;
      return prevState;
    });
  }

  onUpdateRCol(val){
    this.setState(prevState =>{
      prevState.rcol = val;
      return prevState;
    });
    // let luz = [this.state.rcol,this.state.gcol, this.state.bcol];
    // socketio.emit('lightvalues', luz);
  }

  onUpdateGCol(val){
    this.setState(prevState =>{
      prevState.gcol = val;
      return prevState;
    });
    // let luz = [this.state.rcol,this.state.gcol, this.state.bcol];
    // socketio.emit('lightvalues', luz);
  }

  onUpdateBCol(val){
    this.setState(prevState =>{
      prevState.bcol = val;
      return prevState;
    });
    // let luz = [this.state.rcol,this.state.gcol, this.state.bcol];
    // socketio.emit('lightvalues', luz);
  }

  render() {
    let sample = {
      backgroundColor: `rgba(${this.state.rcol},${this.state.gcol},${this.state.bcol},1)`
    }
    return (
      <div className="cube-container">
          <div className="mainCube">
            <CubeCSS  floorRows="4" floorCols="4" floors="4"
                      leftside="4" rightside="3"
                      sequenceL="7" sequenceR="0"
                      rX={this.state.rotx} rY={this.state.roty} rZ={this.state.rotz}
                      cR={this.state.rcol} cG={this.state.gcol} cB={this.state.bcol}/>
          </div>
          <div className="rgb-controllers">
            <ColorSlider Color="red" Value="10" onUpdate={(...args) => this.onUpdateRCol(...args)} />
            <ColorSlider Color="green" Value="10" onUpdate={(...args) => this.onUpdateGCol(...args)} />
            <ColorSlider Color="blue" Value="10" onUpdate={(...args) => this.onUpdateBCol(...args)} />
          </div>
          <div style={{backgroundColor: sample.backgroundColor}} className="color-sample">
          </div>
      </div>
    );
  }
}

export default CubeContainer;
