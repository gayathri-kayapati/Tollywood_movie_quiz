var readlineSync = require("readline-sync");
var score = 0;
function welcome() {
  var userName = readlineSync.question("May i know you name?\n");
  console.log("Wellcome " + userName + "!");
}

function movieQuiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You're right");
    score++;
  } else {
    console.log("You're wrong");
  }
  console.log("Your current score: ", score);
  console.log("-----------");
}
