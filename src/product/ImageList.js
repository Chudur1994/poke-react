import React from "react";
import { toArray } from "lodash";

const ImageList = ({ sprites, imageClick }) => {
  const spritesArr = toArray(sprites).filter(sprite => sprite !== null);
  return (
    <div className="product-gallery-images">
      {spritesArr.map(sprite => {
        return (
          <div key={sprite} className="gallery-image">
            <img onClick={() => imageClick(sprite)} src={sprite} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
