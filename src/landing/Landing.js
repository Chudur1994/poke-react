import React from "react";
import { NavLink } from "react-router-dom";

import Hero from "./Hero";
import LandingItem from "./LandingItem";

const Landing = () => {
  return (
    <div>
      <Hero />
      <div id="landing">
        <LandingItem name="Pokemon" />
        <LandingItem name="Item" />
        <LandingItem name="Berry" />
        <LandingItem name="Move" />
      </div>
    </div>
  );
};

export default Landing;
