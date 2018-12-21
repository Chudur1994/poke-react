import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <Link className="logo" to="/">
        PokeStore
      </Link>
      <div id="menu">
        <NavLink to="/Pokemons">Pokemons</NavLink>
        <NavLink to="/">Items</NavLink>
        <NavLink to="/Berries">Berries</NavLink>
        <NavLink to="/">Moves</NavLink>
      </div>
      <Link to="/">Cart</Link>
    </div>
  );
};

export default Header;
