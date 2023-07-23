//First of all lets declare the variables:-
let mario = document.getElementById("mario");
let pipe = document.getElementById("pipe");
let mushroom = document.getElementById("mushroom");
let score = document.getElementById("score");
var backgroundMusic = document.getElementById("background-music");
let jumpSound = document.getElementById("jump-sound");
let startBtn = document.getElementById("start-btn");


//Second start button whenever the user get click to the button
startBtn.addEventListener("click", function () {
    
    backgroundMusic.play();
    // Hide the start button
    startBtn.style.display = "none";
    document.getElementById("game-container").style.display = "block";
    startGame();
  });


  // Start the game here

  function startGame()
  {

// Intialized the game variables:-
  let marioJumping = false;
  let marioMovingRight = false;
  let marioMovingLeft = false;
  let obstacles = [pipe, mushroom];
  let gameScore = 0;
  let gameContainerWidth = document.getElementById("game-container").offsetWidth;
  let marioPosition = 50;

    



  }









