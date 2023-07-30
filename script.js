//QUESTION 1
//PSEUDOCODE TO SOLVE THE TASK
// Take in 2 Input currentYear and birthYear:
// Conversion of the Inputs to string
const birthYear = parseInt(prompt("Enter your birth year"));
let currentYear = parseInt(prompt("Enter the current year"));

// The function takes in the 2 inputs and calculate the age
function calculateAge(currentYear, birthYear) {
  return currentYear - birthYear;
}

// Calling of the function
const age = calculateAge(currentYear, birthYear);

// Returning the age to the User
prompt(age);

//QUESTION 2
//Task
//To create an array of numbers, loop through the array and output only even numbers.

//Pseudocode
//Create an array
//Loop the array
