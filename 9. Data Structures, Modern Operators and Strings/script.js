"use strict";

//////////////////////////// 
// 3. Destructuring Arrays
/*
const restaurant = {
   name: 'Classica Italiano',
   location: 'Via Angela Tavanti 23, Firence Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focacia', 'Braschetta', 'Gorlic Bread', 'Caperies Salad'],
   mainMenu: ['pizza', 'Pasta', 'Risotto'],

   order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   }
}

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// swetching veriables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]
console.log(main, secondary);

// recieve 2 return values a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/

/////////////////////// 
// 4. Destructuring Objects
/*
const restaurant = {
   name: 'Classica Italiano',
   location: 'Via Angela Tavanti 23, Firence Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focacia', 'Braschetta', 'Gorlic Bread', 'Caperies Salad'],
   mainMenu: ['pizza', 'Pasta', 'Risotto'],
   openingHours: {
      thu: {
         open: 12,
         close: 22,
      },
      fri: {
         open: 11,
         close: 23, 
      },
       sat: {
         open: 0, // open 24 hrs
         close: 24, 
      },
   },

   order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery: function(
      {starterIndex = 1,
       mainIndex = 0,
       time = '20:00',
      address}) {
     console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
     );
   },
};
restaurant.orderDelivery({
   time: '22:30',
   address: 'Via Del Sole, 21',
   mainIndex: 2,
   starterIndex: 2
});

restaurant.orderDelivery({
    address: 'Via Del Sole, 21',
    starterIndex: 1
})

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
   name: restaurantName,
    openingHours: hours,
     categories: tags
   } = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating Veriables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
 ({a, b} = obj);

 console.log(a, b);

// Nested object destructuring
const {
   fri: {open: o, close: c}, 
} = openingHours;
console.log(o, c);
*/

//////////////////////// 
//  5. The Spread Operator (...)
/*
const restaurant = {
   name: 'Classica Italiano',
   location: 'Via Angela Tavanti 23, Firence Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focacia', 'Braschetta', 'Gorlic Bread', 'Caperies Salad'],
   mainMenu: ['pizza', 'Pasta', 'Risotto'],
   openingHours: {
      thu: {
         open: 12,
         close: 22,
      },
      fri: {
         open: 11,
         close: 23, 
      },
       sat: {
         open: 0, // open 24 hrs
         close: 24, 
      },
   },

   order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery: function(
      {starterIndex = 1,
       mainIndex = 0,
       time = '20:00',
      address}) {
     console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
     );
   },

   orderPasta: function(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);

   }
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// const newArr = [1, 2, arr]; // [1, 2, Array(3)]
const newArr = [1, 2, ...arr];
console.log(newArr); 

console.log(...newArr);// 1 2 7 8 9
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnoci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Ideribles: arrays, strings, maps, sets, not Object;
const str = 'jonas';
const letters = [...str, '', 's.'];
console.log(letters); // ['j', 'o', 'n', 'a', 's', '', 's.']
console.log(...str);  // j o n a s
console.log('j', 'o');

//  console.log(`${...str}, schedtmann`);

///// Real-world Example
const ingredients = [
   prompt('Let\'s make pasta ingridient 1?'), 
   prompt('Let\'s make pasta ingridient 2?'), 
   prompt('Let\'s make pasta ingridient 3')
];
console.log(ingredients);

restaurant.orderPasta([ingredients[0], ingredients[1], ingredients[2] ]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {founding: 1998,  ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'restaurante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

// 6. Rest Pattern and Parameters
/*
const restaurant = {
   name: 'Classica Italiano',
   location: 'Via Angela Tavanti 23, Firence Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focacia', 'Braschetta', 'Gorlic Bread', 'Caperies Salad'],
   mainMenu: ['pizza', 'Pasta', 'Risotto'],
   openingHours: {
      thu: {
         open: 12,
         close: 22,
      },
      fri: {
         open: 11,
         close: 23, 
      },
       sat: {
         open: 0, // open 24 hrs
         close: 24, 
      },
   },
   order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery: function(
      {starterIndex = 1,
       mainIndex = 0,
       time = '20:00',
      address}) {
     console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
     );
   },
   orderPasta: function(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
      );
   },
  orderPizza: function (mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
   }
};

///////// 1) Destructuring

// sprade because on right side of = or assignment operator
const arr = [1, 2, ... [3, 4]];

// Rest: because on left side = or assignment operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, Risotto, otherFood);

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

///// 2) function 
const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);

}
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);


restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom');
*/

