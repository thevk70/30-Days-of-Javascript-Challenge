/* Day 8: ES6+ Features */

/* Activity 1: Template Literals */

//Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "John";
const age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);

//Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString = `
This is a multi-line string.
It has multiple lines.
`;
console.log(multiLineString);

/* Activity 2: Destructuring */

//Task 3: Use array destructuring to exact the first and second elements from an array of numbers and log them to the console.
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first);
console.log(second);

//Task 4: Use object destructuring to exact the title and author from a book object and log them to the console.
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
};
const { title, author } = book;
console.log(title);
console.log(author);

/* Activity 3: Spread and Rest Operators */

//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const newNumbers = [...numbers, 6, 7, 8, 9, 10];
console.log(newNumbers);

//Task 6: Use the rest operator in a function to accept an arbitary number of arguments, sum them, and return the result.
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));

/* Activity 4: Default Parameters */

//Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(2));

/* Activity 5: Enhanced Object Literals */

//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const person = {
  name: "John Doe",
  age: 42,
  greet: function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " year old."
    );
  },
};
person.greet();

//Task 9: Create an object with computed property names based on variables and log the object to the console.
const person2 = {
  [`name`]: "Jane Doe",
  [`age`]: 42,
  [`greet`]: function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " year old."
    );
  },
};
person2.greet();
