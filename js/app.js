function firstQuestion () {
  let firstQuestion = prompt("My name is Reginald. (Y/N)").toUpperCase();

  if ( firstQuestion === "Y" ) {
    alert("My name is not Reginald, it is Josh!");
  }

  else if ( firstQuestion === "N" ) {
    alert("My name is Josh!");
  }
}

function secondQuestion () {
  let secondQuestion = prompt("Josh used to work at a sushi bar makin damn delicious sushi (Y/N)").toUpperCase();

  if (secondQuestion === "Y") {
    alert("He wishes he knew how to make good sushi");
  }

  else if ( secondQuestion === "N") {
    alert("Josh has no clue how to make sushi");
  }
}

function thirdQuestion() {
  let thirdQuestion = prompt(
    "Josh really wants to become a gardener after he finishes this coding course (Y/N)"
  ).toUpperCase();

  if (thirdQuestion === "Y") {
    alert("He would prefer to get a job utilizing his newfound skillsets");
  } else if (thirdQuestion === "N") {
    alert(
      "He would totally pick up gardening once he is working remote 35 hrs/wk makin 120k"
    );
  }
}

function fourthQuestion() {
  let fourthQuestion = prompt("One of Josh's goals is to get enough experience to get a Software Engineer work title").toUpperCase();

  if (fourthQuestion === "Y") {
    alert("Golly gee, he would love to earn that title pretty soon");
  } else if (fourthQuestion === "N") {
    alert("He would also settle for a Seinor Sofware Engineer");
  }
}

function fifthQuestion() {
  let fifthQuestion = prompt("Do you think Josh likes pizza?").toUpperCase();

  if (fifthQuestion === "Y") {
    alert("Of course he likes pizza! Who does not?");
  } else if (fifthQuestion === "N") {
    alert("Of course he likes pizza!");
  }
}