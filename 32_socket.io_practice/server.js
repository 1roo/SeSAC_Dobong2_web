const express = require("express");
const app = express();
const PORT = 8080;
const http = require("http");

const server = http.createServer(app);
const io = require("socket.io")(server);

// middleware 설정
app.set("view engine", "ejs");

// api
app.get("/", (req, res) => {
  res.render("main");
});

io.on("connection", (socket) => {
  console.log("새로운 유저 접속:", socket.id);

  socket.on("join", (roomname) => {
    socket.join(roomname);
    socket.room = roomname;

    io.to(socket.room).emit("userjoin", `${socket.id}님 입장`);
  });

  socket.on("message", (msg) => {
    console.log(`(${socket.id}):`, msg);

    io.to(socket.room).emit("message_to_all", msg, socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
