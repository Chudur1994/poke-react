import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div id="header">
        <Link className="logo" to="/">
          PokeStore
        </Link>
        <div id="menu">
          <Link to="/">Pokemons</Link>
          <Link to="/">Items</Link>
          <Link to="/">Berries</Link>
          <Link to="/">Moves</Link>
        </div>
        <Link to="/">Cart</Link>
      </div>
      <div id="hero">
        <div>
          <p>Shop the latest and take down the Elite 4!</p>
          <a className="button">Shop</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
