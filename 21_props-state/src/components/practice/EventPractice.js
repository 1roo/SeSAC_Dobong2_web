import { Component, useState } from "react";

export class HandlerEx extends Component {
  state = {
    msg: "Hello World!",
  };
  render() {
    const { msg } = this.state;
    return (
      <div>
        <p>{msg}</p>
        <button
          onClick={() => {
            this.setState({ msg: "Goodbye World!" });
          }}>
          클릭
        </button>
      </div>
    );
  }
}

export function ChangeColor() {
  const [color, setColor] = useState("검정색");
  const changeColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <p style={{ color: color }}>
        {color === "red" ? "빨간색" : color === "blue" ? "파란색" : "검정색"}
        글씨
      </p>
      <button
        value="red"
        onClick={(e) => {
          changeColor(e);
        }}>
        빨간색
      </button>
      <button value="blue" onClick={changeColor}>
        파란색
      </button>
    </div>
  );
}

export function Disappear() {
  const [isShow, setIsShow] = useState(true);
  const [text, setText] = useState("사라져라");
  const dissapearText = () => {
    setIsShow(!isShow);
    setText(isShow ? "보여라" : "사라져라");
  };
  return (
    <div>
      <button onClick={dissapearText}>{text}</button>
      {isShow && <p>안녕하세요</p>}
    </div>
  );
}

export function ChangeEmoji() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <p>
        {number}
        {number > 7 ? "😡" : "😊"}
      </p>
      <button onClick={increase}>1 증가</button>
      <button onClick={decrease}>1 감소</button>
    </div>
  );
}
