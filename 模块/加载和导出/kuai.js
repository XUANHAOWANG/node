//module： 模块
//require是一种方法
//它的作用是加载模块
//在node中 模块有三种  fs http 等自己编写的文件模块
//相对路径必须加./
const fs = require('fs')
console.log('file start')
const { Agent } = require('https')
let Aexport=require('./a.js')

console.log('file end')

//在node中没有全局作用域 只有模块作用域 出了当前文件就没有用了
//require 可以省略后缀名
//加载文件模块的目的不是为了执行里面的代码 而是为了使用里面的方法
//require有两个方法 1.加载模块执行代码
//2.拿到被加载文件模块导出的接口对象
// 每个对象都提供了一个对象 export 默认是一个空对象
console.log(Aexport.foo)
Aexport.add(45,12)//这里调用./a里的add函数
Aexport.add(55,2)

console.log(Aexport.age)//从a.js里pass过来


//fs核心模块
fs.readFile('./b.js',function(err, data){
    if(err){
        console.log('failure readFile')
    }else{
        console.log('success readFile')
        console.log(data.toString())
    }
})