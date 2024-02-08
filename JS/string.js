let str1 = "hello"
let str2 = new String("Bye..! Thank you") 
const str3 = "ABCDQWERTY643286#@$%$#^";
console.log(str3)

// print string
console.log(`This is first string: ${str1} and this is second: ${str2}`);

// to get prototype of string
console.log(str2.__proto__);
console.log(str2.length);
console.log(str2.toUpperCase());
console.log(str2.anchor("bye")) // Deprecated: This feature is no longer recommended
console.log(str2.at(30))
console.log(str2.big()) // Deprecated: This feature is no longer recommended
console.log(str2.blink())   // Deprecated: This feature is no longer recommended
console.log(str2.bold())    // Deprecated: This feature is no longer recommended
console.log(str2.charAt(10))

//Difference Between at() and charAt() : -
//    when we pass a negative value in the parameter.
    //a) at() method: - when we use a negative value in the parameter then the count starts from the right side as -1, -2, -3 ... and so on
    //b) charAt() method: - when we use a negative value in the parameter of charAt() then it doesn't give any output only give whitespace.

//when we give a larger number than the length of the string.
//    a) at() method: - It returns undefined as an output when we pass a parameter greater number than the length of the string.
//    b) charAt() method: - when we pass a greater number than the length of the string as a parameter then it doesn't give any output.

console.log(str3.charCodeAt(18)) // it returns the Ascii value of a charater at given index.
console.log(str2.codePointAt(0))
console.log(str2.concat(" ", str3))
console.log(str2.endsWith("you"))
console.log(String.fromCharCode(65, 67, 68, 100)) // output: ACDd
console.log(String.fromCodePoint(49))







