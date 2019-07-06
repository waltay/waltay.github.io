// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of Compute Future Value Function
function computeFutureValue(principal, annualRate, years, periodsPerYear) {
	
	//Calculates the rate per period
	let ratePerPeriod = annualRate / periodsPerYear;
	//calculates the total amount of periods throughout all the years.
	let totalPeriods = periodsPerYear * years;
	//Calculates the future value of the investment.
	let f = principal * Math.pow((1 + ratePerPeriod), totalPeriods);
	
	//Returns the result
	return f;
}

//Start of doFV function
function doFV() {
	
	//Creates variables that store the inputs from the user
	let principal = document.getElementById('principal').value;
	let annual = document.getElementById('annual').value;
	let years = document.getElementById('years').value;
	let periods = document.getElementById('periods').value;
	
	//Checks that the user inputted valid data to calculate an investment
	if(principal < .01 || annual < .01 || years < 1 || periods < 1){
		alert("Please enter valid ammounts and/or numbers for the fields.")
		return;
	}
	
    /*
    Calls the function that computes the future value of the investment passing 
    the input from the user as arguments and stores the result in the variable.
    */
    let future = computeFutureValue(principal, annual, years, periods);
	
	//Outputs the result of the future value of the investment
	document.getElementById('output').value = "$" + future.toFixed(2);
	
}