const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.2338&lon=-111.6585&units=imperial&appid=2ddcd5a3794e5fbc35968fc620259c8c"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    document.getElementById("current-temp").textContent = Math.round(jsObject.current.temp);
    document.getElementById("current-desc").textContent = jsObject.current.weather[0].main;
    document.getElementById("humidity").textContent = jsObject.current.humidity;

    for(let i = 0; i < 3; i++){
        let d = new Date();
        switch(i){
            case 0:
                d.setDate(d.getDate() + 1);
                break;
            case 1:
                d.setDate(d.getDate() + 2);
                break;
            case 2:
                d.setDate(d.getDate() + 3);
        }
        console.log(d);
        let date = d.getDate();
        console.log(date);
        let day = d.getDay();
        console.log(day);
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
            };

        let div = document.createElement('div');
        let pDay = document.createElement('p');
        let temp = document.createElement('p');
        let span = document.createElement('span');

        pDay.textContent = day + " " + date;
        span.setAttribute('class', 'large-forecast');
        span.textContent = ":";
        pDay.appendChild(span);
        temp.textContent = Math.round(jsObject.daily[i].temp.day) + "°F";

        div.setAttribute('class', 'forecast-data');
        div.appendChild(pDay);
        div.appendChild(temp);

        document.querySelector('div.forecast-container').appendChild(div);
    }

    let alert = document.createElement('p');
    alert.textContent = jsObject.alerts[0].description;
    document.querySelector('div#alert').appendChild(alert);

  });

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

}

function closeAlert(){
    document.getElementById("weather-alert").style.display = "none";
}