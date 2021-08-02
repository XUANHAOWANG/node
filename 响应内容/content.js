const http = require('http');
const server=http.createServer()
//可以同时开启多个服务器
//同一个事件端口号只能被一个程序占用
server.on('request',function(req,res){
    //在服务器端默认的发送数据 是 utf8编码内容
    //但是浏览器不认识 Utf8
    //解决办法就是告诉浏览器 发送的是什么类型的编码 
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.end('this is content.js file 你好世界')
console.log(req.socket.remoteAddress)
}).listen(3000,function(){

    console.log('server listening on')
});