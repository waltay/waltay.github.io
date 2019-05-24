// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of Conversion Function
function vol2Liters() {
    
    //Declare and store variables for radius and height
	let radius = document.getElementById('r').value;
	let height = document.getElementById('h').value;
    
    //Check that the field isn't empty or that it doesn't have 0 as values.
	if(radius == "" || height == "") {
		alert("Please fill out both the radius and height dimensions.")
		return;
    }
    else if(radius == 0 || height == 0){
        alert("Make sure that the values for radius and height are greater than 0")
		return;
    }
	
	let volume = Math.PI * Math.pow(radius, 2) * height;
	
	let liters = volume / 61.024;
	
	document.getElementById('output').innerHTML = liters.toFixed(3) + " L";
	
}