// Syntax

// List and describe each individual piece of syntax that we use to construct
// an object. Don't leave anything out! The list is finite.

let objectName = {
  key:  "value",
  key2: "value2",
  key3: "value3",
};

// {} curly brackets define the object
// let, var, const declare the object
// objectName defines the word by which we can refer to the object
// key - how we refer to the value stored in the object
// value - value of a key, can be any data type


// 1. Create an empty object called `me`.<br>
// 2. Assign it properties for **name**, **age**, and **email** with corresponding values.<br>
//
let me = {};

  me.name= "Jamison";
  me.age= 27;
  me.email= "jmcc13@vt.edu";

  console.log(me);

//
// > => {name: "Kristyn", age: 98, email: "kristyn@foo.bar"}
//
//
// 3. Using dot notation, access the **name** property in your object.
console.log(me.name);
// 4. Without writing directly into the object, update the value of **age** to be 1000 years old.
me.age = 1000;
// 5. Using dot notation, verify that **age** has been updated.
console.log(me.age);
// 6. Add a key to this object called: residence and give it a value of your hometown.
me.residence = "Washington DC";
// 6. Access the value of residence
console.log(me.residence);
console.log(me);


// ## Slimer
//
// ```javascript
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

// // * Given the **slimer** object:
// //     - What would you write to access the `name` and console.log it?
// console.log(monster.name);
// //     - What would you write to change the `type` to 'creature' (without changing it inside the object)
monster.type = "creature";
console.log(monster.type);
//     - What would you write to add a key to the object called `age`, and set the age to 6?
monster.age = 6;
console.log(monster.age);
//     - console.log the object to make sure `type` is creature, and `age` is 6
console.log(monster);


// ## Ogres
//
// Let's say you want to make an adventure game where you are an adventurer and you are going to fight **ogres**.
//
// Using **objects**, create **models** and have them interact.
//
// * how would you model your `adventurer`? Your adventurer will want a **name** and **hitpoints**. What else would your adventurer need?

// with an object
let adventurer = {
  name: "Jamison",
  hitpoints: 5,
  experience: 50,
  damage: 1,
  attackOgre: function(){
    if (ogre.hitpoints > 0){
      ogre.hitpoints -= 1;
    } else {
      console.log("you win");
      adventurer.experience += 10;
    }
  }
}
console.log(adventurer);
// * how would you model an `ogre`? Your ogre will want **hitpoints**.

let ogre = {
  name: "Blurg",
  hitpoints: 5,
  damage: 1,
  attackPlayer: function(){
    if (adventurer.hitpoints > 0){
      adventurer.hitpoints -= 1;
    } else {
      console.log("the ogre wins");
    }
  },
};
console.log(adventurer);
console.log(ogre);

// * When your adventurer's hitpoints reach 0 the game is over.
// * When your ogre's hitpoints reach 0 the game is over.
// * Write these two objects out in your `homework.js` file
// * Add methods to these objects that attack the other opponent
// * The method should check if the hitpoints have gone to 0 and tell you who has one the game.
// * Your hitpoints should start at 5 for each player.
// * Try running a few functions to play the game!
  adventurer.attackOgre();
  adventurer.attackOgre();
  ogre.attackPlayer();
  adventurer.attackOgre();
  ogre.attackPlayer();
  adventurer.attackOgre();
  ogre.attackPlayer();
  adventurer.attackOgre();
  adventurer.attackOgre();

console.log(adventurer);
console.log(ogre);





// Objects, Arrays and Functions
//
// Given the following object, log the third element from the array
//
// ```javascript
const fun = {
    asdf: ["afd", "matt", 'sweet']
}
console.log(fun.asdf[2]);

//
// Given the following object, log the elbow property
//
// ```javascript
const body = {
    arm: {
        elbow: 'pointy'
    }
};
console.log(body.arm.elbow);
//
// Loop over the following array and print its values:
//
// ```javascript

const refrigerator = {
    fruits: ['apple', 'pear', 'banana']
}
let fruit = refrigerator.fruits;
for (item in fruit){
  console.log(fruit[item]);
};

/* OR */
for (i = 0; i <fruit.length; i++){
  console.log(fruit[i]);
}


// ### Use the instruments object to print the following.
//
// 1.  `"telecaster"`
// 2.  `"santa cruz"`
// 3.  `"washburn"`
// 4.  `"weber"`
//

const instruments = {
  banjo: ["1920 gibson", "deering", "washburn"],
  guitar: {
    acoustic: ["martin", "taylor", "santa cruz", "gibson"],
    electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
    nylon: ["baldwin", "cordoba"]
  },
  mandolin: ["eastman", "weber", "collings"]
}

