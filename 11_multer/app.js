const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// 1. 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 3. static 폴더 설정
// 정적 파일 관리
app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

// 4. multer 설정
const upload = multer({
  dest: "uploads/",
});

// 확장자 같이 저장
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      // uploads 폴더를 미리 만들어놔야 한다.
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      // const extention = path.extname(파일이름.확장자) -> 확장자만 리턴
      const extention = path.extname(file.originalname);

      // path.basename(파일이름.확장자, 확장자) -> 파일 이름만 리턴 // shinzzang
      done(
        null,
        path.basename(file.originalname, extention) + Date.now() + extention
      );
      console.log("path.extname: ", path.extname(file.originalname));
      console.log(
        "path.basename: ",
        path.basename(file.originalname, extention)
      );

      /*    
            file = {
                fieldname: 'userfile',
                originalname: 'shinzzang.png',
                encoding: '7bit',
                mimetype: 'image/png',
                destination: 'uploads/',
                filename: 'be966604dedfd6b9f47ad9faca4f671b',
                path: 'uploads\\be966604dedfd6b9f47ad9faca4f671b',
                size: 198200
            }
            */
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

/* API */
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// 확장자 같이 저장
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.body); // 파일 정보는 req.file에서 확인
  console.log(req.file);
  res.send("응답");
});

// 확장자 같이 저장 안됨
app.post("/upload2", upload.single("userfile"), (req, res) => {
  console.log(req.file);
  res.send("응답");
});

// 하나의 input에 여러 개의 파일
app.post("/uploads/array", uploadDetail.array("multifiles"), (req, res) => {
  console.log(req.files); // 파일이 여러 개일때는 files로 확인
  console.log(req.body);
  res.send("업로드 완료");
});
/* 배열로 들어옴
[
  {
    fieldname: 'multifiles',
    originalname: 'sanrio3.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: 'uploads/',
    filename: 'sanrio31732518391809.png',
    path: 'uploads\\sanrio31732518391809.png',
    size: 14139
  },
  {
    fieldname: 'multifiles',
    originalname: 'sanrio4.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: 'uploads/',
    filename: 'sanrio41732518391809.png',
    path: 'uploads\\sanrio41732518391809.png',
    size: 12589
  }
]
*/

// 여러 개 input에 파일 업로드
// .fields() 사용.
// fields의 매개변수는 배열[{name:'name1'}, ...]
app.post(
  "/uploads/fields",
  uploadDetail.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
  ]),
  (req, res) => {
    // upload.fields()로 받아주는 req.files 객체 형태로 들어옴
    console.log(req.files);
    console.log(req.body);
    res.send("업로드 완료");
  }
  /* 객체로 들어옴
    {
        file1: [
            {
            fieldname: 'file1',
            originalname: 'sanrio5.png',
            encoding: '7bit',
            mimetype: 'image/png',
            destination: 'uploads/',
            filename: 'sanrio51732518895394.png',
            path: 'uploads\\sanrio51732518895394.png',
            size: 10104
            }
        ],
        file2: [
            {
            fieldname: 'file2',
            originalname: 'sanrio6.png',
            encoding: '7bit',
            mimetype: 'image/png',
            destination: 'uploads/',
            filename: 'sanrio61732518895396.png',
            path: 'uploads\\sanrio61732518895396.png',
            size: 41669
            }
        ],
        file3: [
            {
            fieldname: 'file3',
            originalname: 'sanrio7.png',
            encoding: '7bit',
            mimetype: 'image/png',
            destination: 'uploads/',
            filename: 'sanrio71732518895399.png',
            path: 'uploads\\sanrio71732518895399.png',
            size: 57823
            }
        ]
    }
  */
);

// 동적 form 파일 업로드
app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send({ file: req.file, fileInfo: req.body });
  // res.send({ ...req.file, ...req.body });
});
/*
{
  fieldname: 'dynamicFile',
  originalname: 'sanrio5.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: 'sanrio51732520688071.png',
  path: 'uploads\\sanrio51732520688071.png',
  size: 10104
}
*/

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
