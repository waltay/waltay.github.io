// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of Retail Discount Function
function computeTotal() {
	
	//Stores the day of the week in integer form.
	let day = new Date().getDay();
	//Stores the subtotal input from the user.
	let jsSubtotal = document.getElementById('subtotal').value;
	
	//Makes sure the user entered something before calculating the Total.
	if(jsSubtotal == ""){
		alert("Please enter the subtotal.")
	}
	
    /*
    Checks if the subtotal is greater than 50 and if the day is Tuesday or Wednesday. 
    If both are correct, then it gives a 10% discount to the subtotal and then adds taxes 
    to the sale. If one or both of those conditions are false, then it just adds the taxes to the subtotal.
    */
    if(jsSubtotal > 50 && (day == 2 || day == 3)) {
		jsSubtotal *= .9;
		jsSubtotal *= 1.06;
	}
	else{
		jsSubtotal *= 1.06;
    }
    
	 //Displays the total amount to pay.
	document.getElementById('output').innerHTML = "$" + jsSubtotal.toFixed(2);
	
}