const models = require("../models/index");
const { errorlogs } = require("../utils/common");

exports.main = (req, res) => {
  res.render("index");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.signup = (req, res) => {
  models.User.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  })
    .then(() => {
      res.send({ success: true, message: "회원가입 성공" });
    })
    .catch((err) => {
      errorlogs(res, err);
    });
};

exports.getSignin = (req, res) => {
  res.render("signin");
};

exports.signin = async (req, res) => {
  try {
    const user = await models.User.findOne({
      where: {
        userid: req.body.userid,
        pw: req.body.pw,
      },
    });
    if (user) {
      res.send({ success: true, userid: user.userid });
    } else {
      res.send({ success: false });
    }
  } catch (err) {
    errorlogs(res, err);
  }
};

exports.getUserProfile = async (req, res) => {
  const { userid } = req.body;
  try {
    const user = await models.User.findOne({
      where: { userid: userid },
    });
    if (user) {
      res.render("profile", {
        success: true,
        id: user.id,
        userid: user.userid,
        name: user.name,
        pw: user.pw,
      });
    } else {
      res.send({ success: false });
    }
  } catch (err) {
    errorlogs(res, err);
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const [result] = await models.User.update(
      {
        pw: req.body.pw,
        name: req.body.name,
      },
      {
        where: { userid: req.body.userid },
      }
    );
    if (Boolean(result)) {
      res.send({ success: true, message: "수정 완료" });
    } else {
      res.send({ success: false, message: "수정 실패" });
    }
  } catch (err) {
    errorlogs(res, err);
  }
};

exports.deleteUser = (req, res) => {
  models.User.destroy({
    where: { userid: req.body.userid },
  })
    .then((result) => {
      if (Boolean(result)) {
        res.send({ success: true, message: `${req.body.userid} 삭제 완료` });
      } else {
        res.send({ success: false, message: "삭제 실패" });
      }
    })
    .catch((err) => {
      errorlogs(res, err);
    });
};
