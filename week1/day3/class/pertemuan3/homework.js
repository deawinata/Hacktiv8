let arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
let complicatedArray = ['cucumber', 44, true];

// makeAllCaps(arrayOfWords)
//     .then(sortWords)
//     .then(result => { console.log(result) })
//     .catch(error => { console.log(error) })
//
// makeAllCaps(complicatedArray)
//     .then(sortWords)
//     .then(result => { console.log(result) })
//     .catch(error => { console.log(error) })

const makeAllCaps = (array) => {
    array.map((item, index) => {
        if (typeof item === 'string') {
            array[index] = item.toUpperCase()
        }
    })
}

const sortWords = (array) => {
    array.sort()
}

const promise = new Promise(resolve => {
    setTimeout(() => {
        makeAllCaps(arrayOfWords)
        makeAllCaps(complicatedArray)
    }, 2000)
    setTimeout(() => {
        sortWords(arrayOfWords)
        sortWords(complicatedArray)
        resolve(arrayOfWords, complicatedArray)
    }, 3000)
})

promise.then(res => console.log(arrayOfWords, complicatedArray))

