function recurse() {
    console.log("recursion!")
    return recurse()
}

recurse()//Uncaught RangeError: Maximum call stack size exceeded