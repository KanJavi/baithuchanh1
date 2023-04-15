import React, { Component } from "react";

export default class ToggleDisplay extends Component {
  constructor() {
    super();
    this.state = {
      displayBio: false,
    };
  }
  handleShow = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div>
        <h4>Chào mừng đến với Rikkei Academy</h4>
        {/* {sử dụng toán tử 3 ngôi} */}
        {this.state.displayBio ? (
          <div>
            <p>chúc các bạn học tốt</p>
            <button onClick={this.handleShow}>Show less</button>
          </div>
        ) : (
          <button onClick={this.handleShow}>Read more</button>
        )}
      </div>
    );
  }
}
