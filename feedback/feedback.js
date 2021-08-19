//app 
//当前模块的所有依赖项都声明在文件模块的最上面
var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')



// var pathName=parseObj.pathname
var  comments=[{
    name:'howard',
    message:'good day',
    date:'2015/15/08'
},
{
    name:'howard',
    message:'good day',
    date:'2015/15/08'
},
{
    name:'howard',
    message:'good day',
    date:'2015/15/08'
}]
http.createServer(
    (req, res)=>{
        var parseObj = url.parse(req.url,true)

        // 单独获取不包含查询字符串的路径部分（该路径不包含 ? 之后的内容）
        var pathname = parseObj.pathname
if(pathname==='/'){
    fs.readFile('./view/index.html',function(err,data){
        if(err){
        return   res.end('404 not found')
        }
        var htmlstr=template.render(data.toString(),{comments:comments})//为htmlstr声明变量  render意思是渲染
        res.end(htmlstr)
    })

}else if(pathname==='/pinglun'){
    
    //拿到数据 parseObj.query
    //生成日期 加入到数组中
    //让用户跳转到首页
    const comment = parseObj.query
    comment.date='2021/5/8'
    comments.push(comment)
    // 服务端这个时候已经把数据存储好了，接下来就是让用户重新请求 / 首页，就可以看到最新的留言内容了

      // 如何通过服务器让客户端重定向？
      //    1. 状态码设置为 302 临时重定向
      //        statusCode
      //    2. 在响应头中通过 Location 告诉客户端往哪儿重定向
      //        setHeader
      // 如果客户端发现收到服务器的响应的状态码是 302 就会自动去响应头中找 Location ，然后对该地址发起新的请求
      // 所以你就能看到客户端自动跳转了
      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
}

else if(pathname==='/post'){
    fs.readFile('./view/post.html',(err,data)=>{
        console.log(url)
        if(err){
            res.end('404 not found')
            console.log(err)
        }
        res.end(data)
    })
}else if(pathname.startsWith('/public')){//把请求路径声明为一个变量url
    console.log(pathname)
    fs.readFile('.'+pathname,(err,data)=>{//html里每个样式 脚本 都会触发请求，这里根据路径变量 读取数据
        if(err){
            res.end(err)
        }
        res.end(data)
    })
}else{//其他路径请求访问 会显示404
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

