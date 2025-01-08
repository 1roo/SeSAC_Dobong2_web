import { Component, useState } from "react";

export class ClassPrac extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <p>{number}</p>
        <button
          onClick={() => {
            this.setState({ number: number + 2 });
          }}>
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}>
          -1
        </button>
      </div>
    );
  }
}

export function FunctionPrac() {
  const [num, setNum] = useState(0);
  const increase = () => {
    setNum(num + 1);
  };
  const decrease = () => {
    setNum(num - 2);
  };
  return (
    <div>
      <p>{num}</p>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
    </div>
  );
}
