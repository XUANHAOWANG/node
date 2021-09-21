const express = require('express')
const path=require('path')
const fs = require('fs')

const app=express()

// app.use((req, res, next) => {
//     console.log(`Request:${req.url}`)
//     next()
// })
app.use((req, res, next) => {
    const filePath=path.join(__dirname,'./index.js',req.url)
    fs.stat(filePath,(err,fileInfo) => {
        if(err){
            next()
            return
        }
        if(fileInfo.isFile()){
            res.sendFile(filePath)
        }else{
            next()
        }
    })
})

app.listen(3000,()=>{
    console.log(`using port 3000`)
})