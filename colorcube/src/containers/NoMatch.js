import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from "./../components/Header";

class NoMatch extends Component {
  render() {
    return (
      <div className="Home">
        <Header title="404 :("/>

        <div className="app-content">
          <h3>Sorry! The url you typed does not exist. Wanna try again? <Link to="/">Go back home </Link></h3>
        </div>
      </div>
    );
  }
}

export default NoMatch;
