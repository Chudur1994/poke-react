import React from "react";

class AddToCart extends React.Component {
  state = {
    quantity: 0
  };

  handleSelectChange = e => {
    this.setState({ quantity: e.target.value });
  };

  handleAddToCartClick = () => {
    // this.props.cartAdd(this.state.quantity);
  };

  render() {
    const { quantity } = this.props;
    let quantitySelect = [];
    for (let index = 1; index <= quantity; index++) {
      quantitySelect.push(
        <option key={index} value={index}>
          {index}
        </option>
      );
    }

    return (
      <div className="add-to-cart">
        <label htmlFor="quantity">Quantity</label>
        <select
          onChange={this.handleSelectChange}
          value={this.state.quantity}
          name="quantity"
        >
          {quantitySelect}
        </select>
        <button onClick={this.handleAddToCartClick}>Add to Cart</button>
      </div>
    );
  }
}

export default AddToCart;
