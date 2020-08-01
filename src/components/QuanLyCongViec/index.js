import React, { Component, PureComponent } from "react";
import Form from "./Form";
import List from "./List";

const DELETE = "delete";
class QuanLyCongViec extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      openFormStatus: false,
      params: null,
    };
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      const params = JSON.parse(localStorage.getItem("tasks"));
      this.setState({ tasks: params });
    }
    //localStorage.removeItem("tasks");
  }
  setNewValueForm = () => {
    console.log("hello");
    if (localStorage && localStorage.getItem("tasks")) {
      const params = JSON.parse(localStorage.getItem("tasks"));
      this.setState({ tasks: params });
    }
  };
  setOpenForm = (status) => {
    this.setState({ openFormStatus: status });
  };
  setValueForm = (item, conditions) => {
    const { tasks } = this.state;
    let listTasks = [...tasks];
    if (conditions === DELETE) {
      const find = listTasks.findIndex((value) => value.id === item.id);
      if (find > -1) {
        listTasks.splice(find, 1);
        this.setState({ tasks: listTasks });
        localStorage.setItem("tasks", JSON.stringify(listTasks));
        this.setOpenForm(false);
      }
    }
  };

  render() {
    const { tasks, params } = this.state; // const task = this.state.tasks
    return (
      <div className="container mt-50">
        <div className="text-center">
          <h1>Quản lý công việc</h1>
          <hr />
        </div>
        <div className="row">
          {this.state.openFormStatus === true && (
            <Form
              setOpenForm={this.setOpenForm}
              tasks={tasks}
              setNewValueForm={this.setNewValueForm}
              params={params}
            />
          )}
          <List
            onGenerateData={this.onGenerateData}
            tasks={tasks}
            setOpenForm={this.setOpenForm}
            openFormStatus={this.state.openFormStatus}
            setValueForm={this.setValueForm}
          />
        </div>
      </div>
    );
  }
}

export default QuanLyCongViec;
