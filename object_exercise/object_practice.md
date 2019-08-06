
# Lab

# Setup

Use the file `homework.js` in this folder

## Syntax

List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.

Example:

```
{} curly braces define the object.
```

<br>
<hr>

## Me

1. Create an empty object called `me`.<br>
2. Assign it properties for **name**, **age**, and **email** with corresponding values.<br>

The object would look something like this if we console logged it:

```javascript
console.log(me);
```

> => {name: "Kristyn", age: 98, email: "kristyn@foo.bar"}


3. Using dot notation, access the **name** property in your object.<br>
4. Without writing directly into the object, update the value of **age** to be 1000 years old.<br>
5. Using dot notation, verify that **age** has been updated.<br>
6. Add a key to this object called: residence and give it a value of your hometown.
6. Access the value of residence<br>

<br>
<hr>

## Slimer

```javascript
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}
```

* Given the **slimer** object:
    - What would you write to access the `name` and console.log it?
    - What would you write to change the `type` to 'creature' (without changing it inside the object)
    - What would you write to add a key to the object called `age`, and set the age to 6?
    - console.log the object to make sure `type` is creature, and `age` is 6

<br>
<hr>

## Ogres

Let's say you want to make an adventure game where you are an adventurer and you are going to fight **ogres**.

Using **objects**, create **models** and have them interact.

* how would you model your `adventurer`? Your adventurer will want a **name** and **hitpoints**. What else would your adventurer need?
* how would you model an `ogre`? Your ogre will want **hitpoints**.
* When your adventurer's hitpoints reach 0 the game is over.
* When your ogre's hitpoints reach 0 the game is over.
* Write these two objects out in your `homework.js` file
* Add methods to these objects that attack the other opponent
* The method should check if the hitpoints have gone to 0 and tell you who has one the game.
* Your hitpoints should start at 5 for each player.
* Try running a few functions to play the game!


<br>
<hr>


# Objects, Arrays and Functions

Given the following object, log the third element from the array

```javascript
const fun = {
    asdf: ["afd", "matt", 'sweet']
}
```

Given the following object, log the elbow property

```javascript
const body = {
    arm: {
        elbow: 'pointy'
    }
};
```

Loop over the following array and print its values:

```javascript
const refrigerator = {
    fruits: ['apple', 'pear', 'banana']
}
```

### Use the instruments object to print the following.

1.  `"telecaster"`
2.  `"santa cruz"`
3.  `"washburn"`
4.  `"weber"`

```javascript
const instruments = {
  banjo: ["1920 gibson", "deering", "washburn"],
  guitar: {
    acoustic: ["martin", "taylor", "santa cruz", "gibson"],
    electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
    nylon: ["baldwin", "cordoba"]
  },
  mandolin: ["eastman", "weber", "collings"]
}
```

1.  Using the instruments object loop through all
the electric guitars and print them to the console.

2.  Add a property to the instruments object that includes a list of your favorite singers.
