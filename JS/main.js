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

// clear storage 
// I had a clear form button already so I linked that to localStorage.clear() function

document.getElementById("clear").onclick = function () {
    var clearStorage = localStorage.clear()
};

// form validation

function validateForm(){


		if ( document.form1.movietitle.value == "" )
    {
        alert ( "Please fill in the title box." );
        valid = false;
    }
    	return valid;

			if ( document.checkbox.genre.checked == false )
	    {
	        alert ( "Please check at least one genre box." );
	        valid = false;
	    }
	    	return valid;

	    		if ( document.form1.rating.selectedIndex == 0 )
    {
		        alert ( "You are required to select a rating." );
		        valid = false;
			    }
				return valid;
}

validateForm()

// write daata from local storage

function getData(){
	var makeDiv = document.createElement("div");	
	makeDiv.setAttribute("id", "items");
	var makeList = document.createElement("ul");
	makeDiv.appendChild(makeList);
	document.body.appendChild(makeList);
	for(var i=0, j=localStorage.length; i<j; i++){
		var makeli = document.createElement("li");
		makeList.appendChild(makeli);
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		var makeSubList = document.createElement("ul") 
		makeli.appendChild(makeSubList)
		for (var n in obj) {
			var makeSubli = document.createElement("li");
			var optSubText = obj[n][0]+" "+obj[n][1];
			makeSubli.innerHTML = optSubText;
		}
	}	
}	
