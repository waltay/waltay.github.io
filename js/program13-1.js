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

	//Creates a variable that calls the countEvens function and stores the result.
	let even = countEvens(array);
	
	//Outputs the result from the countEvens function.
	document.getElementById('result').innerHTML = "There are " + even + " even numbers in the array."

}

//Start of countEvens function
function countEvens(list) {
	
	//Variable that will store the amount of even integers in the array.
	let counter = 0;
	
    /*
    Loop that goes through each value in the array, and checks whether it's an even number or not. 
    If it is, it adds +1 to the counter.
    */
    for(let i = 0; i < list.length; i++) {
		if((list[i] % 2) == 0) {
			counter++;
		}
	}
	
	return counter;
}