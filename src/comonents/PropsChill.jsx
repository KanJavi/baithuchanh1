import React, { Component } from "react";

export default class PropsChill extends Component {
  // State là một đối tượng chứa các thôg tin được sử dụng
  // để tạo và quản lí UI
  // State chỉ có thể thay đổi trong component đó
  // để khởi tạo state trong component sử dụng constructor
  constructor() {
    //     // Constructor dùng để khởi tạo state trong class component
    //     // super dùng để gọi constructor lớp cha
    super();
    //     // để khởi tạo state =>> để khởi tạo state chúng ta sử dụng this.state={}
    this.state = {
      studentA: "Minh Thành",
      studentB: "Khánh Phan",
      address: {
        city: "Hà Nội",
      },
    };
  }
  handleChangeStudent = () => {
    this.setState({
      studentB: "Mỹ Duyên",
    });
  };
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h2>{this.state.studentA}</h2>
        <h2>{this.state.studentB}</h2>
        <div>{this.state.address.city}</div>
        <button onClick={this.handleChangeStudent}>click me</button>
      </div>
    );
  }

  //
}
