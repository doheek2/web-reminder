const API_KEY = "35805569ca472048b74c3a7ab459fd68";

const weatherIconNode = document.querySelector("#weatherIcon");
const tempNode = document.querySelector("#temp");
const cityNode = document.querySelector("#city");
const weatherNode = document.querySelector("#weather");

function paintingWeather(data) {
    const weatherArr = [];
    const weatherIcon = data.weather[0].icon;
    weatherArr.push({"temp" : String(Math.round(data.main.temp)).padStart(2, "0")});
    weatherArr.push({"city" : data.name});
    weatherArr.push({"weather" : data.weather[0].main});
    weatherArr.push({"weatherIconUrl" : `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`});

    weatherIconNode.src = weatherArr[3].weatherIconUrl;
    tempNode.innerText = `${weatherArr[0].temp}°`;
    cityNode.innerText = `${weatherArr[1].city}`;
    weatherNode.innerText = `${weatherArr[2].weather}`;
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        paintingWeather(data);
    })
    .catch(error => console.log(error));
}

function onGeoError() {
    // Seoul latitude, longitude
    const lat = '37.5667';  
    const lon = '126.9783';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;  
    fetch(url)
    .then(response => response.json())
    .then(data => {
        paintingWeather(data);
    })
    .catch(error => console.log(error));
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);