// 1. Given an array of objects representing people, write an ES6 function to return a new array
// containing only the names of the people
const people = [
  { name: "Raj", age: 28 },
  { name: "Swapnil", age: 42 },
  { name: "Anushka", age: 35 },
];

const names = people.map((names) => names.name);
console.log(names);
// 2. Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.

const numbers = [1, 2, 3, 4];

const double = numbers.map((num) => num * 5);
console.log(double);

// 3. Given employee’s data, write an ES6 function which greets them with a personalized message
// for onboarding.

const employeeData = [
  { name: "ram", dept: "marketer" },
  { name: "Radha", dept: "SDE" },
  { name: "shyam", dept: "finance professional" },
];
const greetEmployeeMessage = employeeData.map(
  (item) => `Hii ${item.name} we are glad to have you as a ${item.dept}`
);
console.log(greetEmployeeMessage);

// 4. Write an ES6 function that takes an array of objects representing books and returns an array
// with only the titles of each book
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];

const getTitleBooks = books.map((getBook) => getBook.title);
console.log(getTitleBooks);

// 5. Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

const studentName = [
  "Ram",
  "Anjali",
  "Arpit",
  "Bhanu Kumar",
  "Jaya",
  "Ankit",
  "shayam",
];
const filteredStudent = studentName.filter((name) => name[0].includes("A"));
console.log(filteredStudent);

// 6. Write an ES6 function which filters out the products which have a price greater than 40.
const productData = [
  { prodName: "Dairy Milk", price: 10 },
  { prodName: "Dairy Milk Silk", price: 70 },
  { prodName: "Five Star", price: 20 },
  { prodName: "Mars", price: 50 },
];

const filterProduct = productData.filter((product) => product.price > 40);
// console.log(filterProduct);

// 7. Write an ES6 function that takes an array of numbers and returns the first number that is
// divisible by 7

const number = [1, 2, 3, 21, 14, 7];

const divisibleBy7 = number.map((nums) => nums * 7);
// console.log(divisibleBy7);

// 8. Write an ES6 function that takes an array of strings and returns the first string that is longer than
// 8 characters.
const name = [
  "Mohan",
  "Anjali",
  "Geetanjali",
  "Ankit",
  "Bhanu Kumar",
  "Ramakrishnan",
];

const filteredGreaterThan8 = name.filter((people) => people.length > 8);
// console.log(filteredGreaterThan8);

// 9. Write an ES6 function that takes an array of objects representing students with properties name
// and grade. Return the first student object that has a grade of "A".

const students = [
  { name: "John", grade: "B" },
  { name: "Mary", grade: "A" },
  { name: "Sam", grade: "C" },
  { name: "Sarah", grade: "A" },
];

const filteredstudentss = students.filter(
  (studentss) => studentss.grade === "A"
);
console.log(filteredstudentss);
