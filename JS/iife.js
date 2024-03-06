// Immediately Invoked Function Expressions (IIFE)

// normal function
//function one(){
//	console.log(`DB Connected`)
//}
//one()

	(function one() {
		console.log(`DB Connected..!`)
	})();

// 1st (): in which we write function definition  
// 2nd (): execution call

// using arrow function
( () => {
	console.log(`DB two Connected..!`)
})();

((name) => {
	console.log(`DB two Connected..! ${name}`)
})("fetas");