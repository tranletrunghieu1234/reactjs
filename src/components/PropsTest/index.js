import React, { Component } from "react";

class Index extends Component {
  showInforProduct = (params) => {
    console.log("params", params);
    const name = params[1].name;
    const price = params[1].price;
    alert(` ${params[0]} ${name} với giá là ${price} VND`);
  };

  render() {
    const product = this.props.product ? this.props.product : null;
    const buySuccess = "Bạn đã mua thành công sản phẩm ";
    return (
      <div>
        {product.map((item) => (
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={item.id}>
            <div className="thumbnail">
              <img
                alt=" iphone 11"
                title="iphong"
                src={item.src}
                width="200"
                height="200"
              />
              <div className="caption">
                <h3>Tên sản phẩm:</h3>
                <p className="fontsize30">{item.name}</p>
                <p>{item.price} VND</p>
                <p>
                  <strong>
                    {item.status === true ? "Còn hàng" : "Hết hàng"}
                  </strong>
                </p>
                <p>
                  <a
                    className="btn btn-success"
                    onClick={() => this.showInforProduct([buySuccess, item])}
                  >
                    Mua ngay
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Index;
