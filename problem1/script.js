//Write a JavaScript program to display the current day and time in the following format.
//Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

//get the current date and time 
let today = new Date();

//get the current date 
let day = today.getDay();
//console.log('value of day ' + day);

//array of day names 
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//Display current day 
console.log(`Today is : ${daylist[day]}.`)

//get  the hours minutes and seconds
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

//Determine if its AM or PM
let prepand = hour >= 12 ? "PM" : "AM";

//convert 24 hour format to 12 hour format
hour = hour >= 12 ? hour - 12 : hour;

//check for special cases when hour is 0
if(hour === 0 && prepand === 'PM'){
    if(minute === 0 && second === 0){
        hour = 12;
        prepand = 'Noon';
    }
    else{
        hour = 12;
        prepand = 'PM';
    }
}

if(hour === 0 && prepand === 'AM'){
    if(minute === 0 && second === 0){
        hour = 12;
        prepand = 'Midnight';
    }else{
        hour = 12
        prepand = 'AM'
    }
}

//Display the current time 
console.log(`Current time is : ${hour} ${prepand} : ${minute} : ${second}`)