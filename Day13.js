/* Day 13: Modules */

/* Activity 1: Creating and Exporting Modules */

//Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

//addModule.js
function add(a, b) {
  return a + b;
}

module.exports = add;

//main.js
const add = require("./mathModule");

const num1 = 5;
const num2 = 3;
const sum = add(num1, num2);

console.log(`The sum of ${num1} and ${num2} is ${sum}`);

//Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

//personModule.js
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}
            years old!`);
  },
};

module.exports = person;

//main.js
const person = require("./personModule");
person.greet();

/* Activity 2: Named and Default Exports */

//Task 3: Create a module that exports multiple functions using named exports. import and use these functions in another script.
//mathModule.js
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };

//main.js
const { add, subtract } = require("./mathModule");
const a = 5;
const b = 3;
const addition = add(num1, num2);
const difference = subtract(num1, num2);

//Task 4: Create a module that exports a single functions using default exports. Import and use this function in another script.
//mathModule.js
export default function add(a, b) {
  return a + b;
}

//main.js
const add = require("./mathModule");
const a = 5;
const b = 3;
const addition = add(a, b);

/* Activity 3: Importing Entire Modules */

//Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

//mathModule.js
const PI = 3.14;
const E = 2.71;
const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};
module.exports = { PI, E, add, subtract, multiply, divide };

//main.js
const { PI, E, add, subtract, multiply, divide } = require("./mathModule");
const a = 5;
const b = 3;
const addition = add(a, b);
const subtract = subtract(a, b);
console.log("PI: ",PI)
console.log("E: ",E)

/* Activity 4: Using Third-Party Modules */

//Task 6: Install a third-party module (e.g lodash) using npm. Importing and use a function from this module in a script.
//main.js
const _ = require("lodash");
const a = 5;
const b = 3;
const addition = _.add(a, b);

//Task 7: Install a third-party module (e.g axios) using npm. Import and use this module to make a network resques in a script.
//main.js
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/todos/1";
axios.get(url).then((response) => {
    console.log(response.data);
    });

/* Activity 5: Module Bundling (Optional) */

//Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Writte a script to demonstrate the bundling process.

// mathModule.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// anotherModule.js
export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        throw new Error('Division by zero is not allowed.');
    }
}

// main.js
import { add, subtract } from './mathModule.js';
import { multiply, divide } from './anotherModule.js';

const num1 = 10;
const num2 = 5;

console.log(`The sum of ${num1} and ${num2} is ${add(num1, num2)}`);
console.log(`The difference between ${num1} and ${num2} is ${subtract(num1, num2)}`);
console.log(`The product of ${num1} and ${num2} is ${multiply(num1, num2)}`);
console.log(`The quotient of ${num1} divided by ${num2} is ${divide(num1, num2)}`);

// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    mode: 'development',
};