//
// 1.  Using the instruments object loop through all
// the electric guitars and print them to the console.
let electricGuitars = instruments.guitar.electric;
for (item in electricGuitars){
  console.log(electricGuitars[item]);
}

//
// 2.  Add a property to the instruments object that includes a list of your favorite singers.

instruments.singers = ["Elohim", "Lauren Mayberry", "Haliene"];
console.log(instruments.singers);

/* Object Ception */
/* edited solarSystem array of objects with new density key:value pairs for bonus question */
const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [], density: 5.43 },
	{ name: "Venus", ringSystem: false, moons: [], density: 5.25 },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"], density: 5.52   },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"], density: 3.95 },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"], density: 1.33 },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"], density: 0.69 },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"], density: 1.29 },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"], density: 1.64 }
];

// Write Javascript that does the following:
//
// EXAMPLE:
// - Print the boolean for Mercury's ringSystem

console.log(solarSystem[0].ringSystem);

// 1. Print the array of Jupiter's moons to the console (no _for loop_, just print the entire array).
console.log(solarSystem[4].moons);
// 2. Print the name of Neptune's moon "Nereid" to the console.
console.log(solarSystem[7].moons[1]);
// 3. Add a new moon called "Endor" to Venus' moons array.
solarSystem[1].moons = ["Endor"];
console.log(solarSystem[1]);
// 4. Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array
// (which includes "Charon").
solarSystem.push({name: "Pluto", ringSystem: false, moons: ["Charon"], density: 2.03});
console.log(solarSystem[8]);
// 5. Add a new key value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's
// diameter in miles represented as a string.
solarSystem[2].diameter = "7917.5 miles";
console.log(solarSystem[2]);
// 6. Change Mercury's ringSystem boolean to true.
solarSystem[0].ringSystem = true;
console.log(solarSystem[0]);
// 7. Change Uranus' moon "Umbriel" to "Oberon"
solarSystem[6].moons[3] = "Oberon";
console.log(solarSystem[6])
// 8. Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others.
// You want to make a loop that goes over each item in the array, and include an if statement.
for (i = 0; i< solarSystem.length; i++){
  if (solarSystem[i].ringSystem === true){
    console.log(solarSystem[i])
  }
};

/* Solar System Part 2 */

const system = {
  Mercury:
   { radiusp: 'same ',
     name: 'Mercury',
     density: 5.43,
     tilt: 2,
     image: 'textures/mercury.gif',
     rotationperiod: 1408,
     period: 0.24,
     radiuse: 2439,
     satellites: 0,
     au: 0.3871,
     eccentricity: 0.206,
     velocity: 47.89,
     mass: 0.06,
     inclination: 7 },
  Venus:
   { radiusp: 'same ',
     name: 'Venus',
     density: 5.25,
     tilt: 177.3,
     image: 'textures/venus.gif',
     rotationperiod: 5832,
     period: 0.62,
     radiuse: 6052,
     satellites: 0,
     au: 0.7233,
     eccentricity: 0.007,
     velocity: 35.04,
     mass: 0.82,
     inclination: 3.4 },
  Earth:
   { radiusp: 6357,
     name: 'Earth',
     density: 5.52,
     tilt: 23.45,
     image: 'textures/earth.gif',
     rotationperiod: 23.93,
     period: 1,
     radiuse: 6378,
     satellites: 1,
     au: 1,
     eccentricity: 0.017,
     velocity: 29.79,
     mass: 1,
     inclination: 0 },
  Mars:
   { radiusp: 3380,
     name: 'Mars',
     density: 3.95,
     tilt: 25.19,
     image: 'textures/mars.gif',
     rotationperiod: 24.62,
     period: 1.88,
     radiuse: 3397,
     satellites: 2,
     au: 1.524,
     eccentricity: 0.093,
     velocity: 24.14,
     mass: 0.11,
     inclination: 1.85 },
  Jupiter:
   { radiusp: 66854,
     name: 'Jupiter',
     density: 1.33,
     tilt: 3.12,
     image: 'textures/jupiter.gif',
     rotationperiod: 9.92,
     period: 11.86,
     radiuse: 71490,
     satellites: '69',
     au: 5.203,
     eccentricity: 0.048,
     velocity: 13.06,
     mass: 317.89,
     inclination: 1.3 },
  Saturn:
   { radiusp: 54360,
     name: 'Saturn',
     density: 0.69,
     tilt: 26.73,
     image: 'textures/saturn.gif',
     rotationperiod: 10.66,
     period: 29.46,
     radiuse: 60268,
     satellites: 30,
     au: 9.539,
     eccentricity: 0.056,
     velocity: 9.64,
     mass: 95.18,
     inclination: 2.49 },
  Uranus:
   { radiusp: 24973,
     name: 'Uranus',
     density: 1.29,
     tilt: 97.86,
     image: 'textures/uranus.gif',
     rotationperiod: 17.24,
     period: 84.01,
     radiuse: 25559,
     satellites: 24,
     au: 19.19,
     eccentricity: 0.046,
     velocity: 6.81,
     mass: 14.53,
     inclination: 0.77 },
  Neptune:
   { radiusp: 24340,
     name: 'Neptune',
     density: 1.64,
     tilt: 29.6,
     image: 'textures/neptune.gif',
     rotationperiod: 16.11,
     period: 164.79,
     radiuse: 25269,
     satellites: 8,
     au: 30.06,
     eccentricity: 0.01,
     velocity: 5.43,
     mass: 17.14,
     inclination: 1.77 },
  Pluto:
   { radiusp: 'same',
     name: 'Pluto',
     density: 2.03,
     tilt: 122.46,
     image: 'textures/pluto.gif',
     rotationperiod: 153.3,
     period: 248.54,
     radiuse: 1160,
     satellites: 1,
     au: 39.48,
     eccentricity: 0.248,
     velocity: 4.74,
     mass: 0.002,
     inclination: 17.15 }
};


