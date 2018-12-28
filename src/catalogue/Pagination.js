import React from "react";

import PaginationButton from "./PaginationButton";

class Pagination extends React.Component {
  componentDidMount() {
    // if pagination has already been setup, don't make another request to the API
    // if (this.props.numPages === null) {
    this.setupPagination(this.props);
    // }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.setupPagination(nextProps);
    }
  }

  setupPagination = ({ perPage, url, initPagination, params }) => {
    let resourceCount;
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(result => {
        console.log(result);
        switch (params.category) {
          case "pokemon-species":
            if (params.type !== undefined) {
              resourceCount = result.pokemon_species.length;
            } else {
              resourceCount = result.results.length;
            }
            break;
          case "item":
            if (result.items !== undefined) {
              resourceCount = result.items.length;
            } else {
              resourceCount = result.results.length;
            }
          default:
            break;
        }
        initPagination(Math.ceil(resourceCount / perPage));
        this.handlePaginationClick(1);
      })
      .catch(err => {
        console.log(err);
      });
  };

  /**
  |--------------------------------------------------
  | 1. If current page is within the first 4, show the first 8
  | pages, ellipsis, and the last 2.
  | 2. If current page is within the last 4, show the first 2
  | pages, ellipsis, and the last 8.
  | 3. If anywhere in between, show the first 2 pages, ellipsis,
  | 2 pages below the current, current page, 2 pages pages above 
  | the current, ellipsis, and finally the last two pages
  |--------------------------------------------------
  */
  handlePaginationClick = page => {
    const { numPages, updatePagination } = this.props;
    let pagesArr = [];
    if (numPages < 12) {
      for (let page = 1; page <= numPages; page++) {
        pagesArr.push(page);
      }
    } else {
      if (page <= 4) {
        // current page is within first four
        for (let page = 1; page <= 8; page++) {
          pagesArr.push(page);
        }
        pagesArr.push("...", numPages - 1, numPages);
      } else if (page > numPages - 4) {
        // current page is within last four
        pagesArr.push(1, 2, "...");
        for (let index = 7; index >= 0; index--) {
          pagesArr.push(numPages - index);
        }
      } else {
        // current page is greater than 4 and less than the last 4
        pagesArr.push(1, 2, "...");
        pagesArr.push(page - 2, page - 1, page, page + 1, page + 2);
        pagesArr.push("...", numPages - 1, numPages);
      }
    }
    updatePagination(page, pagesArr);
  };

  render() {
    const { pagesArr, currentPage } = this.props;
    let paginationButtons = pagesArr.map((page, i) => {
      return (
        <PaginationButton
          key={i.toString()}
          page={page}
          currentPage={currentPage}
          handleClick={this.handlePaginationClick}
        />
      );
    });

    return (
      <div id="pagination">
        <PaginationButton page="<" />
        {paginationButtons}
        <PaginationButton page=">" />
      </div>
    );
  }
}

export default Pagination;
