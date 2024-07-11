// left practice date first
const date = new Date();

const getcurrentDay = () => {
  const weekday= ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
  let currentDay= weekday[date.getDay()];
  return currentDay ;
}


const getCurrentTime = function() {

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nove", "Dec"];

  let currentMonth = months[date.getMonth()];

  let currentDate = date.getDate();
  
  let hours = date.getHours();
  let minutes = date.getMinutes();
  
  let periods = 'AM';
  
  if(hours > 11){
    periods = 'PM';
    if(hours > 12){
      hours -= 12 ;
    }
  }
  
  
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  console.log(hours + '|' + minutes);


  // we are returning a string.
  return ` | ${currentMonth} ${currentDate} | ${hours}:${minutes} ${periods}`
  
}


document.querySelector('.day-date-time').innerHTML = getcurrentDay() +  getCurrentTime();