

// iife  :- immediately invoked function expression in js , is module wrapper function in node js
// module wrapper function  ensures scope of your particular module or file in which u are coding.

// (function(exports, require , module , __filename , __dirname){
//   const a = require('fs');
//   const name = 'Prathamesh';
//   console.log(name);
//   module.exports = {jfdklasf};
// })




// how to make an iife

(function(){
  var a = 'Prathamesh Jangle';
  console.log(a);
})();


// iife ka scope bohot strong hota hai , iife teri har file pr lagta hai ,

// plus teri iife me var bhi assign kr de , but vo bhi kaam nahi krega 
// scope bohot strong hai 



console.log(__dirname);
console.log(__filename);

const fs = require('fs');
fs.writeFileSync('./httpserver/index.js' , 'hi');