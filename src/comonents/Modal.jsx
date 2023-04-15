import React, { Component } from "react";

export default class Modal extends Component {
  constructor() {
    super();
    this.state = {
      displayBio: false,
    };
  }
  handleShow = () => {
    this.setState({
      displayBio: !this.state.displayBio,
    });
  };
  render() {
    return (
      <div>
        {this.state.displayBio ? (
          <div>
            <q>Chào mừng bạn đến với Nhật Bản</q>
            <button onClick={this.handleShow}>Show lee</button>
          </div>
        ) : (
          <button onClick={this.handleShow}>Read more</button>
        )}
      </div>
    );
  }
}
