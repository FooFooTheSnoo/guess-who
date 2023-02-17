"use strict";

let score = 0;

function user() {
  let user = prompt("Hello! What is your name?");

  alert("Thank you for visiting my website, " + user + "!");
  document.write(
    "Thank you for visiting my website, " + user + "! Your score is " + score
  );
}

function questions(question, correctAnswer, wrongAnswer) {
  let answer = prompt(question).toUpperCase();
  if (answer === "Y" || answer === "YES") {
    alert(correctAnswer);
    score++;
    console.log("Your current score is -->", score);
  } else if (answer === "N" || answer === "NO") {
    alert(wrongAnswer);
  } else {
    alert("Please type y/n");
  }
}

questions(
  "My name is Reginald. (Y/N)",
  "My name is not Reginald, it is Josh!",
  "My name is Josh!"
);
questions(
  "Josh used to work at a sushi bar makin damn delicious sushi (Y/N)",
  "He wishes he knew how to make good sushi",
  "Josh has no clue how to make sushi"
);
questions(
  "Josh really wants to become a gardener after he finishes this coding course (Y/N)",
  "He would prefer to get a job utilizing his newfound skillsets",
  "He would totally pick up gardening once he is working remote 35 hrs/wk makin 120k"
);
questions(
  "One of Joshs goals is to get enough experience to get a Software Engineer work title (Y/N)",
  "Golly gee, he would love to earn that title pretty soon",
  "He would also settle for a Seinor Sofware Engineer"
);
questions(
  "Do you think Josh likes pizza?",
  "Of course he likes pizza! Who does not?",
  "Of course he likes pizza!"
);

function guessANumber(question, lowNumber, highNumber, correctNumber) {
  let takeAGuess = prompt(question);
  let attempt = 2;
  while (attempt > 0) {
    if (takeAGuess < 5) {
      alert(lowNumber);
      takeAGuess = prompt(question);
      attempt--;
      console.log(takeAGuess + " Too low");
    } else if (takeAGuess > 5) {
      alert(highNumber);
      takeAGuess = prompt(question);
      alert(highNumber);
      attempt--;
    } else {
      alert(correctNumber);
      break;
    }
  }

  if (attempt === 0) {
    alert("You have run out of guesses!");
  }
}
guessANumber(
  "I bet you cant guess what number I'm thinking of between 1-10",
  "Thats a little low! Try again!",
  "Thats a little too High! Try again!",
  "Thats correct! Nice job!"
);

// make a loop that gives the user up to 4 guesses to
// guess correct answer which is called guess number

// If the user guesses too high, we will say thats too high
// if the user geusses to low, it's too low
// if guessed correct, end of loop

// ensure to decrement every attempt
// alert user if out of guesses

let userAttempts = 6;
let myAnswers = [
  "germany",
  "japan",
  "switzerland",
  "spain",
  "france",
  "china",
  "prussia",
];
// while loop controls the game
while (userAttempts > 0) {
  let userResponse = prompt(
    `Guess one coutries I would like to go visit. ${userAttempts} tries!`
  );
  userAttempts--;

  let answeredCorrectly = false;
  for (let i = 0; i < myAnswers.length; i++) {
    if (myAnswers[i] === userResponse) {
      alert("Yes! Definitely on my list of places to go!");
      answeredCorrectly = true;
      // userAttempts = 0;
      score++;
      break;
    }
  }

  if (userAttempts === 0 && answeredCorrectly === false) {
    alert(
      "You have run out of tries! I would like to go to Germany, Japan, France, and Switzerland"
    );
  }
}
user();
//js works
