import React from "react";

import LandingItem from "./LandingItem";

const Landing = () => {
  return (
    <div>
      <div id="hero">
        <div>
          <p>Shop the latest and take down the Elite 4!</p>
          <a className="button">Shop</a>
        </div>
      </div>
      <div id="landing">
        <LandingItem name="Pokemons" />
        <LandingItem name="Items" />
        <LandingItem name="Berries" />
        <LandingItem name="Moves" />
      </div>
    </div>
  );
};

export default Landing;
