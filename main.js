var simonStartSquare = document.querySelector("#simon")
var gameSquares = document.querySelectorAll(".game-div")

simonStartSquare.addEventListener("click", function(evt) {
  startGame();
  console.log("game has started");
});

var startGame = () => {
  for (let i = 0; i < gameSquares.length; i++) {
    gameSquares[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      $(this).fadeTo(150, 0.4).fadeTo(150, 1);
    })
  }
};