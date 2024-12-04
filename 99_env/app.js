const express = require("express");
const app = express();
// console.log(process.env);
const dotenv = require("dotenv");
dotenv.config(); // config 위에서는 env 정보를 읽을 수 없음.
const PORT = process.env.PORT;
console.log("PORT: ", PORT);
console.log("DB PASSWORD: ", process.env.DB_PASSWORD);
console.log("DB_DATABASE: ", process.env.DB_DATABASE);

app.get("/", (req, res) => {
  res.send("get요청");
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
