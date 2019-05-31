//Promises avoid callback hell
//biggest advantage is only need to handle errors once

const url = ""

//fetch returns a promise
//much cleaner than callbacks 
fetch(url)
    .then(res => res.json())
    .then(json => {
        return ({
            importantData: json.importantData
        })
    })
    .then(data => {
        console.log(data)
    })
    // catch handles all errors
    .catch(err => {
        console.log(err)
    })