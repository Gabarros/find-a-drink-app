import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import ProductsList from "./pages/ProductsList";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products/:latitude/:longitude" component={ProductsList} />
    </Switch>
  );
}
