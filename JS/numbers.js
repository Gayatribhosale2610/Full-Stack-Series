// --------------------Number --------------------------

//const num1 = 300
//const num2 = new Number(20.9765300)
//console.log(`number 1 is ${num1} and number 2 is ${num2}`)
//console.log(num2)

//console.log(num2.toString().length)
//console.log(num2.toFixed(2)) // this method returns a string containing the 2 point precision.

//console.log(num2.toPrecision(5)) //this method is also return a string containing the precision values but
//// but it consider the presicion from index 0.

//const num3 = new Number(200000000)
//console.log(num3.toLocaleString('en-IN'))

//console.log(num3.toExponential(3))

//const maxNum = Number.MAX_SAFE_INTEGER
//console.log(maxNum)

//console.log(Number.EPSILON)
//console.log(Number.MAX_SAFE_INTEGER)
//console.log(Number.MIN_SAFE_INTEGER)
//console.log(Number.MAX_VALUE)
//console.log(Number.MIN_VALUE)
//console.log(Number.NaN)
//console.log(Number.NEGATIVE_INFINITY)
//console.log(Number.POSITIVE_INFINITY)

// ----------------------- Math ----------------------------

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.7))
console.log(Math.ceil(4.7))
console.log(Math.floor(4.6))
console.log(Math.max(42,55,14,3))
console.log(Math.min(42, 55, 14, 3))
console.log(Math.round(Math.random() * 10) + 1) // Math.random value always returns a value betn 0 - 1

const min = 10
const max = 30

console.log(Math.round(Math.random() * (max - min + 1)) + min)
