import React from "react";
import { NavLink } from "react-router-dom";

import Hero from "./Hero";
import LatestItems from "./LatestItems";

const Landing = () => {
  return (
    <div>
      <Hero />
      <div id="landing">
        <LatestItems />
      </div>
    </div>
  );
};

export default Landing;
