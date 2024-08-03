/* Day 22: LeetCode Medium */

/* Activity 1: Add Two Numbers */

// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative intergers. The digits are stored in reverse order, each node contains a single digit. Add the two numbers and return the sum as a linked list.
// Create a few test cases with linked lists and log the sum as a linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode();
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = x + y + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  return dummyHead.next;
}

function createLinkedList(arr) {
  let dummyHead = new ListNode();
  let current = dummyHead;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummyHead.next;
}

function printLinkedList(list) {
  let result = [];
  while (list !== null) {
    result.push(list.val);
    list = list.next;
  }
  console.log(result.join(" -> "));
}

let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let sumList = addTwoNumbers(l1, l2);
printLinkedList(sumList);

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
sumList = addTwoNumbers(l1, l2);
printLinkedList(sumList);

l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
sumList = addTwoNumbers(l1, l2);
printLinkedList(sumList);

/* Activity 2: Longest Substring Without Repeating Characters */

// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases.

function lengthOfLongestSubstring(s) {
  let charIndexMap = new Map();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    let char = s[end];
    if (charIndexMap.has(char)) {
      start = Math.max(charIndexMap.get(char) + 1, start);
    }
    charIndexMap.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("dvdf"));

/* Activity 3: Container With Most Water */

// Task 3: Solve the "Container With Most Water" problem on LeetCode.
// Write a function that takes an array of non-negative intergers where each integer where each integer represents the height of a line draw at each point. find two
// lines that together with the x-axis from a container, such that the container holds the most water.
// Log the maximum amount of water for a few test cases.

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, width * minHeight);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 1]));
console.log(maxArea([0, 0, 0, 0, 0]));

/* Activity 4: 3 Sum */

// Task 4: Solve the "3Sum" problem on LeetCode.
// Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// Log the triplets for a few test cases. including edge cases.

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const results = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);
        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return results;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([0]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-2, 0, 1, 1, 2]));

/* Activity 5: Group Anagrams */

// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together.
// Log the grouped anagrams for a few test cases.

function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      map.set(sortedStr, [str]);
    }
  }
  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["abc", "bca", "cab", "bac", "cba", "acb"]));
console.log(groupAnagrams(["abcd", "dcba", "dcab", "adbc", "dbca"]));
