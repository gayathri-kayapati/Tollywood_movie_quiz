var readlineSync = require("readline-sync");
var score = 0;
function welcome() {
  var userName = readlineSync.question("May i know you name?\n");
  console.log("Wellcome " + userName + "!");
}
var highScores = [
  {
    name: "Chinna",
    score: 5,
  },

  {
    name: "Saleema",
    score: 4,
  },
  {
    name: "Sudha",
    score: 5,
  },
];
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
var questions = [
  {
    question: `
  What was the first movie of Megastar Chiranjeevi? 
  A. Mana oori pandavulu 
  B. boss 
  C. Donga 
  D. Yamakinkarudu 
  E. Punaadi raalu\n`,
    answer: "E",
  },
  {
    question: ` 
  In which movie did Tamanna act with hero ram?
  A. Deva das
  B. Happy days
  C. Veedokkade
  D. Ganesh
  E. Ready\n`,
    answer: "E",
  },
  {
    question: `
  Tarun and Trisha movie.
  A. Stalin
  B. Nuvu leka nenu lenu
  C. Nee manasu naaku telusu
  D. Nuve kavali
  E. Nuve nuve\n`,
    answer: "C",
  },
  {
    question: `
  In which film did Trisha start her career?
  A. Pourname
  B. Yuva
  C. Nee manasu naaku telusu
  D. Varsham
  E. Jodi\n`,
    answer: "E",
  },
  {
    question: `
  Who is the music director for the Movie Missamma (Bhoomika's)?
  A. Keeravani
  B. Manisharma
  C. R.P. Patnaik
  D. Vandemataram Srinivas\n`,
    answer: "D",
  },
];
function game() {
  for (var i = 0; i < questions.length; i++) {
    movieQuiz(questions[i].question, questions[i].answer);
  }
}
function showScores() {
  console.log("YAY! You SCORED: ", score);
  console.log(
    "Check out the high scores, if you should be there ping me and I'll update it"
  );
  highScores.map((score) => console.log(score.name, " : ", score.score));
}
