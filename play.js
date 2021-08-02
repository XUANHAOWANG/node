const http = require('http');
const port = 3200;
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    debugger
    res.end(`Hellow world running on port ${port}\n`)
}).listen(3200, () => {
    console.log(`server running at http://localhost:${port}`)
})

// console.log(`process.pid: ${process.pid}`); // process.pid: 20279
// console.log(`process.argv:${process.argv}`)
// console.log(`process.platform:${process.platform}`)
// console.log(`process.release: ${process.release}`)
// console.log(`process.versions:${process.versions}`)
// console.log(`process.stdin():${process.stdin}`)
// console.log(`process.stdout():${process.stdout}`)
// console.log(`process.uptime(): ${process.uptime}`)
// console.log(`process.memoryUsage():${process.memoryUsage}`)
// console.log(`process.exit():${process.exit}`)
// console.log(`process.kill(): ${process.kill}`)