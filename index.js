var readlineSync = require("readline-sync");
var score = 0;
function welcome() {
  var userName = readlineSync.question("May i know you name?\n");
  console.log("Wellcome " + userName + "!");
}
