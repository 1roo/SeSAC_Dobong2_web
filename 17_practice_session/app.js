const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));

// 세션 설정, 10분 뒤 세션 종료하도록
app.use(
  session({
    secret: "session Key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 10,
    },
  })
);

const userInfo = {
  userId: "cocoa",
  userPw: "1234",
};

app.get("/", (req, res) => {
  // 로그인 된 유저: {isLogin: true, user:유저)
  // 로그인 안 된 유저: {isLogin: false}
  const isLogin = req.session.user ? true : false;
  const user = req.session.user;
  res.render("index", { isLogin, user });
});

app.get("/login", (req, res) => {
  res.render("login");
});

// POST /login
app.post("/login", (req, res) => {
  // 실제 로그인 진행 => 세션 연결
  const { id, pw } = req.body;
  // 세션의 user라는 키를 추가하여 userId값을 value로 전달
  if (id === userInfo.userId && pw === userInfo.userPw) {
    req.session.user = userInfo.userId;
    res.redirect("/");
  } else {
    res.send("아이디 또는 비밀번호를 확인하세요.");
  }
});

// GET /logout
app.get("/logout", (req, res) => {
  // 실제 로그아웃 진행 => 세션 삭제
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
