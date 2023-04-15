import React, { Component } from 'react'

export default class FormWithMult extends Component {
  render() {
    return (
      <div>
        <form>
            <label >tên sinh viên</label>
            <input type="text" />
            <br />
            <label >Chọn khoá học</label>

        </form>
      </div>
    )
  }
}
