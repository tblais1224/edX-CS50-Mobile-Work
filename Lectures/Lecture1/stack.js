
// execution stack   ---> functions invoked by other functions are added to call stack, and are removed when completed

// you can only access the most recent element added to a stack. like solitaire

function a() {
    console.log('hi')
}
function b() {
    a()
}
function c() {
    b()
}

c() // returns hi


function addOne(num) {
    return num + 1
}
function getNum() {
    return addOne(10)
}
function log() {
    console.log(getNum() + getNum())
}

log() // returns 22



//stack, api, event loop, function queue
// a queue means first added are the first out
//stack is most recent added first out
//event loop checks when stack is empty, if it is it checks the queue and moves whatever is in the queue to the stack

