const express =  require('express');
const app = express();
var requests = require('requests');
const fs = require('fs');
const PORT = 3003;
// reads entire html .
let homefile = fs.readFileSync('./UI/index.html' , 'utf-8');

// replace Function
const replaceVal = (tempfromhomefile , valuesfromarray) => {
            // no need to write valuefromarray[0],main.......
            // temperature consist of entire html code.
      let temperature = tempfromhomefile.replace('%tempval%' , valuesfromarray.main.temp);
      // temperature ke andar saara html aa chuka hai , no need for tempfromhomefile anymore.
      temperature = temperature.replace('%cityname%' , valuesfromarray.name);
      temperature = temperature.replace('%country%' , valuesfromarray.sys.country);
      return temperature;
}
app.get('/' , (req,res) => {
    requests('https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=09fe1ebb1ebbf9d04ba1ad57cd558d24')
    
    .on('data' , (chunk) => {
      const objData = JSON.parse(chunk);
      const arrData = [objData];
      const realTimeData =  arrData.map((val) => {
        // to return a string instead of array , we use join method
         return replaceVal(homefile , val);
      }).join('');

      res.send(realTimeData);
    })

    .on('end' ,() => {
      console.log('Data finished');
      res.end();
    })
});

app.listen(PORT , () => {
  console.log('Server is running');
})