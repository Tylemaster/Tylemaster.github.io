 var willowGameText = document.getElementById("theTextid");
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.open("GET", "text.txt", false);
 xmlhttp.send();
 var theThing = xmlhttp.responseText;
 var thingArray= theThing.split(/\r?\n/);
 function willowGameUpdate() {
    willowGameText.innerText = thingArray[0];
}