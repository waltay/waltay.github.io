function openMenu(){
    let l = document.getElementById("navigation");
    l.classList.add("navigation-small");
}

function closeMenu(){
    let l = document.getElementById("navigation");
    l.classList.remove("navigation-small");
}

function dropdown(){
    
    document.getElementsByClassName("forecast")[0].classList.toggle("forecast-shown");

    document.getElementsByClassName("arrow")[0].classList.toggle("arrow-rotate");

}

function closeAlert(){
    document.getElementById("weather-alert").style.display = "none";
}