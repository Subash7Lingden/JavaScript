// const person = {
//     name: "Subash",
//     age: 35,
//     isTrainer: true,

//  };
// console.log(person.name);
// console.log(person.isTrainer);

// // adding objet
// person.location = "Nepal"
// console.log(person);


// Updating Object
// person.age = 23;
// console.log(person);

// Deleting object
// delete person.isTrainer;
// console.log(person);


// Nested object
// const person ={
//     name: "Subash",
//     age: 40,
//     isTrained: true,
//     address: {
//         city: "Birtamode",
//         state: "Provience 1",
//     },  
// };
// console.log(person.address.city)


// Oject Method
// const person ={
//     name: "Subash",
//     age: 40,
//     isTrained: true,
//     address: {
//         city: "Birtamode",
//         state: "Provience 1",
//     }, 
//     getName: function() {
//         // return this.address.state;
//         return this.name;
//     }, 
// };
// console.log(person.getName());

// loops in object
// const user = {
//   name: "John",
//   age: 25,
//   role: "Developer",
//   city: "London"
// };

// for (let key in user) {
// //   console.log(key, user[key]);
// };
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// Destructuring objec
// const user = {
//   name: "John",
//   age: 25,
//   role: "Developer",
//   city: "London"
// };
// const {name, age, role, city} =user;
// console.log(name, age,role, city)

// Object Spread operator {...}
// const user1 = {
//     name: "Subash",
//     age: 45,
//     isTrainer: true,
// };
// const user2 = {
//     ...user1,
//     location: "London",
// };
// console.log(user2);

//  Operation Chaining(?.) in object
// const user = {
//     name: "Subash",
//     age: 35,
//     isTrainer: true,
//     location: {
//         city: "Hatfield",
//         state: "Hatfordshire",
//     },
// };
// console.log(user.location?.city);
// console.log(user.location?.country);

// Nullish Coalescing operator
const user = {
    name: "Subash",
    age: 35,
    isTrainer: true,
    location: {
        city: "Hatfield",
        state: "Hatfordshire",
    },
};
const city = user.location.xyz ?? "Unknown city";
console.log(city);