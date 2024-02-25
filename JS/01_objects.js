// Two ways to create object

1. // singleton
Object.create // create a new object

2. // object literals

const newsym = Symbol("Key1") // declare a symbol

const user = {
    name: "Alan", // here name is by default string
    age: 43,
    [newsym]: "new symbol key", // use symbol keys here
    "Full Name": "wewr fds",
    location: "US",
    email: "alan12@gmail.com",
    isloggedin: false,
    lastLoginDays: ["Mondays", "Fridays"]
}

console.log(user)
// Two ways to access object ele
// 1. Dot method
//console.log(user.age) // (.) method [dot method]

// 2. Bracket method
//console.log(user["age"]) // As age is y default string we need to mention here as a string

//console.log(user["Full Name"]) // we cannot access full name using dot method here we need to use bracket method
//console.log(user[newsym]) // access symbol key

user.email = "abc@gmail.com"
//console.log(user["email"])
//Object.freeze(user) // freeze() method stops compiler to  make any changes
user.email = "bdye@gmail.com"
//console.log(user["email"])

user.greeting = function () {
    console.log("Hello user")
}
user.greeting()

user.greeting = function () {
    console.log(`Hello user ${this.name}`)
}
user.greeting()
