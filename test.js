const url= require('url')
const http = require('http');
const fs= require('fs')
// const parse=url.parse('https://xuanhaowang.github.io/')
// console.log(parse)
// const md5=require('md5')
// fs.stat('./ejs',(err, data) =>{
// if(err) {
//     console.error(err)
// }
// else{
//     console.log(data)
//     console.log(data.isFile())
//     console.log(data.isDirectory())
// }
// })

// fs.mkdir('./ejs/style',(err, data) =>{
// if(err) {
//     console.log(err)
//     return
// }
// console.log('successfully created index.css directory')
// })

// fs.writeFile('./ejs/style/index.css','',(err,data) =>{
//     if(err) {
//         console.log(err)

//     }
   
// })
// fs.appendFile('./ejs/style/index.css','h2{color:red;}\n',(err)=>{
//     if(err) {
//         console.log(err)
//     }
//     console.log(`append successfully`)
// })


fs.readdir('./ejs',(err, data)=>{
    if(err) throw err;
    function getDir(i){
        for(let i=0; i<data.length; i++){
      
           
       console.log(data[i]);
    }
    
}getDir()
})