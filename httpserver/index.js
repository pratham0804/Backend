const http = require('http');

const server = http.createServer((req,res) => {
  // console.log(req.url);

  if(req.url === '/'){
    res.end('Hello from the other side , prathamesh here');
  }
  else if(req.url === '/about'){
    res.end('Hello from the About side');
  }
  else if(req.url === '/contact'){
    res.write('Hello from the ContactUs side');
    res.end();
  }
  else {

    // add response header using writeHead method.  (response headers ko set krna)
    res.writeHead(404 , {"Content-type" : "text/html"});
    res.end('<h1>404 error pages. Page does not exist</h1>')
  }
 
});

// client ki request ko collect kr raha hai from port number 8000 .(listening to and forming  connections through port)
server.listen(8000 , "127.0.0.1", ()=>{
  console.log('listening to the port number 8000');
});