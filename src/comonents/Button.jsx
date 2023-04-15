import React, { Component } from "react";

export default class Button extends Component {
  constructor() {
    super();
    this.state = {
      name: "Bốn Lu Huyền",
      nameA: "nguyen van a",
    };
  }
  handleChangeName = () => {
    this.setState({
      nameA: "Phan Duy Khánh",
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.nameA}</p>
        <p>{this.state.name}</p>
        <button onClick={this.handleChangeName}>Click</button>
      </div>
    );
  }
}
