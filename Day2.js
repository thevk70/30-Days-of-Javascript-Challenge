//Day 2: Operators

/* Activity 1: Arthemetic Operations */

//Task 1: Write a program to add two numbers and log the result to the console.
let a = 5,b=6;
const sum = 5 + 6;
console.log("Sum = ",sum);

//Task 2: Write a program to substract two numbers and log the result to the console.
const sub = b - a;
console.log("Subtract = ",sub);

//Task 3: Write a program to multiply two number and log the result to the console.
const mul = a * b;
console.log("Multiply = ",mul);

//Task 4: Write a program to divide two numbers and log the result to the console.
const div = a / b;
console.log("Divide = ",div);

//Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
const rem = a % b;
console.log("Remainder = ",rem);

/* Activity 2: Assignment Operators */

//Task 6: Use the += operator to add a number to a variable and log the result to the console.
let c = 5;
c += 6;
console.log("c += : ",c);

//Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
c -= 6;
console.log("c -= : ",c);

/* Activity 3: Comparison Operators */
//Task 8: Write a program to compare two number using > and < and log the result to the console.
console.log("5 < 6 : ",5 < 6);
console.log("5 > 6 : ",5 > 6);

//Task 9: Write a program to compare two number using >= and <= and log the result to the console.
console.log("5 >= 6 : ",5 >= 6);
console.log("5 <= 6 : ",5 <= 6);

//Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log("5 == 6 : ",5 == 6);
console.log("5 === 6 : ",5 === 6);

/* Activity 4: Logical Operators */

//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
console.log("5 < 6 && 5 > 6 : ",5 < 6 && 5 > 6);
console.log("5 < 6 && 5 < 6 : ",5 < 6 && 5 < 6);

//Task 12: Write a program that uses the || operator to combine  two conditions and log the result to the console.
console.log("5 < 6 || 5 > 6 : ",5 < 6 || 5 > 6);

//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
console.log("!(5 < 6) : ",!(5 < 6));

/* Activity 5: Ternary Operator */

//Task 14: Write a program that uses the ternery operator to check if a number is positive or negative and log the result to the console.
const num = 5;
console.log("num > 0 ? 'positive' : 'negative' : ");
console.log("Output = ",num > 0 ? 'positive' : 'negative');

/* Feature Request */

//1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition,subtraction,multiplication,division,remainder) on two numbers and logs the results.
let x = 10;
let y = 5;
console.log("x + y = ",x + y);
console.log("x - y = ",x - y);
console.log("x * y = ",x * y);
console.log("x / y = ",x / y);
console.log("x % y = ",x % y);

//2. Comparison and Logical Operators Script: Create a script that compares two numbers using difference comparison operators and combines conditions using logical operators, logging the results.
console.log("5 < 6 : ",5 < 6);
console.log("5 > 6 : ",5 > 6);
console.log("5 >= 6 : ",5 >= 6);
console.log("5 <= 6 : ",5 <= 6);
console.log("5 == 6 : ",5 == 6);
console.log("5 === 6 : ",5 === 6);

//3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
const n = 5;
console.log("n > 0 ? 'positive' : 'negative' : ");
console.log("Output = ",n > 0 ? 'positive' : 'negative');