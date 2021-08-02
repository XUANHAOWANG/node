//node 为js提供了很多服务器级别的API并包装到一个具名的核心模块里
//例如文件操作的fs模块 http模块 path模块 os模块
//使用时 const fs=require('fs')    
const path = require('path')
const os = require('os')
// console.log(os.cpus())//cpu information
console.log(os.totalmem())//memory size  显示为字节

if(path.extname('./week2/newFile.txt')==='.txt'){
    console.log('txt file')
}

