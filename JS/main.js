// main.js
// Mark Alessi
// VFW 1303
// Project 3 

	
// getElementByTagName

var showTag = document.getElementsByTagName("title");

// output to console.log

console.log(showTag);

// Array Function

var bullet = document.createElement("ul");
var main = document.getElementById("main");
var titles = [
	"300", "Inception", "The Matrix", "Star Wars", "The Terminator"
	];

main.appendChild(bullet);

for (i=0, j=titles.length; i<j; i++) {
	var newTag = document.createElement("li");
	newTag.innerHTML = titles[i];
	bullet.appendChild(newTag);
}
// storage

//localStorage.setItem("Title", "300");

//form id variables  

var field1 = document.getElementById("field1"); 
var field2 = document.getElementById("field2");
var field3 = document.getElementById("field3");
var field4 = document.getElementById("field4");
var field5 = document.getElementById("field5");

var saveData = function(){
	localStorage.setItem("Title", field1.value);
	localStorage.setItem("Genre", field2.value);
	localStorage.setItem("Date", field3.value);
	localStorage.setItem("Rating", field4.value);
	localStorage.setItem("Comment", field5.value);

};

// EventListeners for storage

field1.addEventListener("blur", saveData);
field2.addEventListener("blur", saveData);
field3.addEventListener("blur", saveData);
field4.addEventListener("blur", saveData);
field5.addEventListener("blur", saveData);

saveData();
