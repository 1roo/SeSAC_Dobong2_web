const express = require("express");
const app = express();
const PORT = 8080;
const { sequelize } = require("./models");

// middleware 설정
app.set("view engine", "ejs");

// body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// router 설정
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// sync()
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connection success");

    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("db connection err>>");
    console.log(err);
  });
