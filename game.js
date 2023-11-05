var colors = ["green", "red", "yellow", "blue"];
var gamepattern = [];
var level = 0;
var started = false;
var userclickpattern = [];


$(document).click(function () {
  if (started === false) {
    nextSequence();
    $("#level-title").text("Level " + level);
    started = true;
  }
    $(".btn").click(function () {
      var userChosenColour = $(this).attr("id");
      userclickpattern.push(userChosenColour);
    
      makesound(userChosenColour);
      addAnimation(userChosenColour);
      checkanswer(userclickpattern.length - 1);
    });
  }
);

$(document).keypress(function () {
  if (started === false) {
    nextSequence();
    $("#level-title").text("Level " + level);
    started = true;
  }
    $(".btn").click(function () {
      var userChosenColour = $(this).attr("id");
      userclickpattern.push(userChosenColour);
    
      makesound(userChosenColour);
      addAnimation(userChosenColour);
      checkanswer(userclickpattern.length - 1);
    });
  }
);


function checkanswer(currentlevel) {
  if (gamepattern[currentlevel] === userclickpattern[currentlevel]) {
    if (userclickpattern.length === gamepattern.length) {
      setTimeout(function () {
        nextSequence();
        $("#level-title").text("Level " + level);
      }, 1000);
    }
  } else {
    gameover();
    startover();
  }
}

function startover() {
  level = 0;
  gamepattern = [];
  started = false;
}

function gameover() {
  makesound("wrong");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 250);
  $("#level-title").text("Game over, Press any key to restart");
  $(".btn").off("click");
}

function addAnimation(color) {
  $("#" + color).addClass("pressed");
  setTimeout(function () {
    $("#" + color).removeClass("pressed");
  }, 200);
}

function makesound(color) {
  var sound = new Audio("sounds/" + color + ".mp3");
  sound.play();
}

function nextSequence() {
  level++;
  userclickpattern = [];
  var num = Math.floor(Math.random() * 4);
  var colorindex = num;
  gamepattern.push(colors[colorindex]);

  addAnimation(colors[colorindex]);
  makesound(colors[colorindex]);
}
