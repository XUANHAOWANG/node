const fs = require('fs')
const createFiles=function() {fs.writeFile('content.txt', 'This is my first file!', (err) => {
    if (err) {
        throw err;
    };

    process.stdout.write('File created successfully!');
})};



const filePath = function() {path.join(process.cwd(), 'content.txt')};

module.exports=createFiles