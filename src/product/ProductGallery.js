import React from "react";
import ImageList from "./ImageList";
import Type from "../catalog/Type";

class ProductGallery extends React.Component {
  state = {
    image: ""
  };

  componentDidMount() {
    this.setState({ image: this.props.image });
  }

  updateImage = image => {
    this.setState({ image });
  };

  render() {
    const { types, height, weight, sprites } = this.props;
    return (
      <div className="gallery-container">
        <div className="height-weight-type">
          <div className="height-weight">
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
          </div>
          <div className="types">
            {types.map(type => (
              <Type key={type} type={type} />
            ))}
          </div>
        </div>
        <div className="image-container">
          <img className="product-image" src={this.state.image} alt="" />
        </div>
        <ImageList imageClick={this.updateImage} sprites={sprites} />
      </div>
    );
  }
}

export default ProductGallery;
