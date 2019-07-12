// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of Create Array Function
function createArray() {

	//Creates the array with no initial size.
	let array = [];
	//Variable that will hold the values held in the array to test.
	let arrayList = "";
	
	//Variable that creates a random number for the size of the array.
	let size = Math.floor(Math.random()* 20 + 1);
	
    /*
    A for loop that enters random values at each index up to the random generated 
    size variable, and also stores those values in string format to test the program.
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

	//Creates a variable that calls the getMiddle function and stores the result.
	let middle = getMiddle(array);
	
	//Outputs the result from the getMiddle function.
	document.getElementById('result').innerHTML = "The Middle Element of the array is: " + middle;

}

//Start of getMiddle function
function getMiddle(list) {
	
	//Creates the variable that will hold the result
	let result;
	
    /*
    Checks if the array has an even or odd number of values. If even, it will get the average of the 
    two numbers at the middle. If odd, it will return the middle number.
    */
    if((list.length % 2) == 0) {
		let index = (list.length / 2) - 1;
		result = (list[index] + list[index + 1]) / 2;
	}
	else {
		let index = parseInt(list.length / 2);
		result = list[index];
	}
	
	return result;
	
}