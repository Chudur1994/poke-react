import React from "react";
import { NavLink } from "react-router-dom";

const LandingItem = props => {
  const { name } = props;
  return (
    <div>
      <div>
        <p>{name}</p>
        <NavLink to={"/" + name.toLowerCase()}>Shop</NavLink>
      </div>
    </div>
  );
};

export default LandingItem;
