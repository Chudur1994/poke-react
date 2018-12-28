import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./landing/Landing";
import Catalogue from "./catalogue/Catalogue";

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route
        path="/catalogue/:category/:type?/:typeOption?"
        component={Catalogue}
      />
    </Switch>
  );
};

export default Main;
