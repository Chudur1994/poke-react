import React from "react";
import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";

class Product extends React.Component {
  state = {};

  render() {
    const { name } = this.props.location.state.details;
    return (
      <div className="product">
        <h5 className="name">{name}</h5>
        <div className="details">
          <ProductGallery {...this.props.location.state.details} />
          <ProductDetails {...this.props.location.state.details} />
        </div>
      </div>
    );
  }
}

export default Product;
