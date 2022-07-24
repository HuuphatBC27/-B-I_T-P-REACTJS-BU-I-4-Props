import React from "react";

const ProductDetails = ({ product }) => {
  if (!product) {
    // Không có sản phẩm => không cần render giao diện
    return null;
  }

  return (
    <div className="row mt-5">
      <div className="col-sm-6">
        <img
          src={product.image}
          alt={product.name}
          width="100%"
          height="500px"
        />
      </div>
      <div className="col-sm-6">
        <h1>Chi tiết sản phẩm</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Tên giày</td>
              <td>{product.name}</td>
            </tr>
            <tr>
              <td>Hãng giày</td>
              <td>{product.alias}</td>
            </tr>
            <tr>
              <td>Giá tiền</td>
              <td>{product.price}</td>
            </tr>
            <tr>
              <td>Mô tả</td>
              <td>{product.description}</td>
            </tr>
            <tr>
              <td>Tóm tắt </td>
              <td>{product.shortDescription}</td>
            </tr>
            <tr>
              <td>Số lượng</td>
              <td>{product.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
