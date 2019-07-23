// create object 'user'

let user = {
  name: "Jamison",
  age: 27,
  email: "jamison@email.com",
  purchased: [],
  updateUser: function(){
    this.age++;
    this.name = this.name.toUpperCase();
  }
};

// update user's email
user.email = "Jamison2@email.com";

// increment age by 1
user.age++;

// update user location and purchased array
user.location = "Washington DC";
user.purchased.push("Carbohydates", "Peace of Mind", "Merino Jodphurs");

console.log(user);
console.log(user.purchased[2]);

// create user friend as an object in the existing user object
user.friend = {
  name: "Tony",
  age: 75,
  location: "Alabama",
  email: "Tony@email.com",
  purchased: [],
};

console.log(user.friend.name);
console.log(user.friend.location);

//update age and purchased array for user's friend
user.friend.age = 55;
user.friend.purchased.push("The One Ring", "A latte");
console.log(user.friend.purchased[1]);

for (let i=0; i<user.purchased.length; i++){
  console.log(user.purchased[i]);
};

for (let i=0; i<user.friend.purchased.length;i++){
  console.log(user.friend.purchased[i]);
};


user.updateUser();
console.log(user);

// * You get to give yourself an awesome vehicle
// * It is an object
// * Make it badass
// * Be sure to give it the following:
// *   - a name that is a string
// *   - a distanceToEmpty that is a number of kilometers it can travel
// *   - a speed that is a number and represents the number of km/hr your vehicle can travel
// *   - a currentLocation
// *   - a honkHorn method that returns a string of the sound that your vehicle makes when you honk the horn
// *   - a drive function that takes location and distance and returns whether the distance is too far away or not

let vehicle = {
  name: "Ferarri",
  distanceToEmpty: 300,
  speed: 100,
  currentLocation: "garage",
  honkHorn: function(){
    console.log("HONKKKKK");
  },
  drive: function(distance, location){
    if (distance - this.distanceToEmpty > 0 ){
      console.log(location + " is too far to drive");
    } else {
      console.log("lets go to "+ location);
    }
  },
}

vehicle.drive(200, "texas");
vehicle.drive(400, "oklahoma");


let cat1 ={
  name: "Kitty",
  age: 13,
  breed: "Calico",
}

let cat2 = {
  name: "Cat",
  age: 12,
  breed: "Tabby"
}

console.log(cat1.age);
console.log(cat1.breed);

combineCats = (mama, papa) => {
  console.log(mama);
  console.log(papa);
  let cat3 = {};
  cat3.name = mama.name + papa.name;
  cat3.age = 1;
  cat3.breed = mama.breed + "-" + papa.breed;
  console.log(cat3);
}

combineCats(cat1, cat2);

/* Sort Array of Objects */
/* distanceToSun key included to practice sort methods */

let solarSystem =
[
  {name: "Mercury", distanceToSun: 35.6},
  {name: "Venus", distanceToSun: 67.2},
  {name: "Earth", distanceToSun: 92.9},
  {name: "Mars", distanceToSun: 141.6},
  {name: "Jupiter", distanceToSun: 483.8},
  {name: "Saturn", distanceToSun: 890.8},
  {name: "Uranus", distanceToSun: 1784},
  {name:"Neptune",  distanceToSun: 2793}
];

/* sorting arry of objects */
// If the values are strings

solarSystem.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }


  return 0;
});

console.log(solarSystem);

// If the values are numbers

solarSystem.sort(function (a,b){
  return a.value - b.value
});

console.log(solarSystem);

/* function that sorts arr by objects */
/* takes arr name and key name as arguments */

function sortArrayOfObjects (arr, key) {
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
  });
}

sortArrayOfObjects(solarSystem, "name");
console.log(solarSystem);
