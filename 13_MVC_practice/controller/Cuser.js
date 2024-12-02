const User = require("../model/User");

// GET '/'
exports.main = (req, res) => {
  res.render("index");
};

// 실습1
// POST '/login'
exports.login = (req, res) => {
  // { userId: 'aaaa', userPw: 'aaaaasssss' }

  // 객체 구조 분해 추가
  const { realId, realPw } = User.getUserInfo(); //{ userId : 'bababa', userPw: '1234' }
  const { userId, userPw } = req.body;
  if (realId === userId && realPw === userPw) {
    res.send({ userInfo: req.body, isSuccess: true });
  } else {
    res.send({ isSuccess: false });
  }
};

// 실습2
// POST '/login2'
exports.login2 = (req, res) => {
  console.log(User.user);
  /*
  apple//1234//사과사과
  banana//4321//바나나나나
  cocoa//qwer1234//미떼
  */
  const users = []; //[{realId, realPw, name}, ...]
  const userIds = []; //['apple', 'banana', 'cocoa']
  const userData = User.user.split("\n");
  console.log(userData); //['apple//1234//사과사과', 'banana//4321//바나나나나', 'cocoa//qwer1234//미떼']
  userData.forEach((user) => {
    // user = 'banana//4321//바나나나나'
    const userInfoArr = user.split("//"); //[banana, 4321, 바나나나나]
    const userObj = {
      realId: userInfoArr[0],
      realPw: userInfoArr[1],
      name: userInfoArr[2],
    };
    users.push(userObj);
    userIds.push(userInfoArr[0]);
  });
  console.log("users: ", users);
  console.log("userIds: ", userIds);

  // 요청 정보를 바탕으로 회원이 맞는지 확인
  const idx = userIds.indexOf(req.body.userId);
  // idx >= 0 -> userIds에 있는 회원
  // idx = -1 -> userIds에 없는 회원
  if (idx >= 0) {
    if (users[idx].realPw === req.body.userPw) {
      res.send({ isSuccess: true, userName: users[idx].name });
    } else {
      res.send({ isSuccess: false });
    }
  } else {
    res.send({ isSuccess: false });
  }
};
