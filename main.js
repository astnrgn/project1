var simonStartSquare = document.querySelector("#simon")
var gameSquares = document.querySelectorAll(".game-div")
var resetButton = document.querySelector("#reset");
var possibilities = ["green", "red", "yellow", "blue"]; 
var scoreCounter = document.querySelector("#score-number");
var score = scoreCounter.innerHTML;


var simonPatternArray = [];
var playerPatternArray = [];



simonStartSquare.addEventListener("click", function(evt) {
  startGame();
  console.log("game has started");
});



function startGame() {
  pattern(simonPatternArray);

  for (let i = 0; i < gameSquares.length; i++) {
    gameSquares[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      $(this).fadeTo(150, 0.4).fadeTo(150, 1);
      playerPatternArray.push(this.id);
      console.log(playerPatternArray);
      check(simonPatternArray, playerPatternArray);
    })
  }
};



function check(array1, array2) {
 if (JSON.stringify(array1) == JSON.stringify(array2)) {
    console.log("win");
    score++;
    scoreCounter.innerHTML = score;
  } else {
    console.log("loss.");

  }
};



function pattern(array) {
  var randomColor = possibilities[Math.floor(Math.random() * possibilities.length)];
  array.push(randomColor);
  console.log(array);
};




reset.addEventListener("click", function(evt) {
  location.reload();
});


