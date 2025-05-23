// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;

// console.log();

//PRBLEM
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures
// of one day, calculate the temperature amplitude. Keep in mind
// that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temperature amplitude? Answer: difference between highest and lowest temperature
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temperature array
// - Find min value in temperature array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM
// Function should now receive 2 arrays of temperatures

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays?

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 4, 7, 8], [1, 2, 3]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: 10,
//   };

//   // FINDING BUG
//   //   console.log(measurement);
//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);
//   console.table(measurement);

//   //FIX BUG
//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// // Using a debugger

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 4, 7, 8], [1, 2, 3, 5]);
// console.log(amplitudeBug);

// Coding Challenge #1

/*

Given an array of forecasted maximum temperatures, the thermometer 
displays a string with these temperatures.

Example: 
[17, 21, 23] will print "...17°C in 1-days ... 21°C-in 2 days ... 23°C in 3 days ..." 

Create a function 'printForecast' which takes in an array 'arr' 
and logs a string like the above to the console.

Use the problem-solving framework: 
Understand the problem 
and break it up into sub-problems!


TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

*/

/*
   1) Understanding the problem
   Print a string taking the values of an array and adding them to a string

   2) Breaking up into sub-problems
   create the string with the values taken of teh array
   create the variables of temps
   create the "dots" printing
   create the day parinting
   handle the negative values


   3) Seudo code

   printForecast = function(arr) {}

   arr = [17, 21, 23];
   arr = [12, 5, -5, 0, 4];

   printDots = function(arr) {}

   printDay = function(arr){}

// */

// let temps = [17, 21, 23];
// //let temps = [12, 5, -5, 0, 4];
// let forecast = '';

// // const printDots = function (temps) {
// //   forecast.concat('...');
// // };

// // const printDays = function (temps) {
// //   forecast.concat(`${temps[i] + 1} -days`);
// // };

// const printForecast = function (temps) {
//   for (let i = 0; i < temps.length; i++) {
//     if (Number.isInteger(temps[i])) {
//       // printDots(temps);
//       // printDays(temps);
//       forecast += `... ${temps[i]}ºC in ${i + 1}-days `;
//       // console.log(forecast);
//     }
//   }
//   forecast += `...`;
//   console.log(forecast);
// };

// printForecast(temps); // Output: "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."
// printForecast(temps); // Output: "... 12°C in 1 days ... 5°C in 2 days ... -5°C in 3 days ... 0°C in 4 days ... 4°C in 5 days ..."

// // console.log(printForecast(temps));

// // create the string with the values taken of teh array
// console.log('... 17°C in 1-days ... 21°C-in 2 days ... 23°C in 3 days ...');

// Coding challenge #2

/* 
Let's you're building a time tracking application for freelancers At some point in building
this app, you need a function that recives daily work hours for a certaing week, and returns:

1.Total hours worked
2.Average daily hours
3.The day with the most hours worked
4.Number of day worked
5.Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

//    BREAK INTO SMALL PROBLEMS

//1. create a function to SUM all the values

let hoursWorked = [7.5, 8, 10, 2, 8.5, 4, 0];
let totalHoursWorked = 0;
let longestDayWorked = 0;
let workedDays = 0;

function sumHoursWorked() {
  for (let i = 0; i < hoursWorked.length; i++) {
    totalHoursWorked = totalHoursWorked + hoursWorked[i];
    //  console.log(hoursWorked[i]);
    //  console.log(totalHoursWorked);

    //3. create a function to FIND the longest day worked

    longestDayWorked =
      longestDayWorked > hoursWorked[i] ? longestDayWorked : hoursWorked[i];

    //4. create a function to SUM the days worked

    workedDays = hoursWorked[i] === 0 ? workedDays : workedDays + 1;
    //  console.log(workedDays);
  }
  return totalHoursWorked;
}
sumHoursWorked(hoursWorked);
console.log(`Tony worked ${totalHoursWorked} this week`);

//2. create a function to CALC average
let averageHoursWeek = totalHoursWorked / hoursWorked.length;
console.log(
  `Tony worked ${totalHoursWorked} this week, and get ${averageHoursWeek} hours average for day`
);

//3. create a function to FIND the longest day worked
console.log(
  `Tony worked ${totalHoursWorked} this week, and get ${averageHoursWeek} hours average for day, the maximum amount of hours in a day was ${longestDayWorked} hours`
);

//4. create a function to SUM the days worked
console.log(
  `Tony worked ${totalHoursWorked} this week, and get ${averageHoursWeek} hours average for day, the maximum amount of hours in a day was ${longestDayWorked} hours, worked ${workedDays} days this week.`
);

//5. create a function to IF is full-time or NOT

let fullTime = 'Is not full-time';
fullTime = totalHoursWorked <= 35 ? fullTime : 'Is full-time';
console.log(
  `Tony worked ${totalHoursWorked} this week, and get ${averageHoursWeek} hours average for day, the maximum amount of hours in a day was ${longestDayWorked} hours, worked ${workedDays} days this week, and ${fullTime}`
);
