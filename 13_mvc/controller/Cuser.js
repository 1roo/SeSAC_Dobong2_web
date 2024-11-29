const User = require("../model/User");

// GET /user
exports.getUser = (req, res) => {
  console.log(User.UserInfo()); // 객체값
  res.render("user", { ...User.UserInfo() });
  /*
  {...User.UserInfo()}
  { realId: "cocoa", realPw: "qewr1234*", name: "홍길동", age: 20, }

  {userInfo: User.userInfo()}
  {userInfo: { realId: "cocoa", realPw: "qewr1234*", name: "홍길동", age: 20, }}
  */
};
