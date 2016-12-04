import React from 'react'
import { render } from 'react-dom'
import Component from './Component'
import Child from './Child'

import { Router, Route, hashHistory } from 'react-router';

render((
  <Router history={hashHistory}>
    <Route path="/" component={Component}>
        <Route path="/home" component={Child}/>
    </Route>
  </Router>
), document.getElementById('app'));