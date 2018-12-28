import React from "react";
import store from "store";

import Pagination from "./Pagination";
import Item from "./Item";

const baseUrl = "https://pokeapi.co/api/v2/";

class Catalogue extends React.Component {
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
    return (currentPage - 1) * this.state.pagination.perPage; // increments by 15
  };

  initPagination = numPages => {
    const pagination = { ...this.state.pagination };
    pagination.numPages = numPages;
    pagination.currentPage = 1;
    this.setState({ pagination });
    store.set("pagination", this.state.pagination);
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

  fetchItems = (pagination, params) => {
    const offset = this.getOffset(pagination.currentPage);
    console.log(this.makeUrl(params));
    fetch(baseUrl + this.makeUrl(params)) // API's limit and offset parameters do not work
      .then(res => {
        let data;
        return res.json().then(result => {
          switch (params.category) {
            case "pokemon-species":
              if (params.type !== undefined) {
                data = result.pokemon_species;
                data.sort((a, b) => {
                  const arrayA = a.url.split("/");
                  const indexA = arrayA[arrayA.length - 2];
                  const arrayB = b.url.split("/");
                  const indexB = arrayB[arrayB.length - 2];

                  return indexA - indexB;
                });
              } else {
                data = result.results;
              }
              break;
            case "item":
              if (result.items !== undefined) {
                data = result.items;
              } else {
                data = result.results;
              }
              break;
            default:
              break;
          }
          console.log(data);
          const items = [];
          for (
            let index = offset, count = offset + pagination.perPage;
            index < count;
            index++
          ) {
            if (data[index] == null) {
              break;
            }
            items.push(data[index]);
          }
          this.setState({ items, pagination, params });
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updatePagination = (currentPage, pagesArr) => {
    const pagination = { ...this.state.pagination };
    pagination.currentPage = currentPage;
    pagination.pagesArr = pagesArr;

    this.fetchItems(pagination, this.state.params);
  };

  render() {
    const { category } = this.state.params;

    const items = this.state.items.map(item => {
      return (
        <Item
          url={item.url}
          key={item.name}
          category={category}
          name={item.name}
        />
      );
    });

    return (
      <div className="catalogue">
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

export default Catalogue;
