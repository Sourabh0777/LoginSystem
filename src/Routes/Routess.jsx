import React from "react";
import { Route, Switch } from "react-router-dom";
import Adduser from "../Components/Molecules/Adduser/Adduser";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";

function Routess() {
  return (
    <Switch>
      <Route exact path={"/"} component={Login}></Route>
      <Route exact path={"/dashboard"} component={Dashboard}>
      </Route>
      <Route exact path={"/adduser"} children={Adduser}></Route>

    </Switch>
  );
}

export default Routess;
