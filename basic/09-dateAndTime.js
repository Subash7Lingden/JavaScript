// Creating date
// const today = new Date();
// console.log(today);
// const birthday = new Date("1988-03-04");
// console.log(birthday);

//  getting date and time parts
// const dateNow = new Date();
// console.log(dateNow);
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth() +1); // as only month start from zero index other start from index-1 so to correct it we add 1
// console.log(dateNow.getDate());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());
// console.log(dateNow.getMilliseconds());

// Set and Modify date
// let date = new Date();
// date.setFullYear(2023);
// date.setMonth(11);
// date.setDate(25);
// date.setHours(10);
// date.setMinutes(30);
// date.setSeconds(0);
// date.setMilliseconds(0);
// console.log(date);

// Format date into String
// let today = new Date();
// console.log(today.toDateString());
// console.log(today.toLocaleDateString());
// console.log(today.toTimeString());

// Number of Days
const startDate = new Date("2026-04-01");
const endDate = new Date("2026-04-16");
const timeDiff = endDate.getTime() - startDate.getTime();
const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
console.log(`Number of days between ${startDate.toDateString()} and ${endDate.toDateString()} is ${daysDiff}`)