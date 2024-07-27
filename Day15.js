/* Day 15: Closures *?

/* Activity 1: Understanding Closures */

//Task 1: Write a function that another function, where the inner function accesses a variable from the outer function's scope. call the inner function and log the result.
const outerFunction = () => {
  let outerVariable = 10;
  function innerFunction() {
    console.log(outerVariable);
  }
  innerFunction();
};
outerFunction();

//Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
const counter = (function () {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
})();
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());

/* Activity 2: Practical Closures */

//Task 3: Write a function that generates unique IDs. use a closure to keep track of the last generated ID and increment it with each call.
const generateId = (function () {
  let id = 0;
  return function () {
    id++;
    return id;
  };
})();
console.log(generateId());
console.log(generateId());

//Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
const greetUser = (function (name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
})("John");
greetUser();

/* Activity 3: Closures in Loops */

//Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each functions logs the correct index.
const functions = [];
for (let i = 0; i < 5; i++) {
  functions.push(
    (function (index) {
      return function () {
        console.log(index);
      };
    })(i)
  );
}
functions[0]();
functions[1]();
functions[2]();

/* Activity 4: Module Pattern */

//Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add,remove and list items.
const itemManager = (function () {
  let items = [];
  return {
    addItem: function (item) {
      items.push(item);
      return items.length;
    },
    removeItem: function (index) {
      if (index >= 0 && index < items.length) {
        items.splice(index, 1);
        return items.length;
      }
      return items.length;
    },
    listItems: function () {
      return items;
    },
  };
})();
itemManager.addItem("Item 1");
itemManager.addItem("Item 2");
itemManager.removeItem(0);

/* Activity 5: Memoization */

//Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] === undefined) {
      cache[key] = func(...args);
    }
    return cache[key];
  };
}
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10)); // Output: 55
console.log(memoizedFibonacci(20)); // Output: 6765
console.log(memoizedFibonacci(30)); // Output: 832040
console.log(memoizedFibonacci(40)); // Output: 102334155

//Task 8: Create a memoized version of a function that calculates the factorial of a number.
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); 
