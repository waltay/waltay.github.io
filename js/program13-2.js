// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of Create Array Function
function createArray() {

	//Variable that stores the number inputted by user
	let multiplier = document.getElementById('num').value;
	
    /*
    Verifies whether the user entered a number from 0 to 100. If not, alerts them and requests 
    of them to do so and exits function.
    */
    if(multiplier < 0 || multiplier > 100 || multiplier == "") {
		alert("Please enter an integer between 0 - 100.");
		return;
	}
	//Creates the array with no initial size.
	let array = [];
	//Variable that will hold the values held in the array to test.
	let arrayList = "";
	
	//Variable that creates a random number for the size of the array.
	let size = Math.floor(Math.random()* 20 + 1);
	
    /*
    A for loop that enters random values at each index up to the random generated size variable, 
    and also stores those values in string format to test the program.
    */
    for(let i = 0; i < size; i++) {
		
		array[i] = Math.floor(Math.random()* 100 + 1);
		
		if(i != (size - 1)) {
			arrayList += array[i] + ", ";
		}
		else{
			arrayList += array[i];
		}	
	}
	
	//Displays the values of the array in string format to test the program works correctly.
	document.getElementById('arrayList').innerHTML = "Array: [" + arrayList + "]";

	//Creates a variable that calls the multiply function and stores the result.
	let multiplied = multiply(array, multiplier);
	
	//Outputs the result from the multiply function.
	document.getElementById('result').innerHTML = "The result of multiplying each value of the array by " + multiplier + " is: <br> [" + multiplied + "]";

}

//Start of multiply function
function multiply(list, multiplier) {
	
	//Creates variable that will store the multiplied values of the array in string format.
	let multiplied = "";
	
    /*
    Loop that goes through each value of the array and multiplies them by the number the user inputted 
    and then stores them in string format representation of an array.
    */
    for(let i = 0; i < list.length; i++){
		if(i != (list.length - 1)) {
			multiplied += (list[i] * multiplier) + ", ";
		}
		else{
			multiplied += (list[i] * multiplier);
		}
	}
	
	return multiplied;
	
}