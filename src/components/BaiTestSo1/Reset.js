import React, { Component } from "react";

class Reset extends Component {
  handleReset = () => {
    const params = {
      color: "red",
      fontSize: 14,
    };
    this.props.handleReset(params);
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.handleReset()}
        >
          Reset
        </button>
      </div>
    );
  }
}
export default Reset;
