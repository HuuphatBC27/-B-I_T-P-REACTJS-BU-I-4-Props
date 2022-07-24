import React, { Component } from "react";
import data from "./data.json";
import "./Glasses.css";
import GlassesDetail from "./GlassesDetail";
import GlassesItem from "./GlassesItem";

export default class Glasses extends Component {
  constructor() {
    super();

    this.state = {
      // lưu trữ đường dẫn model
      imgDetail: "/img/glassesImage/model.jpg",
      //model glasses
      imgGlasses: "",
      selectedGlasses: null,
    };
  }

  render() {
    const changeGlasses = (product) => {
      // console.log(product);
      const imgGlasses = `/img/glassesImage/v${product.id}.png`;
      this.setState({ imgGlasses });
      this.setState({ selectedGlasses: product });
    };

    return (
      <div className="glasses-Wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img src={this.state.imgDetail} />
            </div>
            <GlassesDetail product={this.state.selectedGlasses} />

            <div className="glasses">
              <img src={this.state.imgGlasses} />
            </div>
          </div>
        </div>
        <GlassesItem products={data} onClick={changeGlasses} />
      </div>
    );
  }
}
