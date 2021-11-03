var willowGameText = document.getElementById("theTextid");
var highScoreElement = document.getElementById("highScoresid");
var currentHighScore = document.getElementById("currentScore");
var buttonElement = document.getElementById("theButtonId");

var winCount = 0

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "text.txt", false);
xmlhttp.send();
var gameText = xmlhttp.responseText;
var textArray = gameText.split(/\r?\n/);

function willowGameUpdate() {
    currentHighScore.innerHTML = "you - ".concat(winCount);
    if(textArray[winCount].substring(0,2) == "~1"){
//add code here for alert button
    }
    else if(textArray[winCount].substring(0,2) == "~2"){
        highScoreElement.style.visibility = "visible"
        textArray.splice(winCount,1);
    }
    else if(textArray[winCount].substring(0,2) == "~3"){
        buttonElement.style.visibility = "hidden"
        textArray.splice(winCount,1);
    }
    willowGameText.innerText = textArray[winCount];
    winCount++;
}