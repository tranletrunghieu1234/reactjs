import React, { Component } from "react";
import "./App.css";
import PropsTest from "./components/PropsTest";

class App extends Component {
  handleChangeValue = () => {
    alert("con chó này");
  };
  render() {
    const listSanPham = [
      {
        id: 1,
        price: 500000,
        name: "Iphone 11 ProMax",
        src:
          "https://24hstore.vn/images/products/2020/05/15/original/iphone-11-pro-max-grey_1589515134_1.jpg",
        status: true,
      },
      {
        id: 2,
        price: 123456,
        name: "SamSung Galaxy S10",
        src:
          "https://cdn.tgdd.vn/Products/Images/42/194251/samsung-galaxy-s10-lite-blue-thumb-600x600.jpg",
        status: true,
      },
      {
        id: 3,
        price: 5525045,
        name: "Nova 3i",
        src:
          "https://cdn.tgdd.vn/Products/Images/42/179673/huawei-nova-3i-600-600-600x600.jpg",
        status: false,
      },
    ];
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">Props</a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <PropsTest product={listSanPham} />
              {/* <PropsTest product={productS10} /> */}
            </div>

            <div className="col-xs- col-sm- col-md- col-lg-">
              <button
                onClick={() => this.handleChangeValue()}
                type="button"
                className="btn btn-primary"
              >
                Click!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
