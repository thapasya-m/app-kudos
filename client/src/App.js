import React from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import UserDashboard from "./screens/UserDashboard";
import ColleagueDetail from "./screens/ColleagueDetail";
import SignIn from "./screens/SignIn";

function App() {
  return (
    <Switch>
      <Route component={SignIn} path="/signin" />
      <PrivateRoute component={UserDashboard} path="/dashboard" />
      <PrivateRoute component={ColleagueDetail} path="/colleagues" />
      <Route path="*" render={() => <Redirect to="/signin" />} />
    </Switch>
  );
}

function PrivateRoute({ children, ...rest }) {
  const userInfo = localStorage.getItem("user");

  const isAuth = userInfo ? true : false;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin"
            }}
          />
        )
      }
    />
  );
}

export default App;
