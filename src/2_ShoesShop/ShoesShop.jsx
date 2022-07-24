import { render } from "@testing-library/react";
import React from "react";
import data from "./data.json";
import ProductDetail from "./ProductDetail";

import ProductList from "./ProductList";

class ShoesShop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,
    };
  }
  // Định nghĩa 1 hàm nhận dữ liệu
  handleSelect = (product) => {
    console.log(product);
    this.setState({ selectedProduct: product });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-warning"> Shoes Shop</h1>
        <ProductDetail product={this.state.selectedProduct} />
        <ProductList products={data} onSelect={this.handleSelect} />
      </div>
    );
  }
}

export default ShoesShop;