////////////////////// 
// 7. Short Circuiting (&& and )
/*
const restaurant = {
   name: 'Classica Italiano',
   location: 'Via Angela Tavanti 23, Firence Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focacia', 'Braschetta', 'Gorlic Bread', 'Caperies Salad'],
   mainMenu: ['pizza', 'Pasta', 'Risotto'],
   openingHours: {
      thu: {
         open: 12,
         close: 22,
      },
      fri: {
         open: 11,
         close: 23, 
      },
       sat: {
         open: 0, // open 24 hrs
         close: 24, 
      },
   },
   order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery: function(
      {starterIndex = 1,
       mainIndex = 0,
       time = '20:00',
      address}) {
     console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
     );
   },
   orderPasta: function(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
      );
   },
  orderPizza: function (mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
   }
};

console.log('..... OR || ....');
// use any datatype, return any data type, short-carcutting  
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || 'Hello' || 23 || null);

// restaurant.numGuests = 0; // 10
restaurant.numGuests = 23; // 23
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);


console.log('..... AND && ....');
console.log(0 && 'jonas'); // 0
console.log(7 && 'jonas'); // jonas

console.log('Hello' && 23 && null && 'Jonas'); // null

// Practical Example
if(restaurant.orderPizza) {
   restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
///////////////////////////////// 
// 8. The Nullish Coalescing Operator ()

/*
const restaurant = {
   name: 'Classica Italiano',
   location: 'Via Angela Tavanti 23, Firence Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focacia', 'Braschetta', 'Gorlic Bread', 'Caperies Salad'],
   mainMenu: ['pizza', 'Pasta', 'Risotto'],
   openingHours: {
      thu: {
         open: 12,
         close: 22,
      },
      fri: {
         open: 11,
         close: 23, 
      },
       sat: {
         open: 0, // open 24 hrs
         close: 24, 
      },
   },
   order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery: function(
      {starterIndex = 1,
       mainIndex = 0,
       time = '20:00',
      address}) {
     console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
     );
   },
   orderPasta: function(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
      );
   },
  orderPizza: function (mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
   }
};

// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Knowledge: null and undefined, not include the  ( 0 and '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

//////////////////////////////////////
// 9. Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
const game = {
   team1: 'Bayern Munich',
   team2: 'Borrasia Dortmound',
   players: [
      [
         'Neuer',
         'Paward',
         'Martiner',
         'Alaba',
         'Davies',
         'Kimich',
         'Goretzia',
         'Coman',
         'Muller',
         'Gnarby',
         'Lewandowseki',
      ],
      [
         'Burki',
         'Schulz',
         'Hummels',
         'Akanji',
         'Hakimi',
         'Weigl',
         'Witsel',
         'Hazard',
         'Brandt',
         'Sancho',
         'Gotze',
      ],
   ],
   score: '4:0',
   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
   date: 'Nov 9th 2037',
   odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
   },
};

////// Solution
/// 1) 
const [player1, player2] = game.players;
console.log(player1, player2);

// 2)
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

// 3)
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// 4)
const players1Final = [...player1, 'Thiago', 'Coutism', 'Perisics'];
console.log(players1Final);

// 5)
const {
   odds: {team1, x: draw, team2},
 } = game;
console.log(team1, draw, team2);

// 6)
const printGoals = function (...players) {
   console.log(players);
   console.log(`${players.length} goals were scored`);
}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7)
team1 < team2 && console.log('team 1 is more likely to win');
team1 > team2 && console.log('team 2 is more likely to win');
*/

//////////////////////////  
// 10. Looping Arrays The for-of Loop

/*
const restaurant = {
   name: 'Classica Italiano',
   location: 'Via Angela Tavanti 23, Firence Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focacia', 'Braschetta', 'Gorlic Bread', 'Caperies Salad'],
   mainMenu: ['pizza', 'Pasta', 'Risotto'],
   openingHours: {
      thu: {
         open: 12,
         close: 22,
      },
      fri: {
         open: 11,
         close: 23, 
      },
       sat: {
         open: 0, // open 24 hrs
         close: 24, 
      },
   },
   order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery: function(
      {starterIndex = 1,
       mainIndex = 0,
       time = '20:00',
      address}) {
     console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
     );
   },
   orderPasta: function(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
      );
   },
  orderPizza: function (mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
   }
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
   console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
*/

