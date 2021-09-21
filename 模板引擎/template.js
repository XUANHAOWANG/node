var http=require('http');
var fs=require('fs')
var template=require('art-template')
var server=http.createServer()

var Dir='D:/Movie/www.html'
server.on('request', function(req, res) {
    var url=req.url
    fs.readFile('./index.html',function(err, data){
        if(err) return res.end(err)
    })
    fs.readdir(Dir,function(err, data){
        if(err) {return res.end(err)}
       data= template.render(data.toString,{
            files:files

         })
         res.end(data)
})
})
server.listen(3000)
