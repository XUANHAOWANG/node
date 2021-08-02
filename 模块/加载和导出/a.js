console.log(exports)//空对象
require('./b')
const foo='aaa'
exports.foo = 'from a exports value'//通过 exports.给foo赋值
exports.add=function(a,b){//为add赋值函数
return console.log( a*b)
}

//这个加法函数与上面不是一种类型 这是在模块内的函数 上面的是方法内的函数 可以传给kuai文件
function add(a,b){
return console.log(a+b)
}

var age="26"
exports.age=age;