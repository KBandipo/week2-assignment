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

// Returning the age to the User via the browser
prompt(age);

//QUESTION 2
//Task
//To create an array of numbers, loop through the array and output only even numbers.

//Pseudocode
//Create an array
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Loop the array
for (let i = 0; i < numberArray.length; i++) {
  let num = numberArray[i];
  //Return even numbers only
  if (num % 2 === 0) {
    console.log(num);
  }
}
