var http = require('http')
var fs = require('fs')


var server = http.createServer()
server.listen(3000, function (){
console.log('listening on 3000')
})

var path='C:/Users/user/workspace/node/Apache'
//一个请求 对应一个响应 如果一个请求中 已经响应结束了 则不能重复发送响应
server.on('request', function (req,res) {
    
    //body 
 if(req.url==='/'){
     res.end('this is main page')
 }
 else if(req.url==='/a.txt'){
    fs.readFile(path+'/a.txt',function(err,data){
        if(err) {
            console.log(err)
            return res.end('error 404')
        }
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        data=data.toString()
        data=data.replace('中文测试','替换测试')
        res.end(data)
    })
 }
 else if(req.url==='/index.html'){
 fs.readFile('C:/Users/user/workspace/node/index.html',function(err,data){
    if(err) {
        console.log(err)
        return res.end('error,404,html')
    }
    res.end(data)
})
    
}
})
