import React from "react";
import API from "../API";
import Pagination from "./Pagination";

class Pokemons extends React.Component {
  render() {
    return <Pagination url="pokemon" />;
  }
}

export default Pokemons;
