/* Activity 1: Variable Declaration */

 //Task 1: Declare a variable using var, assign it a number, and log the value to the console.
 var num = 5;
 console.log("num = ",num);
 //Task 2: Declare a variable using let, assign it a string, and log the value to the console.
 let instructorName = "Hitesh Chourdhary";
 console.log("Instructor Name: ",instructorName);

/* Activity 2: Constant Declaration */

 //Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
 const flag = true;
 console.log("flag = ",flag);

 /* Activity 3: Data Types */
  
  //Task 4: Create variables of different data types (number,string,boolean,object,array) and log each variables's type using typeof operator.
  let num1 = 6;
  console.log(typeof num);
  let str = "ABC";
  console.log(typeof str);
  let bool = false;
  console.log(typeof bool);
  let obj = {
    name: "Hitesh",
    age: 30
  };
  console.log(typeof obj);
  let ar = [1,2,3,4,5];
  console.log(typeof ar);

/* Activity 4: Reassigning Variables */
 
 //Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
 let num2 = 5;
 console.log("num2 = ",num2);
 num2 = 10;
 console.log("num2 = ",num2);

/* Activity 5: Understanding const */

 //Task 6: Try reassigning a variable declared with const and observe the error.
  const c = 5;
//   c = 10; //This is not possible we can't assign new value to const data type.

/* Feature Request */

//1.Variable Types Console log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
// Number
let numberVar = 42;
console.log('Value:', numberVar, '| Type:', typeof numberVar);

// String
let stringVar = "Hello, world!";
console.log('Value:', stringVar, '| Type:', typeof stringVar);

// Boolean
let booleanVar = true;
console.log('Value:', booleanVar, '| Type:', typeof booleanVar);

// Object
let objectVar = { name: "Hitesh", age: 30 };
console.log('Value:', objectVar, '| Type:', typeof objectVar);

// Array
let arrayVar = [1, 2, 3, 4, 5];
console.log('Value:', arrayVar, '| Type:', typeof arrayVar);

// Null
let nullVar = null;
console.log('Value:', nullVar, '| Type:', typeof nullVar);

// Undefined
let undefinedVar;
console.log('Value:', undefinedVar, '| Type:', typeof undefinedVar);

// Function
let functionVar = function() { return "I am a function"; };
console.log('Value:', functionVar, '| Type:', typeof functionVar);

// Symbol
let symbolVar = Symbol('symbol');
console.log('Value:', symbolVar, '| Type:', typeof symbolVar);

// BigInt
let bigIntVar = 9007199254740991n;
console.log('Value:', bigIntVar, '| Type:', typeof bigIntVar);

//2.Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
// Using let
let variableLet = "Initial value";
console.log('Value of variableLet:', variableLet);

// Reassigning the let variable
variableLet = "New value";
console.log('Reassigned value of variableLet:', variableLet);

// Using const
const variableConst = "Initial value";
console.log('Value of variableConst:', variableConst);

// Attempting to reassign the const variable
try {
    variableConst = "New value";
} catch (e) {
    console.log('Error when reassigning variableConst:', e.message);
}