////////////////////////  
// 11. Enhanced Object Literals
/*
 const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
 const  openingHours = {
      [weekdays[3]]: {
         open: 12,
         close: 22,
      },
      [weekdays[4]]: {
         open: 11,
         close: 23, 
      },
       [weekdays[5]]: {
         open: 0, // open 24 hrs
         close: 12 + 12, 
      },
   };


const restaurant = {
   name: 'Classica Italiano',
   location: 'Via Angela Tavanti 23, Firence Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focacia', 'Braschetta', 'Gorlic Bread', 'Caperies Salad'],
   mainMenu: ['pizza', 'Pasta', 'Risotto'],

   //  ES^ Enhanced object literals
    openingHours,

   order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery(
      {starterIndex = 1,
       mainIndex = 0,
       time = '20:00',
      address}) {
     console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
     );
   },
   orderPast(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
      );
   },
  orderPizza(mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
   }
};
*/

/////////////////// 
// 12. Optional Chaining (.)

/*
 const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
 const  openingHours = {
      [weekdays[3]]: {
         open: 12,
         close: 22,
      },
      [weekdays[4]]: {
         open: 11,
         close: 23, 
      },
       [weekdays[5]]: {
         open: 0, // open 24 hrs
         close: 24, 
      },
   };


const restaurant = {
   name: 'Classica Italiano',
   location: 'Via Angela Tavanti 23, Firence Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focacia', 'Braschetta', 'Gorlic Bread', 'Caperies Salad'],
   mainMenu: ['pizza', 'Pasta', 'Risotto'],

   //  ES^ Enhanced object literals
    openingHours,

   order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery(
      {starterIndex = 1,
       mainIndex = 0,
       time = '20:00',
      address}) {
     console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
     );
   },
   orderPast(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
      );
   },
  orderPizza(mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
   }
};
if(restaurant.openingHours && restaurant.openingHours.mon) 
   console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon.open); // error

// with optional chaining
console.log(restaurant.openingHours.mon?.open); //undefined
console.log(restaurant.openingHours?.mon?.open); //undefined

// if(restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);


// Example
 const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
 for(const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`on ${day}, we open at ${open}`);
 };

 // Methods
 console.log(restaurant.order?.(0, 1, 2) ?? 'Method does not exist');
 console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method does not exist');

 // Array
//  const user = [{name: 'jonas', email: 'Hello@jonas.io'}];
const user = [];
   console.log(user[0]?.name ?? 'user array empty');

   if(user.length > 0) console.log(user[0].name); 
   else console.log('user array empty');
   */
/////////////////////////////////// 
//  13. Looping Objects Object Keys, Values, and Entries
/*
 const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
 const  openingHours = {
      [weekdays[3]]: {
         open: 12,
         close: 22,
      },
      [weekdays[4]]: {
         open: 11,
         close: 23, 
      },
       [weekdays[5]]: {
         open: 0, // open 24 hrs
         close: 24, 
      },
   };

const restaurant = {
   name: 'Classica Italiano',
   location: 'Via Angela Tavanti 23, Firence Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focacia', 'Braschetta', 'Gorlic Bread', 'Caperies Salad'],
   mainMenu: ['pizza', 'Pasta', 'Risotto'],

   //  ES^ Enhanced object literals
    openingHours,

   order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery(
      {starterIndex = 1,
       mainIndex = 0,
       time = '20:00',
      address}) {
     console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
     );
   },
   orderPast(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
      );
   },
  orderPizza(mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
   }
};

// Propperty names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days: `;
for(const day of properties) {
   openStr +=  `${day}, `
}
console.log(openStr);

// Propperty values
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for(const [day, {open, close}] of entries) {
   console.log(`on ${day} we open at ${open} and close at ${close}`);  
}
   */

/////////////////////////////////////// 
// 14. Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1)
for(const [i, player] of game.scored.entries()){
   console.log(`Goal ${i + 1}: ${player}`);
}

// 2)
const odds = Object.values(game.odds);
let average = 0;
for(const odd of odds)
   average += odd;
average /= odds.length;
console.log(average);

// 3)
for(const [team, odd] of Object.entries(game.odds)) {
   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
   console.log(`odd of ${teamStr} ${odd}`);
}
   //   Odd of victory Bayern Munich: 1.33
      // Odd of draw: 3.25
      // Odd of victory Borrussia Dortmund: 6.5
      */


//////////////////////////// 
// 15. Sets

/*
const ordersSet = new Set([
   'Pasta',
   'Pizza',
   'Pizza',
   'Risotto',
   'Pasta',
   'Pizza'
]);
console.log(ordersSet);

console.log(new Set('jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza')); //true
console.log(ordersSet.has('Bread')); // false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.delete('Garlic Bread');
// ordersSet.clear(); // Set(0) {size: 0}
console.log(ordersSet);
// console.log(ordersSet[0]);//any number  in  undefined 

for(const order of ordersSet) console.log(order);

// Example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique =[...new Set(staff)];
console.log(staff);
console.log(staffUnique);
console.log(new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size);

console.log(new Set('jonasScedtmann').size);
*/

