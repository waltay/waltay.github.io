function openMenu(){
    document.getElementById("navigation").style.width = '240px';
}

function closeMenu(){
    document.getElementById("navigation").style.width = '0px';
}

function dropdown(){
    
    document.getElementsByClassName("forecast").classList.toggle("forecast-shown");

}

function closeAlert(){
    document.getElementById("weather-alert").setAttribute('display', 'none');
}