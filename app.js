// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';
var speakButton = document.querySelector('#read');
//var chooseButton = document.querySelector('#noun, #verb, #adjective, #noun2, #places');

// Declare and initialize all 5 Arrays
var nounArray = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var verbArray = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
var adjectiveArray = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var noun2Array = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var placesArray = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// Declare and initialize varibles that will hold the random words from their corresponding arrays
var noun = '';
var verb = '';
var adjective = '';
var noun2 = '';
var places = '';


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// This function concatenates all of the random word variables into a string and prints it to the <p> tag
function concatAndPrint() {
	textToSpeak = noun + ' ' + verb + ' ' + adjective + ' ' + noun2 + ' ' + places + '.';

	document.querySelector('#print').innerText = textToSpeak;
}


/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}

// Onclick handler for the noun button that chooses a random word and then adds it to the textToSpeak variable
document.querySelector('#noun').onclick = function() {
	noun = nounArray[Math.floor(Math.random() * nounArray.length)]

	concatAndPrint();
}

// Onclick handler for the verb button that chooses a random word and then adds it to the textToSpeak variable
document.querySelector('#verb').onclick = function() {
	verb = verbArray[Math.floor(Math.random() * verbArray.length)]

	concatAndPrint();
}

// Onclick handler for the adjective button that chooses a random word and then adds it to the textToSpeak variable
document.querySelector('#adjective').onclick = function() {
	adjective = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)]

	concatAndPrint();
}

// Onclick handler for the second noun button that chooses a random word and then adds it to the textToSpeak variable
document.querySelector('#noun2').onclick = function() {
	noun2 = noun2Array[Math.floor(Math.random() * noun2Array.length)]

	concatAndPrint();
}

// Onclick handler for the places button that chooses a random word and then adds it to the textToSpeak variable
document.querySelector('#places').onclick = function() {
	places = placesArray[Math.floor(Math.random() * placesArray.length)]

	concatAndPrint();
}

// the concatAndPrint function kind of made this irrelevant but it is the button that passes values to the textToSpeak variable
document.querySelector('#passValue').onclick = function() {
	concatAndPrint();
	
}

// Onclick handler for the randomStory button that clicks all of the word buttons and then the speak button, all in one function
document.querySelector('#randomStory').onclick = function() {
	document.querySelector('#noun').click();
	document.querySelector('#verb').click();
	document.querySelector('#adjective').click();
	document.querySelector('#noun2').click();
	document.querySelector('#places').click();

	speakButton.click();
}

// Onclick handler for the reset button that resets all of the string variables to nothing and then erases the <p> tag
document.querySelector('#reset').onclick = function() {
	textToSpeak = '';
	noun = '';
	verb = '';
	adjective = '';
	noun2 = '';
	places = '';
	
	document.querySelector('#print').innerText = textToSpeak;
}

