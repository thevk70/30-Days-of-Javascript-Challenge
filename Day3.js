/* Day 3: Control Structures */

/* Activity 1: If-Else Statement */

//Task 1: Write a program to check if a number is positive,negative,or zero, and log the result to the console.
const num = 0;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
const age = 18;
if (age >= 18) {
  console.log("You are eligible for vote.");
} else {
  console.log("You are not eligible for vote.");
}

/* Activity 3: Nested If-Else Statements */

//Task 3: Write a program to find the largest of three numbers using if-else statements.
const num1 = 10;
const num2 = 20;
const num3 = 30;
if (num1 > num2) {
  if (num1 > num3) {
    console.log("Among (", num1, num2, num3, ") ", num1, " is largest.");
  } else {
    console.log("Among (", num1, num2, num3, ") ", num3, " is largest.");
  }
} else {
  if (num2 > num3) {
    console.log("Among (", num1, num2, num3, ") ", num2, " is largest.");
  } else {
    console.log("Among (", num1, num2, num3, ") ", num3, " is largest.");
  }
}

/* Activity 3: Switch Case */

//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
const day = 1;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
    break;
}

//Task 5: Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.
const score = 80;
let grade = "";
switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}
console.log("Your Grade: ", grade);

/* Activity 4: Conditional (Ternary) Operator */

//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
const number = 5;
number % 2 ? console.log("ODD") : console.log("EVEN");

/* Activity 5: Combining Conditions */

//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
const year = 2020;
if (year % 4 === 0) {
  if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
    console.log("Yes! ", year, " is a leap year.");
  } else {
    console.log("Yes! ", year, " is not a leap year.");
  }
} else {
  console.log("Yes! ", year, " is not a leap year.");
}
