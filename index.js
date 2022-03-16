//Game has 2 dice
const diceNumber = 2;
//Initialize array which will contain random numbers for each die
var randomNumber = [];
//Itirate through each die
for (var i=0; i<diceNumber; i++){
  //Generate a random number from 1 to 6
  randomNumber.push(Math.ceil(Math.random() * 6));
  //Load the right image according to the die value
  document.querySelector(".img" + (i+1)).setAttribute("src", "images/dice" + randomNumber[i] + ".png");
}

if (randomNumber[0] > randomNumber[1]){
  //Player 1 wins
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber[0] < randomNumber[1]){
  //Player 2 wins
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else if (randomNumber[0] === randomNumber[1]){
  //Draw
  document.querySelector("h1").innerHTML = "Draw!";
} else{
  //Anything else which should not happen
  document.querySelector("h1").innerHTML = "Uncaught exception";
  Alert("Uncaught exception");
}
