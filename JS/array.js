const arr1 = [3,23,5,1,15]
const arr2 = ["add", "fewr", "erew", "fet", "trwt", "rewt"]
const arr3 = new Array(3,41,51,5)
//console.log(arr1)
//console.log(arr1[1])
//console.log(arr2)

// Array methods
//arr1.push(412)
//console.log(arr1)
//arr1.pop()

//arr1.unshift(9)
//arr1.shift()
//console.log(arr1)

//console.log(arr1.includes(12))
//console.log(arr1.indexOf(5))

//const myArr = arr1.join()
//console.log(myArr)
//console.log(typeof (arr1))
//console.log(typeof (myArr))

//console.log("A", arr1)
//const slarr1 = arr1.slice(1, 4)
//console.log(slarr1)
//console.log(arr1)

//console.log("B", arr2)
//const slarr2 = arr2.splice(2,3, 567)
//console.log(slarr2)
//console.log(arr2)

const marvel = ["Thor", "Ironman", "Spiderman"]
const dc = ["Suoerman", "Flash", "Batman"]

//marvel.push(dc)
//console.log(marvel[3][1])

//const com_arr = marvel.concat(dc)
//console.log(com_arr)

const new_arr = [...marvel, ...dc]  // (...) this is a spread operator t works like a concat()
console.log(new_arr)

const new_arr1 = [1, 2, 3, [64, 6, 65, 12], [21, 43, "gfey", ["Tre", "Twt"]]]
const flat_new_arr1 = new_arr1.flat(Infinity) // we can give depth like 1, 2 , 3 .... or infinity.
console.log(new_arr1)
console.log(flat_new_arr1)

console.log(Array.isArray("QWERTY"))
console.log(Array.from("QWERTY")) // Array.from() will convert the given string into array of a single characters
console.log(Array.from({ name: "asdfgg" })) // it will return nothing bcz compiler is confused either key or value need to be convert to array.

let score1 = 200
let score2 = 400
let score3 = 600
console.log(Array.of(score1, score2, score3)) // it will createarray containing all 3 scores.

