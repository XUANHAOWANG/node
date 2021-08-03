const express = require('express');
const path = require('path');
const app = express();
 
//set static path
//app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => { // sending get request
//     res.send('Hello world!');
// })
 
// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>');
// })
app.get('/users/:name', (req, res) => {
    let user = req.params.name;
    res.send('<h1>' + user + '</h1>');
})
app.listen(3000, () => {
    console.log('listening on port 3000');
})