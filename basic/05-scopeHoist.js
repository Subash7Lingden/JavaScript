// scope code ko kun part bata variable ko excess garna milxa ki nai
// 1. Global scope
// let name = "Mohit"; //this variable
// function greet() {
//     console.log("hello " + name);
// }
// console.log("Hello " + name);
// greet();

// 2. Local/Function Scope you can only excess inside the function
// function greet(){
//     let name = "Anisha"; //varibale
//     console.log("Hello " + name);
// }
// // console.log("Hello " + name);

// greet()

// 3. Block scope {} - it is not applicable variable var
// {
//     let a = 20;
//     const b = 30;
//      console.log(a+b)
// }
// console.log(a+b)

// B. Hoisting
// var
// var a = 10;
// console.log(a);

// var a;
// console.log(a);
// a =10;

// with let and const variables 
//  hoistin happens in both let and cons variable but it goes to temperal dead zone 
// let a;
// console.log(a);
// a =10;

// 1. Hoisting in normal function
// greet();
// function greet() {
//     console.log("hello");
// }
// greet();

// 2. Hoisting in arrow function
// greet();
// const greet = () => {
//     console.log("Hello");
// };
// greet();

// 3. Hoisting in function expression
//  NO hoisting

greet();
const greet = function() {
    console.log("Hello");
};
greet();