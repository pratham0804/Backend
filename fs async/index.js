const fs  = require('fs');

fs.writeFile("read.txt" , 'today is rainy day' , (err) => {
  console.log('completed');
  console.log(err);
}); 

//completed
// null

// use of callback in writefile method is to specify , what to do after , adding the given data and creating the file 


// fs.appendFile('read.txt' , 'plz like and share' , (err) => {
//   console.log('task completed');
// } )


fs.readFile('read.txt', (err,data) => {
  console.log(err);
  console.log(data);
});


// we get result in the form of buffer

fs.readFile('read.txt','utf-8' ,(err,data) => {
  console.log(err);
  console.log(data);
});


fs.writeFileSync('async.js' , '');
