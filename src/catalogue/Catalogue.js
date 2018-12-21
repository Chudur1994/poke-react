import React from "react";
import Pokemons from "./Pokemons";
import Berries from "./Berries";

const Catalogue = props => {
  const getCatalogue = () => {
    switch (props.match.params.id) {
      case "Pokemons":
        return <Pokemons />;
      case "Berries":
        return <Berries />;
      default:
        break;
    }
  };

  return getCatalogue();
};

export default Catalogue;
