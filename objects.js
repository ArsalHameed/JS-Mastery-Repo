//singleton objects
 // literals does not make singleton objects
// constructor makes singleton objects
//object literals

// Symbol Data Type
const mySym = Symbol("Key1")

const User ={
    name: "Ducks",
    "full Name":"Ducks Deli", 
    age: 18,
    mySym : "SUPERKey",   //mySym is now a Symbol where as mySym would be a key
    location: "Nyc",
    email: "ducks@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays:  ["Monday","Tuesday","Friday","Saturday"]
}
// console.log(User.email);
//There is another method for acess of value
// console.log(User["name"]);
//Why this is important because when you access full Name
// console.log(User["full Name"]); //square notation
// console.log(User.age);

//For Symbol 
// console.log(User[mySym]); //mySym is now treat as Symbol

// Object.freeze(User);

console.log(User)


//Now we create a object function 
// User.greetings = function(){
//     console.log("Hello,How are you doing?");


// }
// User.foodNight = function () { 
//     console.log(`Good night my ${this.name}`);
// }
//console.log(User.greetings());
//console.log(User.foodNight());


//Write a JavaScript program to list the properties of a JavaScript object.

//Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
const props = Object.getOwnPropertyNames(student);
const keys = Object.keys(User)
// console.log(props);
// console.log(keys);

//Object Length

const myObject = {
   name: 'Alice',
//   age: 30,
//   city: 'New York'
};

const objectSize = Object.keys(User).length;

console.log(objectSize); // Output: 3

console.log(myObject)
const objectSize2 = Object.keys(myObject).length;

console.log(objectSize2);// output: 1
// object functions also get the lenth added 
// object with no property has 0 length
// array property is considered as 1 length 
// symbol if declared outside the object get no lenngth inside the object
