//grabbing elements from html doc
var willowGameText = document.getElementById("theTextid");
var highScoreElement = document.getElementById("highScoresid");
var currentHighScore = document.getElementById("currentScore");
var buttonElement = document.getElementById("theButtonId");

//getting acces to text file where the storey of the game is stored
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "text.txt", false);
xmlhttp.send();
var gameText = xmlhttp.responseText;
var textArray = gameText.split(/\r?\n/);

var winCount = 0
function willowGameUpdate() {
    //update the high score of the game (hidden until enough button presses)
    currentHighScore.innerHTML = "you - ".concat(winCount + 1);
    //cases that change something about the page (reveal high score, hide button etc.)
    //also removes the special character so it is not printed 
    if(textArray[winCount].substring(0,2) == "~1"){
        window.alert(" uh oh, heres a curve ball! Try to hit that button!")
        textArray.splice(winCount,1);
    }
    else if(textArray[winCount].substring(0,2) == "~2"){
        highScoreElement.style.visibility = "visible"
        textArray.splice(winCount,1);
    }
    else if(textArray[winCount].substring(0,2) == "~3"){
        buttonElement.style.visibility = "hidden"
        textArray.splice(winCount,1);
    }
    //update the txt on every button press
    willowGameText.innerText = textArray[winCount];
    winCount++;
}