// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of the function to Build the Address
function addressBuilder() {
	
	//Gets the input from the city, state, and zip code  text field.
	let jsCity = document.getElementById("city").value;
	let jsState = document.getElementById("state").value;
	let jsZip = document.getElementById("zip").value;
	
    /*
    Here I'm checking to see if any of the fields are blank. If they are, it will give a message 
    asking to fill out the fields and exit out of the function to not output anything.
    */
	if(jsCity == "" || jsState == "" || jsZip == "") {
		alert("Please fill out all the fields.");
		return;
	}
	
	//Process the values into the U.S. address format.
	let address = jsCity + ", " + jsState + " " + jsZip;
	
	//Outputs the address already formatted.
	document.getElementById("output").innerHTML = address;
	
}