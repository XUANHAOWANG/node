//app 
//当前模块的所有依赖项都声明在文件模块的最上面
var http = require('http')
var fs = require('fs')
var template = require('art-template')
http.createServer(
    function(req, res){
var url=req.url
if(url==='/'){
    fs.readFile('./view/index.html',function(err,data){
        if(err){
        return   res.end('404 not found')
        }
        res.end(data)
    })
}
    }
).listen(3100,function(){
    console.log('running')
})

