const express = require("express");
const app = express();
const PORT = 8080;

// socket.io의 소켓이 http모듈로 생성된 서버에서만 동작
const http = require("http");

const server = http.createServer(app);
const io = require("socket.io")(server);

// middleware 설정
app.set("view engine", "ejs");

// api
app.get("/", (req, res) => {
  res.render("client");
});

app.get("/prac", (req, res) => {
  res.render("prac");
});

app.get("/chat-room", (req, res) => {
  res.render("rooms");
});

// socket 코드 작성
io.on("connection", (socket) => {
  //   console.log(socket);
  console.log("socket.id>> ", socket.id);
  //----------------------------------
  // [on과 emit 사용해보기]
  // client > server > client
  socket.on("event_name", (arg1, arg2, arg3, cb) => {
    console.log("[event_name]>> ", arg1, arg2, arg3);
    cb(arg1, arg2, arg3);
  });

  // client >> server
  socket.on("cb_test", (arg, cb) => {
    console.log("[cb_test]", arg);
    console.log(cb); //undefined
  });

  // server >> client, 클라이언트 전체에게 보내기
  io.emit("entire_client", "전체에게 보냅니다");

  // server >> client, 클라이언트 하나에게 보내기
  socket.emit("one_client", "하나의 클라이언트에게 보냅니다");

  // ---------- 채팅 만들기! -----------
  // 나의 메세지가 나에게만 보임
  socket.on("new_message1", (arg, cb) => {
    console.log("[new_message1]::", arg);
    cb(arg); // 나에게만 데이터 전달달
  });

  // 나의 메세지가 모두에게 보이도록
  socket.on("new_message2", (arg) => {
    console.log("[new_message2]::", arg);
    io.emit("message_render", arg);
  });

  // prac.ejs
  socket.on("prac_message", (msg) => {
    console.log(`client: ${msg}`);
  });

  //----------- 방 있는 채팅(rooms.ejs) ------------
  //   console.log("socket.rooms: ", socket.rooms); // 방이 없을 때, {socket.id} 정보만 들어와 있음.
  //   console.log(socket.room); // undefined
  socket.on("join", (roomname) => {
    // 2. 서버에서 방 열기
    // join(): 같은 방에 들어가있는 사람들끼리 통신할 수 있도록 함
    socket.join(roomname); // 방 열기
    socket.room = roomname; // 다른 곳에서도 roomname을 확인할 수 있도록 정보 추가
    // console.log("socket.rooms: ", socket.rooms); // { 'nxtRrEy70iVJUCB9AAAF', '3' }
    console.log(socket.room);

    // 3-1. 입장메세지 모두에게 보내기 (server > client)
    io.to(roomname).emit("userjoin", `${socket.id} 입장`);

    // 3-2. 입장메세지 나를 제외하고 보내기(server > client)
    // broadcast: 내가 제외됨
    socket.broadcast.to(roomname).emit("userjoin", `[${socket.id}]님 입장`);
  });

  // 6. client > server 전체 클라이언트에게 메세지 보내기
  socket.on("message", (msg) => {
    console.log("클라이언트의 메시지: ", msg);

    // 내가 포함된 방? >> socket.room
    console.log("내가 포함된 방: ", socket.room);

    // 나 포함 전체에게 메세지 전달
    io.to(socket.room).emit("message_to_all", msg, socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
