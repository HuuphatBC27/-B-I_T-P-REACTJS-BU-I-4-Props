import React from "react";

const GlassesItem = ({ products, onClick }) => {
  const changeGlasses = (product) => {
    // const imgGlasses = "/img/glassesImage/v1.png";
    // this.setState({ imgGlasses });

    // console.log(product);

    //B3 : gọi onClick và truyền product vào
    onClick(product);
  };

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-sm-5">
            <div className="card">
              <img
                onClick={() => changeGlasses(product)}
                src={product.url}
                alt={product.name}
                width="200px"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GlassesItem;

