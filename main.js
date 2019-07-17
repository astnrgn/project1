var scoreCounter = document.querySelector("#score-number");
var score = scoreCounter.innerHTML;


var simonPatternArray = [];
var playerPatternArray = [];



$("#simon").click(function(evt) {
  play();
});



function createPattern(array) {
  var possibilities = ["green", "red", "yellow", "blue"];
  array.push(possibilities[Math.floor(Math.random() * possibilities.length)]);
  console.log(array);
};



function blink(array) {
  var i = 0;
  var interval = setInterval(function() {
    $("#" + array[i]).fadeTo(200, 0.4).fadeTo(200, 1);
    i ++;
  }, 1000);
};


function play() {
  createPattern(simonPatternArray);
  blink(simonPatternArray);

  $(".game-div").off("click").on("click", function() {
    $(this).fadeTo(200, 0.4).fadeTo(200, 1);
    playerPatternArray.push($(this).attr("id"));
    for (var i = 0; i < playerPatternArray.length; i++) {
      if (JSON.stringify(simonPatternArray) == JSON.stringify(playerPatternArray)) {
        playerPatternArray = [];
        score++;
        scoreCounter.innerHTML = score;
        play();
        break;
      } else if (playerPatternArray[i] !== simonPatternArray[i]) {
        alert("Sorry, try again!");
        break;
      }
    }
  })
};



$("#reset").click(function(evt) {
  location.reload();
});