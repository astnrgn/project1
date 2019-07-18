var scoreCounter = document.querySelector("#score-number");
var score = scoreCounter.innerHTML;
var simonPattern = [];
var playerPattern = [];
var timeInterval = 1000;


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
  }, timeInterval);
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




$("#theme-option-space").click(function(evt) {
  evt.preventDefault();
  $("body").css({
    "background": "url(images/space-background.gif)",
    "backgroundSize": "cover",
    "backgroundPosition": "center center",
    "backgroundRepeat": "no-repeat"
  });
  $('.js-space-switch').css("border", "2px solid white");
  $('.js-space-switch-catagory').css("borderRight", "2px solid white");
  $('.js-space-switch-catagory').css("color", "white");


  $("#green").css({
    "background": "url(images/green-saturn.jpg)",
    "backgroundSize": "cover",
    "backgroundPosition": "center center",
    "backgroundRepeat": "no-repeat"
  });
  $("#red").css({
    "background": "url(images/red-mars.jpg)",
    "backgroundSize": "cover",
    "backgroundPosition": "center center",
    "backgroundRepeat": "no-repeat"
  });
  $("#yellow").css({
    "background": "url(images/yellow-venus.jpg)",
    "backgroundSize": "cover",
    "backgroundPosition": "center center",
    "backgroundRepeat": "no-repeat"
  });
  $("#blue").css({
    "background": "url(images/blue-neptune.jpg)",
    "backgroundSize": "cover",
    "backgroundPosition": "center center",
    "backgroundRepeat": "no-repeat"
  });


  document.querySelector("#theme-option-space").style.background = "rgb(170,170,170)";
  document.querySelector("#theme-option-standard").style.background = "white";
  document.querySelector("header").style.color = "white";
  document.querySelector("#score-counter").style.background = "black";
  document.querySelector("#score-counter").style.borderTop = "0px";
});


$("#theme-option-standard").click(function(evt) {
  evt.preventDefault();
  $("body").css({
    "background": "white",
  });
  $('.js-space-switch').css("border", "2px solid black");
  $('.js-space-switch-catagory').css("borderRight", "2px solid black");
  $('.js-space-switch-catagory').css("color", "black");


  $("#green").css({
    "background": "rgba(62, 221, 75, 0.8)"
  });
  $("#red").css({
    "background": "rgba(221, 75, 62, 0.8)"
  });
  $("#yellow").css({
    "background": "rgba(255, 234, 55, 0.8)"
  });
  $("#blue").css({
    "background": "rgba(105, 215, 250, 0.8)"
  });

  
  document.querySelector("#theme-option-standard").style.background = "rgb(170,170,170)";
  document.querySelector("#theme-option-space").style.background = "white";
  document.querySelector("header").style.color = "black";
  document.querySelector("#score-counter").style.background = "white";
  document.querySelector("#score-counter").style.borderTop = "0px";
  document.querySelector("#score-title").style.border = "2px solid black";
});


$("#mode-option-hard").click(function(evt) {
  evt.preventDefault();

  clearInterval(timeInterval);
  timeInterval = 400;
  console.log(timeInterval);

  document.querySelector("#mode-option-hard").style.background = "rgb(170,170,170)";
  document.querySelector("#mode-option-normal").style.background = "white";
});


$("#mode-option-normal").click(function(evt) {
  evt.preventDefault();

  clearInterval(timeInterval);
  timeInterval = 1000;
  console.log(timeInterval);

  document.querySelector("#mode-option-normal").style.background = "rgb(170,170,170)";
  document.querySelector("#mode-option-hard").style.background = "white";
});