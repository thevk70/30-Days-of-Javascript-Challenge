/* Day 12:Error Handling */

/* Activity 1: Basic Error Handling with Try-Catch */

//Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError() {
  throw new Error("Error Occured");
}
try {
  throwError();
} catch (error) {
  console.log(error.message);
}

//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try catch block to handle this error.
function divide(a, b) {
  if (b === 0) {
    throw new Error("Error Occured");
  }
  return a / b;
}
try {
  divide(10, 0);
} catch (error) {
  console.log(error.message);
}

/* Activity 2: Finally Block */

//Task3: Write a script that includes a try-catch block and a finally block. Log messages in the try,catch,and finally blocks to observe the execution flow.
try {
  throwError();
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Finally Block");
}

/* Activity 3: Custom Error Objects */

//Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a catch block.
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwErrorFunction() {
  throw new CustomError("This is a custom error message");
}

try {
  throwErrorFunction();
} catch (error) {
  if (error instanceof CustomError) {
    console.error("Caught a custom error:", error.message);
  } else {
    console.error("Caught an unknown error:", error);
  }
}

//Task 5: Write a function that validates user input (e.g Checking if a string is not empty) and throws a custom error if the, validation fails. Handle the custom error using a try-catch block.
function validateInput(input) {
  if (input === "") {
    throw new CustomError("Input cannot be empty");
  }
  return input;
}
try {
  validateInput("");
} catch (error) {
  console.log(error.message);
}

/* Activity 4: Error Handling in Promises */

//Task 6: Create a promise that randomly resolves or rejects, Use .catch() to handle the rejection and log an appropriate message to the console.
const promise = new Promise((resolve, reject) => {
  const random = Math.random() * 10;
  if (6 < 5) {
    resolve("Promise resolved");
  } else {
    reject("Promise rejected");
  }
});
promise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects. and log the error message.
async function asyncFunction() {
  try {
    const promise = new Promise((resolve, reject) => {
      const random = Math.random() * 10;
      if (random < 5) {
        resolve("Promise resolved");
      } else {
        reject("Promise rejected");
      }
      //   console.log("rand: ",random);
    });
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
asyncFunction();

/* Activity 5: Graceful Error Handling in Fetch */

//Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch("https://www.google.com/invalid")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

//Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function asyncFunction() {
  try {
    const response = await fetch("https://www.google.com/invalid");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
asyncFunction();
