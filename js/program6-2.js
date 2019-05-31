// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of Addition Problem Code

//Declares variables globally so that any change to their values are accessible to any function.
let number1;
let number2;

//This function generates the two random numbers and displays them.
function generateProblem() {
	
	//Stores 2 random numbers from 0 - 100 in the variables declared globally.
	number1 = Math.floor(Math.random() * 101);
	number2 = Math.floor(Math.random() * 101);
	
	//Outputs the 2 random numbers in addition format.
	document.getElementById('Problem').innerHTML = number1 + " + " + number2 + " =";
	
}

//This function checks whether the answer from the user was correct or incorrect.
function checkAnswer() {
	
	//Declares a variable and stores the answer from the user on it.
	let answer = document.getElementById('solution').value;
	 
    /*
    Checks if the answer is correct or not and displays whether it was or not. On both cases, 
    it will reset the input field box and calls the function to generate a new problem.
    */
    if(answer == (number1 + number2)){
		document.getElementById('output').innerHTML = "Correct! Good job."
		document.getElementById('solution').value = "";
		generateProblem();
	}
	else{
		document.getElementById('output').innerHTML = "Sorry. That is incorrect."
		document.getElementById('solution').value = "";
		generateProblem();
	}
	
}