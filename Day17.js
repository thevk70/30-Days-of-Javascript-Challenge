/* Day 17: Data Structures */

/* Activity 1: Linked List */

//Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const firstNode = new Node(1);
const secondNode = new Node(2);
firstNode.next = secondNode;

console.log(firstNode.value);
console.log(firstNode.next.value);

//Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  remove() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      const removedNode = this.head;
      this.head = null;
      return removedNode;
    }

    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }

    const removedNode = current.next;
    current.next = null;
    return removedNode;
  }

  display() {
    let current = this.head;
    const nodes = [];
    while (current) {
      nodes.push(current.value);
      current = current.next;
    }
    console.log(nodes.join(" -> "));
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display();

list.remove();
list.display();

list.remove();
list.display();

list.remove();
list.display();

/* Activity 2: Stack */

//Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    console.log(this.items.join(" -> "));
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.display();

console.log(stack.peek());
console.log(stack.pop());
stack.display();

console.log(stack.peek());
console.log(stack.pop());
stack.display();

console.log(stack.peek());
console.log(stack.pop());
stack.display();

//Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseString(str) {
  const stack = new Stack();

  for (let char of str) {
    stack.push(char);
  }

  let reversedStr = "";
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString);

/* Activity 3: Queue */

//Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.size());

//Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  addPrintJob(job) {
    console.log(`Adding print job: ${job}`);
    this.queue.enqueue(job);
  }

  processNextJob() {
    if (this.queue.isEmpty()) {
      console.log("No print jobs to process.");
      return;
    }
    const job = this.queue.dequeue();
    console.log(`Processing print job: ${job}`);
  }

  viewNextJob() {
    if (this.queue.isEmpty()) {
      console.log("No print jobs in the queue.");
      return;
    }
    console.log(`Next print job: ${this.queue.front()}`);
  }

  printQueueStatus() {
    console.log(`Print queue size: ${this.queue.size()}`);
  }
}

const printerQueue = new PrinterQueue();

printerQueue.addPrintJob("Document1.pdf");
printerQueue.addPrintJob("Image1.png");
printerQueue.addPrintJob("Presentation.pptx");

printerQueue.viewNextJob();
printerQueue.processNextJob();

printerQueue.viewNextJob();
printerQueue.processNextJob();

printerQueue.printQueueStatus();

printerQueue.processNextJob();
printerQueue.printQueueStatus();
printerQueue.processNextJob();

/* Activity 4: Binary Tree */

//Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value,left and right.
class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(15);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(7);
  root.right.right = new TreeNode(20);
  
  console.log(root);
  
//Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertRecursive(this.root, newNode);
      }
    }
  
    _insertRecursive(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertRecursive(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertRecursive(node.right, newNode);
        }
      }
    }
  
    inOrderTraversal(callback) {
      this._inOrderTraversalRecursive(this.root, callback);
    }
  
    _inOrderTraversalRecursive(node, callback) {
      if (node !== null) {
        this._inOrderTraversalRecursive(node.left, callback);
        callback(node.value);
        this._inOrderTraversalRecursive(node.right, callback);
      }
    }
  }
  
  const tree = new BinaryTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(2);
  tree.insert(7);
  tree.insert(20);
  
  tree.inOrderTraversal(value => {
    console.log(value);
  });

/* Activity 5: Graphs (Optional) */

//Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breath-first search (BFS).
class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList.has(vertex1)) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList.has(vertex2)) {
        this.addVertex(vertex2);
      }
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  
    bfs(startVertex, callback) {
      if (!this.adjacencyList.has(startVertex)) {
        throw new Error("Start vertex not found in the graph.");
      }
  
      const visited = new Set();
      const queue = [startVertex];
      
      while (queue.length > 0) {
        const vertex = queue.shift();
        if (!visited.has(vertex)) {
          visited.add(vertex);
          callback(vertex);
          const neighbors = this.adjacencyList.get(vertex);
          for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              queue.push(neighbor);
            }
          }
        }
      }
    }
  }
  
  const graph = new Graph();
  
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "D");
  
  console.log("BFS Traversal:");
  graph.bfs("A", vertex => {
    console.log(vertex);
  });

//Task 10: Use the Graph class to represent  a simple network and perform BFS to find the shortest path between two nodes.
class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    // Method to add a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    // Method to add an edge between two vertices
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList.has(vertex1)) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList.has(vertex2)) {
        this.addVertex(vertex2);
      }
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // Assuming an undirected graph
    }
  
    // Method to perform BFS and find the shortest path between startVertex and endVertex
    findShortestPath(startVertex, endVertex) {
      if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
        throw new Error("Start or end vertex not found in the graph.");
      }
  
      const visited = new Set();
      const queue = [startVertex];
      const parentMap = new Map();
      
      visited.add(startVertex);
      parentMap.set(startVertex, null);
  
      while (queue.length > 0) {
        const vertex = queue.shift();
        
        if (vertex === endVertex) {
          return this._constructPath(parentMap, endVertex);
        }
  
        const neighbors = this.adjacencyList.get(vertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
            parentMap.set(neighbor, vertex);
          }
        }
      }
      
      return []; // Return an empty array if no path is found
    }
  
    // Helper method to construct the path from parentMap
    _constructPath(parentMap, endVertex) {
      const path = [];
      let currentVertex = endVertex;
      
      while (currentVertex !== null) {
        path.unshift(currentVertex);
        currentVertex = parentMap.get(currentVertex);
      }
      
      return path;
    }
  }
  
  // Example usage:
  const graph = new Graph();
  
  // Add vertices
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  
  // Add edges
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "D");
  graph.addEdge("D", "E");
  
  // Find the shortest path from "A" to "E"
  const shortestPath = graph.findShortestPath("A", "E");
  console.log("Shortest path from A to E:", shortestPath);
  
  // Output will be something like:
  // Shortest path from A to E: [ 'A', 'C', 'D', 'E' ]
  