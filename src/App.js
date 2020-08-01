import React, { Component } from "react";
import "./App.css";
import PropsTest from "./components/PropsTest";
import BaiTestSo1 from "./components/BaiTestSo1";
import BaiTestForm from "./components/BaiTestForm";
import QuanLyCongViec from "./components/QuanLyCongViec";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <BaiTestSo1 /> */}
        {/* <BaiTestForm /> */}
        <QuanLyCongViec />
      </div>
    );
  }
}

export default App;