// Write the commands you would use to do the following:
//
// 1. console.log the mass of Mercury
console.log(system.Mercury.mass);
// 2. console.log the eccentricity of Venus
console.log(system.Venus.eccentricity);
// 3. console.log the sum of the number of satellites of Jupiter, Saturn, Uranus, and Neptune (131)
// Jupiter's "number" of satellites is actually a string and needs to be converted to a number.
let numberOfSatellites = parseInt(system.Jupiter["satellites"], 10) + system.Saturn["satellites"] + system.Uranus["satellites"] + system.Neptune["satellites"];
console.log(numberOfSatellites);

// 4. Write a conditional that checks if Mercury's `radiusp` is a string (remember the `typeof` command). If Mercury's
// `radiusp` is a string, change the value to be the same as its `radiuse` value. (`radiusp` is radius at the poles,
// `radiuse` is radius at the equator).
if (typeof system.Mercury.radiusp === "string"){
  system.Mercury.radiusp = system.Mercury.radiuse;
};
console.log(system.Mercury.radiusp);
// 5. console.log Mercury's `radiusp` (should be 2439, not 'same').
// 6. Find the difference between Jupiter's **momentum** and Pluto's **momentum**. (To get momentum,
//   you'll want the product of **velocity** and **mass**).

let jupiterMomentum = system.Jupiter.mass * system.Jupiter.velocity;
let plutoMomentum = system.Pluto.mass * system.Pluto.velocity;
console.log(jupiterMomentum);
console.log(plutoMomentum);

// ### Planet X
// Outside of any of these predefined solar system objects, make your own object called **PlanetX**.
// Give PlanetX the same properties as a planet within `system` (eg. density, tilt, mass) and give it made-up values.
// Without directly altering either the `system` object or the `PlanetX` object, include
// planetX as a property of system. (Your planetX object is a planet within the system).
// When you `console.log(system)`, planetX should be appear as a planet in the system.

system.planetX=
 { radiusp: 'same',
   name: 'PlanetX',
   density: 5.6,
   tilt: 108.46,
   image: 'textures/planetX.gif',
   rotationperiod: 70,
   period: 324,
   radiuse: 5646,
   satellites: 33,
   au: 50.8,
   eccentricity: 0.378,
   velocity: 12.4,
   mass: 0.508,
   inclination: 16 }

console.log(system);

// Write a function `sortArrayOfObjects` with two parameters: `arr` and `key` that will sort any array of objects by the `key` input.

function sortArrayOfObjects (arr, key) {
  for (item in arr){
    if (typeof arr[item][key] === "string"){ //check if values are strings so we can sort alphabetically
      arr.sort(function(a, b) {
        var nameA = a[key].toUpperCase();
        var nameB = b[key].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }
    );
  } else if (typeof arr[item][key]==="number") { //check if values are numbers so we can sort numerically
      arr.sort(function (a,b){
        return a[key] - b[key];
      });
    }
  }
};

//


sortArrayOfObjects(solarSystem, "density"); // added density key:value pair to the objects to have a number to sort by
console.log(solarSystem);
