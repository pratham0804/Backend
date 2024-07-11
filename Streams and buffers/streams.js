const fs = require("fs");

const readableStream = fs.createReadStream('./file1.txt' , {encoding  : 'utf-8'} );


const writeableStream = fs.createWriteStream('./file2');


readableStream.on("data" , (chunk) => {
  console.log(chunk);
  writeableStream.write(chunk);
});


// readable streams  : reading a file as readable stream 

// writable streams : to which we can write data

// duplex streams : that are both readable and writebale      e.g. sockets 

// transform streams  transform the data as it is written or read  e.g. file compression


// streams in the context of reading and writing file (fs module)



