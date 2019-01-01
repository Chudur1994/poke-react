import React from "react";

const typeColors = {
  fire: "#EF8038",
  water: "#678CEC",
  grass: "#79C85A",
  electric: "#F8D043",
  psychic: "#F65785",
  ice: "#97D7D7",
  dragon: "#6E2EF3",
  dark: "#6F594A",
  fairy: "#ED97A9",
  normal: "#A7A77A",
  fighting: "#BE322B",
  flying: "#A58CEC",
  poison: "#9D3E9C",
  ground: "#DFBF6D",
  rock: "#B6A042",
  bug: "#A7B836",
  ghost: "#6F5795",
  steel: "#B6B6CE"
};

const Type = ({ type }) => {
  return (
    <p
      // display the color associated with the type
      style={{ background: typeColors[type] }}
      className="pokemon-type"
    >
      {type}
    </p>
  );
};

export default Type;
