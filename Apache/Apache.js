var http = require('http')
var fs = require('fs')

var server = http.createServer()
server.listen(3000, function (){
console.log('listening on 3000')
})

//一个请求 对应一个响应 如果一个请求中 已经响应结束了 则不能重复发送响应
server.on('request', function (req,res) {
    //body 
 if(req.url==='/'){
     res.end('this is main page')
 }
 else if(req.url==='/a.txt'){
    fs.readFile('C:/User/user/workspace/node/Apache/a.txt',function(err,data){
        if(err) {
            return res.end('error 404')
        }
        res.end(data)
    })
 }
 else if(req.url==='/index.html'){
 fs.readFile('C:/User/user/workspace/node/Apache/index.html',function(err,data){
    if(err) {
        return res.end('error,404,html')
    }
    res.end(data)
})
    
}
})
