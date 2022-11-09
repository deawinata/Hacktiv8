//Promise

console.log("Day 3")
let myName

//Promise
const hasilPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('janji terpenuhi')
    }, 2000)

    //pending

    //resolve

    //reject
}).then((a) => {
    myName = 'halo'
    console.log(a) //a itu value resolve
})

console.log('halo')