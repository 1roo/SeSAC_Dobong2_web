const User = require("../model/User");

// GET /
exports.main = (req, res) => {
  res.render("index");
};

// POST /login
exports.login = (req, res) => {
  const { inputId, inputPw } = req.body;
  const { realId, realPw } = User.UserInfo();
  console.log(`Received ID: ${inputId}, Password: ${inputPw}`);

  const isAuthenticated = inputId === realId && inputPw == realPw;

  const response = {
    isAuthenticated,
  };
  res.json(response);
};
