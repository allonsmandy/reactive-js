let price = 5
let quantity = 2
let total = 0
let target = null 

let storage = [] // we'll store our target functions in here

record = () => storage.push(target) // target = () => { total = price * quantity }
target = () => { total = price * quantity }
replay = () => storage.forEach(run => run())

record() // remember this in case we want to run it later
target() // also go ahead and run it

price = 20
console.log(total) // => 10
replay()
console.log(total) // => 40