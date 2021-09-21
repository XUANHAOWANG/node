// const fs = require('fs');
// const fd=fs.openSync('hello.txt','r')
// console.log(fd)
// //使用同步阅读文件
// const content=fs.readFileSync(fd, 'utf8')//路径 ‘字符’
// console.log(content)
// //使用异步
// fs.readFile('hello.txt',(err,data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString()+ ' async')
//     }
//     console.log(12345)
// })
// //上面的内容排到最后输出
// console.log('123')
//同步>异步>回调
//promise将异步执行变为同
//  function one(){
//      return "one"
//  }

//  function two(){
//     return new Promise((resolve,reject)=>
//     {setTimeout(()=>{resolve("two")},0)
// }
// )
//  }
//  function three(){
//     return "three"
//  }

// async function run(){
//     console.log(one())
//      //await 将promise 变为同步输出
//     console.log(await two())//当输出到这里时 two的结果为待定 只有等后面的代码输出完才能继续执行 因此使用await 将two变为同步
//     console.log(three())
//  }
// run()


//错误处理 try catch
//抛出错误 throw error

//  try{let a
//  console.log(a.bb)}catch(err){
//     console.log(err.stack)
// }
// console.log('error address')

//主动抛出错误
// function thr(){
//     if(Date.now()%2===0){
//         console.log('even time')
//     }else{//throw error
//         throw new Error('odds time')
//     }
// }
// //捕获异常
// try{
//    thr() 
// }catch(err){
//     console.log(err.message)
// }
// console.log(Date.now())


//执行器函数

const p=new Promise((resolve, reject)=>{
    //执行异步操作
    setTimeout(()=>{
      //如果成功 调用resolve（value）
if(Date.now()%2===0){
resolve('偶数')//传入一个成功的值    
}else{
//如果失败 调用reject（reason）
reject('奇数')
}  
    },1000)

})
console.log('behind new promise ')
//then 指定 成功或失败的回调函数
setTimeout(()=>{ 
    p.then(
    value=>{
        //如果成功 接受value数据
        //这个函数称为 onResolved
        console.log('success',value)
    },
    reason=>{
        //如果失败 接受reason数据 
        //这一函数称为 onRejected
        console.log('failed',reason)
    }
)  

})
  