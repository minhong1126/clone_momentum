const weather = document.querySelector("#weather span:first-child"); 
const city = document.querySelector("#weather span:last-child");

const API = "f0f2429c84eb14b6d3dac4dc50d8c7a6";

function geoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;
    fetch(url)
        .then(res => res. json())
        .then(data => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        })
}

function geoErr(e){
    alert(`Location Error with ${e}`);
}

navigator.geolocation.getCurrentPosition(geoOk, geoErr);