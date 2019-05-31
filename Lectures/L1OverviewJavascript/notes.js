//use single or double quotes
const firstName = "Tom"
const lastName = 'Blais'

const val = 42

const arr = [
    "string",
    42,
    function () {
        console.log('HI')
    }
]

//this will execute the function in the array
arr[2]()

//logs all the elements in the array in order
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

//js has dynamic typing, given variable no type associated so int can change to string and vice versa



//primative types = null, undefined, boolean, string, number (no floats in JS), (symbol)  




//COERCION    explicit vs implicit coercion

const x = 42

typeof x //returns type of variable, in this case 'number'

typeof null //return 'object' 

const explicit = String(x)
const implicit = x + ""

if (explicit === implicit) { //they should both be the same
    console.log(true)
}

console.log(explicit, implicit)

//falsey values = undefined, null, +0, -0, NaN, ""

//truthy values = {}, [], everything else


// CREATE OBJECTS

//old way to make an object
const obj = new Object()
obj.firstName = "tom"
obj.lastName = "blais"
obj.isLearning = true
obj.greeting = function () {
    console.log("hello world")
}

//preferred over old way to make an object
const obj1 = {}
obj1.firstName = "tom"
obj1['lastName'] = "blais"
const key = "isLearning"
obj1[key] = true
obj1["greeting"] = function () {
    console.log("hello world")
}

//this is the most preferred current way to create object
const obj2 = {
    firstName: "tom",
    lastName: "blais",
    isLearning: true,
    greeting: function () {
        console.log("hello world")
    },
    //objects can nest inside objects
    address: {
        street: "85 sawmill rd",
        city: "chepachet",
        1: "one"
    }
}

//keys will always be cast to a string
// use dot notation to access values in an object
//get the street value from the object an object
obj2.address.street

//if the key is a variable or is a value that must be cast to a string (if key is a number) you must use bracket notation
const key = "city"
obj2.address[key]

obj2.address[1]



// OBJECT MUTATIONS

//create object o
const o = {
    a: "a",
    b: "b",
}

//creates new object o2 thats the same as o. data is stored as reference not as object. both o and o2 point to the same data
const o2 = o

o.a = "new value"
o2.b = "another new Value"

//should all output the changed values. o and o2 are the same
console.log(o2.a, o.a, o2.b, o.b)

const objTest = {
    a: "a",
    b: "b",
    obj: {
        key: "key"
    }
}

//creates a "dumb" clone of the object o
//will only clone lower lever keys not nested obj.key
const o3 = Object.assign({}, objTest)

o3.a = "new value"
o3.obj.key = "new value"

//only objTest.a will be the "a", the rest will be "new value" even the objTest.obj.key
console.log(objTest.a, o3.a, objTest.obj.key, o3.obj.key)



// DEEP CLONE / COPY
function deepCopy(obj) {
    //keys is an array of the keys
    const keys = Object.keys(obj)
    const newObj = {}
    //loop through each key in the obj and check for type object
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        //test if key is an object
        if (typeof obj[keys[i]] === "object") {
            //recursively copies the nested object in obj
            newObject[key] = deepCopy(obj[key])
        }
    }
    return newObject
}



// PROTOTYPAL INHERITANCE
//arrays are specific objects with functions in their object
var array = ["hi", 42, function () {
    console.log("hi world")
}]
//run in browser console to see all the functions associated with the array (example. push() slice() etc.)
array.__proto__


//primatives wont have wrapper functions
42. toString() //this will be undefined because its primative
var num = 42
num.toString() // this will be "42" because its a var

num.__proto__ //gives you a Number object with functions like toString and toExponenetial


// do not change prototypes
num.toString() // returns "42"

Number.prototype.toString = function () {
    return "10000"
} //now every Number instance will return 10000 when using toString
num.toString() // returns "10000"
var x = 69
x.toString() // returns "10000"



// SCOPE

//global - not really any reason to use this
thisIsAGlobalVariable = 10

//const vs let vs var

//Lexical Scoping is var: from when declared until function ends, old way
//block scoping is const and let: until the next } is reached
//const cant have its reference changed, let and const both prevent reassignment 
const x = 10
x = 5 //this will be an error, x still 10
let c = 12
c = 5 //c will now be 5
let c = 10 // error: cant reassign c

const obj = {}
obj = {} //will be an error. cant change reference
obj.a = "hi" //this works because reference stays the same
//obj now is { a: 'hi' }

//the following all work with var. no protections
var x = 50
x = 4
var x = 12 //SHADOWING  ---> replace variable with same name


//hoisting
//function definitions are hoisted
//declaration of 
console.log(hiConst) //error
console.log(hiLet) // error
console.log(hiVar) //undefined     var is hoisted

const hiConst = "his"
let hiLet = "his"
var hiVar = "his"

thisIsHoisted() //can be called anywhere no matter where its defined

function thisIsHoisted() {
    console.log("this is a function declared at bottom of file. can be called anywhere due to function definition hoisting")
}

thisIsNotHoisted() //error 

const thisIsNotHoisted = function () {
    console.log("Declared as a constant and cannot be changed,  so will not be hoisted. Const only available after declared")
}


//EXECUTION JS
// javascript executes by first running through all the code looking for errors, adds semicolons and saves function definitions for use throughout file
//it then goes through and actually runs the code


window // this is where all variables are stored in browser environment
var y = "this is a new window"
window.y //will output this is a new window

global //in node window is undefined, use global




//CLOSURES
//functions that refer to variables declared in parent function

function makeFuncArr() {
    const arr = []
    //creating array of functions
    for (var i = 0; i < 5; i++) {
        arr.push(function () {
            console.log(i)
        })
    }
    return arr
}

const arr = makeFuncArr()
arr[3]()  // this returns 5  ... wtf!