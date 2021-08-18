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

}else if(url.startsWith('/public')){
    console.log(url)
    fs.readFile('.'+url,(err,data)=>{
        if(err){
            res.end(err)
        }
        res.end(data)
    })
}else if(url==='/post'){
    fs.readFile('./view/post.html',(err,data)=>{
        console.log(url)
        if(err){
            res.end('404 not found')
            console.log(err)
        }
        res.end(data)
    })
}else{
    fs.readFile('./view/404.html',(err,data)=>{
        if(err){
            return res.end('404 not found')
        }
        res.end(data)
    })
}
    }
).listen(3100,function(){
    console.log('running')
})

