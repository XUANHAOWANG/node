const http= require('http');
const port=3500
var server=http.createServer()
server.on('request',function(req,res){
    

    if(req.url==='/a'){
        res.end('this first page')
        return
    }
    if(req.url==='/b'){
        res.end('this second page')
    }
   
   
}).listen(port,function(){
    console.log('on')
})