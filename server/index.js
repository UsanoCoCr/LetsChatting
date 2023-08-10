var express = require("express");
var path = require('path');
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.use('/css', express.static(path.join(__dirname, '../css')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

io.on("connection", (socket) => {
    socket.on("newChatMessage", (msg) => {
        console.log("message: " + msg);
        io.emit("broadCastMessage", "后端传过来的消息");
    });
});
http.listen(3000, () => {
    console.log("listening on *:3000");
    console.log("http://localhost:3000");
});

