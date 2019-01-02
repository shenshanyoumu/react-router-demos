var express = require("express");
var path = require("path");
var compression = require("compression");

var app = express();

// express框架使用插件的方式
app.use(compression());

// 静态资源挂载到项目根目录下的public目录
app.use(express.static(path.join(__dirname, "public")));

// 向浏览器返回public目录下的index.html文件
app.get("*", function(req, res) {
  debug;
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log("Production Express server running at localhost:" + PORT);
});
