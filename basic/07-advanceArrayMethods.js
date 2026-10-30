// 1. Reduce () - Reducing Arrays to a single value.
// 1. Basic array destructuring Without destructuring:
// const fruits = ["Apple", "Banana", "Mango"];

// const first = fruits[0];
// const second = fruits[1];
// const third = fruits[2];

// console.log(first);  // Apple
// console.log(second); // Banana
// console.log(third);  // Mango

// Using array destructuring
// const fruits = ["Apple", "Banana", "Mango"];

// const [first, second, third] = fruits;

// console.log(first);
// console.log(second);
// console.log(third);


// Destructuring in functions
// You can use destructuring directly in function parameters.
// f

// Getting data from an API
// Imagine an API returns a list of users.
// Real-world use: Getting the first few results from an API response.
const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Sarah", age: 28 },
  { id: 3, name: "Mike", age: 30 }
];

const [firstUser, secondUser] = users;

console.log(firstUser.name);  // John
console.log(secondUser.name); // Sarah
// Practical example: E-commerce application
// Imagine you are building an online shopping application.

// const order = {
//   customer: "John",
//   items: [
//     ["Laptop", 1000],
//     ["Mouse", 25],
//     ["Keyboard", 50]
//   ]
// };

// const {
//   customer,
//   items: [firstItem, secondItem, thirdItem]
// } = order;

// const [product1, price1] = firstItem;
// const [product2, price2] = secondItem;
// const [product3, price3] = thirdItem;

// console.log(customer);
// console.log(product1, price1);
// console.log(product2, price2);
// console.log(product3, price3);


// 2. Splice() Method
// Real-world example: Removing a product from a shopping cart
// Imagine a user wants to remove a product from their cart.
// 

// Real-world example: Adding a task to a to-do list
// Suppose you want to insert a high-priority task at the beginning of a task list.
const tasks =[
  "Complete assignmetn",
  "Read documentation",
  "Attend meeting",
];
tasks.splice(0,0, "Fix production bug");

console.log(tasks);