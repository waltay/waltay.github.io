// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of After-Tax Pay Function
function computeSalary() {
	
	//Stores the hours and hourly wage inputted into variables.
	let JsHours = document.getElementById('hours').value;
	let JsWage = document.getElementById('wage').value;
	
	//Verifies that there's something in the field before proceeding to process the data.
	if(JsHours == "" || JsWage == "") {
		alert("Please fill out both the radius and height dimensions.");
		return;
	}
	
	//Calculates the salary, then the taxes, and finally the after-tax pay.
	let salary = JsHours * JsWage;
	let tax = salary * 0.15;
	salary -= tax;
	
	//Output of the after-tax pay
	document.getElementById('output').innerHTML = "$" + salary.toFixed(2);
	
}