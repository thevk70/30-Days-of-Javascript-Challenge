/* Day 19: Regular Expressions */

/* Activity 1: Basic Regular Expressions */

//Task 1: Write a regular expression to match a simple pattern (e.g match all occurrences of the word "JavaScript" in a String). Log the matches.
const regex = /JavaScript/g;
const str =
  "JavaScript is a programming language. JavaScript is used for web development.";
console.log(str.match(regex)); // Output: ["JavaScript", "JavaScript"]

//Task 2: Write a regular ecpression to match all digits in a string. Log the matches.
const regex2 = /\d/g;
const str2 = "I have 2 apples and 5 oranges.";
console.log(str2.match(regex2)); // Output: ["2", "5"]

/* Activity 2: Character Classes and Quantifiers */

//Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const regex3 = /[A-Z]/g;
const str3 = "Hello World, this is a Test Any.";
console.log(str3.match(regex3)); // Output: ["H", "W", "T"]

//Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const regex4 = /\d+/g;
const str4 = "I have 2 apples , 5 oranges and 6 banana.";
console.log(str4.match(regex4)); // Output: ["2", "5", "6"]

/* Activity 3: Grouping and Capturing */

//Task 5: Write a regular expression to capture the area code,certral office code, and line number from a US phone number format (e.g (1,2,3) 456-7890). Log the captures.
const phoneNumber = "(123) 456-7890";
const pattern = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const match = phoneNumber.match(pattern);

if (match) {
  const [, areaCode, centralOfficeCode, lineNumber] = match;
  console.log(`Area Code: ${areaCode}`);
  console.log(`Central Office Code: ${centralOfficeCode}`);
  console.log(`Line Number: ${lineNumber}`);
} else {
  console.log("No match found.");
}

//Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
const email = "john.doe@example.com";
const pattern2 = /([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)/;
const match2 = email.match(pattern2);
if (match2) {
  const [, username, domain] = match2;
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
} else {
  console.log("No match found.");
}

/* Activity 4: Assertions and Boundaries */

//Task 7: Write a regular expression to match word only if it is at the beginning of a string. Log the matches.
const regex7 = /^\d+/;
const str7 = "123abc";
console.log(str7.match(regex7)); // Output: ["123"]

//Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const regex8 = /\d+$/;
const str8 = "abc123";
console.log(str8.match(regex8)); // Output: ["123"]

/* Activity 5: Practical Applications */

//Task 9: Write a regular ecpression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit and one special character). Log whether the password is valid.
const password = "P@ssw0rd";
const regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*)/;
console.log(regex9.test(password)); // Output: true

//Task 10: Write a regular expression to validate a URL. Log wheather the URl is valid.
const url = "https://www.example.com";
const regex10 = /^https?:\/\/[^\s]+$/;
console.log(regex10.test(url)); // Output: true