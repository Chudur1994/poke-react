import React from "react";
import posed, { PoseGroup } from "react-pose";

// const ItemImage = posed.img({
//   enter: { opacity: 1, delay: 300 },
//   exit: { opacity: 0, transition: { duration: 200 } }
// });

const Card = ({
  count,
  item,
  currentItem,
  handleNext,
  handlePrev,
  handleDot
}) => {
  let dots = [];
  for (let index = 0; index < count; index++) {
    const cn = index === currentItem ? "active" : "";
    dots.push(
      <span onClick={() => handleDot(index)} className={cn} key={index} />
    );
  }
  return (
    <div className="card">
      <span onClick={handlePrev} className="prev-arrow">
        {"<"}
      </span>
      {/* <ItemImage key={"item-image"} src={item.image} /> */}
      <img src={item.image} alt="" />
      <span className="name">{item.name}</span>
      <span onClick={handleNext} className="next-arrow">
        {">"}
      </span>
      <div className="dots-container">{dots}</div>
    </div>
  );
};

export default Card;
