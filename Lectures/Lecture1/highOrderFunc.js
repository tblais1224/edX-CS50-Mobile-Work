
// using map

//arr is x array and fn is addOne function
function map(arr, fn) {
    const newArr = []

    arr.forEach(val => {
        newArr.push(fn(val))
    });

    // for (let i = 0; i < arr.length; i++) {
    //     let val = arr[i]
    //     newArr.push(fn(val))
    // }

    return newArr
}

function addOne(num) {
    return num + 1
}

const x = [0, 1, 2, 3]

console.log(map(x, addOne))