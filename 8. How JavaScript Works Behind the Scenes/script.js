"use strict";

/*
function calcAge(birthYear){
   const age = 2037 - birthYear;
   

   function printAge(){
      let output = `${firstName}, you are ${age}, born in ${birthYear}`;
      console.log(output); 

      if (birthYear >= 1991 && birthYear <= 1996) {
         var millenial = true;
         // creating new veriable with same name as outer scope's veriable
         const firstName = 'steven';

         // reasigning outer scope's veriable
         output = 'NEW OUTPUT';
         const str = `On, you're a millenial, ${firstName}`;
         console.log(str);  

         function add(a,b) {
            return a + b;
         }
      }
    // console.log(str); //// error
     console.log(millenial);
    // console.log(add(2,3)); /// error
      console.log(output);
   }
   printAge();
   return age;
    
};

const firstName = 'jonas';
calcAge(1991);
// console.log(age);
// printAge();
*/

/*
// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'jonas';
let job = 'teacher';
const year = 1991;

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a,b) {
   return a + b;
};

const addExpr = function(a,b) {
   return a + b;
}

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);

if(!numProducts) deleteShopingCard();

var numProducts = 10;
function deleteShopingCard() {
   console.log('All Products Deleted');  
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
// console.log(this);

const calcAge = function(birthYear) {
   console.log(2037 - birthYear);
  // console.log(this); 
}
calcAge(1991);

const calcAgeArrow = birthYear => {
   console.log(2037 - birthYear);
 //  console.log(this); 
}
calcAgeArrow(1980);

const jonas = {
   year: 1991,
   calcAge: function() {
      console.log(this);
      
     console.log(2037 - this.year);
   }
}
jonas.calcAge();

const matilda ={
   year: 2017
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

/*
// var firstName = 'Metilda';

const jonas = {
   firstName: 'jonas',
   year: 1991,
   calcAge: function() {
   // console.log(this);     
    console.log(2037 - this.year);

    ////// solution 1
   //  const self = this;  // self or that
   //  const isMillanial = function () {
   //    console.log(self);
   //    console.log(self.year >= 1991 && self.year <= 1996);
   //  }

    ///// solution 2
    const isMillanial =  () => {
      console.log(this);
      console.log(this.year >= 1991 && this.year <= 1996);
    }
    isMillanial();
   },
   greet: () => {
      console.log(this);
      
       console.log(`Hey ${this.firstName}`)
   }
};
jonas.greet();
jonas.calcAge();

//// Arguements keyworda
const addExpr = function(a, b) {
   console.log(arguments);
   return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) =>{
   console.log(arguments);
   return a + b;
}

addArrow(2, 5, 8);
*/

/*
let age = 30;
let oldAge = age;
console.log('1: ' +age); // 30
console.log('2: ' +oldAge); // 30
age = 31;
console.log('1: ' +age); // 31
console.log('2: ' +oldAge); // 30

const me = {
   name: 'jonas',
   age : 30
}
const friend = me;
friend.age = 27;
console.log('friend', friend);
console.log('me', me);
*/

// premitive types
let lastName = 'william';
let oldLastName = lastName;
console.log(lastName);

lastName = 'devis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
   firstName: 'jessica',
   lastName: 'william',
   age: 27
}

const marriedJessica = jessica;
marriedJessica.lastName = 'devis';
console.log('Before marriage', jessica);
console.log('after marriage', marriedJessica);
// marriedJessica = {}; // is not work

// copying object
const jessica2 = {
   firstName: 'jessica',
   lastName: 'william',
   age: 27,
   family: ['Alice', 'bob']
}

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'devis';
jessicaCopy.age = '34';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('john');
console.log('Before marriage', jessica2);
console.log('after marriage', jessicaCopy);