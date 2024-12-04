// TODO: DB(mysql) 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "mysql",
  database: "sesac",
});
// TODO: 모델 코드
exports.signup = (data, cb) => {
  conn.query(
    `INSERT INTO user VALUE(null, "${data.userid}", "${data.pw}", "${data.name}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("Rows:", rows);
      cb(rows.insertId);
    }
  );
};

exports.signin = (data, cb) => {
  conn.query(
    `SELECT id FROM user WHERE userid="${data.userid}" AND pw="${data.pw}"`,
    (err, rows) => {
      if (err) throw err;
      if (rows.length > 0) {
        cb(null, { success: true });
      } else {
        cb(null, { success: false });
      }
    }
  );
};

exports.getProfile = (data, cb) => {
  const { userid } = data;
  conn.query(`SELECT * FROM user WHERE userid="${userid}"`, (err, rows) => {
    if (err) throw err;
    cb(null, rows[0]);
  });
};
