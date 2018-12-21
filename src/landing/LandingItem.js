import React from "react";
import { Link } from "react-router-dom";

const LandingItem = props => {
  return (
    <div>
      <div>
        <p>{props.name}</p>
        <Link to={"/" + props.name}>Shop</Link>
      </div>
    </div>
  );
};

export default LandingItem;
