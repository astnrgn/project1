var simonStartSquare = document.querySelector("#simon")
var gameSquares = document.querySelectorAll(".game-div")
var resetButton = document.querySelector("#reset");
var possibilities = ["green", "red", "yellow", "blue"]; 
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
    })
  }
};

function pattern(array) {
  var randomColor = possibilities[Math.floor(Math.random() * possibilities.length)];
  array.push(randomColor);
  console.log(array);
}

reset.addEventListener("click", function(evt) {
  location.reload();
});


