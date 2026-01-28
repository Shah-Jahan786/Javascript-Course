// Remember we are gonna use strict mode in all script row?
"use strict";
/*
const x = "23";

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1950));
*/

//////////////
////// Using Google, StackOverflow and MDN
//// Problem
// we work for a company building a smart home thermometer, our most recent task is this; "Given an array of temperature of oneday, calculate the temperature amplitude. Keep in mind that same time there might be a sensor erroe,"

 // const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - what is temperature amplitude? Answer: difference between highest and lowest temperature.
// - how to compute max and min temperature?
// - what a sensor error? and what to do?

// 2) Breaking up into sub problem
// - how to ignore errors?
// find max value in temp array
// find min value in temp array
// substract to min from max (amplitude) and return it
/*
 const calcTempAmplitude = function(temps) {
     let max = temps[0];
     let min = temps[0];
     for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== "number") continue;
       if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
     }
     console.log(max, min);
     return max - min;
 }
const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);


// Problem #2
// function sould now recieve 2 array of temperature;


// 1) Understanding the problem
// - with 2 arrays should we implement functionality twice? No! just merge two arrays

// 2) Breaking up into sub problem
// - how to merge two arrays

 const calcTempAmplitudeNew = function(t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  
     let max = temps[0];
     let min = temps[0];
     for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== "number") continue;
       if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
     }
     console.log(max, min);
     return max - min;
 }
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);



const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
     //   value: prompt('degree selcius'),
        // C) fix
      //  value: Number(prompt('degree selcius'))
      value: 10
    };

    console.log(measurement);
    // B) find the bug
    console.table(measurement); 

   // console.log(measurement.value);
   // console.warn(measurement.value);
  //  console.error(measurement.value);
    
    const Kelvin = measurement.value + 273;
    return Kelvin;   
}
// A) Identify
console.log(measureKelvin());

// using a debugger
 const calcTempAmplitudeBug = function(t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  
     let max = temps[0];
     let min = temps[0];
     for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== "number") continue;
       if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
     }
     console.log(max, min);
     return max - min;
 }
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// identify
console.log(amplitudeBug);
*/

/////////////////////////////////////////////
//// Coding Challenge #1

/*
Given an array of forecasted Maximum temprature, the thermometer displays a string with these temperature.

Example: (17, 21, 23) will print "...17°c in 1 days . ...21°c in 2 days . ...23°c in 3 days....".

Create a function in 'printforecast' which takes in an array "arr" and log a string like the above to the console.

Use the problem-solving framework; Understand the problem and break it up into sub problem.

Test Data1: [17, 21, 23];
Test Data2: [12, 5, -5, 0, 4];
*/

// 1) Understanding the problem
// - array transformed to string, separated by ...
// - what is the x days? Answer: index - 1 

// 2) Breaking up into sub problem
// - Transform  array into string
// - Transform each element to string with °C
// - string needs to contain day  (index + 1)
//- Add ... between elements  and start and end of string
// - log string to console
const data1 =  [17, 21, 23];
const data2 = [12, 5, -5, 0, 4]; 
console.log(`... ${data1[0]}°C ... ${data1[1]}°C ... ${data1[2]}°C ...`);

const printForecast = function(arr) {
   let str = "";
   for(let i = 0; i < arr.length; i++) {
     // str = str + `${arr[i]}°C in ${i + 1} days ... `;
      str += `${arr[i]}°C in ${i + 1} days ... `;
   }
   console.log("..." + str); 
}
printForecast(data1);
// 0+2=2+3=5+4=9
// [2,3,4]