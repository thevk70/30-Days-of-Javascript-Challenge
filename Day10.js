/* Day 10: Event Handling */

/ Activity 1: Basic Event Handling /;

//Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("paragraph").textContent = "Hello World";
});

//Task 2: Add a double-click event listener to an image that toggles its visibility.

document.getElementById("image").addEventListener("dblclick", () => {
  document.getElementById("image").style.visibility = "hidden";
});

/* Activity 2: Mouse Events */

//Task 3: Add a mouseover event listener to an element that changes its background color.
document.getElementById("btn").addEventListener("mouseover", () => {
  document.getElementById("btn").style.backgroundColor = "red";
});

//Task 4: Add a mouseout event listener to an element that resets its background color.
document.getElementById("btn").addEventListener("mouseout", () => {
  document.getElementById("btn").style.backgroundColor = "blue";
});

/* Activity 3: Keyboard Events */

//Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
document.getElementById("input").addEventListener("keypress", (e) => {
  console.log(e.key);
});

//Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.getElementById("input").addEventListener("keyup", (e) => {
  document.getElementById("paragraph").textContent = e.target.value;
});

/* Activity 4: Form Events */

//Task 7: Add a submit event listener to a from that prevents the default submission and logs the form data to the console.
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let val = document.getElementById("input1").value;
  console.log(val);
});

//Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
// document.getElementById("select").addEventListener("change", (e) => {
//     document.getElementById("paragraph").textContent = e.target.value;
//     });
document.getElementById("select").addEventListener("change", (e) => {
  document.getElementById("paragraph").textContent = e.target.value;
});

/* Activity 5: Event Delegation */

//Task 9: Add a click event listener to a list that logs the text contents of the clicked list item using event delegation.
document.getElementById("list").addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

//Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.getElementById("parentList").addEventListener("click", (e) => {
  const newChild = document.createElement("li");
  newChild.textContent = "New Child";
  document.getElementById("list").appendChild(newChild);
});
