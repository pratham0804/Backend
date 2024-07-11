// nodes provides buffer feature as a global feature ,, we dont need to import any module 

const buffer = new Buffer.from('Prathamesh','utf-8');


// buffer has limited memory 
// buffer.write("code");


// buffer involves hexadecimal representation of binary raw data 
console.log(buffer);
// string representation
console.log(buffer.toString());

// json representation , retuns object with ascii values format data
console.log(buffer.toJSON());