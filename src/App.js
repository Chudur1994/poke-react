import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Main from "./Main";
import Header from "./header/Header";

import "./App.css";
import Footer from "./footer/Footer";

class App extends Component {
  state = {
    cart: []
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
