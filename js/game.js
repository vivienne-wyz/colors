// Find the different color tile game
// Click on the tile that has the different color

// A total of 24 stages
// 8*8 30 seconds
// Difficulty increases
// Fail if time runs out
// Success output when complete 24 stages

// Set 12 different colors
var colors = ["#E24837", "#77CDA4", "#ffcc00", "#338099", "#ff6666", "#00b9b3",
              "#FF748F", "#58946A", "#87C9BE", "#BFA587", "#F89354", "#B55E6C",
              "#E24837", "#77CDA4", "#ffcc00", "#338099", "#ff6666", "#00b9b3",
              "#FF748F", "#58946A", "#87C9BE", "#BFA587", "#F89354", "#B55E6C"];

var special = ["#e97063", "#57c18e", "#e6b800", "#53a9c6", "#ff3333", "#00e6de",
               "#ff4d70", "#70a981", "#72c0b3", "#c9b49c", "#f67423", "#bf7380",
               "#df3320", "#57c18e", "#ffdb4d", "#2d7086", "#ff8080", "#00b3ad",
               "#ff8099", "#568f67", "#95d0c6", "#b89b7a", "#f7833b", "#af5060"];
var gameLevel = 24;
var rightTileClicked = false;
var level = 0;
var targetTime = 15 * 1000;
var secondsRemain = $('#timeRemain');

$(document).ready(function() {
  init(level);
})

function init (level) {
  initBoard(level);
  console.log("level is " + level);
  // timer countdown
  var remainingTime = targetTime;
  var timeInterval = setInterval(function(){
    remainingTime = remainingTime - 1000;
    secondsRemain.text(remainingTime / 1000);
    // console.log(remainingTime/1000);
    if (remainingTime === 0) { // equal ===
        clearInterval(timeInterval);
        alert ("Time up! \nYou completed " + level + " levels. \n" + (gameLevel-level) + " more to go!");
        document.location.href = "colorgame.html";
    }
  }, 1000);
  $(".specialTile").on('click', function() {
    // timer stops and resets
    clearInterval(timeInterval);
    if (level < (gameLevel-1)) {
      level++;
      console.log("next level is " + level);
      $("#board").html("");
      init(level);
    }
    else {
      alert("All " + gameLevel + " are completed! \nYou are a color master!");
      document.location.href = "colorgame.html";
    }
  });
}

// Create a 8*8 board
// One tile slightly different from the rest with random location
function initBoard(level) {
  var color = colors[level];
  console.log(color);
  var specialcolor = special[level];
  console.log(specialcolor);
  var board = "";
  var diff = Math.floor(Math.random() * 64);
  console.log(diff);
  for (var i=0; i<64; i++) { // build a 8*8 board
    if (i != diff) {
      singleTile = "<div class=\"tiles\"></div>";
      board = board + singleTile;
    } else { // if it's the special tile
      specialTile = "<div class=\"specialTile\"></div>";
      board = board + specialTile;
    }
  }
  $("#board").html(board);
  $(".tiles").css("background-color",color);
  $(".specialTile").css("background-color",specialcolor);
}
