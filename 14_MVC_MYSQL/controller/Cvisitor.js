const Visitor = require("../model/Visitor");

/* '/' GET */
exports.main = (req, res) => {
  res.render("index");
};

/* '/visitors' GET */
exports.getVisitors = (req, res) => {
  // console.log(Visitor.getVisitors());
  // [DB 연결 전]
  // res.render("visitors", { data: Visitor.getVisitors() });

  // [DB 연결 후]
  Visitor.getVisitors((result) => {
    console.log("전체목록 Cvisitor.js", result);
    res.render("visitors", { data: result });
  });
};
