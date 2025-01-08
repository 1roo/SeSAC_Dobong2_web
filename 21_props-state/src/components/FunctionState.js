import { useState } from "react";

export default function FunctionState() {
  /*    let apple = "사과";
const inEng = () => {
    // apple = "apple";
    const content = document.querySelector(".state");
    content.innerHTML = "apple";
    // console.log(apple);
  }; */
  // state를 사용해서 화면 변경
  //   const [apple, setApple] = useState("사과");
  //   const inEng2 = () => {
  //     setApple("apple");
  //   };
  //   return (
  //     <div>
  //       <div className="state">{apple}</div>
  //       <button onClick={inEng2}>영어로 변경(state)</button>
  //       {/* <button onClick={setApple("isEng")}>영어로 변경(state)</button> */}
  //     </div>
  //   );
  //
  //
  // vanilla JS 사과 > apple > 사과 > apple
  //   const changeLang = () => {
  //     const content = document.querySelector(".state");
  //     content.innerText === "사과"
  //       ? (content.innerHTML = "apple")
  //       : (content.innerHTML = "사과");
  //   };
  //   return (
  //     <div>
  //       <div className="state">사과</div>
  //       <button onClick={changeLang}>언어 변경</button>
  //     </div>
  //   );

  const [showEnglish, setShowEnglish] = useState(true);
  const changeLang2 = () => {
    setShowEnglish(!showEnglish);
  };

  return (
    <div>
      <div>{showEnglish ? "apple" : "사과"}</div>
      <button onClick={changeLang2}>언어 변경</button>
    </div>
  );
}
