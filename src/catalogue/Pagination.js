import React from "react";
import API from "../API";
import PaginationButton from "./PaginationButton";

class Pagination extends React.Component {
  state = {
    currentPage: 1,
    perPage: 12,
    numPages: null
  };

  componentDidMount() {
    if (this.state.numPages === null) {
      this.setupPagination();
    }
  }

  setupPagination = () => {
    API.get(this.props.url)
      .then(res => {
        this.setState({
          numPages: Math.ceil(res.data.count / this.state.perPage)
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    let paginationButtons = [];
    for (let page = 1; page <= this.state.numPages; page++) {
      paginationButtons.push(
        <PaginationButton key={page.toString()} page={page} currentPage />
      );
    }

    return <div>{paginationButtons}</div>;
  }
}

export default Pagination;
