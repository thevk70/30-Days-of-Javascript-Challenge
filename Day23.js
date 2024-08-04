/* Day 23: LeetCode Hard */

/* Activity 1: Median of Two Sorted Arrays */

// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// Log the median for a few test cases, including edge cases.
function findMedianSortedArrays(nums1, nums2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }

  let n = merged.length;
  if (n % 2 === 0) {
    return (merged[Math.floor(n / 2) - 1] + merged[Math.floor(n / 2)]) / 2;
  } else {
    return merged[Math.floor(n / 2)];
  }
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
console.log(findMedianSortedArrays([], [1]));
console.log(findMedianSortedArrays([2], []));

/* Activity 2: Merge k Sorted Lists */

// Task 2: Solve the "Merge K Sorted Lists" problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// Create a few test cases with linked lists and log the merge list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  const minHeap = new MinHeap();

  for (const list of lists) {
    if (list) {
      minHeap.insert(list);
    }
  }

  let dummyHead = new ListNode();
  let current = dummyHead;

  while (!minHeap.isEmpty()) {
    let smallestNode = minHeap.extractMin();
    current.next = smallestNode;
    current = current.next;

    if (smallestNode.next) {
      minHeap.insert(smallestNode.next);
    }
  }

  return dummyHead.next;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(node) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].val > this.heap[index].val) {
        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    let smallest = index;
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex].val < this.heap[smallest].val
    ) {
      smallest = leftChildIndex;
    }
    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex].val < this.heap[smallest].val
    ) {
      smallest = rightChildIndex;
    }
    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.bubbleDown(smallest);
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
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

// Test cases
let list1 = createLinkedList([1, 4, 5]);
let list2 = createLinkedList([1, 3, 4]);
let list3 = createLinkedList([2, 6]);
let mergedList = mergeKLists([list1, list2, list3]);
printLinkedList(mergedList);

list1 = createLinkedList([]);
list2 = createLinkedList([]);
list3 = createLinkedList([]);
mergedList = mergeKLists([list1, list2, list3]);
printLinkedList(mergedList);

list1 = createLinkedList([]);
list2 = createLinkedList([1]);
mergedList = mergeKLists([list1, list2]);
printLinkedList(mergedList);

list1 = createLinkedList([1, 4, 7]);
list2 = createLinkedList([2, 3, 6, 8]);
list3 = createLinkedList([0, 9]);
mergedList = mergeKLists([list1, list2, list3]);
printLinkedList(mergedList);

/* Activity 3: Trapping Rain Water */

// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
// Log the amount of trapped water for a few test cases.
function trap(height) {
  if (height.length === 0) return 0;

  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let trappedWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        trappedWater += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        trappedWater += rightMax - height[right];
      }
      right--;
    }
  }

  return trappedWater;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
console.log(trap([1, 1, 1, 1, 1]));
console.log(trap([3, 0, 0, 2, 0, 4]));
console.log(trap([]));

/* Activity 4: N-Queens */

// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// Log the distinct solution for a few test cases.
function solveNQueens(n) {
  const solutions = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));
  solve(0);
  return solutions;

  function solve(row) {
    if (row === n) {
      solutions.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = "Q";
        solve(row + 1);
        board[row][col] = ".";
      }
    }
  }

  function isValid(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }
}

function printSolutions(solutions) {
  solutions.forEach((solution, index) => {
    console.log(`Solution ${index + 1}:`);
    solution.forEach((row) => console.log(row));
    console.log();
  });
}

let solutions = solveNQueens(4);
printSolutions(solutions);

solutions = solveNQueens(1);
printSolutions(solutions);

solutions = solveNQueens(8);
printSolutions(solutions);

/* Activity 5: Word Ladder */

// Task 5: Solve the "Word Ladder" problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transdormation sequence
// from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// Log the length to the shortest transformation sequence for a few test cases.
function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];

  while (queue.length > 0) {
    let [currentWord, steps] = queue.shift();

    if (currentWord === endWord) return steps;

    for (let i = 0; i < currentWord.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const nextWord =
          currentWord.slice(0, i) +
          String.fromCharCode(c) +
          currentWord.slice(i + 1);

        if (wordSet.has(nextWord)) {
          queue.push([nextWord, steps + 1]);
          wordSet.delete(nextWord);
        }
      }
    }
  }

  return 0;
}

// Test cases
console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
); // Output: 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // Output: 0
console.log(ladderLength("a", "c", ["a", "b", "c"])); // Output: 2
console.log(
  ladderLength("hit", "hit", ["hot", "dot", "dog", "lot", "log", "hit"])
); // Output: 1
console.log(ladderLength("hit", "cog", ["hog", "cog"])); // Output: 0
