import React, { Component } from 'react';
import Header from "./../components/Header";
import CubeCSS from "./../components/CubeCSS";
import socketio from './../lib/ws_client';

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

  componentDidMount(){
    let dtobj = {};
    socketio.on('connect', () => {
      console.log("socketio.id: " + socketio.id); // Generate ID of client
      //Change the id of client and send it to the server
      dtobj.id = socketio.id;
      dtobj.luz = [this.state.rcol,this.state.gcol, this.state.bcol];
      socketio.emit('fromcube', dtobj);
      });

    socketio.on('disconnect', () =>{
      console.log('user disconnected');
    });
  }

  componentDidUpdate(prevProps, prevState){
      console.log(this.state.rcol);
      console.log(this.state.gcol);
      console.log(this.state.bcol);

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

      let luz = [prevState.rcol,prevState.gcol, prevState.bcol];
      socketio.emit('lightvalues', luz);
      return prevState;
    });
    // let luz = [this.state.rcol,this.state.gcol, this.state.bcol];
    // socketio.emit('lightvalues', luz);
  }

  onUpdateGCol(val){
    this.setState(prevState =>{
      prevState.gcol = val;

      let luz = [prevState.rcol,prevState.gcol, prevState.bcol];
      socketio.emit('lightvalues', luz);
      return prevState;
    });
    // let luz = [this.state.rcol,this.state.gcol, this.state.bcol];
    // socketio.emit('lightvalues', luz);
  }

  onUpdateBCol(val){
    this.setState(prevState =>{
      prevState.bcol = val;

      let luz = [prevState.rcol,prevState.gcol, prevState.bcol];
      socketio.emit('lightvalues', luz);
      return prevState;
    });
    // let luz = [this.state.rcol,this.state.gcol, this.state.bcol];

  }

  render() {
    return (
      <div className="Home">
        <Header title="Connect Cube" />
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
