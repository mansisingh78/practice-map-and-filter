// 1. Write an ES6 function that takes an array of numbers and returns an array with each number
// incremented by 3 using the map method.

const nums = [1, 2, 3, 4, 5];
const IncrementNumbers = nums.map((nums) => nums + 3);
// console.log(IncrementNumbers);

// 2. Write an ES6 function that takes an array of strings and returns an array with all the strings
// capitalised using the map method.
const myArray = ["apple", "banana", "cherry"];
const capitalizeArray = myArray.map((item) => item.toUpperCase());
// console.log(capitalizeArray);

// 3. Write an ES6 function that takes an array of objects representing people and returns an array of
// their ages using the map method.

const people = [
  { name: "Ankit", age: 25 },
  { name: "Vinit", age: 24 },
  { name: "Shashi", age: 29 },
];

const ages = people.map((name) => name.age);
// console.log(ages);

// 4. Write an ES6 function that takes an array of objects representing products and returns an array
// with the product names in all lower case letters using the map method.
const products = [
  { name: "Lip Balm", stock: 100 },
  { name: "PERFUME", stock: 400 },
  { name: "Socks", stock: 200 },
];

const getProductNameInLower = products.map((name) => name.name.toLowerCase());
// console.log(getProductNameInLower);

// 5. Write an ES6 function that takes an array of objects representing cities and returns an array of
// their names using the map method.

const cities = [
  { name: "New York", population: 8538000 },
  { name: "Los Angeles", population: 3976000 },
  { name: "Bangalore", population: 13608000 },
];

const getCityNames = cities.map((name) => name.name);
// console.log(getCityNames);

// 6. Write an ES6 function that takes an array of strings and returns an array with only the strings
// that have a length greater than 5.

const fruits = ["apple", "banana", "cherry", "watermelon", "pineapple"];

const filterName = fruits.filter((item) => item.length > 5);
// console.log(filterName);

// 7. Write an ES6 function that takes an array of numbers and returns an array with only the
// numbers that are divisible by 3 and also by 5.

const numbers = [1, 2, 30, 4, 15];

const divisibleBy3and5 = numbers.filter(
  (nums) => nums % 3 === 0 && nums % 5 === 0
);
// console.log(divisibleBy3and5);

// 8. Write an ES6 function that takes an array of objects with the properties name and age, and
// returns an array with only the objects that have an age greater than 30

const peoples = [
  { name: "Rahul", age: 25 },
  { name: "Raj", age: 35 },
  { name: "Vijay", age: 45 },
];

const filterPeoples = peoples.filter((people) => people.age > 30);
console.log(filterPeoples);
