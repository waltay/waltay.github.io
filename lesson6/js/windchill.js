let temp = parseFloat(document.getElementById('temp').innerHTML);
let speed = parseFloat(document.getElementById('windspeed').innerHTML);

let windChill = 35.74 + (0.6215*temp) - (35.75 * Math.pow(speed,0.16)) + (0.4275*temp*Math.pow(speed,0.16));

document.getElementById('wind-chill').innerHTML = windChill.toFixed(2);