import React, { Component } from "react";
import BoxClass from "./component/BoxClass";

// state를 한번에 만들어서 관리
class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter2: 0,
      num: 1,
      value: 0,
    };
  }

  // 오브젝트 안에 변하고 싶은 값을 써주면 됨
  increase = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
  };

  render() {
    return (
      <div>
        {/* this를 매번 써줘야됨, this의 연속 */}
        <div>state: {this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        <BoxClass num={this.state.value} />
      </div>
    );
  }
}

export default AppClass;
