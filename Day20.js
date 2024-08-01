/* Day 20: LocalStorage and SessionStorage */

/* Activity 1: Understanding LocalStorage */

//Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
localStorage.setItem("name", "John Doe");
console.log(localStorage.getItem("name")); // Output: John Doe

//Task 2: Write a script to save an object to localStorage by converting to a JSON string. Retrieve and parse object. then log it.
const person = { name: "John Doe", age: 30 };
localStorage.setItem("person", JSON.stringify(person));
const retrievedPerson = JSON.parse(localStorage.getItem("person"));
console.log(retrievedPerson); // Output: { name: 'John Doe', age: 30 }

/* Activity 2: Using LocalStorage */

//Task 3: Create a simple form that save user input (e.g name and email) to localStorage when submitted.Retrieve and display the saved data on page load.
const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  localStorage.setItem("name_", name);
  localStorage.setItem("email", email);
});
console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("name_"));

//Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
localStorage.removeItem("name_");
console.log(localStorage.getItem("name_")); // Output: null

/* Activity 3: Understanding SessionStorage */

//Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem("name", "John Doe");
console.log(sessionStorage.getItem("name")); // Output: John Doe

//Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
sessionStorage.setItem("person", JSON.stringify(person));
retrievedPerson = JSON.parse(sessionStorage.getItem("person"));
console.log(retrievedPerson); // Output: { name: 'John Doe', age: 30 }

/* Activity 5: Comparing LocalStorage and SessionStorage */

//Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
  console.log(localStorage.getItem(`${key}`));
  console.log(sessionStorage.getItem(`${key}`));
}
saveToStorage("test", "Hello World");

//Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearStorages() {
  localStorage.clear();
  sessionStorage.clear();
  const localStorageKeys = Object.keys(localStorage);
  const sessionStorageKeys = Object.keys(sessionStorage);
  
  if (localStorageKeys.length === 0) {
    console.log("localStorage is empty.");
  } else {
    console.log("localStorage is not empty:", localStorageKeys);
  }

  if (sessionStorageKeys.length === 0) {
    console.log("sessionStorage is empty.");
  } else {
    console.log("sessionStorage is not empty:", sessionStorageKeys);
  }
}

clearStorages();
