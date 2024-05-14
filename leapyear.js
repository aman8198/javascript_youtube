//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
/*
To determine whether a year is a leap year, follow these steps :

Step-1 : If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
Step-2 : If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
Step-3 : If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
Step-4 : The year is a leap year (it has 366 days).
Step-5 : The year is not a leap year (it has 365 days).*/

const leapyear = (year) =>{
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
};
// Test the function with sample years
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));

