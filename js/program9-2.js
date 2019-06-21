// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Start of Find Oldest Temple Function
function findTemple() {
    
    //Declares a variable that stores the table.
    let table = document.getElementById('templeData');
    //Declares a variable that stores the amount of rows there are on the table.
    let rowNum = table.rows.length - 1;
    //Declares a variable that will store the year the temple was dedicated.
    let templeYear;
    /*
    Declares a variable that will hold the different years the temples were dedicated 
    which will be used to compare to see which one is the oldest running one.
    */
    let yearCompare;
    //Declares the variable that will be used for the do-while loop.
    let i = 0;
    /*
    Declares a variable and sets it to false. This will be used so that when the oldest temple 
    is found, it will set to true and the loop will be terminated.
    */
    let oldest = false;
    
    /*
    A post-test loops which runs through the different temples to find the oldest running temple.
    It will hold on one variable the year dedication from the first row, and then runs another for loop
    which will store on a different variable the rest of the dedication years as it runs through the loop
    and compare the first variable to the second. If it's found that the first variable is greater than any
    of the other years, then it will exit the for loop and change the year stored in the first variable to 
    the one in the next row, and so on until the oldest year is found, and the do-while loop is exited.
    */
    do{
		i++;
		
		templeYear = parseInt(table.rows[i].cells[1].innerHTML);
		
		for(let i2 = (i + 1); i2 <= rowNum; i2++){
			yearCompare = parseInt(table.rows[i2].cells[1].innerHTML);
			
			if(templeYear > yearCompare){
				oldest = false;
				break;
			}
			else{
				oldest = true;
			}
		}
		
		if(i == rowNum){
			oldest = true;
		}
		
	} while (oldest == false);
    
    //Declares a variable that stores the name of the temple that matches the row of the oldest year dedication.
	let temple = table.rows[i].cells[0].innerHTML;
    
    //Outputs the name of the oldest running temple.
	document.getElementById('output').innerHTML = temple;
	
}