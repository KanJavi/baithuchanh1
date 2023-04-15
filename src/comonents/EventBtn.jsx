import React, { Component } from "react";

export default class h4 extends Component {
  constructor() {
    super();
    this.state = {
      code: "duykhanh",
    };
  }
  handleChangeCode = () => {
    this.setState({
      code: "tuyệt vời",
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.code}</h2>
        <q>chào mừng các bạn đến với Rikkei Academy</q>
        <br />
        <button onClick={this.handleChangeCode}>Click Me</button>
      </div>
    );
  }
}
