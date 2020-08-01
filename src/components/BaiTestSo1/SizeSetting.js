import React, { Component } from "react";
const HAI = 2;
class BaiTestSo1 extends Component {
  handleChangleValue = (item) => {
    console.log("item", item);
    // if (this.props.fontSize > 30 || this.props.fontSize <= 13) return;
    // if (item === HAI) {
    //   if (this.props.fontSize >= 30) return;
    // } else {
    //   if (this.props.fontSize <= 14) return;
    // }
    const value =
      this.props.fontSize + item >= 14 && this.props.fontSize + item <= 30
        ? this.props.fontSize + item
        : this.props.fontSize;
    this.props.onReceiveSize(value);
  };

  render() {
    console.log(this.props.fontSize);
    const fontSize = this.props.fontSize ? this.props.fontSize : null;
    return (
      <div>
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">Size:{fontSize}px</h3>
          </div>
          <div className="panel-body">
            <button
              type="button"
              className="btn btn-success mr-10"
              onClick={() => this.handleChangleValue(-HAI)}
            >
              Giảm
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.handleChangleValue(HAI)}
            >
              Tăng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default BaiTestSo1;
