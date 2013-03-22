// main.js
// Mark Alessi
// VFW 1303
// Project 3 

		//form validation

// function checkForm() {
// document.form.Email.value = " " + document.form.Email.value;

// focus events 

var movie = document.getElementById("movie");
var info = document.getElementById("info");

var addBorder = function() {
	movie.setAttribute("class", "hasFocus");
}

movie.addEventListener("focus", "addBorder");

/* verify that name field is not blank
 
if (document.form.Name.value == "") {                      
alert('Please enter your name.'); return false; }
     
		//verify that email format is valid

mail = document.form.Email.value;                            
if ((mail.indexOf('@') == -1) || (mail.indexOf('.') == -1)) {
alert('This E-mail address is invalid'); return false; } 

		//verify a rating is selected

if (document.form.Rate.selectedIndex == " ") {             
alert('Please help me by rating my Site'); return false; } 

		//verify comment box is not empty
 
if (document.form.Query.value == "") {                       
alert('Please add a question or comment.'); return false; }
*/ 