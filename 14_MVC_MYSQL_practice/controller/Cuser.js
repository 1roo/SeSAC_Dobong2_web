const User = require("../model/User");
// TODO: 컨트롤러 코드

exports.main = (req, res) => {
  res.render("index");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.signup = (req, res) => {
  console.log("req.body", req.body);
  User.signup(req.body, (result) => {
    res.send({
      id: result,
      userid: req.body.userid,
      pw: req.body.pw,
      name: req.body.name,
    });
  });
};

exports.getSignin = (req, res) => {
  res.render("signin");
};

exports.signin = (req, res) => {
  console.log("signin req.body: ", req.body);
  User.signin(req.body, (err, result) => {
    if (err) res.send({ success: false });
    if (result.success) {
      res.send({
        success: true,
        userid: req.body.userid,
      });
    } else {
      res.send({ success: false });
    }
  });
};

exports.getProfile = (req, res) => {
  const { userid } = req.params;

  if (userid) {
    User.getProfile({ userid }, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        res.render("profile", { data: result });
      }
    });
  }
};

exports.postProfile = (req, res) => {
  console.log(req.body);
  const { userid } = req.body;
  User.getProfile({ userid }, (err, result) => {
    if (err) {
      console.error(err);
    }
    res.render("profile", { data: result });
  });
};
