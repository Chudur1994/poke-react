import axios from "axios";

export default axios.create({
  baseURL: `http://pokeapi.salestock.net/api/v2/`
});
