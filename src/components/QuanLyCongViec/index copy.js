import React, { Component, PureComponent } from "react";

class QuanLyCongViec extends PureComponent {
  render() {
    return (
      <div className="container mt-50">
        <div className="text-center">
          <h1>Quản lý công việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Thêm công việc <i class="fas fa-times text-center pl-190"></i>
                </h3>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label>Tên</label>
                    <input type="text" className="form-control" id="" />
                  </div>
                  <div className="mb-5">
                    <label>Trạng thái</label>
                    <select name="status" id="status" className="form-control">
                      <option value={1}>Kích hoạt</option>
                      <option value={0}>Ẩn</option>
                    </select>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning">
                      <i className="fas fa-plus pr-5"></i>Lưu lại
                    </button>
                    &nbsp;&nbsp;
                    <button type="submit" className="btn btn-danger">
                      <i class="fas fa-trash pr-5"></i> Hủy bỏ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span>Thêm công việc</span>
            </button>

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
                {/* <div className="dropdown">
                  <button type="button" className="btn btn-primary">
                    Sắp xếp <i className="fa fa-caret-square-o-down ml-5"></i>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                      <a role="button">
                        <i className="fa fa-sort-alpha-asc pr-5">Tên A-Z</i>
                      </a>
                    </li>
                    <li>
                      <a role="button">
                        <i className="fa fa-sort-alpha-desc pr-5">Tên Z-A</i>
                      </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li>
                      <a role="button">Trạng Thái Kích Hoạt</a>
                    </li>
                    <li>
                      <a role="button">Trạng Thái Ẩn</a>
                    </li>
                  </ul>
                </div> */}
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
                        <input type="text" class="form-control" />
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
                    <tr>
                      <td>1</td>
                      <td>Học Reactjs</td>
                      <td>
                        <span className="label label-success"> Kích Hoạt</span>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-warning">
                          <i class="fas fa-edit pr-5"></i> Sửa
                        </button>
                        &nbsp;&nbsp;
                        <button type="button" className="btn btn-warning">
                          <i className="far fa-trash-alt pr-5"></i> Xóa
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuanLyCongViec;
