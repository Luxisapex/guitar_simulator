var chordsDiv = document.getElementById('chords');
var chords = [];

// Dragndrop stuff
function drag(event) {
	event.dataTransfer.setData("text", event.target.value);
}

function allowDrop(event) {
	event.preventDefault();
}

function drop(event) {
	// event.preventDefault();
	var data = event.dataTransfer.getData("text");
	var visualData = document.createTextNode(data);
	chordsDiv.appendChild(visualData);
	chords.push(data);
}

// Play stuff

var audio;
var url;
var time;
var delay;

document.getElementById('play').onclick = function () {
	delay = document.getElementById('delay').value;
	if(!delay) {
		delay = 1000;
	}
	var i = 0;
	time = setInterval(function(){
		console.log('I play ' + chords[i]);
		audio = document.createElement('audio');
		url = 'sounds/' + chords[i] + '.m4a';
		audio.setAttribute('src', url);
		audio.type = 'audio/mpeg'; //m4a?
		audio.play();
		i++;
		if(!chords[i]){
			clearInterval(time);
		}
	}, delay);
}