/*
Anand Biehl 2018 CC0
*/

var colors = 1;
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

function partyMode(){
	var elem = document.getElementById("body");

	elem.style.color = "#24FF00";

	if (party == 0){
		document.getElementsByClassName("bloop")[0].style.opacity = .85;
	}

	elem.style.backgroundColor = "#FF6EF3";

	elem.style.fontFamily = "'Comic Sans MS', 'Comic Neue', sans-serif";
	elem.style.fontWeight= 700;
	elem.style.fontStyle= "oblique"; 
	elem.style.fontStyle = "italic";
	elem.style.textShadow = "-4px 4px #00FFE4";

	size = 40;
	resetText();

	party = 1;
}

function undoPartyMode(){
	if (party == 1){
		var elem = document.getElementById("body");
		document.getElementsByClassName("bloop")[0].style.opacity = 0;

		elem.style.fontFamily = "";
		elem.style.fontStyle = "";
		elem.style.textShadow = "";

		size = 20;
		resetText();

		colors = !colors;
		toggleColors();
		
		backup = document.body.innerHTML;

		//document.body.innerHTML = document.body.innerHTML + "<br/><br/><br/><iframe width=\"200\" height=\"200\"src=\"https://www.youtube.com/embed/axZemDfcfX8?rel=0&autoplay=1&loop=1&controls=0&showinfo=0&playlist=axZemDfcfX8\" frameborder=\"0\" encrypted-media\" allowfullscreen></iframe>";
		document.body.innerHTML = document.body.innerHTML + "<br/><br/><br/><iframe width=\"200\" height=\"200\"src=\"https://youtube.com/embed/pwSsT8IU0WE?rel=0&autoplay=1&loop=1&controls=0&showinfo=0&playlist=pwSsT8IU0WE\" frameborder=\"0\" encrypted-media\" allowfullscreen></iframe>";

		if (on == 1){
			on = 0;
			interval = setInterval(replay, 1000);
		}
	}
}

function replay(){
	clearInterval(interval);
	interval = setInterval(thePartyNeverStops, 475);
}

function thePartyNeverStops(){
	var name = document.getElementById("name");
	var names = document.getElementById("names");
	var elem = document.getElementById("body");
	var button = document.getElementsByTagName("button");
	document.getElementsByClassName("kill")[0].style.opacity = .85;

	partyMode();
	size = 40;
	resetText();

	name.innerHTML = "THE PARTY NEVER STOPS";
	names.innerHTML = "THE PARTY NEVER STOPS";

	elem.style.color = getRandomColor();
	elem.style.backgroundColor = getRandomColor();

	elem.style.textShadow = "-4px 4px" + String(getRandomColor());

	for (var i = 0; i < button.length; i++) {	
		button[i].style.color = getRandomColor();
		button[i].style.backgroundColor = getRandomColor();
	}
}

function killParty(){
	clearInterval(interval);	
	var name = document.getElementById("name");
	var names = document.getElementById("names");
	var elem = document.getElementById("body");
	document.getElementsByClassName("kill")[0].style.opacity = 0;


	elem.style.fontFamily = "";
	elem.style.fontWeight= "";
	elem.style.fontStyle= ""; 
	elem.style.fontStyle = "";
	elem.style.textShadow = "";

	size = 20;
	resetText();

	colors = !colors;
	toggleColors();

	party = 0;

	on = 1;

	name.innerHTML = "Anand Biehl";
	names.innerHTML = "Anand Biehl";

	document.body.innerHTML = backup;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
