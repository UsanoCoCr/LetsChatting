# LetsChatting

## 项目结构
这是一个基于socket的聊天室项目，使用了python的socket库，并且将聊天室在一个网站上进行了部署。项目的结构如下：
```
LetsChatting/               # 项目根目录
├── README.md              # 项目说明文件
├── package-lock.json      # npm 依赖版本锁定文件
├── package.json           # npm 项目配置和依赖文件
│
|── node_modules/          # Node.js 模块目录
|   ├── ...                # 模块文件
|
├── server/                # 服务器端代码目录
│   ├── index.js           # 服务器端主程序，启动服务器和socket.io
│   ├── db/                # 数据库相关的代码
│   │   ├── connection.js  # 数据库连接和配置
│   │   └── models/        # 数据模型定义
│
├── css/                   # 前端样式文件
│   ├── index.css          # 聊天室主页面样式
│
└── views/                 # 前端视图文件
    ├── index.html         # 聊天室主页面
```

## 项目介绍 2023.8.10版本
* 本项目旨在开发一个网页版简易匿名聊天室，用户可以在网页上与不认识的朋友们聊天，由于作者技术原因，目前仅支持文字聊天。
* 项目目前没有储存聊天记录、用户信息的设置，完全是随机开启一个聊天室，并进行聊天，聊天结束后，聊天记录将会被销毁。

## 开发日志
### 2023.8.10
- 完成了项目结构规划，编写readme文件
- 初步完成了网站界面的设计，待完善聊天区域的样式
- 前端与后端的交互在本地调试成功