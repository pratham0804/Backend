const fs = require('fs');

fs.readFile('read.txt' , 'utf-8' , (err,data) => {

    console.log(data);


  

})
console.log('after the data');