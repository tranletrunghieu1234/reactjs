import React, { Component } from "react";
import ColorPicker from "./ColorPicker";
import SizeSetting from "./SizeSetting";
import Reset from "./Reset";
import Content from "./Content";
class BaiTestSo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 14,
    };
  }
  onSettingColor = (params) => {
    console.log("params", params);
    this.setState({ color: params });
  };

  onSettingSize = (params) => {
    console.log("params", params);
    this.setState({ fontSize: params });
  };
  setResetValue = (params) => {
    console.log("params", params);
    this.setState({
      color: params.color,
      fontSize: params.fontSize,
    });
  };
  render() {
    return (
      <div>
        <div className="container mt-50">
          <div className="row">
            <ColorPicker
              color={this.state.color}
              onReceiveColor={this.onSettingColor}
            />
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting
                fontSize={this.state.fontSize}
                onReceiveSize={this.onSettingSize}
              />
              <Reset handleReset={this.setResetValue} />
            </div>
            <Content color={this.state.color} fontSize={this.state.fontSize} />
          </div>
        </div>
      </div>
    );
  }
}
export default BaiTestSo1;
