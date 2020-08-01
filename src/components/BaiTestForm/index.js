import React, { Component } from "react";

class BaiTestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      txtDescr: "",
      selt: null,
      radio1: "en",
      trangThai: true,
    };
  }

  handleChangeValue = (e) => {
    const target = e ? e.target : "";
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onHandleSubmit = (e) => {
    e && e.preventDefault();
    console.log(this.state);
    console.log("1");
  };
  render() {
    return (
      <div>
        <div className="container mt-50">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Panel title</h3>
                </div>
                <div className="panel-body">
                  <form onSubmit={this.onHandleSubmit}>
                    <legend>Form title</legend>

                    <div className="form-group">
                      <label>Tài khoản</label>
                      <input
                        type="text"
                        className="form-control"
                        name="userName"
                        onChange={(e) => this.handleChangeValue(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Mật khẩu</label>
                      <input
                        type="text"
                        className="form-control"
                        name="password"
                        onChange={(e) => this.handleChangeValue(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Mô tả</label>
                      <textarea
                        name="txtDescr"
                        className="form-control"
                        rows="3"
                        onChange={(e) => this.handleChangeValue(e)}
                      ></textarea>
                    </div>
                    <label>Giới tính:</label>
                    <select
                      defaultValue={1}
                      name="selt"
                      className="form-control mb-5"
                      required="required"
                      onChange={(e) => this.handleChangeValue(e)}
                    >
                      <option value={0}> Nữ</option>
                      <option value={1}> Nam</option>
                    </select>
                    <br />
                    <label>Chọn ngôn ngữ đi nào</label>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="radio1"
                          value="vi"
                          checked={this.state.radio1 === "vi"}
                          onChange={(e) => this.handleChangeValue(e)}
                        />
                        Tiếng việt
                      </label>
                      <br />
                      <label>
                        <input
                          type="radio"
                          name="radio1"
                          value="en"
                          checked={this.state.radio1 === "en"}
                          onChange={(e) => this.handleChangeValue(e)}
                        />
                        Tiếng Anh
                      </label>
                      <br />
                    </div>
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="trangThai"
                          value={true}
                          onChange={(e) => this.handleChangeValue(e)}
                          checked={this.state.trangThai === true}
                        />
                        Trạng thái
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary mr-5">
                      Lưu
                    </button>
                    <button type="reset" className="btn btn-warning">
                      Xóa
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaiTestForm;
