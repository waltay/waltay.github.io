// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of Times Table Function
function timesTable() {
	
	//Creates variable that stores user input number.
	let userNum = document.getElementById('num').value;
	//Creates a string variable which will store the Times Table.
	let tTable = "";
	
    /*
    Checks if the user wrote a positive integer from 1 to 10. 
    If they didn't, it asks them to do so and exits the function.
    */
    if(userNum < 1 ^ userNum > 10){
		alert("Please choose a positive integer from 1 - 10.");
		return;
	}
	
    /*
    A pre-test loop which counts from 1 to 12 multiplying the user-given number 
    by the counter and generates the Times Table for that number.
    */
    for(let i = 1; i <= 12; i++){
		let mResult = i * userNum;
		tTable += userNum + " X " + i + " = " + mResult + "<br>";
	}
	 // Outputs the Times Table
	document.getElementById('output').innerHTML = tTable;
	
}