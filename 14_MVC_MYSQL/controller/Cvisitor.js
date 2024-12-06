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

/* '/visitor/:id' GET */
exports.getVisitor = (req, res) => {
  const id = req.params.id;
  Visitor.getVisitor(id, (result) => {
    console.log("한개 Cvisitor.js", result);
    res.send(result);
  });
};

/* '/visitor' POST(등록) */
exports.postVisitor = (req, res) => {
  console.log("req.body", req.body);
  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js", result);
    res.send({ id: result, comment: req.body.comment, name: req.body.name });
  });
};

/* '/visitor' DELETE(삭제) */
exports.deleteVisitor = (req, res) => {
  console.log("req.body", req.body);
  console.log("req.body.id", req.body.id);
  Visitor.deleteVisitor(req.body.id, () => {
    res.send("삭제 완료!");
  });
};

/* '/visitor' PATCH(수정) */
exports.patchVisitor = (req, res) => {
  console.log("req.body", req.body);
  Visitor.patchVisitor(req.body, () => {
    res.send("수정 완료");
  });
};
