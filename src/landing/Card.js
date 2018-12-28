import React from "react";
import posed, { PoseGroup } from "react-pose";

const ItemImage = posed.img({
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0, transition: { duration: 200 } }
});

class Card extends React.Component {
  render() {
    const { count, item, currentItem, handleNext, handlePrev } = this.props;

    let dots = [];
    for (let index = 0; index < count; index++) {
      const cn = index === currentItem ? "active" : "";
      dots.push(<span className={cn} key={index} />);
    }
    return (
      <div className="card">
        <span onClick={handlePrev} className="prev-arrow">
          {"<"}
        </span>
        <PoseGroup>
          <ItemImage key={"item-image"} src={item.image} />
        </PoseGroup>
        <span className="name">{item.name}</span>
        <span onClick={handleNext} className="next-arrow">
          {">"}
        </span>
        <div className="dots-container">{dots}</div>
      </div>
    );
  }
}

export default Card;
