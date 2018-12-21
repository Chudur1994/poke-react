import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Landing from "./Landing";

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
    </Switch>
  );
};

export default Main;
