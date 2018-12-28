import React from "react";

import Dropdown from "./Dropdown";

class Menu extends React.Component {
  render() {
    const menuItems = [
      {
        item: { name: "Pokemons", link: "/catalogue/pokemon/" },
        subitems: [
          {
            title: "Generations",
            items: [
              {
                name: "Generation I",
                link: "/catalogue/pokemon/generation/1/"
              },
              {
                name: "Generation II",
                link: "/catalogue/pokemon/generation/2/"
              },
              {
                name: "Generation III",
                link: "/catalogue/pokemon/generation/3/"
              },
              {
                name: "Generation IV",
                link: "/catalogue/pokemon/generation/4/"
              },
              {
                name: "Generation V",
                link: "/catalogue/pokemon/generation/5/"
              },
              {
                name: "Generation VI",
                link: "/catalogue/pokemon/generation/6/"
              },
              {
                name: "Generation VII",
                link: "/catalogue/pokemon/generation/7/"
              }
            ]
          }
        ]
      },
      {
        item: { name: "Items", link: "/catalogue/item/" },
        subitems: [
          {
            title: "Attributes",
            items: [
              { name: "Countable", link: "/catalogue/item/countable" },
              { name: "Consumable", link: "/catalogue/item/consumable" },
              {
                name: "Usable outside Battle",
                link: "/catalogue/item/usable-overworld"
              },
              {
                name: "Usable in Battle",
                link: "/catalogue/item/usable-in-battle"
              },
              { name: "Holdable", link: "/catalogue/item/holdable" },
              {
                name: "Holdable Passive",
                link: "/catalogue/item/holdable-passive"
              },
              {
                name: "Holdable Active",
                link: "/catalogue/item/holdable-active"
              },
              { name: "Underground", link: "/catalogue/item/underground" }
            ]
          },
          {
            title: "Misc.",
            items: [
              { name: "Berries", link: "/catalogue/item/berry/" },
              { name: "Moves", link: "/catalogue/item/move/" }
            ]
          }
        ]
      }
    ];
    return (
      <div id="menu">
        {menuItems.map(item => {
          return <Dropdown key={item.item.name} item={item} />;
        })}
      </div>
    );
  }
}

export default Menu;
