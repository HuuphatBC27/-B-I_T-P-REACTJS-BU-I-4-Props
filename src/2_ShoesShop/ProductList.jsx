import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onSelect }) => {
  const handleSelect = (product) => {
    console.log(product);
    onSelect(product);
  };
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-sm-4">
            <ProductItem product={product} onSelect={handleSelect} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
