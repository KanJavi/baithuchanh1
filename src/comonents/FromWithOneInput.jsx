import React, { Component } from "react";

export default class FromWithOneInput extends Component {
  constructor() {
    super();
    this.state = {
      studentName: "",
    };
    console.log("giá trị khi người dùng nhập vào", this.state.studentName);
  }
  handleSubmit = () => {
    alert("Tên học viên" + this.state.studentName);
  };
  handleChange = (e) => {
    this.setState({
      studentName: e.target.value,
    });
  };

  render() {
    return (
      <form onClick={this.handleSubmit}>
        <label>Student Name</label>
        <input
          type="text"
          onChange={this.handleChange}
          value="{this.state.studentName}"
        />
      </form>
    );
  }
}
