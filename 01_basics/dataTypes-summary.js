//primitive and non-primitive(reference data types) data types

//How data is accessed and stored are the two types of datatypes

// #primitve

/* 7 types: String, Number, Boolean, null, undefined, Symbol(unique),BigInt  */

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = true
const outsideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherId = Symbol('123') //Symbol data Types

// console.log(id === anotherId);

// const bigNumber = 987654345n ; //bigInt


// Is javascript statically typed or dynamically type language?
// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.


//Reference (Non Primitive)

// Array, Objects, Functions

//Arrays
const heros = ["aditya", "anil", "xyz"];

//objects

let myobj = {
    name : "aditya",
    age : "23"
};

//functions
const myFunctions = function () {
    console.log("Hello World");
}

console.log(typeof heros);