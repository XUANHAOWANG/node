const http = require('http');
//首先创建服务器
//监听服务器
//设定服务器端口
const port=8000
const server =http.createServer()
server.on('request',function(req, res){
    //路径为/login时
   if(req.url==='/login'){
    
       res.end('<body><button type="button" id="btn">This is login page</button><style  type="text/css">#btn{width:100px;height:200px;background-color:green;}</style></body>')
   return
    }

//路径为signin
    if(req.url==='/signin'){
        res.end('<body><button type="button" id="btn">this is sign page</button><style type="text/css">#btn{width:120px;height:200px;background-color:red;font-size:40px}</style></body>')
   return
    }
//JSON.stringify()可以将其余类型数据转换为string
if(req.url==='/'){
   
const log=[{name:'apple',price:'18'},{name:'apple',price:'18'}]
res.end('<P>ASD'+JSON.stringify(log)+'ASD<P>')
console.log(req.url)
return
}
else{
    res.end('404 not found')
}

   


}).listen(port,function(){
    console.log('server initialing')
})


