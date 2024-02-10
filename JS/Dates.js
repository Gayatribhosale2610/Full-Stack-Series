let date = new Date()
console.log(date)
console.log(typeof(date))
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())
console.log(date.toTimeString())
console.log(date.toUTCString())
console.log(date.to)


// set specific date
let newDate1 = new Date(2023, 3, 15)
console.log(newDate1.toLocaleString())

let newDate2 = new Date("07-17-2024")
console.log(newDate2.toLocaleString())

let newDate3 = Date.now()

console.log(newDate3)
console.log(newDate2.getTime())
console.log(Math.round(Date.now() / 1000)) // convert to seconds

let newDate = new Date()
console.log(newDate.getTime())
console.log(newDate.getDate())
console.log(newDate.getMonth())
console.log(newDate.getFullYear())
console.log(newDate.getDay())
















