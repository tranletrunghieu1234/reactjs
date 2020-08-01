import React, { Component, PureComponent } from "react";

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      txtName: "",
      status: 1,
      id: "",
      statusForm: false,
    };
  }
  handleChangeInput = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    console.log("1");
    e && e.preventDefault();
    let { tasks } = this.props;
    // console.log("tasks", tasks);
    let data = this.state;
    data.id = this.generateID();
    tasks.push(data);
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.props.setNewValueForm();
    this.setState({ statusForm: true });
  };

  handleHiddenForm = () => {
    let status = false;
    this.props.setOpenForm(status);
  };

  generateID = () => {
    const randomString = require("random-string");
    const randomId = randomString();
    return randomId;
  };

  handleCancelForm = () => {
    this.restForm();
  };
  restForm = () => {
    this.setState({
      txtName: "",
      status: 1,
    });
  };
  // componentDidMount() {
  //   const { params } = this.props;
  //   if (params) {
  //     this.setState({
  //       txtName: params.txtName,
  //       status: params.status,
  //       id: params.id,
  //     });
  //   }
  // }
  componentDidUpdate() {
    if (this.state.statusForm === true) {
      this.restForm();
      this.handleHiddenForm();
      this.setState({ statusForm: false });
    }
  }

  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              Thêm công việc{" "}
              <i
                onClick={this.handleHiddenForm}
                className="fas fa-times text-center pl-190 point"
              ></i>
            </h3>
          </div>
          <div className="panel-body">
            <form
              //method="post"
              action=""
              id="form1"
              name="form1"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <label>Tên</label>
                <input
                  type="text"
                  className="form-control"
                  id="txtName"
                  name="txtName"
                  value={this.state.txtName}
                  onChange={(e) => this.handleChangeInput(e)}
                />
              </div>
              <div className="mb-5">
                <label>Trạng thái</label>
                <select
                  value={this.state.status}
                  name="status"
                  id="status"
                  className="form-control"
                  onChange={(e) => this.handleChangeInput(e)}
                >
                  <option value={1}>Kích hoạt</option>
                  <option value={0}>Ẩn</option>
                </select>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  <i className="fas fa-plus pr-5"></i>
                  Lưu lại
                </button>
                &nbsp;&nbsp;
                <button
                  className="btn btn-danger"
                  onClick={this.handleCancelForm}
                  type="button"
                >
                  <i className="fas fa-trash pr-5"></i>
                  Hủy bỏ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
