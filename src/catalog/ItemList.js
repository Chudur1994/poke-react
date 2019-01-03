import React from "react";
import store from "store";

import Pagination from "./Pagination";
import Item from "./Item";

const baseUrl = "https://pokeapi.co/api/v2/";

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        category:
          this.props.match.params.category === "pokemon"
            ? "pokemon-species"
            : this.props.match.params.category,
        type: this.props.match.params.type,
        typeOption: this.props.match.params.typeOption
      },
      pagination: {
        currentPage: 1,
        perPage: 15,
        numPages: null,
        pagesArr: []
      },
      items: []
    };
  }

  componentDidMount() {
    // TODO: Fix making call to API for resource count everytime page is loaded
    // Ideas: Save it to localstorage, but page renders before I have time to retrieve
    // information from the localstorage.
    // if (store.get("pagination")) {
    //   this.setState({ pagination: store.get("pagination") });
    // }
    this.fetchItems(this.state.pagination, this.state.params);
  }

  // we compare the ids of the match params to see if we need to
  // render and a new set of items
  componentWillReceiveProps(nextProps) {
    let { category, type, typeOption } = this.props.match.params;
    const nextCategory = nextProps.match.params.category;
    const nextType = nextProps.match.params.type;
    const nextTypeOption = nextProps.match.params.typeOption;

    if (
      category !== nextCategory ||
      type !== nextType ||
      typeOption !== nextTypeOption
    ) {
      const params = { ...this.state.params };
      params.category =
        nextCategory === "pokemon" ? "pokemon-species" : nextCategory;
      params.type = nextType;
      params.typeOption = nextTypeOption;
      this.fetchItems(this.state.pagination, params);
    }
  }

  getOffset = currentPage => {
    return (currentPage - 1) * this.state.pagination.perPage;
  };

  initPagination = numPages => {
    const pagination = { ...this.state.pagination };
    pagination.numPages = numPages;
    pagination.currentPage = 1;
    this.setState({ pagination });
  };

  makeUrl = params => {
    let url = "";
    if (params.type !== undefined) {
      // determine exact type
      switch (params.category) {
        case "pokemon-species":
          switch (params.type) {
            case "generation":
              url = params.type + "/" + params.typeOption + "/";
              break;
            default:
              break;
          }
          break;
        case "item":
          switch (params.type) {
            case "move":
            case "berry":
              url = params.type + "/";
              break;
            case "countable":
            case "consumable":
            case "usable-overworld":
            case "usable-in-battle":
            case "holdable":
            case "holdable-passive":
            case "holdable-active":
            case "underground":
              url = "item-attribute/" + params.type + "/";
              break;
            default:
              break;
          }
        default:
          break;
      }
    } else if (params.type === undefined) {
      url = params.category + "/";
    }

    return url;
  };

  fetchItems = async (pagination, params) => {
    const result = await fetch(baseUrl + this.makeUrl(params)).then(res =>
      res.json()
    );

    let data; // holds data from api

    switch (params.category) {
      // pokemon-species returns an array of pokemons
      case "pokemon-species":
        // params.type is not undefined - means we are querying a specific generation of pokemons
        // API returns the list of pokemons in a 'pokemon_species' object
        data =
          params.type !== undefined
            ? result.pokemon_species.reverse()
            : result.results;
        break;
      case "item":
        data = result.items !== undefined ? result.items : result.results;
        break;
      default:
        break;
    }

    const items = []; // list of items
    const offset = this.getOffset(pagination.currentPage);
    const count = offset + pagination.perPage;
    for (let index = offset; index < count; index++) {
      if (data[index] == null) {
        break;
      }
      items.push(data[index]);
    }
    this.setState({ items, pagination, params });
  };

  updatePagination = (currentPage, pagesArr) => {
    const pagination = { ...this.state.pagination };
    pagination.currentPage = currentPage;
    pagination.pagesArr = pagesArr;

    this.fetchItems(pagination, this.state.params);
  };

  handleItemClick = (details, quantity) => {
    this.props.history.push({
      pathname: `/product/${details.name}`,
      state: { details, quantity }
    });
  };

  render() {
    const { category } = this.state.params;

    const items = this.state.items.map(item => {
      return (
        <Item
          item={item}
          key={item.name}
          category={category}
          itemClick={this.handleItemClick}
        />
      );
    });

    return (
      <div>
        <div className="items-container">{items}</div>
        <hr />
        <Pagination
          url={baseUrl + this.makeUrl(this.state.params)}
          params={this.state.params}
          initPagination={this.initPagination}
          updatePagination={this.updatePagination}
          {...this.state.pagination}
        />
      </div>
    );
  }
}

export default ItemList;
