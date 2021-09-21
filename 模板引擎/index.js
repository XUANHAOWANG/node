//art=template 模板引擎 
//安装 npm install art-template
//在需要 使用的文件模块中加载art-template  
//install 的名字是什么 require的名字就是什么
//需要使用 require方法加载  require('art-template')
//查文档 使用模板殷勤的API
var fs = require('fs')
var template=require('art-template')

// // 基于模板名渲染模板
// template(filename, data);

// // 将模板源代码编译成函数
// template.compile(source, options);

// // 将模板源代码编译成函数并立刻执行
// template.render(source, data, options);
var tpl=`<!DOCTYPE html><html lang="en"><head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>{{title}}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
        
    </head>
    <body>
       
        <p>大家好，我叫：{{name}}</p>
        <p>我今年{{age}}岁了</p>
        <p>我来自{{where}}</p>
        <p>我喜欢:{{each hobbies }}{{$value}}{{/each}}</p> 
    
        
    </body>
</html>`
fs.readFile('./tpl.html',function(err, data){
    if(err){
        return console.error(err)
    }
    //默认读取到的data是二进制
    //需要转换成字符串 render函数才能正常运行
    var result = template.render(data.toString(),
{name:'wang',
        age:'26',
        where:'Deya',
        hobbies:['swimming ',' play games ',' running'],
    title:'personal inform'})
console.log(result);
})

