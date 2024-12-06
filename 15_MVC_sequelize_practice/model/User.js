// TODO: DB(mysql) 연결
const mysql = require("mysql2");
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
      cb(rows.insertId);
    }
  );
};

exports.signin = (data, cb) => {
  const { userid, pw } = data;
  conn.query(
    `SELECT id FROM user WHERE userid="${userid}" AND pw="${pw}"`,
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

exports.getUserProfile = (userid, cb) => {
  conn.query(
    `SELECT id, userid, pw, name FROM user WHERE userid=?`,
    [userid],
    (err, rows) => {
      if (err) return cb(err);
      if (rows.length > 0) {
        cb(null, rows[0]);
      } else {
        cb(null, null);
      }
    }
  );
};

exports.updateProfile = (data, cb) => {
  conn.query(
    `UPDATE user SET pw=?, name=? WHERE userid=?`,
    [data.pw, data.name, data.userid],
    (err, result) => {
      if (err) return cb(err);
      cb(null, result);
    }
  );
};

exports.deleteUser = (userid, cb) => {
  conn.query(`DELETE FROM user WHERE userid=?`, [userid], (err, result) => {
    if (err) return cb(err);
    cb(null, result);
  });
};
