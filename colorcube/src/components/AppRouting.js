import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Index from './../containers/Index';


const AppRouting = () => (
    <Switch>
      <Route exact path="/" component={Index}/>
    </Switch>
)


export default AppRouting;
