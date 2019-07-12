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

	//Creates a variable that calls the addEnds function and stores the result.
	let endSum = addEnds(array);
	
	//Outputs the result from the addEnds function.
	document.getElementById('result').innerHTML = "The sum of the ends of the array is: " + endSum;

}

//Start of addEnds function
function addEnds(list) {
	
	//Adds the numbers at the beginning and the end of the array and returns the value.
	let result = list[0] + list[list.length - 1];
	return result;
	
}