const express = require("express");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// 1. 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 실습2 전역변수
const realId = "banana";
const realPw = "4321";

/* API */
app.get("/", (req, res) => {
  res.render("index.ejs");
});

/* Ajax 요청 */
// /ajax GET
app.get("/ajax", (req, res) => {
  //   console.log(req.query);
  res.send(req.query);
});

// /ajax POST
app.post("/ajax", (req, res) => {
  // body-perser 설정을 해야 req.body를 읽을 수 있다.
  //   console.log(req.body);
  res.send(req.body);
});

/* axios 요청 */
// /axios GET
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// /axios POST
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send("응답 완료");
});

/* fetch 요청 */
// /fetch GET
app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.send("응답 완료");
});

// /fetch POST
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// 외부 api 사용하기
app.get("/api", (req, res) => {
  res.render("api");
});

// 실습 1, 실습 2
app.get("/practice1", (req, res) => {
  res.render("practice/practice1.ejs");
});

app.get("/prac1", (req, res) => {
  const { name, gender, birth_year, birth_month, birth_day, hobbies } =
    req.query;

  const response = {
    name,
    gender,
    birth_year,
    birth_month,
    birth_day,
    hobbies: hobbies || "없음",
  };

  res.json(response);
});

app.get("/practice2", (req, res) => {
  res.render("practice/practice2.ejs");
});

app.post("/prac2", (req, res) => {
  const { inputId, inputPw } = req.body;

  const isAuthenticated = inputId === realId && inputPw === realPw;

  const response = {
    realId,
    realPw,
    inputId,
    inputPw,
    isAuthenticated,
  };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
