const diceNumber = 2;
var randomNumber = [];
for (var i=0; i<diceNumber; i++){
  randomNumber.push(Math.ceil(Math.random() * 6));
  document.querySelector(".img" + (i+1)).setAttribute("src", "images/dice" + randomNumber[i] + ".png");
}

if (randomNumber[0] > randomNumber[1]){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber[0] < randomNumber[1]){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if (randomNumber[0] === randomNumber[1]){
  document.querySelector("h1").innerHTML = "Draw";
} else{
  document.querySelector("h1").innerHTML = "Uncaught exception";
  Alert("Uncaught exception");
}
