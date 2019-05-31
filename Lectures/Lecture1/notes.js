// JavaScript, ES6

//javascript is an implementation of the ECMAScript spec.
// ECMAScript defines what a language should do and how it behaves

// Transpilers ---> Babel, TypeScript etc.
// used to change new ES6 code for example into older compatible code such as ES5



//Closure Bug example
function makeFunctionArr() {
    const array = []

    for (var i = 0; i < 5; i++) {
        array.push(function () {
            console.log(i)
        })
    }
    // i will return 5 because a var lifecycle is until the function ends
    // if i is declared with let then its lifecycle is until the end of the code block } so i would return undefined
    console.log(i)
    return array
}
//i will return undefined or error because out of scope
console.log(i)

const functionArray = makeFunctionArr()

functionArray[0]() // returns 5 ??????


//closure example
function makeHelloFunction() {
    const message = "hello"

    function sayHello() {
        console.log(message)
    }
    return sayHello
}

const sayHello = makeHelloFunction()
// console.log(message) // this errors because message is not defined
console.log("typeof message:", typeof message)
console.log(sayHello.toString())

sayHello() //returns "hello"



//immediately invoked function   iife

const sayHello = (function () {
    const message = "hello"

    function sayHello() {
        console.log(message)
    }
    return sayHello
})() //this invokes the function immediately at line 60


//another example iife
//returns an object of functions
const counter = (function () {
    let count = 0

    return {
        inc: function () {
            count++
        },
        get: function () {
            console.log(count)
        }
    }
})()
//can only access count through the functions in the counter object
counter.get() // returns 0
counter.inc()
counter.get() //returns 1



//Closure Bug example fixed with iife
function makeFunctionArr() {
    const array = []

    for (var i = 0; i < 5; i++) {
        array.push((function (x) {
            return function () {
                console.log(x)
            }
        })(i)) //immediately invoke function with i
    }
    return array
}

const functionArray = makeFunctionArr()
//now this will return 2 instead of 5 
functionArray[2]()





// first class function
// treated the same as any other value

// Higher order functions   ---> .map() .filter() .reduce()

const arr = [1,2,3,4,5]

//using map
function addOne(number) {return number + 1}

arr.map(addOne)// returns [2,3,4,5,6]

//using filter
function isGreaterThanTwo(x){return x > 2}

arr.filter(isGreaterThanTwo) // returns [3,4,5]

//using reduce
function add(x,y){return x+y}

arr.reduce(add) //returns 15