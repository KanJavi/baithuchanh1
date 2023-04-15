import React, { Component } from "react";

export default class FromSecOpti extends Component {
    constructor() {
        super();
        this.state = {
          course: "React",
        };
        console.log("giá trị khi người dùng nhập vào", this.state.studentName);
      }
      handChange=()=>{
        this.setState={

        }
      }
      
  render() {
    return <div>
        <form onSubmit={this.handleSubmit}>
            <label >Chọn khoá học</label>
            <select onChange={this.handleChage}>
                <option value="ReacJS"></option>
                <option value="HTMl"></option>
                <option value="CSS"></option>
                <option value="JS"></option>
            </select>
        </form>
    </div>;
  }
}
