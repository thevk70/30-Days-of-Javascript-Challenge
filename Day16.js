/* Day 16: Recursion */

/* Activity  1: Basic Recursion */

//Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log("Factorial of 5 is ", factorial(5));
console.log("Factorial of 1 is ", factorial(1));
console.log("Factorial of 4 is ", factorial(4));

//Task 2: Write a recursive function to calculate the nth Fibonacci numbber. Log the result for a few test cases.
function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log("Fibonacci of 5 is ", fibonacci(5));
console.log("Fibonacci of 1 is ", fibonacci(1));
console.log("Fibonacci of 4 is ", fibonacci(4));

/* Activity 2: Recursion with Arrays */

//Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
}
console.log("Sum of array [1, 2, 3, 4, 5] = ", sumArray([1, 2, 3, 4, 5]));
console.log("Sum of array [10, 20, 30, 40,] = ", sumArray([10, 20, 30, 40]));

//Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let max = Math.max(arr[0], maxArray(arr.slice(1)));
    return max;
  }
}
console.log("Max of array [1, 2, 3, 4, 5] = ", maxArray([1, 2, 3, 4, 5]));
console.log("Max of array [10, 20, 30, 40,] = ", maxArray([10, 20, 30, 40]));

/* Activity 3: String Manipulation with Recursion */

//Task 5: Write a recursion function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
  if (str.length === 0) {
    return "";
  } else {
    return reverseString(str.slice(1)) + str[0];
  }
}
console.log("Reverse of string 'Hello World' = ", reverseString("Hello World"));

//Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    return isPalindrome(str.slice(1, -1));
  }
}
console.log("Is 'radar' a palindrome? ", isPalindrome("radar"));
console.log("Is 'hello' a palindrome? ", isPalindrome("hello"));

/* Activity 4: Recursive Search */

//Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // Target not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Target found
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right); // Search in the right half
  } else {
    return binarySearch(arr, target, left, mid - 1); // Search in the left half
  }
}
console.log(
  "Index of 3 in array [1, 2, 3, 4, 5] = ",
  binarySearch([1, 2, 3, 4, 5], 3)
);
console.log(
  "Index of 10 in array [1, 2, 3,10,11] = ",
  binarySearch([1, 2, 3, 10, 11], 10)
);

//Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target, index = 0) {
  // Base case: if the index is out of bounds, return 0
  if (index >= arr.length) {
    return 0;
  }

  // Check if the current element is equal to the target
  const count = arr[index] === target ? 1 : 0;

  // Recur for the next element and add the current count
  return count + countOccurrences(arr, target, index + 1);
}
console.log(
  "Count of 3 in array [1, 2, 3, 4,5] = ",
  countOccurrences([1, 2, 3, 4, 5], 3)
);
console.log(
  "Count of 10 in array [10, 2, 3,10,10] = ",
  countOccurrences([10, 2, 3, 10, 10], 10)
);

/* Activity 5: Tree Traversal (Optional) */

//Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function inOrderTraversal(node) {
  if (node === null) {
    return;
  }
  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}
// Create a binary tree for testing
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
inOrderTraversal(root);

//Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
// Definition for a binary tree node
class TreeNode {
  constructor(value = 0, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
  }
}

// Function to calculate the depth of a binary tree
function maxDepth(root) {
  if (root === null) {
      return 0;
  }
  
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  
  return Math.max(leftDepth, rightDepth) + 1;
}

// Test cases

// Test case 1: Empty tree
const tree1 = null;
console.log(maxDepth(tree1));  // Output: 0

// Test case 2: Tree with one node
const tree2 = new TreeNode(1);
console.log(maxDepth(tree2));  // Output: 1

// Test case 3: Tree with multiple levels
const tree3 = new TreeNode(1);
tree3.left = new TreeNode(2);
tree3.right = new TreeNode(3);
tree3.left.left = new TreeNode(4);
tree3.left.right = new TreeNode(5);
tree3.right.right = new TreeNode(6);
tree3.left.left.left = new TreeNode(7);

console.log(maxDepth(tree3));  // Output: 4
