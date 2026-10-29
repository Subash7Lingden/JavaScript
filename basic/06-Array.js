// 1. Array iteration with ForEach() loop
// let fruits = ['apple', 'banana', 'cherry']
// fruits.forEach((item, index) => {
//     console.log(`Item: ${item}, Index: ${index}`);
// }
// );

// 2. Tranforming Arrays with map()
// let numbers = [1, 2, 3, 4, 5]
// let double = numbers.map((num) => num *2);
// console.log(double)

// const users = ["Alice", "Bob", "Charlie"];

// users.forEach((user) => {
//   console.log(`Hello, ${user}!`);
// });

// const prices = [10, 20, 30];

// const pricesWithTax = prices.map((price) => price * 1.2);

// console.log(pricesWithTax); // [12, 24, 36]

// 3. filter syntax
// const result = array.filter((element) => {
//   return condition;
// });

// const numbers = [1, 2, 3, 4, 5, 6];

// const result = numbers.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(result);


// 1. What does find() do?
// find() searches through an array and returns the first element that matches a condition.

// Think of it this way:

// forEach() → performs an action for every element.

// map() → transforms every element.

// filter() → returns all elements that match a condition.

// find() → returns only the first element that matches a condition.

// 2. Syntax of find()

// const result = array.find((element) => {
//   return condition;
// });

// const numbers = [10, 20, 30, 40, 50];

// const result = numbers.find((num) => {
//   return num > 25;
// });

// console.log(result);

// Practical example: Finding a user
// Imagine you have a list of users:

// 

// indexOf
// syntax array.indexOf(searchElement); 

// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// const result = fruits.indexOf("Mango");

// console.log(result);

// sorting
const numbers = [40, 10, 30, 20, 50];

numbers.sort((a, b) => {
  return a - b;
});

console.log(numbers);