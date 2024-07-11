// fs.access(path , mode , callback) checks the accessiblity of file

const { constants } = require('buffer');
const fs = require('fs');


// mode constants.F_OK checks whether file is present or not 
// fs.access('./fs async/read.txt' , constants.F_OK , (err) => {
//   console.log(`File : ${err ? 'does not exist' : 'exits'}`);
// });

// fs.access('.fs async/read.txt' , constants.R_OK | constants.W_OK , (err) => {
//   console.log(`${err? 'is readable and writable ' : 'is not readable and writable'}`)
// });




// // fs.chmod() to change the permissions of the file 

// fs.chmod('./fs async/read.txt' , 0o765 , (err) => {
//   if(err) throw err;
//   console.log('permission of your file has been changed');
// });


// fs.chown() to change the ownership of owner and group. by passing uid and gid of new owner




// fs.copyFile('.read.txt' , 'write.txt' ,  (err) => {
//   if(err) throw err;
//   console.log('file has been copied to the destination');
// })


// const fs = require('fs');

// Read the contents of the directory with 'utf-8' encoding
fs.readdir('./', { encoding: 'utf-8' }, (err, files) => {
  if (err) {
    return console.error('Error reading directory:', err.message);
  }
  console.log(files);
});


// returns array of files , present in the directory 













fs.truncate('example.txt', 5, (err) => {
  if (err) throw err;
  console.log('File truncated to 5 bytes.');
});