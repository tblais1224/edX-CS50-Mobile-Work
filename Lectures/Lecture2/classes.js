// Classes
//   introduced in ES6


//classes vs instances
//classes are abstract, they have methods or things attatched to them

Date  //is a class
const d = new Date() // d is an instance

console.log(Date, d) 
// [Function: Date]    2019-06-03T19:48:11.112Z

// Methods vs static methods vs properties
// method : any function that can be invoked on an instance of the class
d.toString()  //instance then method
// static method : attached to the class
Date.now() 
//property :  new, constructor, extends, super
//new
const d2 = new Date(1234)//milliseconds after first date
console.log(d2.toString())
// Wed Dec 31 1969 19:00:01 GMT-0500 (Eastern Standard Time)

