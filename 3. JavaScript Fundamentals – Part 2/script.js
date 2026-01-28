// 'use strict';
/*
let hasDriversLisence = false;
const passTest = true;

if (passTest) hasDriversLisence = true;
if (hasDriversLisence) console.log(`I can drive : D`);

// const interface = 'Audio';
//const private = 534;
const if = 23;
*/

/*
function logger() {
   console.log('My name is jonas');
}

// calling / running / involing function
logger();
logger();
logger();

function fruitProcessor(apples , oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges .`;
    return juice;
}

const appleJuice = fruitProcessor(5 , 0);
console.log(appleJuice);
//console.log(fruitProcessor(5 , 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/
/*
// function diclaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;   
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

/*
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires is ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
function cutFruitePieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples , oranges) {
    const applePieces = cutFruitePieces(apples);
    const orangePieces = cutFruitePieces(oranges);

    const juice = `juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges .`;
    return juice;
}
console.log(fruitProcessor(2,3));
*/
/*
const colcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = colcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires is ${retirement} years`);  
        return retirement;
    }else {
       
        console.log(`$(firstName) has already retired`);
        return -1;
    }

    // return `${firstName} retires is ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1950, `Mike`));
*/

///////////////////
//  coding Challange #1

/*
Back to tje two gymnastic yeam, the Dolphsan and the Koalas, There is a new Gymnastic discipline
which works differently.

Each team complete 3 times, and then the average of the 3 scores is calculated 
(so one average score per team),

A team only wins if it has at least double the average score of the other team. otherwise, 
no team wins!

1. Create an arrow function 'calcaverage' the calculate the average of 3 scores.
2. Use the function to calculate the average for both team.

3. Create a function 'checkwinner' that takes the average score of each teams as parameters.
('averagedolphans' and 'averagekoalas'), and then log the winners to the console together with 
the victory points, according to rules above.
Example 'Koalas win (30 vs 13)*.

4. Use the check winner function to determine the winner for both. Data 1 and Data 2.

TEST DATA: Dolphin score 44 23 and 71.
           Koalas score  65 54 and 49. 


Test Data 2: Dolphin score 85 54 and 41.
             Koalas score  23 34 and 27. 


 HINT: To calculate average of 3 values, add than all together and divide by 3.
 HINT: To check if number A is atleast double number B, check for a <= b. Apply this to the team's average score.
 
 Good Luck
*/

