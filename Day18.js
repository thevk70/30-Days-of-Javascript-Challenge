/* Day 18: Algorithms */

/* Activity 1: Sorting Algorithms */

//Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Test the function
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(numbers));

//Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

// Test the function
const numbers2 = [64, 34, 25, 12, 22, 11, 90, 50, 15, 19];
console.log(selectionSort(numbers2));

//Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = arr.slice(1).filter((x) => x <= pivot);
  let right = arr.slice(1).filter((x) => x > pivot);
  return quickSort(left).concat([pivot], quickSort(right));
}
// Test the function
const numbers3 = [64, 34, 25, 12, 22, 11, 90, 50, 15, 19];
console.log(quickSort(numbers3));

/* Activity 2: Searching Algorithms */

//Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
// Test the function
const numbers4 = [64, 34, 25, 12, 22, 11, 90, 50, 15, 19];
console.log(linearSearch(numbers4, 22));

//Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
// Test the function
const numbers5 = [64, 34, 25, 12, 22, 11, 90, 50, 15, 19];
console.log(binarySearch(numbers5, 22));

/* Activity 3: String Algorithms */

//Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function charCount(str) {
  let charMap = {};
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  return charMap;
}
// Test the function
const str6 = "Hello, World!";
console.log(charCount(str6));

//Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function longestSubstring(str) {
  let charMap = {};
  let start = 0;
  let maxLength = 0;
  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    if (charMap[char]) {
      start = Math.max(start, charMap[char] + 1);
    }
    charMap[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}
// Test the function
const str7 = "abcabcbb";
console.log(longestSubstring(str7));

/* Activity 4: Array Algorithms */

//Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}
// Test the function
const arr8 = [1, 2, 3, 4, 5];
console.log(rotateArray(arr8, 2));

//Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
// Test the function
const arr9 = [1, 3, 5];
const arr10 = [2, 4, 6];
console.log(mergeArrays(arr9, arr10));

/* Activity 5: Dynamic Programming (Optional) */

//Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
// Test the function
const n10 = 10;
console.log(fibonacci(n10));

//Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
function knapsack(weights, values, capacity) {
  let n = weights.length;
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][capacity];
}
// Test the function
const weights11 = [2, 3, 4, 5];
const values11 = [10, 20, 30, 40];
const capacity11 = 10;
console.log(knapsack(weights11, values11, capacity11));
