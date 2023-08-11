// 捕获未处理的异常
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});

// 捕获未处理的 Promise 拒绝
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

var express = require("express");
var path = require('path');
const readline = require('readline');
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.use('/css', express.static(path.join(__dirname, '../css')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// List to track selected usernames
var selectedUsernames = [];

io.on("connection", (socket) => {
    socket.on("selectUsername", (username) => {
        if (selectedUsernames.includes(username)) {
            socket.emit("usernameSelectionResult", { success: false, message: "Username already selected!" });
        } else {
            selectedUsernames.push(username);
            socket.emit("usernameSelectionResult", { success: true });
        }
    });

    // 监听命令行clear指令
    socket.on("clearChat", () => {
        io.emit("clearChat");
    });

    // 监听断开连接事件
    socket.on("disconnect", () => {
        if (currentUser) {
            const index = selectedUsernames.indexOf(currentUser);
            if (index > -1) {
                selectedUsernames.splice(index, 1); // 从列表中移除用户名
            }
        }
    });
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.prompt();

rl.on('line', (input) => {
    if (input.trim() === "clear") {
        io.emit("clearChat");
        console.log("Chat cleared!");
    }
    rl.prompt();
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});