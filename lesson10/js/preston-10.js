const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=2ddcd5a3794e5fbc35968fc620259c8c';
const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=2ddcd5a3794e5fbc35968fc620259c8c';

//Obtains and displays the data for the Weather Summary
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currentDesc').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = jsObject.main.temp.toFixed(2);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = jsObject.wind.speed.toFixed(2);
    document.getElementById('wind-chill').textContent = windchill(jsObject.main.temp, jsObject.wind.speed);
  });

  //Obtains and displays the data for the Forecast Table
  fetch(apiForecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let i2 = 1;
        for(let i = 0; i < jsObject.list.length; i++){

            let d = new Date(jsObject.list[i].dt_txt);
            if(d.getHours() == 18){

                let day = d.getDay();
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
                let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';

                if(i2 == 1){
                    document.getElementById('day1').textContent = day;
                    document.getElementById('image1').setAttribute('src', imagesrc);
                    document.getElementById('image1').setAttribute('alt', jsObject.list[i].weather[0].description);
                    document.getElementById('temp1').textContent = jsObject.list[i].main.temp.toFixed(2);
                }
                else if(i2 == 2){
                    document.getElementById('day2').textContent = day;
                    document.getElementById('image2').setAttribute('src', imagesrc);
                    document.getElementById('image2').setAttribute('alt', jsObject.list[i].weather[0].description);
                    document.getElementById('temp2').textContent = jsObject.list[i].main.temp.toFixed(2);
                }
                else if(i2 ==3){
                    document.getElementById('day3').textContent = day;
                    document.getElementById('image3').setAttribute('src', imagesrc);
                    document.getElementById('image3').setAttribute('alt', jsObject.list[i].weather[0].description);
                    document.getElementById('temp3').textContent = jsObject.list[i].main.temp.toFixed(2);
                }
                else if(i2 == 4){
                    document.getElementById('day4').textContent = day;
                    document.getElementById('image4').setAttribute('src', imagesrc);
                    document.getElementById('image4').setAttribute('alt', jsObject.list[i].weather[0].description);
                    document.getElementById('temp4').textContent = jsObject.list[i].main.temp.toFixed(2);
                }
                else if(i2 == 5){
                    document.getElementById('day5').textContent = day;
                    document.getElementById('image5').setAttribute('src', imagesrc);
                    document.getElementById('image5').setAttribute('alt', jsObject.list[i].weather[0].description);
                    document.getElementById('temp5').textContent = jsObject.list[i].main.temp.toFixed(2);
                }

                i2++;
            }
        }
    });

  //Calculates WindChill
  function windchill(temp, speed){

    let windChill;

    if(temp <= 50.0 && speed >= 3.0){
        windChill = (35.74 + (0.6215*temp) - (35.75 * Math.pow(speed,0.16)) + (0.4275*temp*Math.pow(speed,0.16))).toFixed(2);
    }
    else[
        windChill = 'N/A'
    ]

    return windChill;
  }

  //Get current Date to display in Footer
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let day = d.getDay();
  
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
  
  let currentDate = day + ", " + date + " " + month + " " + year;
  
  document.getElementById("current-date").innerHTML = currentDate;
  
  //Toggle between drop-down menu or horizontal menu
  function toggleMenu() {
      document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
  }

  document.getElementById("copyYear").innerHTML = year;