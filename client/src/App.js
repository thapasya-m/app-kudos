import React from 'react';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';
import UserDashboard from './components/UserDashboard';
import ColleagueDetail from './components/ColleagueDetail';

function App() {
  return (
    <Switch>
      {/* <Route component={SignIn} path="/"/> */}
      <Route component={UserDashboard} path="/dashboard"/> 
      <Route component={ColleagueDetail} path="/colleagues"/> 
      <Route component={UserDashboard} path="/" exact/>
      <Route path="*" render={() => <Redirect to="/dashboard"/>}/>
    </Switch>
  );
}

export default App;
