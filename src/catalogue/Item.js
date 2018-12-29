import React from "react";
import { startCase } from "lodash";

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

const prices = ["10.99", "20.99", "30.99", "40.99", "50.99"];

class Item extends React.Component {
  state = {
    name: "",
    image: "",
    types: []
  };

  test = () => {
    console.log("test");
  };

  componentDidMount() {
    const { url, category } = this.props;

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

  fetchItem = url => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(result => {
        if (result.item !== undefined) {
          return fetch(result.item.url);
        } else {
          this.setState({
            image: result.sprites.default,
            name: this.props.name
          });
        }
      })
      .then(res => {
        return res.json();
      })
      .then(result => {
        this.setState({
          image: result.sprites.default,
          name: this.props.name
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ name: this.props.name });
      });
  };

  fetchPokemon = url => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(result => {
        // get all varieties of the pokemon
        const varieties = result.varieties;
        // find the default variety
        const defaultVar = varieties.find(variety => {
          return variety.is_default;
        });
        // get data about default variety
        return fetch(defaultVar.pokemon.url);
      })
      .then(res => {
        return res.json();
      })
      .then(result => {
        const types = result.types.map(type => {
          return type.type.name;
        });
        this.setState({
          image: result.sprites.front_default,
          name: this.props.name,
          types
        });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
        this.setState({ name: this.props.name });
      });
  };

  render() {
    const { name, image, types } = this.state;
    const imageType =
      this.props.category === "pokemon-species" ? "pokemon" : "item";
    return (
      <div className="item" onClick={this.test}>
        <img className={`${imageType}`} src={image} alt="" />
        <p className="name">{startCase(name)}</p>
        <div className="item-preview-info">
          {/* if it has types, show it */}
          {types && (
            <div className="types-container">
              {types.map(type => {
                return (
                  <p
                    // display the color associated with the type
                    style={{ background: typeColors[type] }}
                    className="pokemon-type"
                    key={type}
                  >
                    {type}
                  </p>
                );
              })}
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
