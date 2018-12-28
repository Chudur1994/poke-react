import React from "react";
import { capitalize } from "lodash";
import { NavLink } from "react-router-dom";

import Card from "./Card";

const urls = [
  "https://pokeapi.co/api/v2/pokemon/1/",
  "https://pokeapi.co/api/v2/item/126/",
  "https://pokeapi.co/api/v2/pokemon/644/",
  "https://pokeapi.co/api/v2/item/193/",
  "https://pokeapi.co/api/v2/item/1/"
];

class Hero extends React.Component {
  state = {
    items: [],
    currentItem: 0
  };

  async componentDidMount() {
    await this.fetchData().then(items => this.setState({ items }));
    setTimeout(() => {
      this.rotateImage();
    }, 3500);
  }

  fetchData = async () => {
    // get an array of promises from fetch requests
    let responses = await Promise.all(urls.map(url => fetch(url)));
    let results = await Promise.all(
      responses.map(res => {
        return res.json();
      })
    );

    let items = [];
    results.forEach(item => {
      items.push({
        name: capitalize(item.name),
        image:
          item.sprites.front_default !== undefined
            ? item.sprites.front_default
            : item.sprites.default
      });
    });
    return items;
  };

  handleNext = () => {
    const currentItem =
      this.state.currentItem < this.state.items.length - 1
        ? this.state.currentItem + 1
        : this.state.currentItem;
    this.setState({ currentItem });
  };

  handlePrevious = () => {
    const currentItem =
      this.state.currentItem > 0
        ? this.state.currentItem - 1
        : this.state.currentItem;
    this.setState({ currentItem });
  };

  rotateImage = () => {
    const currentItem =
      this.state.currentItem === this.state.items.length - 1
        ? 0
        : this.state.currentItem + 1;
    this.setState({ currentItem });

    // recurse to repeat function
    setTimeout(() => {
      this.rotateImage();
    }, 3500);
  };

  render() {
    const { items, currentItem } = this.state;
    return (
      <div id="hero">
        {items.length > 0 && (
          <Card
            count={items.length}
            currentItem={currentItem}
            item={items[currentItem]}
            handleNext={this.handleNext}
            handlePrev={this.handlePrevious}
            rotateImage={this.rotateImage}
          />
        )}
      </div>
    );
  }
}

export default Hero;
