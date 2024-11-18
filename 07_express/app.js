const express = require("express");
const app = express();
const PORT = 8080;

// middleware 설정 추가
// 뷰 엔진 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// static 폴더 설정 추가 (정적파일관리)
// static 이라는 경로를 /public 대신 사용할거다~
app.use("/static", express.static(__dirname + "/public"));

app.get("/", function (request, response) {
  /**
   * request: 클라이언트가 서버에게 보내는 요청
   * response: 서버가 클라이언트에게 보내는 응답
   */
  console.log(request);
  // response.send('hello express'); // 화면에 나옴
  response.render("test", {
    isLogin: false,
    userInfo: {
      name: "narae",
      msg: "졸려",
    },
  });
});

// get /login
app.get("/login", (req, res) => {
  res.render("login", {
    isLogin: false,
    userInfo: {
      name: "narae",
      msg: "졸려",
    },
  });
});

// get /register
app.get("/register", (req, res) => {
  res.render("register", {
    isLogin: false,
    userInfo: {
      name: "narae",
      msg: "졸려",
    },
  });
});

// 404 처리
app.use(function (req, res) {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
