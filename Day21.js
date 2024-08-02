/* Day 21: LeetCode Easy */

/* Activity 1: Two Sum */

//Task 1: Solve the "Two Sum" Problem on LeetCode
//Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
//Log the indices for a few test cases.
function twoSum(nums, target) {
  let numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return [-1, -1];
}
console.log(twoSum([1, 2, 3, 4], 4));

/* Activity 2: Reverse Integer */

//Task 2: Solve the "Reverse Integer" problem on LeetCode.
//Write a function that takes an integer and returns it with its digits reversed.
//Handle edge cases like negative numbers and numbers ending in zero.
//Log the reversed integers for a few test cases.
function reverseInteger(x) {
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  let reversed = 0;
  while (x > 0) {
    let digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }
  return sign * reversed;
}
console.log(reverseInteger(123));
console.log(reverseInteger(-456));

/* Activity 3: Palindrome Number */

//Task 3: Solve the "Palindrome Number" problem on LeetCode.
//Write a function that takes an integer and return true if it is a palindrome, and false otherwise.
//Log the result for a few test cases, including edge cases like negative numbers.
function isPalindrome(x) {
  if (x < 0) return false;
  let reversed = 0;
  let original = x;
  while (x > 0) {
    let digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }
  return original === reversed;
}
console.log(isPalindrome(121));
console.log(isPalindrome(123));

/* Activity 4: Merge Two Sorted Lists */

//Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
//Write a function that takes two sorted linked lists and return a new sorted list by merging them.
//create a few test cases with linked lists and log the merged lists.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
          current.next = l1;
          l1 = l1.next;
      } else {
          current.next = l2;
          l2 = l2.next;
      }
      current = current.next;
  }

  if (l1 !== null) current.next = l1;
  if (l2 !== null) current.next = l2;

  return dummy.next;
}

function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
      current.next = new ListNode(val);
      current = current.next;
  }
  return dummy.next;
}

function printLinkedList(list) {
  let result = [];
  while (list !== null) {
      result.push(list.val);
      list = list.next;
  }
  console.log(result.join(" -> "));
}

let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);
let mergedList = mergeTwoLists(list1, list2);
printLinkedList(mergedList);

list1 = createLinkedList([1, 3, 5]);
list2 = createLinkedList([2, 4, 6]);
mergedList = mergeTwoLists(list1, list2);
printLinkedList(mergedList);

list1 = createLinkedList([]);
list2 = createLinkedList([0]);
mergedList = mergeTwoLists(list1, list2);
printLinkedList(mergedList);

/* Activity 5: Valid Parentheses */

// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters'(',')','{','}','[',']', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.
// Log the result for a few test cases.
function isValid(s) {
  let stack = [];
  const bracketMap = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  for (let char of s) {
      if (bracketMap[char]) {
          let topElement = stack.length === 0 ? '#' : stack.pop();
          if (topElement !== bracketMap[char]) {
              return false;
          }
      } else {
          stack.push(char);
      }
  }

  return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
