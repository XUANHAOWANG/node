
//create file
const fs = require('fs')
fs.writeFile('./week2/content.txt', 'This is my first file!', (err) => {
    if (err) {
        throw err;
    };
    process.stdout.write('File created successfully!');
});





//read files
fs.readFile('./week2/content.txt', (error, content) => {
    if (error) throw error;
    process.stdout.write(content);
  });

  //read a directory's content
  fs.readdir(process.cwd(), (error, files) => {
    if (error) throw error;
  
    console.log(files);
  });

//   //delete
//   fs.unlink('./week2/content.txt', (error) => {
//     if (error) throw error;
  
//     console.log('File deleted!')
//   });nodno

  //create a directory
  fs.mkdir(`${process.cwd()}/myFolder/secondFolder`, { recursive: true }, (err) => {
    if (err) throw err;
  
    console.log('Folder created successfully!');
  });

//   //delete diractory
//   fs.rmdir(`${process.cwd()}/myFolder/`, { recursive: true }, (err) => {
//     if (err) throw err;
  
//     console.log('Folder/s deleted successfully!');
//   });

  // renaming a directory
fs.rename(`${process.cwd()}/myFolder/secondFolder`, `${process.cwd()}/myFolder/newFolder`, (err) => {
    if (err) throw err;
  
    console.log('Directory renamed!')
  });
  
  // renaming a file
  fs.rename(`${process.cwd()}/week2/content.txt`, `${process.cwd()}/week2/newFile.txt`, (err) => {
    if (err) throw err;
  
    console.log('File renamed!')
  });