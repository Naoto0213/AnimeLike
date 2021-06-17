import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import { Page404 } from "../pages/Page404";
import { Home } from "../pages/Home";

const Router: React.VFC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
};

export default Router;
