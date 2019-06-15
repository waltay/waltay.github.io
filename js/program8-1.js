// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of Odd Numbers Sum Function
function oddSum() {
	
	//Stores the input from the user.
	let number = document.getElementById('num').value;
	//Creates the variable that will be used to store the sum.
	let sum = 0;
	
	//Makes sure that the user will write a number greater than 0. 
	if(number < 1){
		alert("Please write a number greater than zero.");
		return;
	}
	
	//A counting loop incrementing from one to the number the user inputted. 
	for(let i = 1; i <= number; i++){
		
        /*
        If the counter is on an odd number, it will add that number to the sum variable. 
        This way it sums all the odd numbers from 1 to the number inputted by the user.
        */
        if((i%2) != 0) {
			sum += i;
		}
		
	}
	
	//Displays the Odd Sum result.
	document.getElementById('output').innerHTML = sum;
	
}