// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const myself = {
  firstName: "Agaziyan",
  lastName: "Mengesha",
  favoriteFood: "Pad Thai", 
  bestFriend:{
    firstName: "Scooby",
    lastName: "Doo",
    favoriteFood: "Scooby Snacks",
  }
}

// 2. console.log best friend's firstName and your favorite food

console.log("My Best Friend's first name is " + myself.bestFriend.firstName);
console.log("My Favorite Food is " + myself.favoriteFood);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

const TicTacToe = [
  ["-", "0", "-"],
  ["-", "X", "0"],
  ["X", "-", "X"]

];

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

TicTacToe[0][2] = "0"; //updates the value of the top right square

// 5. Log the grid to the console.

TicTacToe.forEach(row => console.log(row.join('')));

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const emailAddress = "foo@bar.baz";
const emailPattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;

//will determine if the email passed the test of emailPattern
if (emailPattern.test(emailAddress)) {
  console.log("This is a good email address.");
  } else {
    console.log("This is not a good email address.")
  }

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';

//this will split the string into 3 components
const dates = assignmentDate.split('/');
const month = parseInt(dates[0], 10);
const day = parseInt(dates[1], 10);
const year = parseInt(dates[2], 10);

const newDate = { month, day, year};

console.log(newDate);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

const dueDate = {
  month, 
  day: day + 7, //adds 7 to the day value
  year
};

console.log(dueDate);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

//since we have logged dueDate to the console, assignmentdueDate is grab 'January' from the months array
const assignmentdueDate = {
  month: months[0],
  day:28,
  year: 2019

}
//to create the HTML time tag string
const timeTagHTML = 
  '<time datetime="' +
  dueDate.year +
  '-' +
  (months.indexOf(assignmentdueDate.month)) + // Add 1 because months are 0-based
  '-' +
  dueDate.day +
  '">' +
  months[months.indexOf(assignmentdueDate.month)] + // Get the month name from the array
  ' ' +
  dueDate.day +
  ', ' +
  dueDate.year +
  '</time>';

// 10. log this value using console.log

console.log(timeTagHTML);