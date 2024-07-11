const fs = require('fs');
const bioData = {
  name: 'Prathamesh',
  age : 29,
  channel : "Prathamesh technical"
};

// console.log(bioData);

// // to convert js object into json 

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// // values cannot be accesed in json data using dot operator

// const  objData = JSON.parse(jsonData);
// console.log(objData);



//1. convert js object to json 
// 2. dusre  file me add krna hia 
// 3. readfile 
// 4. again convert back to js obj format
// 5 . console.log



// 1.

const jsonData = JSON.stringify(bioData);


// 2.

fs.writeFile('json1.json' , jsonData ,(err) => {
  console.log('done');
});

fs.readFile('json1.json' , 'utf-8' , (err , data) => {
  // console.log(data);
  const originalData = JSON.parse(data);
  console.log(data);
  console.log(originalData);

})
