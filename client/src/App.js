import React from "react";
import "./App.css";

import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import UserDashboard from "./screens/UserDashboard";
import ColleagueDetail from "./screens/ColleagueDetail";
import SignIn from "./screens/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={SignIn} path="/signin" />
        <PrivateRoute path="/dashboard">
          <UserDashboard />
        </PrivateRoute> />
        <PrivateRoute path="/colleagues">
          <ColleagueDetail />
        </PrivateRoute>/>
        <Route path="*" render={() => <Redirect to="/signin" />} />
      </Switch>
    </BrowserRouter>
  );
}

function PrivateRoute({ children, ...rest }) {
  const userInfo = localStorage.getItem("user");

  const isAuth = userInfo ? true : false;
  return (
    <Route
      {...rest}
      render={(renderProps) =>
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
