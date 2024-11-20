const { reject } = require("async");

// 기존 코드
function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log("back");
    cb("back");
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}

///////////////////////////////////

// 콜백 함수 실행
call("kim", (name) => {
  console.log(name + "반가워");
  back((text) => {
    console.log(text + "을 실행했구나");
    hell((msg) => {
      console.log("여기는 " + msg);
    });
  });
});

// Promise
function callP(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function backP() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hellP() {
  // reject 생략 가능
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

callP("kim")
  .then((result) => {
    console.log(result + "반가워");
    return backP();
  })
  .then((text) => {
    console.log(text + "을 실행했구나");
    return hellP();
  })
  .then((msg) => {
    console.log(console.log("여기는 " + msg));
  });

// async await
async function execute() {
  const name = await callP("kim");
  console.log(name + "반가워");
  const back = await backP();
  console.log(back + "을 실행했구나");
  const hell = await hellP();
  console.log("여기는 " + hell);
}

execute();
