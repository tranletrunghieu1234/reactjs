import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "grey"],
    };
  }

  showColor = (item) => {
    console.log("color", this.props.color);
    const style = {
      backgroundColor: item,
    };
    return style;
  };

  setActiveColor = (item) => {
    console.log("item", item);
    this.props.onReceiveColor(item);
  };
  render() {
    let eleColors = this.state.colors.map((item, index) => {
      const active = this.props.color === item ? "active" : "";
      return (
        <span
          key={index}
          style={this.showColor(item)}
          className={active}
          onClick={() => this.setActiveColor(item)}
        ></span>
      );
    });
    return (
      <div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Color Picker</h3>
            </div>
            <div className="panel-body">
              {eleColors} <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ColorPicker;
