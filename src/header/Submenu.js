import React from "react";

import { NavLink } from "react-router-dom";

const Submenu = props => {
  return (
    <div className="submenu">
      {props.items.map((itemGroup, i) => {
        return (
          <div key={i} className="submenu-group">
            <h4 className="submenu-group-title">{itemGroup.title}</h4>
            {itemGroup.items.map(item => {
              return (
                <NavLink
                  to={item.link}
                  key={item.name}
                  className="submenu-item"
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Submenu;
