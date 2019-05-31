// hang ---> cause program to "hang" in the while loop until the time has past. nothing can be done, program is locked up
function hang(secs) {
    const doneAt = Date.now() + (secs * 1000)
    while (Date.now() < doneAt) {}
}

hang(5)

console.log("hi") //logs after 5 seconds


// hang works because JavaScript is a SINGLE THREADED, and SYNCHRONOUS language



// ASYNC

function printOne(){
    console.log('one')
}
function printTwo(){
    console.log("two")
}
function printThree(){
    console.log("three")
}
//returns 3, 2, 1
setTimeout(printOne, 1000);
setTimeout(printTwo, 0);
printThree();



