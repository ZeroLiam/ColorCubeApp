import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import './App.css';
import Index from './containers/Index';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
