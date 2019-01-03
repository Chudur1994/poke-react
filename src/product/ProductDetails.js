import React from "react";
import StatChart from "./StatChart";

const ProductDetails = ({ flavor_text, abilities, habitat, stats, name }) => {
  return (
    <div className="product-details">
      <h5 className="details-title">Product Specifications</h5>
      <p className="flavor-text">{`"${flavor_text}"`}</p>
      <div className="abilities">
        Abilities -{" "}
        {abilities.map(ability => (
          <span className="ability" key={ability}>
            {ability}
          </span>
        ))}
      </div>
      <p className="habitat">Habitat - {habitat}</p>
      <StatChart name={name} stats={stats} />
    </div>
  );
};

export default ProductDetails;