/////////////////////////////// 
// 16. Maps Fundamentals
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firence, Italy');
console.log(rest.set(2, 'Lisbon, Portogal'));

rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'we are open :D')
.set(false, 'we are closed :(')

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(false));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('clos')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'heading')
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

////////////////////////////////////// 
// 17. Maps Iteration

/*
 const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
 const  openingHours = {
      [weekdays[3]]: {
         open: 12,
         close: 22,
      },
      [weekdays[4]]: {
         open: 11,
         close: 23, 
      },
       [weekdays[5]]: {
         open: 0, // open 24 hrs
         close: 24, 
      },
   };


const restaurant = {
   name: 'Classica Italiano',
   location: 'Via Angela Tavanti 23, Firence Italy',
   categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focacia', 'Braschetta', 'Gorlic Bread', 'Caperies Salad'],
   mainMenu: ['pizza', 'Pasta', 'Risotto'],

   //  ES^ Enhanced object literals
    openingHours,

   order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   orderDelivery(
      {starterIndex = 1,
       mainIndex = 0,
       time = '20:00',
      address}) {
     console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
     );
   },
   orderPast(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
      );
   },
  orderPizza(mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
   }
};

const question = new Map ([
   ['question', 'what is the best programming language in the world?'],
   [1, 'C'],
   [2, 'Java'],
   [3, 'JavaScript'],
   ['correct', 3],
   [true, 'Correct'],
   [false, 'try again!']
]);
console.log(question);

// conver Object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

/// Quizz app
console.log(question.get('question'));
for(const [key, value] of question) {
   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert Map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2)
gameEvents.delete(64);

// 3)
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4)
for(const [min, event] of gameEvents) {
   const half = min <= 45 ? 'first' : 'second'; 
   console.log(`[${half} Half] ${min}: ${event}`);
   
}
*/
/////////////////////////////////// 
// 20. Working With Strings - Part 1
/*
const airline = 'Tap Air Portogal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737' [0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portogal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-1));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
   // B and E are middle seats
   const s = seat.slice(-1);
   if(s === 'B' || s === 'E')
      console.log('you get the middle seats😂');
      else console.log('you get lucky😎');
      
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
*/


////////////////////////////////// 
// 21. Working With Strings - Part 2

/*
const airline = 'Tap Air Portogal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix the capitalization  in name
const passenger = 'jOnaAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing email
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£'
const printUS = priceGB.replace('£', '$').replace(',', '.');
console.log(printUS);

const announcement = 'All passengers come to bording door 23. Bording door 23';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
   console.log('part of the New Airbus family');
}

// practice exercise
const checkBaggege = function(items) {
 const baggage = items.toLowerCase();
 if (baggage.includes('knife') || baggage.includes('gun')) {
   console.log('You are not allowed on board');
   
 }else{
   console.log('Welcome a board!');
   
 }
}
checkBaggege('I have a laptop. some Foods and a pocket Knife');
checkBaggege('Socks and camera');
checkBaggege('some snacks and a gun for protection');
*/
/////////////////////////////// 
// 22. Working With Strings - Part 3

// Split and Join

/*
console.log('a+very+nice+string'.split('+'));
console.log('jonas schedtmann'.split(' '));

const [firstName, lastName] = 'jonas schedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];

  for(const n of names) {
   // namesUpper.push(n[0].toUpperCase() + n.slice(1));
   namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
  
}

capitalizeName('jessica and smith devis');
capitalizeName('jonas schedtmann');

// padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('jonas'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
   const str = number + '';
   const last = str.slice(-4);
   return last.padStart(str.length, `*`);
}

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad weather ... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function(n) {
   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
   
}

planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

/////////////////////////////////////// 
// 23. Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function() {
   const text = document.querySelector('textarea').value;
   const rows = text.split('\n');
   console.log(rows);

   for (const [i, row] of rows.entries()) {
     const [first, second] = row.toLocaleLowerCase().trim().split('_');
     
     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
     
   }
   
})

// underscore_case -> underscoreCase
//  first_name
// Some_Variable 
//   calculate_AGE
// delayed_departure













// let numbers = [2, 3, 5, 7, 11, 13, 15, 17];
// let result = [];

// for(let i = 0; i < numbers.length; i++) {
//    let sum = 0;
//    for(let j = i; j < numbers.length; j++) {
//       if (numbers[j] % numbers[i] !== 0) {
//          sum += numbers[j];
//       }
//    }
//    if(sum % 2 === 0){
//       result.push(numbers[i])
//    }
// }
// console.log(result);
