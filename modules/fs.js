const fs = require('fs');
fs.writeFileSync('NodeChallenge/prathamesh.txt' , 'Hello there , i am Prathamesh! naam toh suna hi hoga');


fs.appendFileSync('NodeChallenge/prathamesh.txt' , 'currently persuing btech from shree ramdeobaba college of engineering and management.');


fs.unlinkSync('NodeChallenge/prathamesh.txt');

fs.writeFileSync('NodeChallenge/prathamesh.txt' , 'My name is Prathamesh');


const data = fs.readFileSync('NodeChallenge/prathamesh.txt');

console.log(data);


{/* <Buffer 4d 79 20 6e 61 6d 65 20 69 73 20 50 72 61 74 68 61 6d 65 73 68> */}


// what is buffer in detail 
// In Node.js, when you read a file using the fs module, the data is often returned as a Buffer object. Understanding what a Buffer is and why it's used is essential for working effectively with file I/O in Node.js.

// What is Buffer Data?
// A Buffer in Node.js is a temporary storage container for a sequence of bytes. It allows you to work with binary data directly, which is essential because JavaScript's standard data type for handling data is a string, which is not suitable for handling binary data efficiently.

// Why Do We Obtain Buffer Data When Reading a File?
// Binary Data Handling: Files often contain binary data, such as images, videos, or executables, which cannot be represented as strings. Buffer allows Node.js to read and manipulate this binary data efficiently.

// Performance: Buffers are designed to handle raw binary data and perform operations on it much faster than strings. They provide a way to work with memory directly, which is crucial for performance-sensitive applications.

// Encoding Control: When you read a file, you might not know its encoding or it might not be encoded in UTF-8. Buffers store raw bytes, allowing you to later decode them into a string using the correct encoding if needed.

// Streaming Data: In many cases, you might be working with data streams, such as reading large files piece by piece. Buffers can handle these chunks of binary data efficiently.





//* har time data inside the files is not strings or text , so for performance sensitive application and binary datahandling , it is best option to return data as buffer ,, make is easy to operate


// for encoding data , we pass utf-8 as parameter

const  encodeddata = fs.readFileSync('NodeChallenge/prathamesh.txt' , 'utf-8');
console.log(encodeddata);
