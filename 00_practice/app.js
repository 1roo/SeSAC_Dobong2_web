const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      const extention = path.extname(file.originalname);
      done(
        null,
        path.basename(file.originalname, extention) + Date.now() + extention
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/register", uploadDetail.single("file"), (req, res) => {
  const result = { ...req.body, file: req.file.path };
  res.render("result.ejs", { result });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
