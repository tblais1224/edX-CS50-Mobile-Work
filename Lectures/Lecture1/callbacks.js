//Callbacks  --->  control flow of async calls
//execute func once callback is returned

function doSomething(callback) {
    callback(1)
}
doSomething(console.log)

//using settimeout callbacl
function doSomethingAsync(callback) {
    setTimeout(function () {
        callback(1)
    }, 1000)
}
doSomethingAsync(console.log) //returns 1 after 1 second