import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./landing/Landing";
import Catalog from "./catalog/Catalog";
import Product from "./product/Product";

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route
        path="/catalog/:category/:type?/:typeOption?"
        component={Catalog}
      />
      <Route path={"/product/:name"} component={Product} />
      />
    </Switch>
  );
};

export default Main;
