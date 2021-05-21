let d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;
let date = d.getDate();
let day = d.getDay();
const noticeDay = day;

switch(month){
    case 1:
        month = "January";
        break;
    case 2:
        month = "February";
        break;
    case 3:
        month = "March";
        break;
    case 4:
        month = "April";
        break;
    case 5:
        month = "May";
        break;
    case 6:
        month = "June";
        break;
    case 7:
        month = "July";
        break;
    case 8:
        month = "August";
        break;
    case 9:
        month = "September";
        break;
    case 10:
        month = "October";
        break;
    case 11:
        month = "November";
        break;
    case 12:
        month = "December";
        break;
}

switch(day){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

let currentDate = day + " " + date + ", " + month + " " + year;

document.getElementById("current-date").innerHTML = currentDate;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

const notice = document.querySelector('#notice');

if(noticeDay == 5){
    notice.style.display = "block";
}
else{
    notice.style.display = "none";
}