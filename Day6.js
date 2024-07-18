/* Day 6: Arrays */

/* Activity 1: Array Creation and Access */

//Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let ar = [1,2,3,4,5];
console.log(ar);

//Task 2: Access the first and last elements of the array and log them to the console.
console.log(ar[0]);
console.log(ar[ar.length-1]);

/* Activity 2: Array Methods (Basic) */

//Task 3: Use push method to add a new number to the end of the array and log the updated array.
ar.push(6);
console.log(ar);

//Task 4: Use the pop method to remove the last element from the array and log the updated array.
ar.pop();
console.log(ar);

//Task 5: Use the  shift method to remove the first element from the array and log the updated array.
ar.shift();
console.log(ar);

//Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
ar.unshift(1);
console.log(ar);

/* Activity 3: Array Methods (Intermediate) */

//Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let ar1;
ar1 = ar.map(e => e*2);
console.log(ar1);

//Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let ar2 = ar.filter(e => e%2===0);
console.log(ar2);

//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let ar3 = ar.reduce((a,b) => a+b);
console.log(ar3);

/* Activity 4: Array Iteration */

//Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}

//Task 11: Use the forEach method to iterate over the array and log each element to the console.
ar.forEach(e => console.log(e));

/* Activity 5: Multi-dimensional Arrays */

//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let ar4 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(ar4);

//Task 13: Access and log a specific element from the two-dimensional array.
console.log(ar4[2][2]);