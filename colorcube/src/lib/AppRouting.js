import React from 'react';
import { Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './../containers/Home';
import Constructive from './../containers/Constructive';
import Impressive from './../containers/Impressive';
import Expressive from './../containers/Expressive';
import Gallery from './../containers/Gallery';
import ConnectCube from './../containers/ConnectCube';
import NoMatch from './../containers/NoMatch';

const history = createBrowserHistory();

const AppRouting = () =>{

    return(
      <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/constructive" component={Constructive}/>
            <Route path="/impressive" component={Impressive}/>
            <Route path="/expressive" component={Expressive}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/connectcube" component={ConnectCube}/>
            <Route component={NoMatch}/>
          </Switch>
      </Router>
    );
}

export default AppRouting;
