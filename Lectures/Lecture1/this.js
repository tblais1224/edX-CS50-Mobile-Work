// this refers to the global object
//a method in a object refers to the object as this

//this can be set manually with bind call or apply

//this is equal to person inside of person
const person = {
    name: "Tom Blais",
    greet: function () {
        console.log("Hello", this.name)
    }
}

person.greet() //returns hell Tom Blais

const greet = person.greet

//using .bind()
const greetWithBind = person.greet.bind({
    name: "this is a bound object"
})
//apply and call are run immediately 
person.greet.apply({
    name: "using apply"
})
person.greet.call({
    name: "using call"
})

greet() //returns hello undefined
greetWithBind() //returns hello this is a bound object

const friend = {
    name: "Robert"
}

friend.greet = person.greet

friend.greet() // returns "Hello Robert"


//using arrow function to bind this to what this is at the time of writing
const newPerson = {
    name: "newPerson",
    greet: () => {
        console.log("Hello", this.name)
    }
}
newPerson.greet() //returns undefined because this.name is undefined
