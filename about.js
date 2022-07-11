console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted successfully!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


// mouseover cat duck picture
function catDuckHover(evt) {
	evt.preventDefault();
	
	alert("You are the GOAT")
}

let picture = document.querySelector('#cat-rubberduck');

picture.addEventListener('mouseover', catDuckHover);