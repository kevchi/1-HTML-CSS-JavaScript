function runGame() {
  const randomNumber = Math.random() * 100;
  const randomInteger = Math.floor(randomNumber);
  const target = randomInteger + 1;
  //The above is the same as:
  //  const target = Math.floor(Math.random() * 100) + 1;

  let guessString = "";
  let guessNumber = 0;
  let correct = false;
  let numTries = 0;

  do {
    guessString = prompt("I'm thinking of a number between 1 and 100.\n\n What is the number?");
    guessNumber = +guessString;
    numTries += 1;
    correct = checkGuess(guessNumber, target);
  } while (!correct);

  alert("You got it! The number was " + target + ".\n\nIt took you " + numTries + " tries to guess the correctly!");

  function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
      alert("You have not entered a number.\n\nPlease enter a number in the range 1 to 100.");
    } else if (guessNumber < 1 || guessNumber > 100) {
      alert("Please enter an integer number in the range 1 to 100.");
    } else if (guessNumber > target) {
      alert("Your number is too Large.");
    } else if (guessNumber < target) {
      alert("Your number is too Small.");
    } else {
      correct = true;
    }
    return correct;
  }
}
