console.log(`Fundamentals Part 2`);

// Functions - Declaration and Expressions
console.log(`=== FUNCTIONS ===`);

function logger() {
  console.log("This function is working");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// do not do this anymore
const juice1 = `Juice with 5 apples..`;
const juice2 = `Juioce with 3 apples...`;

// function expressions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const age1 = calcAge(2000);
console.log(age1);

function calcAge2(birthYear, currentYear) {
  const age = currentYear - birthYear;
  return age;
}

const myAge = calcAge2(2000, 2025);
const someonesAge = calcAge2(1995, 2025);

console.log(`I am ${myAge} years old`);
console.log(`he is ${someonesAge} years old`);

console.log(calcAge2(2000));

function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}

console.log(introduce("Jonas", "Schmedtmann", 46));
console.log(introduce("Sarah"));
// Missing parameters become undefined

function calcAge3(birthYear) {
  return 2025 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge3(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired`;
  }
}

console.log(yearsUntilRetirement(2000, "Aiken"));
console.log(yearsUntilRetirement(1950, "Mark"));

// global scrope
const globalVar = `I am global`;

function testScope() {
  const localVar = `I am local`;
  console.log(globalVar);
  console.log(localVar);
}

testScope();
console.log(globalVar);
// console.log(localVar);

const userName = "Jonas"; // Global

function createWelcomeMessage(user) {
  const message = `Welcome back, ${user}!`; // Local to function
  const timestamp = new Date().toLocaleTimeString(); // Local to function

  return `${message} Current time: ${timestamp}`;
}

console.log(createWelcomeMessage(userName));
// console.log(message); // Error - message is local to function

////////////////////////////////////
// Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  // Your code here
  // Remember: team needs DOUBLE the score to win
  // Use template literals for nice output

  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins! Dolphins ${avgDolphins}, Koalas: ${avgKoalas}`;
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));
