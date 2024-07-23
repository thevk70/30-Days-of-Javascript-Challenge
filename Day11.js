/* Day 11: Promises and Async Await */

/* Activity 1: Understanding Promises */

//Task 1: Create a promise that resolves with a message after a 2-second timeout  and log the message to the console.
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved!"), 2000);
});
promiseOne.then((result) => console.log(result));

//Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise rejected!"), 2000);
});
promiseTwo.catch((error) => {
  console.error("Error caught:", error);
});

/* Activity 2: Chaining Promises */

//Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log message in a specific order.
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 resolved!"), 2000);
});
promiseThree
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise 2 resolved!"), 2000);
    });
  })
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise 3 resolved!"), 2000);
    });
  })
  .then((res) => {
    console.log(res);
  });
promiseThree.catch((error) => {
  console.error("Error caught:", error);
});
promiseThree.finally(() => {
  console.log("Promise 1, 2, and 3 resolved!");
});

/* Activity 4: Fetching Data from an API */

//Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const promiseFour = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      response.json();
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});
promiseFour
  .then((data) => console.log("data:",data))
  .catch((error) => console.log(error));

//Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await
const promiseFive = new Promise(async (resolve, reject) => {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        response.json();
      })
      .then((data) => resolve(data));
  } catch (error) {
    console.log(error);
  }
});

promiseFive.then((data) => console.log("data:",data));

/* Activity 5: Concurrent Promises */

//Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (response) => response.json());

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json());

const fetchComments = fetch(
  "https://jsonplaceholder.typicode.com/comments"
).then((response) => response.json());


Promise.all([fetchPosts, fetchUsers, fetchComments])
  .then((values) => {
    console.log("Posts:", values[0]);
    console.log("Users:", values[1]);
    console.log("Comments:", values[2]);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([fetchPosts, fetchUsers, fetchComments])
  .then(value => {
    console.log('First resolved promise value:', value);
  })
  .catch(error => {
    console.error('Error:', error);
  });