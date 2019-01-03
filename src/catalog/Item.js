import React from "react";
import { startCase } from "lodash";

import Type from "./Type";

const prices = ["10.99", "20.99", "30.99", "40.99", "50.99"];

class Item extends React.Component {
  state = {
    types: [],
    details: {},
    quantity: 99,
    handleCartAdd: quantity => {
      this.setState({ quantity: this.state.quantity - quantity });
    }
  };

  componentDidMount() {
    const { category } = this.props;
    const { url } = this.props.item;

    switch (category) {
      case "pokemon-species":
        this.fetchPokemon(url);
        break;
      case "item":
        this.fetchItem(url);
        break;
      default:
        break;
    }
  }

  fetchItem = async url => {
    const { name } = this.props.item;
    let details = {};
    let image = ""; // holds image url
    let result = await fetch(url).then(res => res.json());
    if (result.item !== undefined) {
      result = await fetch(result.item.url).then(res => res.json());
    }
    image = result.sprites === undefined ? "" : result.sprites.default;
    details = { image, name: startCase(name) };
    this.setState({ details });
  };

  fetchPokemon = async url => {
    const { name } = this.props.item;
    let details = {};
    let result = await fetch(url).then(res => res.json());
    details.flavor_text = result.flavor_text_entries.find(entry => {
      if (entry.language.name === "en") {
        return entry.flavor_text;
      }
    });
    details.flavor_text = details.flavor_text.flavor_text;
    details.habitat =
      result.habitat === null ? "Unknown" : startCase(result.habitat.name);
    // get all varieties of the pokemon
    const varieties = result.varieties;
    // find the default variety
    const defaultVar = varieties.find(variety => variety.is_default);
    result = await fetch(defaultVar.pokemon.url).then(res => res.json());

    details.types = result.types.map(type => type.type.name);
    details.abilities = result.abilities.map(ability =>
      startCase(ability.ability.name)
    );
    details.height = result.height;
    details.weight = result.weight;
    details.moves = result.moves.map(move => startCase(move.move.name));
    details.image = result.sprites.front_default;
    details.name = startCase(name);
    details.sprites = result.sprites;
    details.stats = result.stats.map(stat => {
      return { name: startCase(stat.stat.name), value: stat.base_stat };
    });

    this.setState({ details });
  };

  handleCartAdd = quantity => {
    this.setState({ quantity: this.state.quantity - quantity });
  };

  handleClick = () => {
    this.props.itemClick(this.state.details, this.state.quantity);
  };

  render() {
    const { name, image, types } = this.state.details;
    // pokemon images will have a larger width
    const imageType =
      this.props.category === "pokemon-species" ? "pokemon" : "item";
    return (
      <div className="item" onClick={this.handleClick}>
        <img className={`${imageType}`} src={image} alt="" />
        <p className="name">{name}</p>
        <div className="item-preview-info">
          {/* if it has types, show it */}
          {types && (
            <div className="types-container">
              {types.map(type => (
                <Type key={type} type={type} />
              ))}
            </div>
          )}
          {/* pick a random price for each item */}
          <p className="price">
            ${prices[Math.floor(Math.random() * prices.length)]}
          </p>
        </div>
      </div>
    );
  }
}

export default Item;
