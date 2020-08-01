import React, { Component } from "react";
import { createPortal } from "react-dom";

class BaiTestSo1 extends Component {
  render() {
    const color = this.props.color ? this.props.color : "";
    const fontSize = this.props.fontSize ? this.props.fontSize : "";

    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>
              Color: {color} - Font-size:{fontSize}px
            </p>
            <div
              className="content"
              style={{ color: color, fontSize: fontSize, borderColor: color }}
            >
              Nội dung setting
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BaiTestSo1;
