import React, { Component, PureComponent } from "react";

class List extends PureComponent {
  handleOpenForm = () => {
    let status = true;
    this.props.setOpenForm(status);
  };
  handleEdit = (item) => {
    let status = true;
    this.props.setOpenForm(status);
    this.props.setValueForm(item);
  };
  handleDelete = (item) => {
    this.props.setValueForm(item, "delete");
  };
  render() {
    const { tasks, openFormStatus } = this.props;
    let ele = tasks.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>{item.txtName}</td>
          <td>
            {item.status === 1 ? (
              <span className="label label-success">Kích hoạt</span>
            ) : (
              <span className="label label-danger">Ẩn</span>
            )}
          </td>
          <td className="text-center">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => this.handleEdit(item)}
            >
              <i className="fas fa-edit pr-5"></i> Sửa
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => this.handleDelete(item)}
            >
              <i className="far fa-trash-alt pr-5"></i> Xóa
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div
        className={
          openFormStatus
            ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
            : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
        }
      >
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleOpenForm}
        >
          <span onClick={this.handleHiddenForm}>Thêm công việc</span>
        </button>
        &nbsp;
        <div className="row mt-15">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập từ khóa"
              />
              <span className="input-group-btn pd0">
                <button type="button" className="btn btn-primary">
                  <i className="fa fa-search mr-5"></i>Tìm
                </button>
              </span>
            </div>
          </div>

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sắp xếp <i className="fa fa-caret-square-o-down ml-5"></i>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a role="button">
                  <i className="fa fa-sort-alpha-asc pr-5">Tên A-Z</i>
                </a>
                <br />
                <a role="button">
                  <i className="fa fa-sort-alpha-desc pr-5">Tên Z-A</i>
                </a>
                <br />
                <a role="button">
                  <i className="fa fa-sort-alpha-desc pr-5">
                    Trạng Thái Kích Hoạt
                  </i>
                </a>
                <br />
                <a role="button">
                  <i className="fa fa-sort-alpha-desc pr-5">Ẩn</i>
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-15">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <table border="2" className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Tên</th>
                  <th className="text-center">Trạng thái</th>
                  <th className="text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <select className="form-control">
                      <option value={-1}>Tất cả</option>
                      <option value={1}>Ẩn</option>
                      <option value={0}>Kích hoạt</option>
                    </select>
                  </td>
                  <td></td>
                </tr>
                {ele}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
