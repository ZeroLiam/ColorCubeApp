import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import './App.css';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
