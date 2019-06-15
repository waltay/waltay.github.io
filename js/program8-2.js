// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of Number Guessing Game Function
function numberGuessGame() {
	
	//Creates the variable message and stores the original message to ask the user to guess the number.
	let message =
        "I'm thinking of a number between 1 and 100.\n" +
        "Try to guess it!\n" +
        "Please enter an integer between 1 and 100.";
    //Creates a random number for the answer.   
	let answer = Math.floor(Math.random() * 101);
	//The variable that will store the user's guess.
    let guess;
    //The counter variable that will be counting the attempts.
    let counter = 0;

    /*
    A post-test loop that will keep occurring until the user guesses the correct number and keeps adding by 1 
    the counter to count the attempts.
    */
    do {
        //Adds the counter at the beginning of the loop.
        counter ++;
        //Stores the guess from the user.
        guess = parseInt(prompt(message));
        
        //Lets the user know if their guess was too low or too high.
        if (guess < answer) {
            message = guess +
            " is too low. Please enter another integer.";
        }
        else if (guess > answer) {
            message = guess +
            " is too high. Please enter another integer.";
        }
    } while (guess != answer);
	
	//Updates the message once the user has guessed the number.
    message = guess + " is correct! It only took you " + counter + " attempts to guess it!";
    
	//Displays the message.
	document.getElementById('output').innerHTML = message;	
}