/* DOM Manipulation */

/* Activity 1: Select and Manipulating Elements */

//Task 1: Select an HTML elements by its ID and change its text content.
document.getElementById("heading").innerText = "Hello";

//Task 2: Select an HTML element by its class and change its backgroud color.
document.getElementsByClassName("para")[0].style.color = "red";

/* Activity 2: Creating and Appending Elements */

//Task 3: Create a new div element with some text content and append it to the body.
let div = document.createElement("div");
div.innerText = "This is a new div element";
document.body.appendChild(div);

//Task 4: Create a new li elements and add it to an existing ul list
let ul = document.getElementById("list");
let li = document.createElement("li");
li.innerText = "This is a new li element";
ul.appendChild(li);

/* Activity 3: Removing Elements */

//Task 5: Select an HTML elements and remove it from the Dom.
document.getElementById("heading").remove();

//Task 6: Remove the last child of a specific HTML element.
document.getElementById("list").lastChild.remove();

/* Activity 4: Modifying Attributes and Classes */

//Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
document.getElementById("image").src = "https://picsum.photos/200/200";

//Task 8: Add and remove a CSS class to/from an HTML element.
document.getElementById("heading1").classList.add("red");

/* Activity 5: Event Handling */

//Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("paragraph").textContent = "Content Changed";
});

//Task 10: Add a mouseover event listener to an element that changes its border color.
document.getElementById("image").addEventListener("mouseover", () => {
  document.getElementById("image").style.border = "2px solid red";
});

document.getElementById("image").addEventListener("mouseout", () => {
  document.getElementById("image").style.border = "";
});
