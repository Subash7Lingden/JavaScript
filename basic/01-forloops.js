// Forloop Syntax 
// for (initialization; condition; increment/decrement) {
// code to be excuted
// }

// example 
// for (let i=0; i < 101; i++) {
//     console.log("Subash " + i);
// }

// const arr = [10, 20, 30, 40];

// for (let i = 0; i < arr.length; i++) {
//     console.log(i, arr[i])
// }

// for in loop syntax
// for (variable in object) {
// code to be executed
// }

// example
// let person = { 
//     fname: "Subash",
//     lname: "Lingden",
//     age: 35,
// };
// for (let key in person) [
//     console.log(key + ": " + person[key])
// ]


// for of loop
// syntax
// for (variable of iterable) {
//  code to be executed}
//  let fruits = ["apple", "banana", "cherry"];
//  for (let fruit of fruits) {
//     console.log(fruit);
//  }

// for of loop in string
// let chars = "hello";
// for (let char of chars) {
//     console.log(char)
// }

// Real life example
const students = [
    {name: "Subash", age: 35},
    {name: "Anisha", age: 29},
    {name: "Krista", age: 25},
];
for (let student of students) {
    console.log(student.name + " is " + student.age + " years old.");
}
