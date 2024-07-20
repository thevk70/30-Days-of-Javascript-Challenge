/* Day 7: Objects */

/* Activity 1: Object Creation and Access */

//Task 1: Create an object representing a book with properties like title,author, and year, and log the object to the console.
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
};
console.log(book);

//Task 2: Access and log the title and author properties of the book object.
console.log("Title: ", book.title);
console.log("Author: ", book.author);

/* Activity 2: Object Methods */

//Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getBookInfo = function () {
  return this.title + " by " + this.author;
};

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property,then log the updated object.
book.updateYear = function (year) {
  this.year = year;
};
console.log(book.updateYear(2019));
console.log(book);

/* Activity 3: Nested Objects */

//Task 5: Create a nested object representing a library with properties like name and books (an array book objects), and log the library object to the console.
const library = {
    name: "The Library",
    books: [
        { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937},
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1962},
        { title: "The Silmarillion", author: "J.R.R. Tolkien", year: 1995},
        ]
        };
        console.log(library);

//Task 6: Access and log the name of the library and the titles of the all the books in the library.
console.log("Library Name: ", library.name);
console.log("Books: ", library.books[0].title, library.books[1].title,library.books[2]);

/* Activity 4: The this keyword */

//Task 7: Add a method to the book object that uses this keyword to return a string with the book's title and year,  and log the result of calling this method.
book.getBookInfo = function () {
    return this.title + " (" + this.year + ")";
    };
    console.log(book.getBookInfo());

/* Activity 5: Object Iteration */

//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value
for (let prop in book) {
    console.log(prop, book[prop]);
    }

//Task 9: Use Object.key and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));
