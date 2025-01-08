import { useState } from "react";

export default function ChangeObj({ objArr }) {
  console.log(objArr);
  const [index, setIndex] = useState(0);
  const change = () => {
    setIndex(index === objArr.length - 1 ? 0 : index + 1);
  };
  return (
    <div>
      <p>이름: {objArr[index].name}</p>
      <p>나이: {objArr[index].age}</p>
      <p>별명: {objArr[index].nickName}</p>
      <button onClick={change}>멤버 바꾸기</button>
    </div>
  );
}