/*
//  coding Challange #1 solve
const calcAverage = (a,b,c) => (a + b + c) / 3;
console.log(calcAverage(3,4,5));

// test 1
let scoredolphins = calcAverage(44, 23, 71);
let scorekoalas = calcAverage(65, 54, 49);
console.log(scoredolphins, scorekoalas);

 const checkWinner = function (averagedolphans, averagekoalas) {
    if (averagedolphans >= 2 * averagekoalas) {
        console.log(`Dolphins wins trophy (${averagedolphans} vs. ${averagekoalas})`);
    }else if (averagekoalas >= 2 * averagedolphans) {
          console.log(`Dolphins wins trophy (${averagekoalas} vs. ${averagedolphans})`); 
    }else {
        console.log("No team wins");
    }
}
checkWinner (scoredolphins, scorekoalas);
checkWinner ( 540, 111);

// test 2
 scoredolphins = calcAverage(85, 54, 41);
 scorekoalas = calcAverage(23 , 34, 27);
 console.log(scoredolphins, scorekoalas);
 checkWinner (scoredolphins, scorekoalas);
 */


 /*
 const friend1 = "Michel";
 const friend2 = "Steven";
 const friend3 = "Peter";

 const friends = ["Michel", "Steven", "Peter"];
 console.log(friends);

 const y = new Array(1991, 1984, 2008, 2020);

 console.log(friends[0]);
 console.log(friends[2]);

 console.log(friends.length);
 console.log(friends[friends.length-1]);

 friends[2]= "jay";
 console.log(friends);

 // friends = ["Bob", "Alica"];
 
 const firstName = 'Jonas';
 const jonas = [firstName, "Schedtmann", 2037 - 1991, 'teacher', friends];
 console.log(jonas);
  console.log(jonas.length);

  // Exercise
  const calcAge = function(birthYear) {
    return 2037 - birthYear;
  }
 const year = [1990, 1967, 2002, 2010, 2018];
 const age1 = calcAge(year[0]);
 const age2 = calcAge(year[1]);
 const age3 = calcAge(year[year.length - 1]);
 console.log(age1, age2, age3);
 
 const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
 console.log(ages);
 */

 /*
  const friends = ["Michel", "Steven", "Peter"];

  // Add Elements
  const newlength = friends.push("jay"); // last Add
  console.log(friends);
  console.log(newlength);
  
  friends.unshift("John"); // first Add
  console.log(friends);
  
   // Remove Elements
   friends.pop(); // Last remove
 const popped = friends.pop();
 console.log(popped); 
 console.log(friends);

 friends.shift(); // first remove
  console.log(friends);

  console.log(friends.indexOf("Steven"));
  console.log(friends.indexOf("Bob"));

  friends.push(23);
  console.log(friends.includes("Steven")); // true
  console.log(friends.includes("Bob"));  // false
  console.log(friends.includes("23"));   // false
  console.log(friends.includes(23));// true

  if (friends.includes("Steven")) {
    console.log("you have a friends called steven"); 
  }
    */

  ///////////////////////////////////////////
  //// Coding Challenge #2
  /*
  Stevem is still building his tip calculator, using the same rules as BeforeUnloadEvent; Tip 19%
  of the bill value is between 50 and 300, and if the value is different the tip is 20%.

  !. Write a function "calctip" that takes any bill values as an input and returns the corresponding tip,
  calculated based on the rules above (you can check out the code from first tip calculator challange 
  if you need to). Use the function type you like the most. Test the function using a bill value
  of 100.

  2. And now let's use arrays! so create an array 'bills' containing the test data below.
  
  3. Create an array 'tips' containing tip value for each bill, calculated from the function
  you created before.
  
  4. BONUS: create an array "toyal" containing the total value as the bill + tip.

  Test data: 125, 555 and 44


  HINT: remember that an array need a value in each position, and that value can actually be
  the return value of a function! so you can just call a function as array values (so don't
  store the tip values in separate variables first, but right in the new array);



  Good Luck?
  */

  /*
  ////// Coding Challenge #2 solve
  const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }

 // const calcTip = bill => bill >= 50 && bill <= 300 ? bill = 0.15 : bill * 0.2;

 const bills = [125, 555, 44];
 // tip1 = calcTip(bills[0]);
 // [tip1, tip2, tip3];
 const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
 const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

 console.log(bills, tips, totals);
 */

 //////////////////////////
 ///// Introduction to Object
  /*
 const jonasArray = [
    "Jonas",
    "Schedtmann",
    2037 - 1991,
    "teacher",
    ["Michel", "Peter", "Steven"]
 ];
  const jonas = {
    firstName : "Jonas",
    lastName: "Schedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michel", "Peter", "Steven"]
 };
 console.log(jonasArray);
 console.log(jonas);
 console.log(jonas.lastName);
 console.log(jonas["lastName"]);
 */


 /*
 //////////////////
 //// Dot vs. Bracket Notation
 const jonas = {
    firstName : "Jonas",
    lastName: "Schedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michel", "Peter", "Steven"]
 };

 console.log(jonas);
 console.log(jonas.lastName);
 console.log(jonas["lastName"]);

 const nameKey = "Name";
 console.log(jonas["first" + nameKey]);
 console.log(jonas["last" + nameKey]);

 // console.log(jonas."last" + nameKey);

 const interestedIn = prompt('what do you want to know about jonas? choose between firstName, lastName, age, job, and friends')
 // console.log(jonas.interestedIn);
 // console.log(jonas[interestedIn]);
  
 if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
 }else {
    console.log("wrong request! choose between firstName, lastName, age, job, and friends");  
 }

 jonas.location = "purtugal";
 jonas['twitter'] = '@jonasschedtmann';
 console.log(jonas);

 // Challenge
 // "Jonas has 3 friends, and his best friend is called Michel"
 console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
 */
 
 ////// Object Methods
 /*
  const jonas = {
    firstName : "Jonas",
    lastName: "Schedtmann",
    birthYeah:  1991,
    job: "teacher",
    friends: ["Michel", "Peter", "Steven"],
    hasDriverLisence: true,

    
    // 1 method
    // calcAge: function(birthYeah) {
      //  return 2037 - birthYeah;
    // }
      

     
     // 2 method
     // calcAge: function() {
      //  console.log(this);  
       // return 2037 - this.birthYeah;
     //}
        

     // 3 method
       calcAge: function() {
         this.age  = 2037 - this.birthYeah;
        return this.age;
    },
 // "jonas is a 48-years old teacher, and he has a driver's lisence";
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-years old ${jonas.job}, and he has ${this.hasDriverLisence ? 'a' : 'no'} driver's lisence.`
    }
       
 };

 //  console.log(jonas.calcAge(1991));
   // console.log(jonas['calcAge'](1991));
  console.log(jonas.calcAge()); // 46

  console.log(jonas.calcAge());
  console.log(jonas.calcAge());
  console.log(jonas.age);

 // challange
 // "jonas is a 48-years old teacher, and he has a driver's lisence";
 console.log(jonas.getSummary());
 */



   ///////////////////////////////////
   //// Coding Challenge #3
 /*
 Let's go back to Mark and John comparing their BMI'S?
 This time let's use object to implement the calculations? Remember: BMI = mass / height ** 2
 = mass / (height * height). (mass in kg and height in meter).

 1. For each of them, create an object with properties for their full name, mass, and height,
 (Mark Miller and John Smith).

 2. Create a "calcBMI" method on each object to calculate the BMI (the same method on both
 object). Store the BMI value to a property, and also return it from the method.

 3. Log to the console who has the higher BMI, together with the full name and respective BMI.
    Example: "John's BMI (28.3) is higher than Mark's BMI (23.9)"

 TEST DATA: Mark's weight 78 kg and is 1.69 m tall,
            John's weight 92 kg and is 1.95 m tall.
  */

 /*
 const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
 };

  const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
    }
 };

 mark.calcBMI();
 john.calcBMI();
 console.log(mark.bmi, john.bmi);
 
 // "John's BMI (28.3) is higher than Mark's BMI (23.9)"
 if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`); 
 }else if (john.bmi > mark.bmi) {
     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
 }
     */

 /*
 ///////////////////////
 /// Introductionthe For Loop
 console.log("Lifting weight repotition 1 ");
 console.log("Lifting weight repotition 2 ");
 console.log("Lifting weight repotition 3 ");
 console.log("Lifting weight repotition 4 ");
 console.log("Lifting weight repotition 5 ");
 console.log("Lifting weight repotition 6 ");
 console.log("Lifting weight repotition 7 ");
 console.log("Lifting weight repotition 8 ");
 console.log("Lifting weight repotition 9 ");
 console.log("Lifting weight repotition 10 ");
 
 // for loop keep running while condition is true
 for(let rep = 5; rep <= 10; rep++) {
     console.log(`Lifting weight repotition ${rep}`);
 }
 */

 ////////////////////
 //// Looping Arrays Breaking and Continuing
 /*
  const jonas = [
    "Jonas",
    "Schedtmann",
    2037 - 1991,
    "teacher",
    ["Michel", "Peter", "Steven"],
    true
 ];

 const type = [];

 // console.log(jonas[0]);
 // console.log(jonas[1]);
 // ...
 // console.log(jonas[4]);
 // jonas[5]. does not exist;

 for(let i = 0; i < jonas.length ; i++){
    // Reading from jobas array
    console.log(jonas[i], typeof jonas[i]);
    
    // filling types array
  //  type[i] = typeof jonas[i];
  type.push(typeof jonas[i]);
 }

 console.log(type);
 
 const years = [1991, 2007, 1969, 2020];
 const ages = [];

 for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
 };

 console.log(ages);

 // loop continue
  console.log(`--- ONLY STRINGS ---`);
  for(let i = 0; i < jonas.length ; i++){
    if (typeof jonas[i] !== `string`) continue;
    console.log(jonas[i], typeof jonas[i]);
 };

 // loop Break
  console.log(`--- Break with number ---`);
 
  for(let i = 0; i < jonas.length ; i++){
    if (typeof jonas[i] === `number`) break;
    console.log(jonas[i], typeof jonas[i]);
 };
 */

 ////////////////
 ///// Looping Backwards and Loops in Loops
 /*
   const jonas = [
    "Jonas",
    "Schedtmann",
    2037 - 1991,
    "teacher",
    ["Michel", "Peter", "Steven"],
 ];
 for(let i = jonas.length - 1; i >= 0; i-- ) {
    console.log(i, jonas[i]);
    
 }

 //  Loops in Loops 
for (let Exercise = 1; Exercise <= 3; Exercise++) {
    console.log(`---------starting exercise ${Exercise}`);
    
    for(let rep = 1; rep < 6; rep++) {
        console.log(`exercise ${Exercise}: Lifting weight repotition ${rep}`);
        
    }
}
   */

