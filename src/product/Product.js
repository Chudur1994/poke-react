import React from "react";
import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";
import AddToCart from "./AddToCart";

class Product extends React.Component {
  state = {};

  render() {
    const { location } = this.props;
    const { name } = location.state.details;
    return (
      <div className="product">
        <h5 className="name">{name}</h5>
        <div className="details">
          <div className="product-left">
            <ProductGallery {...location.state.details} />
            <AddToCart quantity={location.state.quantity} />
          </div>
          <ProductDetails {...location.state.details} />
        </div>
      </div>
    );
  }
}

export default Product;
