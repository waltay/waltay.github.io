// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of Wind Chill Function
function windChill(tempF, speed) {
	
    /*
    Checks that the temperature and windspeed are within the required parameters to be able to 
    make the calculations, if not returns a N/A as response.
    */
    if(tempF > 50 || speed < 3){
		return "N/A";
	}
	
	//Calculates and stores the Wind Chill factor with the given parameters.
	let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
	
	//returns the wind chill factor
	return f.toFixed(2) + " F&deg";
	
}

//Start of InputOutput function
function doInputOutput() {
	
	//Creates variables that store the temperature and wind speed input from the user.
	let temp = document.getElementById('temperature').value;
	let wSpeed = document.getElementById('windspeed').value;
	
    /*
    Calls the windchill function passing the temperature and windspeed variables as parameters 
    to store the result in the variable.
    */
    let wcFactor = windChill(temp, wSpeed);
	
	//Outputs the result of the wind chill factor to the user.
	document.getElementById('output').innerHTML = "The Wind Chill Factor is: " + wcFactor;
	
}