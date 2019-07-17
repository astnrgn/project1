var scoreCounter = document.querySelector("#score-number");
var score = scoreCounter.innerHTML;
var simonPattern = [];
var playerPattern = [];


$("#simon").click(function(evt) {
  evt.preventDefault();
  play();
});


var createPattern = (array) => {
  var colors = ["green", "red", "yellow", "blue"];
  array.push(colors[Math.floor(Math.random() * colors.length)]);
};


var blink = (array) => {
  var i = 0;
  var interval = setInterval(function() {
    $("#" + array[i]).fadeTo(200, 0.4).fadeTo(200, 1);
    i++;
  }, 1000);
};


function play() {
  createPattern(simonPattern);
  blink(simonPattern);

  $(".game-div").off("click").on("click", function(evt) {
  	evt.preventDefault();
    $(this).fadeTo(200, 0.4).fadeTo(200, 1);
    playerPattern.push($(this).attr("id"));

    for (var i = 0; i < playerPattern.length; i++) {
      if (JSON.stringify(simonPattern) == JSON.stringify(playerPattern)) {
        playerPattern = [];
        score++;
        scoreCounter.innerHTML = score;
        play();
        break;
      } else if (playerPattern[i] !== simonPattern[i]) {
        alert(`Your score was ${simonPattern.length - 1}! Click "RESET" to play again!`);
        break;
      }
    }
  })
};


$("#reset").click(function(evt) {
  location.reload();
});


//********************************************************************************************//


$("#theme-option-space").click(function(evt) {
  evt.preventDefault();
    $("body").css( {
      "background" : "url(images/space-background2.gif)",
      "backgroundSize" : "cover",
      "backgroundPosition" : "center center",
      "backgroundRepeat" : "no-repeat"
    });

    $('.space-switch').css("border", "2px solid white");
    $('.space-switch-catagory').css("borderRight", "2px solid white");
    $('.space-switch-catagory').css("color", "white");

    document.querySelector("#theme-option-space").style.background = "rgb(170,170,170)";
    document.querySelector("#theme-option-standard").style.background = "white";

    document.querySelector("header").style.color = "white";
});





$("#mode-option-hard").click(function(evt) {
  evt.preventDefault();
  setInterval(var createPattern = (array) => {
    var colors = ["green", "red", "yellow", "blue"];
    array.push(colors[Math.floor(Math.random() * colors.length)]);
  }, 1000);


  document.querySelector("#mode-option-hard").style.background = "rgb(170,170,170)";
  document.querySelector("#mode-option-normal").style.background = "white";
});