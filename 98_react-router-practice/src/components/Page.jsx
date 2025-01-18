import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function Page() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [searchParams] = useSearchParams();

  const stuName = searchParams.get("name");
  return (
    <>
      {stuName ? (
        <p>
          학생의 이름은 <span style={{ color: "green" }}>{name}</span>, 실제
          이름은 <span style={{ color: "blue" }}>{stuName}</span>입니다.
        </p>
      ) : (
        <p>
          학생의 이름은 <span style={{ color: "green" }}>{name}</span>입니다.
        </p>
      )}
      <button
        onClick={() => {
          navigate(-1);
        }}
      ></button>
    </>
  );
}
