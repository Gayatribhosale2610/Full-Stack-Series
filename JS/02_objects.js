// Singleton objects

// first way to create objects

const InstaUser = new Object()

InstaUser.id = "101"
InstaUser.name = "qwerty"
InstaUser.isLoggedIn = false

//console.log(InstaUser)

const User2 = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "asd",
            lastname: "mirjg"
        }
    }
}
//console.log(User2.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "d", 5: "e", 6: "f" }
//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2) // concats both objects in a single object
// in assign(), 1st is the tarhet and rest of others after 1st parameter are source.
// So all souce objects will be combine in a target parameter.i.e { }.

//console.log(obj3)
//console.log(obj3 == obj1)

const obj3 = { ...obj1, ...obj2 } // using spread operator
//console.log(obj3)


const users = [
    {
        id: 1,
        email: "qwe@gmail.com"
    },
    {
        id: 2,
        email: "qwe12@gmail.com"
    },
    {
        id: 3,
        email: "qw5e@gmail.com"
    }
]

console.log(users[1])

console.log(Object.keys(InstaUser)) // get all keys of an object
console.log(Object.values(InstaUser)) // get all values of an object
console.log(Object.entries(InstaUser)) // convert object into array of arr

console.log(InstaUser.hasOwnProperty("id1")) // check whether property is available in that object or not



