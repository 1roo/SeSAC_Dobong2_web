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

function call(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(text);
      resolve();
    }, 1000);
  });
}

call("kim")
  .then(() => call("kim 반가워"))
  .then(() => call("back"))
  .then(() => call("back을 실행했구나"))
  .then(() => call("여기는 callback hell"));

function call(name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(name);
      resolve();
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("back");
      resolve();
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("여기는 callback hell");
      resolve();
    }, 1000);
  });
}

async function execute() {
  await call("kim");
  await call("kim 반가워");
  await back();
  await back();
  await hell();
}

execute();
