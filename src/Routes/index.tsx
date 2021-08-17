import React from 'react';
import {Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import Route from './Route';
const Routes: React.FC = () => {
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/details" exact component={Details}/>
    </Switch>
  );
}

export default Routes;