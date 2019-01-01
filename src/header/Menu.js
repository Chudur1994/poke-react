import React from "react";

import Dropdown from "./Dropdown";

class Menu extends React.Component {
  render() {
    const menuItems = [
      {
        item: { name: "Pokemons", link: "/catalog/pokemon/" },
        subitems: [
          {
            title: "Generations",
            items: [
              {
                name: "Generation I",
                link: "/catalog/pokemon/generation/1/"
              },
              {
                name: "Generation II",
                link: "/catalog/pokemon/generation/2/"
              },
              {
                name: "Generation III",
                link: "/catalog/pokemon/generation/3/"
              },
              {
                name: "Generation IV",
                link: "/catalog/pokemon/generation/4/"
              },
              {
                name: "Generation V",
                link: "/catalog/pokemon/generation/5/"
              },
              {
                name: "Generation VI",
                link: "/catalog/pokemon/generation/6/"
              },
              {
                name: "Generation VII",
                link: "/catalog/pokemon/generation/7/"
              }
            ]
          }
        ]
      },
      {
        item: { name: "Items", link: "/catalog/item/" },
        subitems: [
          {
            title: "Attributes",
            items: [
              { name: "Countable", link: "/catalog/item/countable" },
              { name: "Consumable", link: "/catalog/item/consumable" },
              {
                name: "Usable outside Battle",
                link: "/catalog/item/usable-overworld"
              },
              {
                name: "Usable in Battle",
                link: "/catalog/item/usable-in-battle"
              },
              { name: "Holdable", link: "/catalog/item/holdable" },
              {
                name: "Holdable Passive",
                link: "/catalog/item/holdable-passive"
              },
              {
                name: "Holdable Active",
                link: "/catalog/item/holdable-active"
              },
              { name: "Underground", link: "/catalog/item/underground" }
            ]
          },
          {
            title: "Misc.",
            items: [
              { name: "Berries", link: "/catalog/item/berry/" },
              { name: "Moves", link: "/catalog/item/move/" }
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
