const fs = require('fs')

var readStream=fs.createReadStream('./data/input.txt')
var writeStream=fs.createWriteStream('./data/input2.txt')

readStream.pipe(writeStream)//通过管道将大型文件以stream的形式复制到指定位置