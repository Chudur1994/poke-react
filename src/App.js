import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Main from "./Main";
import Header from "./Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default withRouter(App);
