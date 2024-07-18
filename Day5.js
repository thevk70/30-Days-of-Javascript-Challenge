/* Day 5: Functions */

/* Activity 1: Function Declaratoin */

//Task 1: Write a function to check if a number is even or odd and log the result to the console.
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}
isEvenOrOdd(5);

//Task 2: Write a function to calculate the square of a number and return the result.
function square(number) {
  return number * number;
}
console.log(square(5));

/* Activity 2: Function Expression */

//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const max = function (a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
};
max(5, 10);

//Task 4: Write a function expression to concatenate two strings and return the result.
const concat = function (a, b) {
  return a + b;
};
console.log(concat("Hello ", "World!"));

/* Activity 3: Arrow Function */

//Task 5: Write an arrow function to calculate the sum of two number and return the result.
const sum = (a, b) => a + b;
console.log(sum(5, 10));

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const contains = (str, char) => str.includes(char);
console.log(contains("Hello World!", "o"));

/* Activity 4: Function Parameters and Default Values */

//Task 7: Write a funtions that takes two parameters and returns their product.Provide a default value for the second parameter.
const product = (a, b = 1) => a * b;
console.log(product(5, 10));

//Task 8: Write a functions that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greeting = (name, age = 18) =>
  `Hello ${name}, you are ${age > 18 ? "an adult" : "a child"}`;
console.log(greeting("John"));

/* Activity 5: Higher-order Functions */

//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const repeat = (func, n) => {
  for (let i = 0; i < n; i++) {
    func();
  }
};
repeat(() => console.log("Hello"), 5);

//Task 10: Write a higher order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const compose = (func1, func2, value) => func1(func2(value));
compose(() => console.log("I'm func1"), () => console.log("I'm func2"),5);