// challenge time

// const fs =  require('fs');
// fs.mkdirSync('timepass1');


const fs = require('fs');

// fs.mkdir('thapa' , (err) => {
//   console.log('folder created');
// })

// 2 

fs.writeFile('thapa/bio.txt' , 'My name is not Lakhan' , (err) => {
  console.log('file created');
 
}); 

// 3

// fs.appendFile('thapa/bio.txt' , 'currently at rcoem'  ,  (err)=> {
//   console.log('data appended inside the file bio.txt');
// }) 


// 4

// fs.readFile('thapa/bio.txt' , "utf-8" , (err,data) => {
//   console.log(data);
// })


// 5
// fs.rename('thapa/bio.txt' , "thapa/mybio.txt" , (err)=> {
//   console.log(err);
// });


//* the path we are giving depends on the current working directory 
//* if the cwd is thapa , then there was no need to include thapa/ in path 


//6
// always delete file first
// fs.unlink('thapa/mybio.txt' , (err) => {

// })


// fs.rmdir('./thapa' , (err) => {

// })



// ./ represents your cwd or your left part of the path 