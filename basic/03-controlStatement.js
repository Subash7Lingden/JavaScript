// if-else or else if statement
// if-else statement
//

// let mark = 40;
// if (mark >= 80) {
//     console.log("Your have passed with distinction");
// }
// else if (mark >= 60) {
//     console.log("You have passed");
// }
// else if (mark >= 40){
//     console.log("You are pormoted");
// } else {
//     console.log("You have failed");

// }

// switch statement
// let day = 9;
// switch(day) {
// case 1: console.log ("Monday");
// break;
// case 2: console.log ("Tuesday");
// break;
// case 3: console.log("Wednesday");
// break;
// case 4: console.log("Thursday");
// break;
// case 5: console.log("Friday");
// break;
// case 6: console.log("Saturday");
// break;
// case 7: console.log("Sunday");
// break;
// default: console.log("Invalid day");
// }

// Ternary operator came in es6
// syntax condition ? expression1 : expression2

// Example
// let age = 18;
// let result = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
// console.log(result);

// real life example
// let isLogin = false;
// let message = isLogin ? "Welcome back!" : "Please login"
// console.log(message)

// if(isLogin) {
//     console.log("Welcome back!");
// } else {
//     console.log("Please login");
// }

// **  MULTIPLE TERNARY OPERATOR
let age = 20;
let result =
  age < 18
    ? "You are a mionr"
    : age < 60
      ? "Your are an adult"
      : "You are senior citizen";
console.log(result);
