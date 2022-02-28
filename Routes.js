import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AbbrWA from "./component/AbbrWA";
import Login from "./component/Login";
import Navbar from "./component/NavBar";
import Operable from "./component/Operable";
import Search from "./component/Search";
import WebAccessImages from "./component/WebAccessImages";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <div>
        <Navbar />
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/image">
          <WebAccessImages />
        </Route>
        <Route path="/operable">
          <Operable />
        </Route>
        <Route path="/abbr">
          <AbbrWA />
        </Route>
      </div>
    </Switch>
  </Router>
);

export default Routes;
