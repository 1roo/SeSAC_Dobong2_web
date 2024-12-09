const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

// TODO: 쿠키 미들웨어 설정
app.use(cookieParser());

const cookieConfig = {
  httpOnly: true,
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
};

app.get("/", (req, res) => {
  // TODO: 쿠키값 가져오기 및 index.ejs에 보내기
  const popup = req.cookies.popup || "show";
  res.render("index", { popup });
});

app.post("/set-cookie", (req, res) => {
  // TODO: 쿠키 생성하기
  res.cookie("popup", "hide", cookieConfig);
  res.send("쿠키 생성 성공");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
