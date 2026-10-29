// whiel loop
// syntax
// initialization
// while (condition {
//  code block to ve executed
//  increment/decrement}

// example
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }


// do while loop
// syntax
// do {
//     code block to be executed
// } while (condition);

// example
// let i = 0;
// do {
//     console.log(i);
//     i++;
// }while (i <5) 

// real life example
let password = "";
let correctpassword = "Subash";
do {
    password = prompt("Enter your password");
}while (password!==correctpassword);
console.log("Access granted");