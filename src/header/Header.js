import React from "react";
import { Link } from "react-router-dom";

import Menu from "./Menu";

const Header = () => {
  return (
    <div id="header">
      <Link className="logo" to="/">
        PokeStore
      </Link>
      <Menu />
      <Link to="/">Cart</Link>
    </div>
  );
};

export default Header;
