import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    //class형은 무조건 this로 시작
    return <div>Box{this.props.num}</div>;
  }
}
