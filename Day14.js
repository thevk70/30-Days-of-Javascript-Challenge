/* Day 14: Classes */

/* Activity 1: Class Definition */

//Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of ther class and log the greeting message.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  updateAge(age) {
    this.age = age;
    console.log(`My new age is ${this.age}`);
  }
}
const person = new Person("John", 30);
console.log(person.greeting());

//Task 2: Add a method to the Person class that updates the age property and logs the updated age.
person.updateAge(31);

/* Activity 2: Class Inheritance */

//Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the student class and log the student ID.
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.numberOfStudents++;
  }
  getStudentId() {
    return this.studentId;
  }
}
const student = new Student("John", 30, 1234);
console.log(student.getStudentId());

//Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
console.log(Student.numberOfStudents);

/* Activity 4: Getters And Setters */

//Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using getter.
class PersonOne {
  constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
  }

  get fullName() {
      return `${this.firstName} ${this.lastName}`;
  }
}
const person_ = new PersonOne('John', 'Doe');
console.log(person_.fullName);


//Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
class PersonTwo {
  constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
  }

  get fullName() {
      return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
  }
}

const person__ = new PersonTwo('John', 'Doe');
console.log(person__.fullName);
person__.fullName = 'Jane Smith';
console.log(person__.fullName);


/* Activity 5: Private Fields (Optional) */

//Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
  #balance = 0;
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
    }
  }
  get balance() {
    return this.#balance;
  }
}

//Task 10: Create an instance of the Account class and test the deposit and withdraw methods. Logginf the balance after each operation.
const account = new Account(100);
console.log("New Balance: ",account.balance);
account.deposit(50);
console.log("New Balance: ",account.balance);
account.withdraw(150);
console.log("New Balance: ",account.balance);