// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of Footwear Function
function chooseFootwear() {
	
	//Declares the weather and footwear variable and stores what type of weather the user inputted.
	let jsWeather = document.getElementById('weather').value;
	let footwear;
	
    /*
    Although the default option is disabled to choose, the user can still press the button without 
    having changed it to another. This checks whether they left it at the default option and, if so,
    asks the user to choose an option.
    */
    if(jsWeather == ""){
		alert("Please select an option.");
		return;
	}
	
    /*
    Switch statement with the different input options and stores in the footwear variable the corresponding 
    type of footwear depending on which weather was chosen.
    */
    switch(jsWeather) {
		case "hot":
			footwear = "sandals";
			break;
		case "rain":
			footwear = "galoshes";
			break;
		case "snow":
			footwear = "boots";
			break;
		case "cool":
			footwear = "shoes";
			break;
	}
	
	//Outputs what type of footwear the user should use.
	document.getElementById('output').innerHTML = "You should wear " + footwear + ".";
	
}