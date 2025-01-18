import { Link } from "react-router-dom";

export default function Navbar() {
  const style = { margin: "4px" };
  return (
    <>
      <nav>
        <h2>ReactRouter 실습</h2>

        <ul>
          <li style={style}>
            <Link to="/student/sean">학생</Link>
          </li>
          <li style={style}>
            <Link to="/student/codingon">코딩온</Link>
          </li>
          <li style={style}>
            <Link to="/student/new?name=jisu">searchParams</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
