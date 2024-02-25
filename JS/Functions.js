//function addTwoNumbers(num1, num2) {
//    console.log(num1 + num2)
//}

//function addTwoNumbers(num1, num2) {
//    let result = num1 + num2
//    return result
//}

//const result = addTwoNumbers(2, 4)
//console.log(`Result:  ${result}`)

function calculateCartPrice(...num1) { // here (...) is a rest parameter. Which accepts the number of  arguments as an array.
    return num1;
}
console.log(calculateCartPrice(20, 324, 900, 500))

const user = {
    name: "Alan",
    price: 299
}

function handleObject(obj) {
    console.log(`Usename is: ${obj.name}, price is: ${obj.price}`)
}
handleObject(user)
handleObject({
    name: "Dan",
    price: 599
})

const newArray = [200, 400, 500, 599, 899]
function returnvalue(getArray) {
    return getArray[3]
}
console.log(returnvalue(newArray))

