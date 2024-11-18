const http = require('http');
const fs = require('fs');


const server = http.createServer(function(request, response) {
    // console.log(request);
    console.log('req url: ', request.url);

    // response

    // response.write('<p>응답1</p>');
    // response.write('<p>응답2</p>');
    // response.write('<p>응답3</p>');
    // response.end('<h3>응답 종료</h3>');

    try {
        // try문
        // 실행코드
        const data = fs.readFileSync('./index.html');
        response.writeHead(200, {"content-type" : "text/html; charset=utf-8"});
        response.end(data);
    } catch(err) {
        // try문에서 어떤 에러가 발생됐는지 error 객체를 넘겨줌 (생략 가능)
        // try문에서 에러가 났을 때 실행될 코드
        console.log(err);
        response.writeHead(404, {"content-type" : "text/html; charset=utf-8"});

        // 404.html을 만들고 파일 이름을 읽을 때 오타가 났을 때 404페이지 보여주기.
        // response.end('<h1>page not found</h1>')
        const data = fs.readFileSync('./404.html');
        response.end(data);
    }

});


const PORT = 8080;

// 서버 이벤트 - connection, request
server.on('connection', function(request, response){
    console.log('connection event 발생');
})

server.on('request', (request, response) => {
    console.log('request event 발생');
});

server.listen(PORT, () => {
    console.log('연결포트: ', PORT);
});