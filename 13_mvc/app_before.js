const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const comments = [
  { id: 1, userid: "apple", date: "2024-10-23", comment: "안녕하세요" },
  { id: 2, userid: "banana", date: "2024-04-22", comment: "안녕하세요2" },
  { id: 3, userid: "kiwi", date: "2024-02-13", comment: "안녕하세요3" },
  { id: 4, userid: "coconut", date: "2024-06-05", comment: "안녕하세요4" },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/comments", (req, res) => {
  res.render("comments", { commentInfo: comments });
});

app.get("/comment/:id", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  const commentId = req.params.id;
  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  } else if (isNaN(commentId)) {
    res.render("404");
  }

  res.render("comment.ejs", { commentInfo: comments[commentId - 1] });
});

// [404 error]
// 반드시 맨 마지막 라우트로 선ㄴ언
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
