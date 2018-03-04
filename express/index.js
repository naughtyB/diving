const express = require("express");
let app = express();
const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

let urlencodeParser = bodyParser.urlencoded({extends:false});
let jsonParser = bodyParser.json({extends:false});

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//获取首页数据
app.use('/server/homepage/data', urlencodeParser, require('./router/getHomepageData'));

//获取练习页数据
app.use('/server/practice/data', urlencodeParser, require('./router/getPracticeData'));

//登录
app.use('/server/user/login', urlencodeParser, require('./router/login'));

//自动检测登录
app.use('/server/user/autoLogin', urlencodeParser, require('./router/autoLogin'));

//注册
app.use('/server/user/register', urlencodeParser, require('./router/register'));

//找回密码
app.use('/server/user/resetPassword', urlencodeParser, require('./router/resetPassword'))

http.createServer(app).listen(8000);