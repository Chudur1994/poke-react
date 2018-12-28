import React from "react";
import { NavLink } from "react-router-dom";

import Submenu from "./Submenu";

class Dropdown extends React.Component {
  state = {
    showMenu: false
  };

  handleHover = e => {
    this.setState({ showMenu: true });
  };

  handleLeave = e => {
    this.setState({ showMenu: false });
  };

  render() {
    return (
      <div className="dropdown" onMouseLeave={this.handleLeave}>
        <NavLink
          to={this.props.item.item.link}
          onMouseEnter={this.handleHover}
          className="dropdown-title"
        >
          {this.props.item.item.name}
        </NavLink>
        {this.props.item.subitems.length > 0 && this.state.showMenu ? (
          <Submenu items={this.props.item.subitems} />
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
