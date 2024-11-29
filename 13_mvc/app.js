const { render } = require("ejs");
const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
