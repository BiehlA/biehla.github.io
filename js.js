var colors = 0;
var fontSize = 20;
var size = 20;
var party = 0;
var on = 1;

function toggleColors(){
	var elem = document.getElementById("body");
	var button = document.getElementsByTagName("button");

	if (colors == 1){
		elem.style.color = "#343434";
		elem.style.backgroundColor = "#F8F8F8";

		button[0].innerHTML = "Dark Mode?";

		for (var i = 0; i < button.length; i++) {	
			button[i].style.color = "#F8F8F8";
			button[i].style.backgroundColor = "#343434";
		}

		colors = 0;
	} else {
		elem.style.color = "#F8F8F8";
		elem.style.backgroundColor = "#343434";

		button[0].innerHTML = "Light Mode?";

		for (var i = 0; i < button.length; i++) {
			button[i].style.color = "#343434";
			button[i].style.backgroundColor = "#F8F8F8";
		}

		colors = 1;
	}
}

function partyMode(){
	var elem = document.getElementById("body");

	elem.style.color = "#24FF00";

	elem.style.backgroundColor = "#FF6EF3";

	elem.style.fontFamily = "Comic Sans MS";
	elem.style.fontStyle = "italic";
	elem.style.textShadow = "-4px 4px #00FFE4"

	size = 40;
	resetText();

	party = 1;
}

function undoPartyMode(){
	if (party == 1){
		var elem = document.getElementById("body");
		elem.style.fontFamily = "";
		elem.style.fontStyle = "";
		elem.style.textShadow = ""

		size = 20;
		resetText();

		colors = 0;
		toggleColors();

		if (on == 1){
			on = 0;
			interval = setInterval(replay, 500);
		}
	}
}

function replay(){
	clearInterval(interval);
	interval = setInterval(thePartyNeverStops, 500);
}

function thePartyNeverStops(){
	var name = document.getElementById("name");
	var names = document.getElementById("names");
	var elem = document.getElementById("body");
	var button = document.getElementsByTagName("button");
	document.getElementsByClassName("kill")[0].style.opacity = 100;

	partyMode();
	size = 40;
	resetText();

	name.innerHTML = "THE PARTY NEVER STOPS";
	names.innerHTML = "THE PARTY NEVER STOPS";

	elem.style.color = getRandomColor();
	elem.style.backgroundColor = getRandomColor();


	for (var i = 0; i < button.length; i++) {	
		button[i].style.color = getRandomColor();
		button[i].style.backgroundColor = getRandomColor();
	}
}

function smallerText(){
	fontSize--;

	var elem = document.getElementById("body");

	elem.style.fontSize = String(fontSize + "px");
}

function largerText(){
	fontSize++;

	var elem = document.getElementById("body");

	elem.style.fontSize = String(fontSize + "px");
}

function resetText(){
	fontSize = size;

	var elem = document.getElementById("body");

	elem.style.fontSize = String(fontSize + "px");
}

function killParty(){
	clearInterval(interval);	
	var name = document.getElementById("name");
	var names = document.getElementById("names");
	var elem = document.getElementById("body");
	document.getElementsByClassName("kill")[0].style.opacity = 0;


	elem.style.fontFamily = "";
	elem.style.fontStyle = "";
	elem.style.textShadow = ""

	fontSize = 21;
	smallerText();

	colors = 0;
	toggleColors();

	name.innerHTML = "Anand Biehl";
	names.innerHTML = "Anand Biehl";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}