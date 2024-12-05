const User = require("../model/User");
// TODO: 컨트롤러 코드

exports.main = (req, res) => {
  res.render("index");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.signup = (req, res) => {
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

exports.getUserProfile = (req, res) => {
  const { userid } = req.body;
  User.getUserProfile(userid, (err, data) => {
    if (err) {
      console.error(err);
      res.send({ success: false });
    } else if (data) {
      res.render("profile", {
        success: true,
        id: data.id,
        userid: data.userid,
        name: data.name,
        pw: data.pw,
      });
    } else {
      res.send({ success: false });
    }
  });
};

exports.updateProfile = (req, res) => {
  User.updateProfile(req.body, (err, result) => {
    if (err) {
      console.error(err);
      res.send({ success: false });
    } else res.send({ success: true });
  });
};

exports.deleteUser = (req, res) => {
  const { userid } = req.body;
  User.deleteUser(userid, (err, result) => {
    if (err) {
      console.error(err);
      res.send({ success: false });
    } else res.send({ success: true });
  });
};
