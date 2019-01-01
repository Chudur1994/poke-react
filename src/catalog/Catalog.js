import React from "react";

import ItemList from "./ItemList";
import Product from "../product/Product";
import { Route } from "react-router-dom";

class Catalog extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <div className="catalog">
        <Route path={match.path} component={ItemList} />} />
      </div>
    );
  }
}

export default Catalog;
