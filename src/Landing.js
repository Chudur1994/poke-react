import React from "react";

import LandingItem from "./LandingItem";

const Landing = () => {
  return (
    <div id="landing">
      <LandingItem name="Pokemons" />
      <LandingItem name="Items" />
      <LandingItem name="Berries" />
      <LandingItem name="Moves" />
    </div>
  );
};

export default Landing;
