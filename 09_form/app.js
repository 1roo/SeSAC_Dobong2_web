const express = require("express");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// ejs views 미들웨어 설정
app.set("view engine", "ejs"); // 템플릿 엔진 설정
app.set("views", "./views"); // view 파일 폴더 경로 설정

// 정적 파일 관리
app.use("/static", express.static(__dirname + "/public"));

// body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* 요청 > 응답 */
app.get("/", (req, res) => {
  res.render("index.ejs");
});

/* form get 요청 */
app.get("/getForm", (req, res) => {
  console.log(req.query);
  //   res.send("form data get 요청 성공");
  res.render("result.ejs", {
    title: "GET",
    userInfo: req.query,
  });
});

/* form post 요청 */
app.post("/postForm", (req, res) => {
  console.log(req.body);
  //   res.send("form data post 요청 성공");
  res.render("result", {
    title: "POST",
    userInfo: req.body,
  });
});

/* form validation post 요청 */
app.post("/js-form-check", (req, res) => {
  console.log(req.body);
  res.send("js 유효성 검사");
});

/* 실습 문제 */
// practice1로 들어갔을 때, practice1.ejs를 화면에 보여줘야 함.
app.get("/practice1", (req, res) => {
  res.render("practice1");
});
// practice2로 들어갔을 때, practice2.ejs를 화면에 보여줘야 함.
app.get("/practice2", (req, res) => {
  res.render("practice2");
});
// 각 practice.ejs에는 각각 get, post를 통한 폼 요청이 있고  결과 페이지는 prac_result.ejs를 공통으로 사용.
app.get("/prac1", (req, res) => {
  res.render("prac_result", {
    title: "GET",
    userInfo: req.query,
  });
});

app.post("/prac2", (req, res) => {
  res.render("prac_result", {
    title: "POST",
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
