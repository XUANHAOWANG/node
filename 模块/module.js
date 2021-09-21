/*
npm install md5 --save
const md5=require('md5')
md5('12345')加密
*/
const md5 = require('md5')

const a=md5('12345')
console.log(a)//827ccb0eea8a706c4c34a16891f84e7b 
console.log(md5.toString(a))