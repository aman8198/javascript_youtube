function bmiCalculator(){
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let weightStatusElement = document.getElementById("weightStatus");
    
    if(!isNaN(weight) && !isNaN(height)){
        let result = weight/(height ** 2);
        document.getElementById("result").value = result.toFixed(2);
        
      weightStatusElement.textContent = result < 18.5 ? "Under Weight" : result < 25 ? "Healthy Weight" : "Over Weight";

    }
    else{
        alert("please enter valid weight and height")
    }
}

document.getElementById("calculate").addEventListener("click", bmiCalculator);

//w3 school first problem 
//Write a JavaScript program to display the current day and time in the following format.
//Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

//Get the current date and time 
var today = new Date();

//get the current day 
var day = today.getDate();

//array of day names
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(`Today is : ${daylist[day]}.`);

//get the hour minute and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

//Determine if its AM and PM
var prepand = hour >= 12 ? "PM" : "AM";

//convert 24 hour format to 12 hour format
hour = hour >= 12 ? hour - 12 : hour;

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}


//Display the current time
console.log(`Current time is : ${hour} ${prepand} : ${minute} : ${second}`)

//Write a JavaScript program to print the current window contents.  

window.print();


