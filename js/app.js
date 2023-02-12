'use strict';

function user() {
  let user = prompt('Hello! What is your name?');

  alert('Thank you for visiting my website, ' + user + '!');
  document.write('Thank you for visiting my website, ' + user + '!');
}
user();

function firstQuestion() {
  let firstQuestion = prompt('My name is Reginald. (Y/N)').toUpperCase();

  if (firstQuestion === 'Y' || firstQuestion === 'YES') {
    alert('My name is not Reginald, it is Josh!');
    // console.log('My name is not Reginald, it is Josh!');
  } else if (firstQuestion === 'N' || firstQuestion === 'NO') {
    alert('My name is Josh!');
  } else {
    alert('Please type y/n');
  }
}
firstQuestion();

function secondQuestion() {
  let secondQuestion = prompt(
    'Josh used to work at a sushi bar makin damn delicious sushi (Y/N)'
  ).toUpperCase();

  if (secondQuestion === 'Y' || secondQuestion === 'YES') {
    alert('He wishes he knew how to make good sushi');
    // console.log(secondQuestion());
  } else if (secondQuestion === 'N' || secondQuestion === 'NO') {
    alert('Josh has no clue how to make sushi');
  } else {
    alert('Please type y/n');
  }
}
secondQuestion();

function thirdQuestion() {
  let thirdQuestion = prompt(
    'Josh really wants to become a gardener after he finishes this coding course (Y/N)'
  ).toUpperCase();

  if (thirdQuestion === 'Y' || thirdQuestion === 'YES') {
    alert('He would prefer to get a job utilizing his newfound skillsets');
    // console.log(thirdQuestion());
  } else if (thirdQuestion === 'N' || thirdQuestion === 'NO') {
    alert(
      'He would totally pick up gardening once he is working remote 35 hrs/wk makin 120k'
    );
  } else {
    alert('Please type y/n');
  }
}
thirdQuestion();

function fourthQuestion() {
  let fourthQuestion = prompt(
    "One of Joshs goals is to get enough experience to get a Software Engineer work title"
  ).toUpperCase();

  if (fourthQuestion === 'Y' || fourthQuestion === 'YES') {
    alert('Golly gee, he would love to earn that title pretty soon');
    // console.log(fourthQuestion());
  } else if (fourthQuestion === 'N' || fourthQuestion === 'NO') {
    alert('He would also settle for a Seinor Sofware Engineer');
  } else {
    alert('Please type y/n');
  }
}
fourthQuestion();

function fifthQuestion() {
  let fifthQuestion = prompt('Do you think Josh likes pizza?').toUpperCase();

  if (fifthQuestion === 'Y' || fifthQuestion === 'YES') {
    alert('Of course he likes pizza! Who does not?');
    // console.log(fifthQuestion());
  } else if (fifthQuestion === 'N' || fifthQuestion === 'NO') {
    alert('Of course he likes pizza!');
  } else {
    alert('Please type y/n');
  }
}
fifthQuestion();

let attempt = 3;
let guessNumber = 5;
let userGuess = prompt(
  "I bet you cant guess what number I'm thinking of between 1-10"
);
userGuess = Number(userGuess);
while (attempt > 0) {
  if (userGuess < guessNumber) {
    userGuess = prompt('Thats a little low! Try again!');
    userGuess = Number(userGuess);
  } else if (userGuess > guessNumber) {
    userGuess = prompt('Thats a little too High! Try again!');
    userGuess = Number(userGuess);
  } else if (userGuess === guessNumber) {
    alert('Thats correct! Nice job!');
    break;
  }
  attempt = attempt - 1;
  if (!attempt) {
    alert('You have run out of guesses!');
  }
}

let travelTo = ['germany', 'japan', 'switzerland', 'nova scotia'];
let attempts = 5;
let userGuess2 = prompt('Guess what a country I want to travel to is?');
let guessCorrect = false;

while (attempts > 0) {
  for (let i = 0; i < travelTo.length; i++) {
    let country = travelTo[i];
    console.log(userGuess, country);
    if (userGuess.toLowerCase() === country.toLowerCase());
    alert('Thats right! I would love to go there!');
    guessCorrect = true;
    break;
  }
  if (guessCorrect) break;

  attempts = attempts - 1;
  if (!attempts) {
    alert('Nice try! Maybe you will get one next time!');
  } else {
    userGuess = prompt(
      "That sounds like an awesome place! But it's not one on my list"
    );
  }
}

// make a loop that gives the user up to 4 guesses to
// guess correct answer which is called guess number

// If the user guesses too high, we will say thats too high
// if the user geusses to low, it's too low
// if guessed correct, end of loop

// ensure to decrement every attempt
// alert user if out of guesses

// console.log(userguess, currentplace)
