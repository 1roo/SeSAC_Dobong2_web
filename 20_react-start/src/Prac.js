export default function Prac() {
  const name = "야옹이";
  const animal = "강아지";
  const a = 3;
  const b = 1;
  return (
    <>
      <h2>
        제 반려 동물의 이름은 <u>{name}</u>입니다.
        <br />
        <u>{name}</u>은 <u>{animal}</u>입니다.
      </h2>
      <br />
      <h2>{3 + 5 == 8 ? "정답입니다!" : "오답입니다!"}</h2>
      <br />
      <h2>{a > b && "a가 b보다 큽니다"}</h2>
    </>
  );
}
