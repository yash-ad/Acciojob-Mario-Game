//Start Game button for DOM manipulation:-
document.getElementById("start-btn").addEventListener("click",startGame);

//Function startbutton
function startGame(){
     // When i click on the start button will go out and the game page will be open.
    document.getElementById("start-btn").style.display = "none";
    // As soon as i click on the start button the entire whole game page will be open.
    document.getElementById("game-container").style.display = "block";

}