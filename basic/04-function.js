// 1. name function or function decleration
// function greet(name) {
//     return `Hello ${name}!`;
// }
// console.log(greet("Subash Lingden"))
// console.log(greet("Anish Maharjan"))

/* 2. Function expression yadi variable ko function assigned hunxa bhane tyo function expression hunxa and this function doesnot have name like decleration function . it is also called anonomous */
// const greet2 = function(name) {
//     return `Hello ${name}`;
// }
// console.log(greet2("Krista Maharjan"));
// console.log(greet2("Kristina Maharjan"));

// 3. ARROW function
// const greet3 = (name) => {
//     return `Hello ${name}`;
// }
// console.log(greet3("Subash Lingden"))
// //  arrow function is also know as short function
// const greet4 = name => `Hello, ${name}`;
// console.log(greet4("Anish Maharjan"));

function Multiply(a, b) {
    console.log(a * b)
}
Multiply(5,  6)

// // Using spread operator
// function addNumbers(...numbers) {
//     let ans = 0
//     for (let i = 0; i < numbers.length; i++){
//         ans = ans + numbers[i]
//     }
//     return ans;
        
// }
// let result = addNumbers(10,440, 100, 300, 400)
// console.log(result)