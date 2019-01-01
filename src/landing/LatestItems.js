import React from "react";
import { NavLink } from "react-router-dom";
import { shuffle, startCase } from "lodash";

const url = "https://pokeapi.co/api/v2/generation/7/";

class LatestItems extends React.Component {
  state = {
    items: []
  };

  async componentDidMount() {
    await this.fetchLatest().then(items => this.setState({ items }));
  }

  fetchLatest = async () => {
    // get list of pokemons from the latest gen
    const generationRes = await fetch(url);
    const generationResult = await generationRes.json();

    // get 6 random latest pokemons
    const randomsUrls = shuffle(generationResult.pokemon_species)
      .slice(1, 7)
      .map(item => item.url);

    // get an array of promises from fetch requests
    let responses = await Promise.all(
      randomsUrls.map(url => {
        const pokemonIndex = url.split("/")[url.split("/").length - 2];
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`);
      })
    );

    let results = await Promise.all(
      responses.map(res => {
        return res.json();
      })
    );

    let items = [];
    results.forEach(item => {
      items.push({
        name: startCase(item.name),
        image: item.sprites.front_default
      });
    });
    return items;
  };

  render() {
    const { items } = this.state;
    const itemsList =
      items.length > 0 &&
      items.map(item => {
        return (
          <div className="latest-item-image" key={item.name}>
            <img src={item.image} />
            <span>{item.name}</span>
          </div>
        );
      });
    return (
      <div>
        <h4 className="latest-title">Meet the New Generation of Pokemons!</h4>
        <div className="latest-container">
          <div className="latest-info">
            <h4 className="title">Generation 7 </h4>
            <p>The new Alola region has revealed:</p>
            <ul className="features">
              <li>81 New Species</li>
              <li>80 New Moves</li>
              <li>41 New Abilities</li>
            </ul>
            <NavLink
              to="/catalog/pokemon/generation/7"
              className="shop-latest-btn"
            >
              Shop Now
            </NavLink>
          </div>
          <div className="latest-items">{itemsList}</div>
        </div>
      </div>
    );
  }
}

export default LatestItems;
