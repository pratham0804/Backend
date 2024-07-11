// thapa technical 

const fs =  require("fs");
const http = require("http");

const server = http.createServer();

server.on('request' ,  (req,res) => {
  fs.readFile('./file1.txt' , 'utf-8' , (err,data) => {
    if(err) return console.error(err);
    res.end(data.toString());;
  });
});


server.listen(8000 , "127.0.0.1");