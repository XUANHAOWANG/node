const fs = require('fs')

// function getName(callback) {
// setTimeout(()=>{
//     var name='wang'
//     callback(name)
// },1000)
// }
// var p=new Promise((resolve, reject) =>{
//     //resolve 表示成功以后的执行参数 reject表示失败后的执行参数
//     setTimeout(()=>{
//         var name='wang'
//         resolve(name)
//     },1000)

// }).then((data) =>{//使用then 来获取异步里的数据
//     console.log(data)
// })

// function test(){
// return 'hello'
// }
// console.log(test())

//将test 变为异步方法
//await b必须用在async方法里面
// async function test(){//返回一个promise
//   return  'hello2'
// }

// async function test2(){
// var data=await test()
// console.log(data)}

// test2()

// function test3(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             var a='this is test 3'
//             resolve(a)
//         },1000)
//     })
// }

// async function test4(){
// var data=await test3()
// console.log(data)
// }
// test4()



function isDir(path) {
    return new Promise((resolve, reject) => {
        fs.stat('./ejs', (error, stats) => {
            if (error) {
                console.log(err)
                reject(error)
                return
            }
            if (stats.isDirectory()) {
                resolve(true)
            } else {
                resolve(false)
            }
        })
    })

}
async function getDir() {
    fs.readdir('./ejs', async (err, data) => {


        var dir = []
        if (err) {
            console.log(err)
            return
        }
        for (var i = 0; i < data.length; i++) {
            if (await isDir('./ejs' + '/' + data[i])) {
                dir.push(data[i])
            }
        } console.log(dir)
    })
}


getDir()
