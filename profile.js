
// Fav Color Function
function favColorClick(evt) {
	evt.preventDefault();
	
	alert("My favorite color is burnt orange")
}

let favColor = document.querySelector('#color');

favColor.addEventListener('click', favColorClick);

// Fav Place Function
function favPlaceClick(evt) {
	evt.preventDefault();
	
	alert("My favorite plce is Pictured Rocks, MI")
}

let favPlace = document.querySelector('#place');

favPlace.addEventListener('click', favPlaceClick);


// Fav Ritual Function
function favRitualClick(evt) {
	evt.preventDefault();
	
	alert("My favorite ritual is reading in the morning")
}

let favRitual = document.querySelector('#ritual');

favRitual.addEventListener('click', favRitualClick);