///////////////////
/// The While Loop

/*
 // for(let rep = 1; rep <= 10; rep++) {
  //  console.log(`lifting weight repotition ${rep}`); 
 // }

let rep = 1;
while (rep <= 10) {
  //  console.log(`while: lifting weight repotition ${rep}`);  
    rep++;
}

 // let dice = Math.random() * 6;
 // console.log(dice);

 // let diece = Math.trunc(Math.random() * 6 +1);
 // console.log(diece);

 let diece = Math.trunc(Math.random() * 6 +1);
while (diece !== 6) {
    console.log(`you rolled a ${diece}`);
    diece = Math.trunc(Math.random() * 6 +1);
    if (diece === 6) {
        console.log('Loop is about to end ...');
        
    }
}
    */

////////////////////////////////
///// Coding Challenge #4
/*
Let's  improve Steven's tip calculator even more; this time using Loop?

1. Create an array "bills" containing all 10 test bills values

2. Create empty array for the tips and the totals ("tips" and "totals")

3. Use the "calcTip" function we wrote before (no need to repeate) to calculate tip and total
values (bill + tip) the every bill value in the bills array.
Use a for Loop to perform the 10 calculation.

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52;

HINT: Call "calcTip" in the Loop and use the push method to value to the tips and total array;

4. Bonus write a function "calcaverage" which takes an array called "arr" as an arguement. This function 
   calculate the average of all numbers in the given array.
   This is a DIFFERENT challenge (we have not done this before)! here is how to solve it.
   4.1, First: you will need to add up all values in the array,. To do the addition, start by 
   creating a variables "sum" the start at 0. Then loop over the array using a for loop. In
   each iteration, add the current value to the 'sum' variables. This way, by the end of the
   loop, you have all values added together.
   4.2: To calculate the average, divide the sum you cakculated before by the length of the array
   (because that's the number of elements).
   4.3, Call the function with the 'totals' array.
*/

const calcTip = function (bill) {
    return bills >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++) {
   const tip = calcTip(bills[i]);
   tips.push(tip);
   totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
       // sum = sum + arr[i];
       sum += arr[i];
    }
   // console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage([2, 4, 6]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));