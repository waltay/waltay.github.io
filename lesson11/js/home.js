const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const townInfo = jsonObject['towns'];

    for(i = 0; i<3; i++){

        var tName;
        if(i == 0){
            tName = "Preston"
        }
        else if(i == 1){
            tName = "Soda Springs"
        }
        else if(i ==2){
            tName = "Fish Haven"
        }

        for(counter = 0; counter < townInfo.length; counter++){

            if(townInfo[counter].name == tName){

                let card = document.createElement('section');
                let info = document.createElement('div');
                let h2 = document.createElement('h2');
                let h5 = document.createElement('h5');
                let p = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let image = document.createElement('img');

                info.setAttribute('class', 'infoContainer');
                h2.textContent = townInfo[counter].name;
                h5.textContent = townInfo[counter].motto;
                p.textContent = 'Year Founded: ' + townInfo[counter].yearFounded;
                p2.textContent = 'Population: ' + townInfo[counter].currentPopulation;
                p3.textContent = 'Annual Rainfall: ' + Math.round(townInfo[counter].averageRainfall);

                info.appendChild(h2);
                info.appendChild(h5);
                info.appendChild(p);
                info.appendChild(p2);
                info.appendChild(p3);
                
                if(tName == 'Fish Haven'){
                    image.setAttribute('src', 'images/rsz_fishhaven.jpg');
                    image.setAttribute('alt', 'Fish Haven');
                    image.setAttribute('class', 'right');
                }
                else if(tName == 'Preston'){
                    image.setAttribute('src', 'images/rsz_preston.jpg');
                    image.setAttribute('alt', 'Preston');
                    card.setAttribute('class', 'right');
                }
                else if(tName == 'Soda Springs'){
                    image.setAttribute('src', 'images/rsz_sodasprings.jpg');
                    image.setAttribute('alt', 'Soda Springs');
                    image.setAttribute('class', 'left');
                }

                card.appendChild(info);
                card.appendChild(image);

                document.querySelector('div.townCards').appendChild(card);
            }

        }
    }
  });

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

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

document.getElementById("copyYear").innerHTML = year;