const http=require('http');
const fs=require('fs')
const port=4500
const server=http.createServer()

// server.listen(port)
//当客户端请求过来 就会触发第二个回调函数

//request函数需要两个参数
//request 获取客户端的请求信息 例如 请求路径
//response 响应对象可以用来给客户端发送响应消息
server.on('request',function(req,res){
    console.log(`请求的客户端端口号是${req.socket.remotePort},${req.socket.remoteAddress}`)//socket.remotePort  获取访问端口
   
   if(req.url==='/a'){
       res.write('<body><p>this is a</p></body>')
       res.end
       return
   }
    
console.log('server path'+req.url)
//response对象有一个方法 write 可以给客户端发送响应数据
//write可以多次使用 但最后一顶要使用end来结束 否则客户端会一直等待
res.write('<body><p>shoudao</p><p>di er</p></body>')
res.end//告诉客户端结束

})
//绑定端口号  第一个参数为端口号，第二个为加载执行的函数
server.listen(port,function(){
    
    console.log('server listening on')
   
})