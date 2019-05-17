// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of the function to personalize the scripture
function personalize() {
	
	//I'm declaring a variable called gender where, depending on the gender, it will store either son or daughter.
	let gender;
	//Getting the input for the first name.
	let name = document.getElementById("StdtName").value;
	
    /*
    Here I'm checking if the text field is empty or not. If it's empty, it will give a message to fill it out and 
    exit out of the function.
    */
	if(name == ""){
		alert("Please fill out your First Name");
		return;
	}
	
    /*
    Here I'm checking which option was selected and then assigning either daughter or son depending on the gender. 
    If no option was selected, it gives a message to select the gender and exits out of the function.
    */
	if(document.getElementById("gMale").checked) {
		gender = "son";
	}
	else if(document.getElementById("gFemale").checked) {
		gender = "daughter";
	}
	else{
		alert("Please select a Gender.");
		return;
	}
	
	//The personalized scripture is generated here.
    let scripture = "And now my " + gender + ", " + name + ", I would that ye should remember, that as much\
     as ye shall put your trust in God even so much ye shall be delivered out of your trials, and your troubles,\
      and your afflictions, and ye shall be lifted up at the last day.";
	
	//Outputs the personalized scripture.
	document.getElementById("output").innerHTML = scripture;
	
}