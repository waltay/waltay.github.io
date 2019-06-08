// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of Sleep In Function
function sleepIn() {
	
	//Stores the month and day of month in the following format mm/dd.
	let day = (today.getMonth() + 1) + "/" + today.getDate();
	//Declares the variable holiday which will be used later.
	let holiday;
	
    /*
    A switch statement which compares the day variable to the specified holidays. 
    If they match, holiday is set to true. If they don't, holiday is set to false.
    */
    switch(day) {
		case "1/1":
			holiday = true;
			break;
		case "7/4":
			holiday = true;
			break;
		case "12/25":
			holiday = true;
			break;
		default:
			holiday = false;
	}
	
	//Changes the value of day to the day of the week.
	day = today.getDay();
	
    /*
    Checks if it is a Saturday or Sunday, or if it is a holiday. If one of those are true, 
    then it lets the user know they can sleep in. If none is true, it lets the user know 
    he/she needs to wake up.
    */
    if((day == 0 ^ day == 6) || holiday) {
		document.getElementById('output').innerHTML = "Yes! Sleep in!";
	}
	else{
		document.getElementById('output').innerHTML = "No! Get up!";
	}
	
}