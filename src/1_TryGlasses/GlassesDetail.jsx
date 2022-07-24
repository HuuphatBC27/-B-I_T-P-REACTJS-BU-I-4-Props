import React from "react";

const GlassesDetail = ({ product }) => {
  if (!product) {
    // chưa chọn sản phẩm
    return null;
  }

  return (
    <div className="col img2">
      <img src="/img/glassesImage/model.jpg" />
      <div className="text">
        <h1> Name : {product.name}</h1>
        <h2> Des : {product.desc}</h2>
      </div>
    </div>
  );
};

export default GlassesDetail;
